(() => {
  const sourceTitle = document.title;
  const rows = {
    "Hizmet Alanlarımız": ["Services", "სერვისები", "Xidmətlər", "Услуги"],
    "Katalog": ["Catalog", "კატალოგი", "Kataloq", "Каталог"],
    "ÜRÜN KATEGORİLERİ": ["PRODUCT CATEGORIES", "პროდუქტის კატეგორიები", "MƏHSUL KATEQORİYALARI", "КАТЕГОРИИ ТОВАРОВ"],
    "Ürün Gruplarımız": ["Our Product Groups", "ჩვენი პროდუქტის ჯგუფები", "Məhsul qruplarımız", "Наши группы товаров"],
    "İhtiyacınız olan ürün grubunu seçip katalogdaki modellere göz atın.": ["Choose a product group to explore the models in our catalog.", "აირჩიეთ პროდუქტის ჯგუფი კატალოგში მოდელების სანახავად.", "Kataloqdakı modellərə baxmaq üçün məhsul qrupunu seçin.", "Выберите группу товаров, чтобы посмотреть модели в каталоге."],
    "Kataloğa git →": ["Go to catalog →", "კატალოგზე გადასვლა →", "Kataloqa keç →", "Перейти в каталог →"],
    "Network Switch'ler": ["Network Switches", "ქსელის სვიჩები", "Şəbəkə switch-ləri", "Сетевые коммутаторы"],
    "Partnerler": ["Partners", "პარტნიორები", "Tərəfdaşlar", "Партнёры"],
    "Projelerimiz": ["Projects", "პროექტები", "Layihələr", "Проекты"],
    "İletişim": ["Contact", "კონტაქტი", "Əlaqə", "Контакты"],
    "Telefon": ["Phone", "ტელეფონი", "Telefon", "Телефон"],
    "E-posta": ["Email", "ელფოსტა", "E-poçt", "Эл. почта"],
    "WhatsApp": ["WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp"],
    "Adres": ["Address", "მისამართი", "Ünvan", "Адрес"],
    "Çalışma saatleri": ["Working hours", "სამუშაო საათები", "İş saatları", "Часы работы"],
    "İletişim bilgisi yakında eklenecek.": ["Contact information will be added soon.", "საკონტაქტო ინფორმაცია მალე დაემატება.", "Əlaqə məlumatları tezliklə əlavə ediləcək.", "Контактная информация скоро появится."],
    "Model ara...": ["Search models...", "მოდელის ძიება...", "Model axtar...", "Поиск модели..."],
    "Profesyonel Güvenlik ve Ağ Donanımları": ["Professional Security and Network Equipment", "პროფესიონალური უსაფრთხოებისა და ქსელური აღჭურვილობა", "Peşəkar Təhlükəsizlik və Şəbəkə Avadanlıqları", "Профессиональное оборудование для безопасности и сетей"],
    "Hikvision, MikroTik, Pro Look ve TVT orijinal IP/Analog kameralar, NVR sunucuları ve anahtar teslim mühendislik işçiliği.": ["Genuine Hikvision, MikroTik, Pro Look and TVT IP/analog cameras, NVR recorders, and complete installation services.", "ორიგინალი Hikvision, MikroTik, Pro Look და TVT IP/ანალოგური კამერები, NVR ჩამწერები და სრული სამონტაჟო მომსახურება.", "Orijinal Hikvision, MikroTik, Pro Look və TVT IP/analoq kameraları, NVR qeydiyyatçıları və tam quraşdırma xidmətləri.", "Оригинальные IP/аналоговые камеры Hikvision, MikroTik, Pro Look и TVT, NVR-регистраторы и полный монтаж."],
    "Kataloğu İncele ⬇": ["Explore the catalog ⬇", "კატალოგის ნახვა ⬇", "Kataloqa bax ⬇", "Смотреть каталог ⬇"],
    "WhatsApp Mühendis Hattı": ["WhatsApp Engineering Support", "WhatsApp საინჟინრო მხარდაჭერა", "WhatsApp mühəndis dəstəyi", "Инженерная поддержка в WhatsApp"],
    "UZMANLIK ALANLARIMIZ": ["OUR AREAS OF EXPERTISE", "ჩვენი სპეციალიზაცია", "İXTİSAS SAHƏLƏRİMİZ", "НАШИ СПЕЦИАЛИЗАЦИИ"],
    "Sektörel Hizmet Alanlarımız": ["Industry Solutions", "სექტორული მომსახურება", "Sahə üzrə xidmətlərimiz", "Решения для отраслей"],
    "Tiflis, Batum ve tüm Gürcistan'da anahtar teslim projelendirme, kablolama ve 2 yıl garantili montaj.": ["Turnkey design, cabling, and installation with a 2-year warranty in Tbilisi, Batumi, and across Georgia.", "თბილისში, ბათუმსა და მთელ საქართველოში — სრული პროექტირება, გაყვანილობა და 2-წლიანი გარანტიით მონტაჟი.", "Tbilisi, Batumi və bütün Gürcüstanda layihələndirmə, kabel çəkilişi və 2 illik zəmanətli quraşdırma.", "Проектирование, прокладка кабелей и монтаж с гарантией 2 года в Тбилиси, Батуми и по всей Грузии."],
    "360° Panoramik": ["360° Panoramic", "360° პანორამული", "360° Panoramik", "Панорамный обзор 360°"],
    "Düğün & Etkinlik Salonları": ["Wedding & Event Venues", "საქორწილო და ღონისძიებების დარბაზები", "Şadlıq və tədbir zalları", "Свадебные и event-площадки"],
    "Yüksek tavanlı geniş salonlarda kör noktasız izleme ve otopark plaka tanıma.": ["Blind-spot-free monitoring in large, high-ceiling venues with license plate recognition for parking areas.", "ფართო, მაღალჭერიან დარბაზებში ბრმა ზონების გარეშე მონიტორინგი და პარკირების ნომრების ამოცნობა.", "Hündür tavanlı geniş zallarda kor nöqtəsiz müşahidə və parkinqdə nömrə tanıma.", "Мониторинг больших залов без слепых зон и распознавание номеров на парковке."],
    "Wi-Fi 6 & Yüz Tanıma": ["Wi-Fi 6 & Face Recognition", "Wi-Fi 6 და სახის ამოცნობა", "Wi-Fi 6 və üz tanıma", "Wi-Fi 6 и распознавание лиц"],
    "Ofis ve İş Merkezleri": ["Offices & Business Centers", "ოფისები და ბიზნესცენტრები", "Ofislər və biznes mərkəzləri", "Офисы и бизнес-центры"],
    "Personel devam kontrol, turnike parmak izi/yüz tanıma, server odası izleme.": ["Staff attendance, fingerprint/face-recognition turnstiles, and server-room monitoring.", "თანამშრომელთა აღრიცხვა, თითის ანაბეჭდის/სახის ამოცნობის ტურნიკეტები და სერვერული ოთახის მონიტორინგი.", "İşçi davamiyyətinə nəzarət, barmaq izi/üz tanıma turniketləri və server otağının müşahidəsi.", "Контроль посещаемости, турникеты с распознаванием отпечатков/лиц и мониторинг серверной."],
    "7/24 Renkli Gece": ["24/7 Color Night Vision", "24/7 ფერადი ღამის ხედვა", "7/24 rəngli gecə görüntüsü", "Цветное ночное видение 24/7"],
    "Lüks Villalar & Konutlar": ["Luxury Villas & Homes", "ვილები და საცხოვრებელი სახლები", "Lüks villalar və yaşayış evləri", "Виллы и жилые дома"],
    "ColorVu teknolojisiyle gece renkli izleme, bahçe çit alarmı ve uzaktan interkom.": ["ColorVu night vision, garden perimeter alarms, and remote intercom.", "ColorVu ღამის ფერადი ხედვა, ეზოს პერიმეტრის სიგნალიზაცია და დისტანციური ინტერკომი.", "ColorVu ilə rəngli gecə görüntüsü, həyət perimetri siqnalizasiyası və uzaqdan interkom.", "Цветное ночное изображение ColorVu, охранная сигнализация по периметру и удалённый домофон."],
    "Termal Yangın Algılama": ["Thermal Fire Detection", "თერმული ხანძრის გამოვლენა", "Termal yanğın aşkarlanması", "Тепловое обнаружение пожара"],
    "Fabrika ve Sanayi": ["Factories & Industry", "ქარხნები და მრეწველობა", "Zavodlar və sənaye", "Заводы и промышленность"],
    "Aşırı sıcaklık algılayan termal kameralar, toza dayanıklı muhafazalar ve fiber omurga.": ["Thermal cameras for high-temperature detection, dust-resistant housings, and fiber backbone.", "მაღალი ტემპერატურის აღმომჩენი თერმული კამერები, მტვერგამძლე კორპუსები და ოპტიკურ-ბოჭკოვანი ქსელი.", "Yüksək temperaturu aşkarlayan termal kameralar, tozdan qorunan korpuslar və fiber magistral.", "Тепловизоры для обнаружения перегрева, пылезащищённые корпуса и оптоволоконная магистраль."],
    "İnşaat ve Şantiye": ["Construction & Job Sites", "მშენებლობა და სამშენებლო მოედნები", "Tikinti və sahələr", "Строительство и стройплощадки"],
    "Elektrik ve internet olmayan alanlar için Güneş Enerjili (Solar) kameralar ve vinç güvenliği.": ["Solar-powered cameras for areas without electricity or internet, plus crane safety.", "ელექტროენერგიისა და ინტერნეტის გარეშე ტერიტორიებისთვის მზის კამერები და ამწეების უსაფრთხოება.", "Elektrik və internet olmayan sahələr üçün günəş enerjili kameralar və kran təhlükəsizliyi.", "Солнечные камеры для мест без электричества и интернета, а также безопасность кранов."],
    "✓ Anahtar Teslim": ["✓ Turnkey Installation", "✓ სრული მონტაჟი", "✓ Açar təslim quraşdırma", "✓ Установка под ключ"],
    "Detayları Gör ➔": ["View Details ➔", "დეტალების ნახვა ➔", "Ətraflı bax ➔", "Подробнее ➔"],
    "Teklif Al ➔": ["Get a Quote ➔", "მიიღეთ შეთავაზება ➔", "Təklif alın ➔", "Запросить предложение ➔"],
    "EKİPMAN TERMİNALİ": ["EQUIPMENT CATALOG", "აღჭურვილობის კატალოგი", "AVADANLIQ KATALOQU", "КАТАЛОГ ОБОРУДОВАНИЯ"],
    "Marka ve Donanım Seçim Paneli": ["Brand & Equipment Selector", "ბრენდისა და აღჭურვილობის არჩევა", "Marka və avadanlıq seçimi", "Выбор бренда и оборудования"],
    "Markanızı, donanım kategorinizi ve megapiksel/kanal sayısını filtreleyerek anında listeleyin.": ["Filter by brand, equipment category, resolution, or channel count to find products.", "მოძებნეთ პროდუქტები ბრენდის, კატეგორიის, გარჩევადობის ან არხების რაოდენობის მიხედვით.", "Brend, avadanlıq kateqoriyası, meqapiksel və ya kanal sayına görə məhsulları süzün.", "Найдите товары по бренду, категории, разрешению или количеству каналов."],
    "1. ADIM": ["STEP 1", "ნაბიჯი 1", "ADDIM 1", "ШАГ 1"],
    "2. ADIM": ["STEP 2", "ნაბიჯი 2", "ADDIM 2", "ШАГ 2"],
    "3. ADIM": ["STEP 3", "ნაბიჯი 3", "ADDIM 3", "ШАГ 3"],
    "MARKA SEÇİMİ": ["SELECT A BRAND", "აირჩიეთ ბრენდი", "BREND SEÇİMİ", "ВЫБОР БРЕНДА"],
    "DONANIM KATEGORİSİ": ["EQUIPMENT CATEGORY", "აღჭურვილობის კატეგორია", "AVADANLIQ KATEQORİYASI", "КАТЕГОРИЯ ОБОРУДОВАНИЯ"],
    "DETAYLI ÖZELLİK SEÇİMİ": ["DETAILED SPECIFICATIONS", "დეტალური მახასიათებლები", "ƏTRAFLI XÜSUSİYYƏTLƏR", "ПОДРОБНЫЕ ХАРАКТЕРИСТИКИ"],
    "TÜMÜ": ["ALL", "ყველა", "HAMISI", "ВСЕ"],
    "Tüm Markalar": ["All Brands", "ყველა ბრენდი", "Bütün markalar", "Все бренды"],
    "Filtre:": ["Filter:", "ფილტრი:", "Filtr:", "Фильтр:"],
    "Ürün:": ["Products:", "პროდუქტები:", "Məhsullar:", "Товары:"],
    "CCTV, PoE, Alarm": ["CCTV, PoE, Alarm", "CCTV, PoE, სიგნალიზაცია", "CCTV, PoE, Siqnalizasiya", "CCTV, PoE, сигнализация"],
    "Router, PoE, Wi-Fi": ["Router, PoE, Wi-Fi", "როუტერი, PoE, Wi-Fi", "Router, PoE, Wi-Fi", "Роутер, PoE, Wi-Fi"],
    "Metal Kasa CCTV": ["Metal-Housing CCTV", "ლითონის კორპუსის CCTV", "Metal korpuslu CCTV", "CCTV в металлическом корпусе"],
    "GÜÇLÜ İŞ BİRLİKLERİ": ["OUR PARTNERS", "ჩვენი პარტნიორები", "TƏRƏFDAŞLARIMIZ", "НАШИ ПАРТНЁРЫ"],
    "Çözüm Ortaklarımız & Distribütör Markalar": ["Technology Partners & Distributors", "ტექნოლოგიური პარტნიორები და დისტრიბუტორები", "Texnologiya tərəfdaşları və distribütorlar", "Технологические партнёры и дистрибьюторы"],
    "Gürcistan genelindeki projelerimizde resmi garantili, küresel sertifikalı donanım üreticileriyle çalışıyoruz.": ["We work with globally certified equipment manufacturers offering official warranties across Georgia.", "საქართველოს მასშტაბით ვთანამშრომლობთ გლობალურად სერტიფიცირებულ მწარმოებლებთან, ოფიციალური გარანტიით.", "Gürcüstan üzrə layihələrdə rəsmi zəmanətli, qlobal sertifikatlı avadanlıq istehsalçıları ilə işləyirik.", "В проектах по всей Грузии мы используем сертифицированное оборудование с официальной гарантией."],
    "REFERANSLARIMIZ & SAHA UYGULAMALARI": ["OUR PROJECTS & INSTALLATIONS", "ჩვენი პროექტები და მონტაჟი", "LAYİHƏLƏRİMİZ VƏ QURAŞDIRMALAR", "НАШИ ПРОЕКТЫ И МОНТАЖ"],
    "Tamamlanan Örnek Projelerimiz": ["Selected Completed Projects", "შესრულებული პროექტები", "Tamamlanmış layihələrimiz", "Завершённые проекты"],
    "Parmağınızla sağa-sola kaydırarak projeleri ve Digomi Project'in 28 kameralı canlı görüntülerini inceleyin.": ["Swipe to explore our projects and view live footage from Digomi Project's 28 cameras.", "გადაუსვით თითი პროექტებისა და Digomi Project-ის 28 კამერის პირდაპირი გამოსახულების სანახავად.", "Layihələrə və Digomi Project-in 28 kamerasının canlı görüntülərinə baxmaq üçün sürüşdürün.", "Листайте проекты и смотрите изображение с 28 камер Digomi Project."],
    "★ CANLI SAHA": ["★ LIVE PROJECT", "★ მიმდინარე პროექტი", "★ AKTİV LAYİHƏ", "★ ДЕЙСТВУЮЩИЙ ПРОЕКТ"],
    "Digomi Project (Spor & Yaşam)": ["Digomi Project (Sports & Leisure)", "Digomi Project (სპორტი და დასვენება)", "Digomi Project (İdman və istirahət)", "Digomi Project (Спорт и отдых)"],
    "Yarı olimpik havuz, fitness salonu, turnike geçişleri ve çevre güvenliğinin 28 Hikvision IP kamera ile kurulumu.": ["Installation of 28 Hikvision IP cameras for a semi-Olympic pool, fitness center, turnstiles, and perimeter security.", "ნახევრად ოლიმპიური აუზის, ფიტნეს დარბაზის, ტურნიკეტებისა და პერიმეტრის უსაფრთხოება 28 Hikvision IP კამერით.", "Yarımolimpiya hovuzu, fitnes zalı, turniketlər və perimetr təhlükəsizliyi üçün 28 Hikvision IP kameranın quraşdırılması.", "Установка 28 IP-камер Hikvision для бассейна, фитнес-зала, турникетов и охраны периметра."],
    "📍 Dighomi, Tiflis": ["📍 Dighomi, Tbilisi", "📍 დიღომი, თბილისი", "📍 Dighomi, Tbilisi", "📍 Дигоми, Тбилиси"],
    "Tiflis Lojistik Merkezi": ["Tbilisi Logistics Center", "თბილისის ლოჯისტიკური ცენტრი", "Tbilisi Logistika Mərkəzi", "Логистический центр Тбилиси"],
    "64 Kanal Hikvision 4K IP kamera, MikroTik fiber omurga ve 360 derece çevre güvenlik analitiği.": ["64-channel Hikvision 4K IP cameras, MikroTik fiber backbone, and 360-degree perimeter security analytics.", "64-არხიანი Hikvision 4K IP კამერები, MikroTik ოპტიკურ-ბოჭკოვანი ქსელი და პერიმეტრის 360° ანალიტიკა.", "64 kanallı Hikvision 4K IP kameralar, MikroTik fiber magistralı və 360 dərəcə perimetr təhlükəsizlik analitikası.", "64-канальные IP-камеры Hikvision 4K, оптоволоконная сеть MikroTik и аналитика периметра 360°."],
    "📍 Tiflis / Gürcistan": ["📍 Tbilisi / Georgia", "📍 თბილისი / საქართველო", "📍 Tbilisi / Gürcüstan", "📍 Тбилиси / Грузия"],
    "Batum 5 Yıldızlı Otel": ["5-Star Hotel in Batumi", "5-ვარსკვლავიანი სასტუმრო ბათუმში", "Batumi 5 Ulduzlu Otel", "5-звёздочный отель в Батуми"],
    "MikroTik cAP ax tavan tipi Wi-Fi altyapısı ve 120 adet IK10 vandal-proof dome kamera entegrasyonu.": ["MikroTik cAP ax ceiling-mounted Wi-Fi and integration of 120 IK10 vandal-resistant dome cameras.", "MikroTik cAP ax ჭერის Wi-Fi წვდომის წერტილები და 120 IK10 ვანდალგამძლე კამერის ინტეგრაცია.", "MikroTik cAP ax tavan Wi-Fi sistemi və 120 IK10 vandaladavamlı dome kameranın inteqrasiyası.", "Потолочные точки Wi-Fi MikroTik cAP ax и интеграция 120 антивандальных купольных камер IK10."],
    "5 Fotoğrafı Gör 🔍": ["View 5 Photos 🔍", "5 ფოტოს ნახვა 🔍", "5 şəkilə bax 🔍", "Посмотреть 5 фото 🔍"],
    "Detay": ["Details", "დეტალები", "Ətraflı", "Подробнее"],
    "0 Items Selected": ["0 Items Selected", "არჩეულია 0 ნივთი", "0 məhsul seçilib", "Выбрано: 0"],
    "Sepete Ekle": ["Add to Cart", "კალათაში დამატება", "Səbətə əlavə et", "В корзину"],
    "Teklif Al": ["Get a Quote", "შეთავაზების მიღება", "Təklif alın", "Запросить цену"],
    "İşlem tamamlandı!": ["Done!", "შესრულებულია!", "Tamamlandı!", "Готово!"],
    "Alışveriş Sepeti & Teklif": ["Cart & Quote", "კალათა და შეთავაზება", "Səbət və təklif", "Корзина и запрос цены"],
    "Müşteri Bilgileri": ["Customer Details", "მომხმარებლის მონაცემები", "Müştəri məlumatları", "Данные клиента"],
    "Toplam Tutar:": ["Total:", "ჯამი:", "Cəmi:", "Итого:"],
    "Siparişi WhatsApp ile Gönder 🚀": ["Send Order via WhatsApp 🚀", "შეკვეთის WhatsApp-ით გაგზავნა 🚀", "Sifarişi WhatsApp ilə göndər 🚀", "Отправить заказ через WhatsApp 🚀"],
    "YENİ SİPARİŞ & TEKLİF TALEBİ": ["NEW ORDER & QUOTE REQUEST", "ახალი შეკვეთა და შეთავაზების მოთხოვნა", "YENİ SİFARİŞ VƏ TƏKLİF SORĞUSU", "НОВЫЙ ЗАКАЗ И ЗАПРОС ПРЕДЛОЖЕНИЯ"],
    "Müşteri:": ["Customer:", "მომხმარებელი:", "Müştəri:", "Клиент:"],
    "Telefon:": ["Phone:", "ტელეფონი:", "Telefon:", "Телефон:"],
    "Konum:": ["Location:", "მდებარეობა:", "Məkan:", "Местоположение:"],
    "Not:": ["Note:", "შენიშვნა:", "Qeyd:", "Примечание:"],
    "Belirtilmedi": ["Not provided", "მითითებული არ არის", "Qeyd edilməyib", "Не указано"],
    "Tiflis": ["Tbilisi", "თბილისი", "Tbilisi", "Тбилиси"],
    "Sipariş Listesi:": ["Order List:", "შეკვეთების სია:", "Sifariş siyahısı:", "Список заказа:"],
    "TOPLAM:": ["TOTAL:", "ჯამი:", "CƏMİ:", "ИТОГО:"],
    "Keşif ve montaj teklifi rica ediyorum.": ["Please provide a site survey and installation quote.", "გთხოვთ, შემომთავაზოთ ობიექტის დათვალიერება და მონტაჟის ფასი.", "Obyektə baxış və quraşdırma təklifi göndərməyinizi xahiş edirəm.", "Прошу предоставить расчёт стоимости выезда и монтажа."],
    "© Vision Electronics · Profesyonel Güvenlik ve Ağ Donanımları · Tiflis, Gürcistan": ["© Vision Electronics · Professional Security & Network Equipment · Tbilisi, Georgia", "© Vision Electronics · უსაფრთხოებისა და ქსელური აღჭურვილობა · თბილისი, საქართველო", "© Vision Electronics · Təhlükəsizlik və şəbəkə avadanlıqları · Tbilisi, Gürcüstan", "© Vision Electronics · Оборудование для безопасности и сетей · Тбилиси, Грузия"],
    "Kriterlere uygun donanım bulunamadı.": ["No equipment matches your filters.", "ფილტრის შესაბამისი აღჭურვილობა ვერ მოიძებნა.", "Filtrə uyğun avadanlıq tapılmadı.", "Подходящее оборудование не найдено."],
    "Tüm Kategoriler": ["All Categories", "ყველა კატეგორია", "Bütün kateqoriyalar", "Все категории"],
    "IP Kameralar": ["IP Cameras", "IP კამერები", "IP kameralar", "IP-камеры"],
    "AHD Kameralar": ["AHD Cameras", "AHD კამერები", "AHD kameralar", "AHD-камеры"],
    "NVR Kayıt Cihazları": ["NVR Recorders", "NVR ჩამწერები", "NVR qeydiyyatçıları", "NVR-регистраторы"],
    "PoE Switch'ler": ["PoE Switches", "PoE სვიჩები", "PoE kommutatorları", "PoE-коммутаторы"],
    "Wi-Fi Sistemleri": ["Wi-Fi Systems", "Wi-Fi სისტემები", "Wi-Fi sistemləri", "Системы Wi-Fi"],
    "Alarm Sistemleri": ["Alarm Systems", "სიგნალიზაციის სისტემები", "Siqnalizasiya sistemləri", "Системы сигнализации"],
    "Tüm Çözünürlükler": ["All Resolutions", "ყველა გარჩევადობა", "Bütün təsvir ölçüləri", "Все разрешения"],
    "Tüm Kanal Sayıları": ["All Channel Counts", "არხების ყველა რაოდენობა", "Bütün kanal sayları", "Все варианты каналов"],
    "Tüm Port Sayıları": ["All Port Counts", "პორტების ყველა რაოდენობა", "Bütün port sayları", "Все варианты портов"],
    "ürün seçildi": ["items selected", "არჩეული ნივთი", "məhsul seçilib", "товаров выбрано"],
    "Seçilen ürünler sepete eklendi.": ["Selected products added to cart.", "არჩეული პროდუქტები კალათაში დაემატა.", "Seçilmiş məhsullar səbətə əlavə edildi.", "Выбранные товары добавлены в корзину."],
    "Ürün sepete eklendi.": ["Product added to cart.", "პროდუქტი კალათაში დაემატა.", "Məhsul səbətə əlavə edildi.", "Товар добавлен в корзину."],
    "Sepetiniz boş.": ["Your cart is empty.", "კალათა ცარიელია.", "Səbətiniz boşdur.", "Корзина пуста."],
    "Stokta": ["In stock", "მარაგშია", "Stokda", "В наличии"],
    "Son ürünler": ["Low stock", "მარაგი იწურება", "Az qalıb", "Заканчивается"],
    "Stokta yok": ["Out of stock", "არ არის მარაგში", "Stokda yoxdur", "Нет в наличии"],
    "Hakkında bilgi almak istiyorum: ": ["I'd like information about: ", "მსურს ინფორმაციის მიღება: ", "Haqqında məlumat almaq istəyirəm: ", "Хочу получить информацию: "],
    "Bu ürün tükenmiştir!": ["This product is out of stock!", "პროდუქტი მარაგში აღარ არის!", "Bu məhsul tükənib!", "Товар закончился!"],
    "Özellik": ["Specification", "მახასიათებელი", "Xüsusiyyət", "Характеристика"],
    "Donanım": ["Hardware", "აღჭურვილობა", "Avadanlıq", "Оборудование"],
    "Port": ["Port", "პორტი", "Port", "Порт"],
    "Ek özellik": ["Additional feature", "დამატებითი ფუნქცია", "Əlavə xüsusiyyət", "Дополнительная функция"],
    "Stokta yok": ["Out of stock", "არ არის მარაგში", "Stokda yoxdur", "Нет в наличии"],
    "Güvenlik · Ağ · Akıllı Sistemler": ["Security · Network · Smart Systems", "უსაფრთხოება · ქსელი · ჭკვიანი სისტემები", "Təhlükəsizlik · Şəbəkə · Ağıllı sistemlər", "Безопасность · Сети · Умные системы"],
    "GÜVENLİK · AĞ · AKILLI SİSTEMLER": ["SECURITY · NETWORK · SMART SYSTEMS", "უსაფრთხოება · ქსელი · ჭკვიანი სისტემები", "TƏHLÜKƏSİZLİK · ŞƏBƏKƏ · AĞILLI SİSTEMLƏR", "БЕЗОПАСНОСТЬ · СЕТИ · УМНЫЕ СИСТЕМЫ"],
    "Elektrik ve internet olmayan alanlar için güneş enerjili kameralar ve vinç güvenliği.": ["Solar-powered cameras for areas without electricity or internet, plus crane safety.", "მზის ენერგიაზე მომუშავე კამერები ელექტროენერგიისა და ინტერნეტის გარეშე ტერიტორიებისთვის და ამწეების უსაფრთხოება.", "Elektrik və internet olmayan sahələr üçün günəş enerjili kameralar və kran təhlükəsizliyi.", "Камеры на солнечных батареях для мест без электричества и интернета, а также безопасность кранов."],
    "CCTV & PoE Ağı": ["CCTV & PoE Network", "CCTV და PoE ქსელი", "CCTV və PoE şəbəkəsi", "CCTV и сеть PoE"],
    "📍 Batum / Gürcistan": ["📍 Batumi / Georgia", "📍 ბათუმი / საქართველო", "📍 Batumi / Gürcüstan", "📍 Батуми / Грузия"],
    "Vision Electronics ana sayfa": ["Vision Electronics home page", "Vision Electronics მთავარი გვერდი", "Vision Electronics ana səhifə", "Главная страница Vision Electronics"],
    "Proje danışmanlığı": ["Project consultation", "პროექტის კონსულტაცია", "Layihə məsləhəti", "Консультация по проекту"],
    "© Vision Electronics · Tiflis, Gürcistan": ["© Vision Electronics · Tbilisi, Georgia", "© Vision Electronics · თბილისი, საქართველო", "© Vision Electronics · Tbilisi, Gürcüstan", "© Vision Electronics · Тбилиси, Грузия"],
    "Vision Electronics — CCTV, Ağ & Güvenlik Çözümleri": ["Vision Electronics — CCTV, Network & Security Solutions", "Vision Electronics — CCTV, ქსელური და უსაფრთხოების გადაწყვეტილებები", "Vision Electronics — CCTV, Şəbəkə və Təhlükəsizlik Həlləri", "Vision Electronics — CCTV, сети и решения безопасности"],
    "Her mekana uygun, tek noktadan güvenlik çözümleri.": ["Security solutions for every space, all in one place.", "უსაფრთხოების გადაწყვეტილებები ნებისმიერი სივრცისთვის, ერთ სივრცეში.", "Hər məkan üçün təhlükəsizlik həlləri, vahid mərkəzdə.", "Решения безопасности для любых объектов в одном месте."],
    "Villa, site, restoran ve işletmeler için kamera, Wi-Fi, alarm ve ağ altyapısını ihtiyacınıza göre projelendiriyor ve kuruyoruz.": ["We design and install camera, Wi-Fi, alarm, and network systems tailored to villas, residential complexes, restaurants, and businesses.", "ვილებისთვის, საცხოვრებელი კომპლექსებისთვის, რესტორნებისა და ბიზნესებისთვის ვგეგმავთ და ვამონტაჟებთ კამერებს, Wi-Fi-ს, სიგნალიზაციასა და ქსელებს.", "Villalar, yaşayış kompleksləri, restoranlar və bizneslər üçün kamera, Wi-Fi, siqnalizasiya və şəbəkə sistemlərini layihələndirib quraşdırırıq.", "Проектируем и устанавливаем камеры, Wi-Fi, сигнализацию и сети для вилл, жилых комплексов, ресторанов и бизнеса."],
    "Nereler için çalışıyoruz?": ["Where do we work?", "სად ვმუშაობთ?", "Hansı sahələrdə işləyirik?", "Для каких объектов мы работаем?"],
    "Her mekanın ihtiyacı farklı. Çözümü kullanım alanına göre planlıyoruz.": ["Every space has different needs. We tailor each solution to its use.", "ყველა სივრცეს განსხვავებული საჭიროება აქვს. გადაწყვეტილებას დანიშნულების მიხედვით ვგეგმავთ.", "Hər məkanın ehtiyacı fərqlidir. Həlli istifadə sahəsinə uyğun planlaşdırırıq.", "У каждого объекта свои задачи. Мы подбираем решение под его назначение."],
    "Villa ve özel konutlar": ["Villas & Private Homes", "ვილები და კერძო სახლები", "Villalar və fərdi evlər", "Виллы и частные дома"],
    "İç ve dış mekan kameraları, güçlü Wi-Fi kapsaması, alarm ve uzaktan erişim.": ["Indoor and outdoor cameras, reliable Wi-Fi coverage, alarms, and remote access.", "შიდა და გარე კამერები, ძლიერი Wi-Fi დაფარვა, სიგნალიზაცია და დისტანციური წვდომა.", "Daxili və xarici kameralar, güclü Wi-Fi əhatəsi, siqnalizasiya və uzaqdan giriş.", "Камеры внутри и снаружи, надёжное покрытие Wi-Fi, сигнализация и удалённый доступ."],
    "Site ve apartmanlar": ["Residential Complexes & Apartments", "საცხოვრებელი კომპლექსები და ბინები", "Yaşayış kompleksləri və binalar", "Жилые комплексы и многоквартирные дома"],
    "Ortak alan ve çevre güvenliği, giriş kontrolü, kamera ve bina genelinde ağ altyapısı.": ["Common-area and perimeter security, access control, cameras, and building-wide network infrastructure.", "საერთო სივრცეებისა და პერიმეტრის უსაფრთხოება, დაშვების კონტროლი, კამერები და შენობის ქსელი.", "Ümumi sahələrin və perimetrin təhlükəsizliyi, girişə nəzarət, kameralar və bina şəbəkəsi.", "Безопасность общих зон и периметра, контроль доступа, камеры и сеть по всему зданию."],
    "Restoran ve konaklama": ["Restaurants & Hospitality", "რესტორნები და სტუმარმასპინძლობა", "Restoranlar və qonaqpərvərlik", "Рестораны и гостиничный бизнес"],
    "Müşteri ve servis alanları için kamera, misafir Wi-Fi ağı ve güvenli bağlantı.": ["Cameras for guest and service areas, guest Wi-Fi, and secure connectivity.", "კამერები სტუმრებისა და მომსახურების ზონებისთვის, სტუმრების Wi-Fi და უსაფრთხო კავშირი.", "Qonaq və xidmət sahələri üçün kameralar, qonaq Wi-Fi şəbəkəsi və təhlükəsiz bağlantı.", "Камеры для гостевых и служебных зон, гостевой Wi-Fi и защищённое подключение."],
    "Özel işletmeler": ["Businesses", "ბიზნესები", "Bizneslər", "Предприятия"],
    "Ofis, mağaza, depo ve iş yerleri için kamera, alarm ve ağ çözümleri.": ["Camera, alarm, and network solutions for offices, shops, warehouses, and workplaces.", "კამერები, სიგნალიზაცია და ქსელები ოფისებისთვის, მაღაზიებისთვის, საწყობებისა და სამუშაო ადგილებისთვის.", "Ofis, mağaza, anbar və iş yerləri üçün kamera, siqnalizasiya və şəbəkə həlləri.", "Камеры, сигнализация и сети для офисов, магазинов, складов и рабочих помещений."],
    "Çözüm hakkında konuşun →": ["Discuss your solution →", "განიხილეთ გადაწყვეტა →", "Həlli müzakirə edin →", "Обсудить решение →"],
    "Kurulumunu yaptığımız sistemler": ["Systems We Install", "ჩვენ მიერ მონტაჟდება", "Quraşdırdığımız sistemlər", "Устанавливаемые системы"],
    "İhtiyaca göre tek tek ya da birlikte çalışan sistemler halinde planlanabilir.": ["Systems can be planned individually or combined to fit your needs.", "საჭიროებისამებრ სისტემები შეიძლება ცალ-ცალკე ან ერთად დაიგეგმოს.", "Sistemlər ehtiyaca uyğun ayrı-ayrılıqda və ya birlikdə planlaşdırıla bilər.", "Системы можно спланировать по отдельности или объединить."],
    "IP kamera sistemleri": ["IP Camera Systems", "IP კამერის სისტემები", "IP kamera sistemləri", "Системы IP-камер"],
    "Canlı izleme, kayıt ve uzaktan erişim çözümleri.": ["Live monitoring, recording, and remote access.", "პირდაპირი მონიტორინგი, ჩაწერა და დისტანციური წვდომა.", "Canlı müşahidə, qeyd və uzaqdan giriş.", "Онлайн-наблюдение, запись и удалённый доступ."],
    "Wi-Fi ve ağ altyapısı": ["Wi-Fi & Network Infrastructure", "Wi-Fi და ქსელური ინფრასტრუქტურა", "Wi-Fi və şəbəkə infrastrukturu", "Wi-Fi и сетевая инфраструктура"],
    "Geniş kapsama alanı ve güvenilir bağlantı.": ["Wide coverage and reliable connectivity.", "ფართო დაფარვა და საიმედო კავშირი.", "Geniş əhatə və etibarlı bağlantı.", "Широкое покрытие и надёжное подключение."],
    "Güvenlik alarmı": ["Security Alarm", "უსაფრთხოების სიგნალიზაცია", "Təhlükəsizlik siqnalizasiyası", "Охранная сигнализация"],
    "Mekana göre planlanan alarm ve bildirim sistemleri.": ["Alarm and notification systems planned for your space.", "სივრცეზე მორგებული სიგნალიზაცია და შეტყობინებები.", "Məkana uyğun planlaşdırılan siqnalizasiya və bildirişlər.", "Сигнализация и уведомления с учётом особенностей объекта."],
    "Giriş ve interkom": ["Access Control & Intercom", "წვდომის კონტროლი და ინტერკომი", "Girişə nəzarət və interkom", "Контроль доступа и домофон"],
    "Kontrollü geçiş ve uzaktan görüşme çözümleri.": ["Controlled entry and remote communication solutions.", "კონტროლირებადი შესვლა და დისტანციური კავშირი.", "Nəzarətli keçid və uzaqdan danışıq həlləri.", "Контролируемый проход и удалённая связь."],
    "Projenizi birlikte planlayalım": ["Let's Plan Your Project", "ერთად დავგეგმოთ თქვენი პროექტი", "Layihənizi birlikdə planlaşdıraq", "Давайте спланируем ваш проект"],
    "Mekanınızı ve ihtiyacınızı paylaşın; size uygun çözümü konuşalım.": ["Tell us about your space and needs; let's find the right solution.", "მოგვიყევით სივრცისა და საჭიროებების შესახებ და ერთად შევარჩიოთ გადაწყვეტა.", "Məkanınızı və ehtiyacınızı bölüşün, uyğun həlli müzakirə edək.", "Расскажите об объекте и задачах — подберём подходящее решение."],
    "WhatsApp'tan ulaşın": ["Contact us on WhatsApp", "დაგვიკავშირდით WhatsApp-ზე", "WhatsApp ilə əlaqə saxlayın", "Свяжитесь с нами в WhatsApp"],
    "← Ana sayfa": ["← Home", "← მთავარი გვერდი", "← Ana səhifə", "← Главная"],
    "Hizmet Çözümleri — Vision Electronics": ["Service Solutions — Vision Electronics", "სერვისები — Vision Electronics", "Xidmət həlləri — Vision Electronics", "Решения и услуги — Vision Electronics"],
    "Güvenlik ve Ağ Donanımları": ["Security & Network Equipment", "უსაფრთხოებისა და ქსელური აღჭურვილობა", "Təhlükəsizlik və şəbəkə avadanlıqları", "Оборудование для безопасности и сетей"],
    "Hizmet Teklifleri": ["Service Quotes", "მომსახურების შეთავაზებები", "Xidmət təklifləri", "Предложения по услугам"],
    "Örnek: ": ["Example: ", "მაგალითად: ", "Məsələn: ", "Например: "],
    "Giriş & TV Ekranı": ["Home & Slideshow", "მთავარი გვერდი და სლაიდშოუ", "Ana səhifə və slaydlar", "Главная и слайд-шоу"],
    "Donanım Kataloğu": ["Equipment Catalog", "აღჭურვილობის კატალოგი", "Avadanlıq kataloqu", "Каталог оборудования"],
    "Hizmet Alanları": ["Services", "სერვისები", "Xidmətlər", "Услуги"],
    "Partner Firmalar": ["Partners", "პარტნიორები", "Tərəfdaşlar", "Партнёры"],
    "Çıkış ✕": ["Log out ✕", "გასვლა ✕", "Çıxış ✕", "Выйти ✕"],
    "Yönetici Giriş Doğrulaması": ["Administrator Sign In", "ადმინისტრატორის შესვლა", "Administrator girişi", "Вход администратора"],
    "Yönetici hesabınızla giriş yapın. Değişiklikler ortak veritabanına kaydedilir.": ["Sign in with your administrator account. Changes are saved to the shared database.", "შედით ადმინისტრატორის ანგარიშით. ცვლილებები შეინახება საერთო მონაცემთა ბაზაში.", "Administrator hesabınızla daxil olun. Dəyişikliklər ümumi verilənlər bazasında saxlanılır.", "Войдите как администратор. Изменения сохраняются в общей базе данных."],
    "Ortak kayıt sistemi yapılandırılmamış; değişiklikler bu tarayıcıyla sınırlı.": ["Shared storage is not configured; changes are limited to this browser.", "საერთო საცავი არ არის გამართული; ცვლილებები მხოლოდ ამ ბრაუზერში შეინახება.", "Ümumi yaddaş qurulmayıb; dəyişikliklər bu brauzerlə məhdudlaşır.", "Общее хранилище не настроено; изменения доступны только в этом браузере."],
    "Ortak kayıt sistemi bağlı.": ["Shared storage connected.", "საერთო საცავი დაკავშირებულია.", "Ümumi yaddaş qoşulub.", "Общее хранилище подключено."],
    "Ortak veritabanı boş; ilk girişte bu cihazdaki mevcut içerik aktarılacak.": ["Shared database is empty; this device's content will be imported on first sign-in.", "საერთო მონაცემთა ბაზა ცარიელია; პირველი შესვლისას ამ მოწყობილობის მონაცემები გადაიტანება.", "Ümumi verilənlər bazası boşdur; ilk girişdə bu cihazdakı məzmun köçürüləcək.", "Общая база пуста; при первом входе данные с этого устройства будут импортированы."],
    "Değişiklikler ortak veritabanına kaydediliyor…": ["Saving changes to shared storage…", "ცვლილებები საერთო საცავში ინახება…", "Dəyişikliklər ümumi yaddaşda saxlanılır…", "Сохранение изменений в общей базе…"],
    "Değişiklikler herkese açık siteye kaydedildi.": ["Changes saved to the live site.", "ცვლილებები საიტზე გამოქვეყნდა.", "Dəyişikliklər saytda saxlanıldı.", "Изменения сохранены на сайте."],
    "Ortak kayıt sistemi kontrol ediliyor…": ["Checking shared storage…", "საერთო საცავი მოწმდება…", "Ümumi yaddaş yoxlanılır…", "Проверка общей базы…"],
    "Giriş Yap ➔": ["Sign In ➔", "შესვლა ➔", "Daxil ol ➔", "Войти ➔"],
    "Hero Başlıkları ve TV Ekranı Fotoğrafları": ["Hero Text & Slideshow Images", "მთავარი სათაური და სლაიდშოუს ფოტოები", "Başlıq və slayd şəkilləri", "Текст главного экрана и слайд-шоу"],
    "Hero Rozet Metni (Tagline)": ["Hero Badge Text (Tagline)", "მთავარი ეკრანის წარწერა", "Başlıq etiketi", "Текст бейджа главного экрана"],
    "Hero Ana Başlık (H1)": ["Main Hero Heading (H1)", "მთავარი სათაური (H1)", "Əsas başlıq (H1)", "Главный заголовок (H1)"],
    "Hero Açıklama Metni": ["Hero Description", "მთავარი ეკრანის აღწერა", "Başlıq təsviri", "Описание главного экрана"],
    "Metinleri Kaydet ✓": ["Save Text ✓", "ტექსტის შენახვა ✓", "Mətni saxla ✓", "Сохранить текст ✓"],
    "TV Ekranında Dönen Slayt Fotoğrafları": ["Slideshow Images", "სლაიდშოუს ფოტოები", "Slayd şəkilləri", "Изображения слайд-шоу"],
    "Yeni slayt fotoğraf linki (https://...)": ["New slide image URL (https://...)", "სლაიდის ფოტოს ბმული (https://...)", "Yeni slayd şəkil linki (https://...)", "Ссылка на новое изображение (https://...)"],
    "Fotoğraf Ekle ➕": ["Add Image ➕", "ფოტოს დამატება ➕", "Şəkil əlavə et ➕", "Добавить изображение ➕"],
    "Ön İzleme": ["Preview", "გადახედვა", "Önizləmə", "Предпросмотр"],
    "Kaldır": ["Remove", "წაშლა", "Sil", "Удалить"],
    "Yeni Donanım / Model Ekle": ["Add Equipment / Model", "აღჭურვილობის / მოდელის დამატება", "Avadanlıq / model əlavə et", "Добавить оборудование / модель"],
    "Ürün / Model Adı": ["Product / Model Name", "პროდუქტის / მოდელის სახელი", "Məhsul / model adı", "Название товара / модели"],
    "Marka": ["Brand", "ბრენდი", "Marka", "Бренд"],
    "Kategori": ["Category", "კატეგორია", "Kateqoriya", "Категория"],
    "Kasa Tipi": ["Housing Type", "კორპუსის ტიპი", "Korpus növü", "Тип корпуса"],
    "Çözünürlük (Megapiksel)": ["Resolution (Megapixels)", "გარჩევადობა (მეგაპიქსელი)", "Təsvir ölçüsü (meqapiksel)", "Разрешение (мегапиксели)"],
    "Stok Sayısı (Sadece Sen Görürsün)": ["Stock Quantity (Admin Only)", "მარაგის რაოდენობა (მხოლოდ ადმინისტრატორი)", "Stok miqdarı (yalnız admin)", "Количество на складе (только администратор)"],
    "Fiyat (GEL)": ["Price (GEL)", "ფასი (GEL)", "Qiymət (GEL)", "Цена (GEL)"],
    "Resim Linki": ["Image URL", "სურათის ბმული", "Şəkil linki", "Ссылка на изображение"],
    "Donanım Tanımı (English Hw)": ["Hardware Description (English)", "აღჭურვილობის აღწერა (ინგლისურად)", "Avadanlıq təsviri (ingiliscə)", "Описание оборудования (на английском)"],
    "Arayüz / Port": ["Interface / Port", "ინტერფეისი / პორტი", "İnterfeys / port", "Интерфейс / порт"],
    "Standart / Koruma": ["Standard / Protection", "სტანდარტი / დაცვა", "Standart / qoruma", "Стандарт / защита"],
    "Düzenlemeyi İptal Et": ["Cancel Editing", "რედაქტირების გაუქმება", "Redaktəni ləğv et", "Отменить редактирование"],
    "Ürünü Kataloğa Ekle 🚀": ["Add Product to Catalog 🚀", "კატალოგში დამატება 🚀", "Kataloqa əlavə et 🚀", "Добавить в каталог 🚀"],
    "Hizmet Başlığı": ["Service Title", "მომსახურების სათაური", "Xidmət başlığı", "Название услуги"],
    "Fotoğraf Linki (URL)": ["Image URL", "ფოტოს ბმული (URL)", "Şəkil linki (URL)", "Ссылка на изображение (URL)"],
    "Segment Etiketi": ["Category Tag", "კატეგორიის იარლიყი", "Kateqoriya etiketi", "Метка категории"],
    "Açıklama (Kısa & Öz)": ["Description (Short & Clear)", "აღწერა (მოკლე და გასაგები)", "Təsvir (qısa və aydın)", "Описание (кратко и ясно)"],
    "Hizmeti Ekle 🚀": ["Add Service 🚀", "მომსახურების დამატება 🚀", "Xidmət əlavə et 🚀", "Добавить услугу 🚀"],
    "Mevcut Hizmet Kartları": ["Current Service Cards", "მიმდინარე მომსახურებები", "Mövcud xidmət kartları", "Текущие карточки услуг"],
    "Segment": ["Category", "კატეგორია", "Kateqoriya", "Категория"],
    "Yeni Çözüm Ortağı / Marka Logosu Ekle": ["Add Partner / Brand Logo", "პარტნიორის / ბრენდის ლოგოს დამატება", "Tərəfdaş / marka loqosu əlavə et", "Добавить партнёра / логотип бренда"],
    "Firma / Marka Adı": ["Company / Brand Name", "კომპანიის / ბრენდის სახელი", "Şirkət / marka adı", "Название компании / бренда"],
    "Şeffaf Logo Linki (PNG / SVG)": ["Transparent Logo URL (PNG / SVG)", "გამჭვირვალე ლოგოს ბმული (PNG / SVG)", "Şəffaf loqo linki (PNG / SVG)", "Ссылка на логотип с прозрачностью (PNG / SVG)"],
    "Partner Logosu Ekle 🤝": ["Add Partner Logo 🤝", "პარტნიორის ლოგოს დამატება 🤝", "Tərəfdaş loqosu əlavə et 🤝", "Добавить логотип партнёра 🤝"],
    "Logo Önizleme": ["Logo Preview", "ლოგოს გადახედვა", "Loqo önizləməsi", "Предпросмотр логотипа"],
    "Yeni Referans Proje Ekle": ["Add Reference Project", "საცნობარო პროექტის დამატება", "Nümunə layihə əlavə et", "Добавить проект"],
    "Proje / Tesis Adı": ["Project / Site Name", "პროექტის / ობიექტის სახელი", "Layihə / obyekt adı", "Название проекта / объекта"],
    "Şehir / Konum": ["City / Location", "ქალაქი / მდებარეობა", "Şəhər / məkan", "Город / местоположение"],
    "Etiket / Donanım Özeti": ["Tag / Equipment Summary", "იარლიყი / აღჭურვილობის შეჯამება", "Etiket / avadanlıq xülasəsi", "Метка / описание оборудования"],
    "Saha Fotoğrafı (URL)": ["Site Photo (URL)", "ობიექტის ფოტო (URL)", "Obyekt şəkli (URL)", "Фото объекта (URL)"],
    "Proje Açıklaması": ["Project Description", "პროექტის აღწერა", "Layihə təsviri", "Описание проекта"],
    "Projeyi Ekle 🚀": ["Add Project 🚀", "პროექტის დამატება 🚀", "Layihə əlavə et 🚀", "Добавить проект 🚀"],
    "Mevcut Projeler": ["Current Projects", "მიმდინარე პროექტები", "Mövcud layihələr", "Текущие проекты"],
    "Proje Adı": ["Project Name", "პროექტის სახელი", "Layihə adı", "Название проекта"],
    "Konum": ["Location", "მდებარეობა", "Məkan", "Местоположение"],
    "Yönetici şifresi": ["Administrator password", "ადმინისტრატორის პაროლი", "Administrator şifrəsi", "Пароль администратора"],
    "Hizmet Çözümleri": ["Service Solutions", "მომსახურების გადაწყვეტილებები", "Xidmət həlləri", "Решения по услугам"],
    "Bilgi Al": ["Ask Us", "დაგვიკავშირდით", "Məlumat alın", "Запросить информацию"],
    "Seçildi": ["Selected", "არჩეულია", "Seçildi", "Выбрано"],
    "Daha fazla bilgi": ["More information", "დამატებითი ინფორმაცია", "Ətraflı məlumat", "Подробнее"],
    "Fabrika ayarlarına dönüldü!": ["Default settings restored!", "ნაგულისხმევი პარამეტრები აღდგა!", "Standart parametrlər bərpa edildi!", "Настройки по умолчанию восстановлены!"],
    "CSV içe aktarılamadı: ": ["CSV import failed: ", "CSV-ის იმპორტი ვერ მოხერხდა: ", "CSV idxalı uğursuz oldu: ", "Не удалось импортировать CSV: "],
    "Henüz ürün yok. Formdan ekleyin veya CSV şablonunu doldurup içe aktarın.": ["No products yet. Add one using the form or import a completed CSV template.", "პროდუქტები ჯერ არ არის. დაამატეთ ფორმით ან CSV შაბლონით.", "Hələ məhsul yoxdur. Formla əlavə edin və ya CSV şablonunu idxal edin.", "Товаров пока нет. Добавьте через форму или импортируйте заполненный CSV."],
    "← Ana sayfa": ["← Home", "← მთავარი გვერდი", "← Ana səhifə", "← Главная"],
    "Ürün kataloğu": ["Product catalog", "პროდუქტების კატალოგი", "Məhsul kataloqu", "Каталог товаров"],
    "Marka": ["Brand", "ბრენდი", "Marka", "Бренд"],
    "Kategori": ["Category", "კატეგორია", "Kateqoriya", "Категория"],
    "Model veya özellik ara...": ["Search model or feature...", "მოძებნეთ მოდელი ან მახასიათებელი...", "Model və ya xüsusiyyət axtar...", "Поиск модели или характеристики..."],
    "Markaya, kategoriye veya ürün modeline göre arama yapın. Ürün listesi yönetim panelindeki ortak katalogdan yüklenir.": ["Search by brand, category, or model. Products are loaded from the shared catalog managed in the admin panel.", "მოძებნეთ ბრენდის, კატეგორიის ან მოდელის მიხედვით. პროდუქტები იტვირთება ადმინისტრატორის პანელის საერთო კატალოგიდან.", "Marka, kateqoriya və ya model üzrə axtarın. Məhsullar idarəetmə panelindəki ümumi kataloqdan yüklənir.", "Ищите по бренду, категории или модели. Товары загружаются из общего каталога панели администратора."],
    "Tüm markalar": ["All brands", "ყველა ბრენდი", "Bütün markalar", "Все бренды"],
    "Tüm kategoriler": ["All categories", "ყველა კატეგორია", "Bütün kateqoriyalar", "Все категории"],
    "Ürün": ["Products", "პროდუქტი", "Məhsullar", "Товары"],
    "Ürün bulunamadı.": ["No products found.", "პროდუქტები ვერ მოიძებნა.", "Məhsul tapılmadı.", "Товары не найдены."],
    "Bu kategorideki alternatif ürünler": ["Alternative products in this category", "ამ კატეგორიის ალტერნატიული პროდუქტები", "Bu kateqoriyadakı alternativ məhsullar", "Альтернативные товары в этой категории"],
    "Ürün listesi yükleniyor...": ["Loading products...", "პროდუქტები იტვირთება...", "Məhsullar yüklənir...", "Загрузка товаров..."],
    "Yerel ürün listesi gösteriliyor; ortak katalog yüklenemedi.": ["Showing locally saved products; the shared catalog could not be loaded.", "ნაჩვენებია ადგილობრივად შენახული პროდუქტები; საერთო კატალოგის ჩატვირთვა ვერ მოხერხდა.", "Yerli saxlanmış məhsullar göstərilir; ümumi kataloqu yükləmək mümkün olmadı.", "Показан локальный список товаров; общий каталог загрузить не удалось."],
    "IP kameralar": ["IP cameras", "IP კამერები", "IP kameralar", "IP-камеры"],
    "Analog kameralar": ["Analog cameras", "ანალოგური კამერები", "Analoq kameralar", "Аналоговые камеры"],
    "Analog Kameralar": ["Analog Cameras", "ანალოგური კამერები", "Analoq kameralar", "Аналоговые камеры"],
    "Diğer Ürünler": ["Other Products", "სხვა პროდუქტები", "Digər məhsullar", "Другие товары"],
    "NVR kayıt cihazları": ["NVR recorders", "NVR ჩამწერები", "NVR qeyd cihazları", "Видеорегистраторы NVR"],
    "PoE switch'ler": ["PoE switches", "PoE სვიჩები", "PoE switch-lər", "PoE-коммутаторы"],
    "Wi-Fi": ["Wi-Fi", "Wi-Fi", "Wi-Fi", "Wi-Fi"],
    "Alarm sistemleri": ["Alarm systems", "სიგნალიზაციის სისტემები", "Siqnalizasiya sistemləri", "Системы сигнализации"],
    "Diğerleri": ["Others", "სხვა", "Digərləri", "Прочее"],
    "Sepete ekle": ["Add to cart", "კალათაში დამატება", "Səbətə əlavə et", "Добавить в корзину"],
    "Bilgi al": ["Ask about this product", "იკითხეთ პროდუქტის შესახებ", "Məhsul haqqında soruşun", "Уточнить о товаре"],
    "Sepete eklendi.": ["Added to cart.", "კალათაში დაემატა.", "Səbətə əlavə edildi.", "Добавлено в корзину."],
    "Stokta": ["In stock", "მარაგშია", "Stokda", "В наличии"],
    "Son ürünler": ["Low stock", "დაბალი მარაგი", "Az sayda qalıb", "Заканчивается"],
    "Stokta yok": ["Out of stock", "არ არის მარაგში", "Stokda yoxdur", "Нет в наличии"],
    "Donanım": ["Hardware", "აპარატურა", "Avadanlıq", "Оборудование"],
    "Bağlantı": ["Connection", "კავშირი", "Bağlantı", "Подключение"],
    "Ek özellik": ["Extra feature", "დამატებითი ფუნქცია", "Əlavə xüsusiyyət", "Дополнительная функция"],
    "Ana sayfaya dön": ["Back to home", "მთავარ გვერდზე დაბრუნება", "Ana səhifəyə qayıt", "Вернуться на главную"]
  };

  const languages = ["en", "ge", "az", "ru"];
  const dictionaries = Object.fromEntries(languages.map(language => [language, {}]));
  for (const [source, translations] of Object.entries(rows)) {
    languages.forEach((language, index) => {
      dictionaries[language][source] = translations[index];
    });
  }

  const translatedTextNodes = new WeakMap();
  const translatedAttributes = new WeakMap();
  const translatableAttributes = ["placeholder", "title", "aria-label", "alt"];
  const excludedSelectors = ".p-card, .p-card *, .cart-item, .cart-item *";

  function normalizeLanguage(language) {
    return language === "tr" || dictionaries[language] ? language : "tr";
  }

  function translateText(text, language) {
    const lang = normalizeLanguage(language);
    if (lang === "tr") return text;
    return dictionaries[lang][text] || text;
  }

  function apply(root, language) {
    const lang = normalizeLanguage(language);
    if (!root || !root.querySelectorAll) return;
    document.documentElement.lang = lang;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const parent = node.parentElement;
      if (parent && !parent.closest(excludedSelectors) &&
          !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        if (!translatedTextNodes.has(node)) translatedTextNodes.set(node, node.nodeValue);
        const source = translatedTextNodes.get(node);
        const leading = source.match(/^\s*/)[0];
        const trailing = source.match(/\s*$/)[0];
        const content = source.slice(leading.length, source.length - trailing.length || undefined);
        node.nodeValue = `${leading}${translateText(content, lang)}${trailing}`;
      }
      node = walker.nextNode();
    }

    const elements = [root, ...root.querySelectorAll("*")];
    for (const element of elements) {
      if (element.nodeType !== Node.ELEMENT_NODE || element.matches(excludedSelectors)) continue;
      for (const attribute of translatableAttributes) {
        if (!element.hasAttribute(attribute)) continue;
        let originals = translatedAttributes.get(element);
        if (!originals) {
          originals = new Map();
          translatedAttributes.set(element, originals);
        }
        if (!originals.has(attribute)) originals.set(attribute, element.getAttribute(attribute));
        element.setAttribute(attribute, translateText(originals.get(attribute), lang));
      }
    }

    document.querySelectorAll(".lang-option-btn").forEach(button => {
      button.classList.toggle("active", button.textContent.includes((window.LANG_FLAGS?.[lang] || { code: "TR" }).code));
    });
    document.querySelectorAll("[data-site-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.siteLanguage === lang));
    });

    document.title = translateText(sourceTitle, lang);
  }

  function setLanguage(language) {
    const lang = normalizeLanguage(language);
    localStorage.setItem("v_lang", lang);
    apply(document, lang);
    return lang;
  }

  function extendCatalog(catalog) {
    if (!catalog || !catalog.tr) return;
    for (const language of languages) {
      if (!catalog[language]) catalog[language] = { ...catalog.tr };
      for (const [key, source] of Object.entries(catalog.tr)) {
        catalog[language][key] = translateText(source, language);
      }
    }
  }

  window.VisionTranslations = { apply, extendCatalog, translateText, setLanguage };
  window.setSiteLanguage = setLanguage;

  const originalAlert = window.alert.bind(window);
  window.alert = message => originalAlert(translateText(String(message), localStorage.getItem("v_lang") || "tr"));
})();
