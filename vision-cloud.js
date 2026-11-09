(() => {
  const TOKEN_KEY = "vision_admin_token";
  const baseUrl = String(window.VISION_API_BASE || "").trim().replace(/\/+$/, "");

  async function request(path, options = {}) {
    if (!baseUrl) throw new Error("Cloud API adresi ayarlanmamış.");

    let response;
    try {
      response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers: {
          ...(options.body ? { "Content-Type": "application/json" } : {}),
          ...(options.headers || {})
        }
      });
    } catch {
      throw new Error("Cloud API'ye ulaşılamadı. Bağlantı ve API adresini kontrol edin.");
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) sessionStorage.removeItem(TOKEN_KEY);
      const error = new Error(result.error || `Cloud API hatası (${response.status}).`);
      error.status = response.status;
      throw error;
    }
    return result;
  }

  window.VisionCloud = {
    enabled: Boolean(baseUrl),
    getToken() {
      return sessionStorage.getItem(TOKEN_KEY) || "";
    },
    async load() {
      return request("/api/content");
    },
    async login(password) {
      const result = await request("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password })
      });
      if (!result.token) throw new Error("API geçerli bir yönetici oturumu döndürmedi.");
      sessionStorage.setItem(TOKEN_KEY, result.token);
      return result;
    },
    async save(content) {
      const token = this.getToken();
      if (!token) throw new Error("Yönetici oturumu bulunamadı. Lütfen yeniden giriş yapın.");
      return request("/api/admin/content", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(content)
      });
    },
    logout() {
      sessionStorage.removeItem(TOKEN_KEY);
    }
  };
})();
