/* Basbaya yardım asistanı — hazır cevaplı, ücretsiz. Cevaplar aşağıdaki KB listesinde. */
(function () {
  if (window.__bbChat) return; window.__bbChat = 1;
  var EN = (document.documentElement.lang || 'tr').toLowerCase().indexOf('en') === 0;
  var R = window.__bbRoute || function (k) {
    var tr = { home: '/', d3: '/basbaya-3d/', hayal: '/hayalini-anlat/', studio: '/studio/', contact: '/iletisim/', about: '/hakkimizda/', parca: '/yedek-parca/' };
    var en = { home: '/en/', d3: '/en/basbaya-3d/', hayal: '/en/describe-it/', studio: '/en/studio/', contact: '/en/contact/', about: '/en/about/', parca: '/en/spare-parts/' };
    return (EN ? en : tr)[k];
  };
  var TY = 'https://www.trendyol.com/magaza/basbaya-m-1345724';
  var P = {
    kaktus: ['Kaktüs Kulaklık Standı', 'Cactus Headphone Stand', 'https://www.trendyol.com/sr?q=basbaya%20kakt%C3%BCs%20kulakl%C4%B1k%20stand%C4%B1'],
    bardak: ['Masa Kenarı Bardak Tutucu', 'Desk-Edge Cup Holder', 'https://www.trendyol.com/basbaya/masa-kenarina-takilan-vidali-bardak-tutucu-kupa-tutacagi-sicak-beyaz-kobalt-mavi-p-1221560133'],
    telefon: ['Telefon ve Tablet Standı', 'Phone & Tablet Stand', 'https://www.trendyol.com/basbaya/masaustu-telefon-tablet-standi-p-1208507303'],
    ps5: ['Oyun Kolu Standı (2\'li)', 'Controller Stand (for 2)', 'https://www.trendyol.com/basbaya/ps5-dualsense-uyumlu-2-lu-oyun-kolu-standi-3d-baski-p-1208346046'],
    tutsu: ['Black Hole Tütsülük', 'Black Hole Incense Holder', 'https://www.trendyol.com/basbaya/black-hole-kara-delik-tasarimli-dekoratif-tutsuluk-p-1219904332'],
    ucak: ['Kargo Uçağı Maket Kiti', 'Cargo Plane Model Kit', 'https://www.trendyol.com/pd/basbaya/askeri-kargo-ucagi-maketi-kit-kart-kendin-birlestir-standli-3d-baski-ucak-modeli-p-1234331599?merchantId=1345724'],
    kalp: ['360° Döner Kalp Anahtarlık', '360° Spinning Heart Keychain', 'https://www.trendyol.com/basbaya/anahtarlik-gyroscopic-360-doner-kalp-fidget-p-1208249005'],
    disli: ['Planetary Gear Dişli Fidget', 'Planetary Gear Fidget', 'https://www.trendyol.com/basbaya/planetary-gear-doner-disli-fidget-oyuncagi-p-1208549220']
  };
  function pl(k) { var p = P[k]; return { t: EN ? p[1] : p[0], u: p[2], ext: 1 }; }
  function L(tr, en, u, ext) { return { t: EN ? en : tr, u: u, ext: ext }; }
  var lTY = L('Trendyol mağazamız', 'Our Trendyol store', TY, 1);
  var l3D = L('Ürünleri gör', 'See products', R('d3'));
  var lHayal = L('Hayalini anlat', 'Describe your idea', R('hayal'));
  var lStudio = L('Drone hizmetleri', 'Drone services', R('studio'));
  var lPkg = L('Paketleri gör', 'See packages', R('studio') + '#paketler');
  var lContact = L('İletişim formu', 'Contact form', R('contact'));
  var lParca = L('Yedek parça talebi', 'Request a spare part', R('parca'));
  var lMail = L('info@basbaya.com', 'info@basbaya.com', 'mailto:info@basbaya.com', 1);

  // k: anahtar kelimeler (küçük harf, Türkçe karakter sadeleştirilmiş). Uzun eşleşme daha çok puan alır.
  var KB = [
    { id: 'selam', k: ['merhaba', 'selam', 'slm', 'mrb', 'iyi gunler', 'iyi aksamlar', 'hey', 'hello', 'hi ', 'good morning'],
      tr: 'Merhaba! 👋 Ben Basbaya asistanı. Ürünler, kargo, özel tasarım ya da drone çekimi hakkında ne sormak istersin?',
      en: 'Hi! 👋 I\'m the Basbaya assistant. Ask me about products, shipping, custom designs or drone shoots.', chips: 1 },
    { id: 'tesekkur', k: ['tesekkur', 'sagol', 'sag ol', 'eyvallah', 'thanks', 'thank you', 'tsk', 'tskler'],
      tr: 'Rica ederim! Başka bir sorun olursa buradayım. 🙂', en: 'You\'re welcome! I\'m here if you need anything else. 🙂' },
    { id: 'urunler', k: ['urun', 'urunler', 'ne satiyorsunuz', 'neler var', 'katalog', 'magaza', 'trendyol', 'products', 'what do you sell', 'shop', 'store'],
      tr: 'Atölyemizde kendi tasarladığımız 3D baskı ürünler var: <b>masaüstü</b> (kaktüs kulaklık standı, bardak tutucu, telefon standı, PS5 oyun kolu standı), <b>dekoratif</b> (Black Hole tütsülük, kargo uçağı maket kiti) ve <b>fidget</b> (döner kalp anahtarlık, dişli fidget). Hepsi Trendyol mağazamızda satışta.',
      en: 'We sell 3D-printed products we design ourselves: <b>desk</b> (cactus headphone stand, cup holder, phone stand, PS5 controller stand), <b>decor</b> (Black Hole incense holder, cargo plane model kit) and <b>fidgets</b> (spinning heart keychain, gear fidget). All are on our Trendyol store.',
      links: [l3D, lTY] },
    { id: 'p_kaktus', k: ['kaktus', 'kulaklik', 'cactus', 'headphone'], tr: 'Kaktüs Kulaklık Standı kulaklığın yanında saat ve kulak içi kulaklık için de yer sunuyor. Güncel fiyat ve renkler Trendyol\'da:', en: 'The Cactus Headphone Stand also holds a watch and earbuds. Current price and colours on Trendyol:', links: [pl('kaktus')] },
    { id: 'p_bardak', k: ['bardak', 'kupa', 'cup', 'mug'], tr: 'Masa Kenarı Bardak Tutucu vidalı; masayı delmeden kenara takılıyor. Detaylar Trendyol\'da:', en: 'The Desk-Edge Cup Holder clamps on with a screw, no drilling needed. Details on Trendyol:', links: [pl('bardak')] },
    { id: 'p_telefon', k: ['telefon stand', 'tablet', 'phone stand', 'telefon tutucu'], tr: 'Telefon ve Tablet Standı sade ve sağlam bir masaüstü stand. Trendyol\'da inceleyebilirsin:', en: 'The Phone & Tablet Stand is a simple, sturdy desk stand. See it on Trendyol:', links: [pl('telefon')] },
    { id: 'p_ps5', k: ['ps5', 'playstation', 'dualsense', 'oyun kolu', 'joystick', 'controller', 'gamepad'], tr: 'Oyun Kolu Standı PS5 DualSense uyumlu ve iki kolu birlikte taşıyor. Trendyol\'da:', en: 'The Controller Stand fits PS5 DualSense and holds two controllers. On Trendyol:', links: [pl('ps5')] },
    { id: 'p_tutsu', k: ['tutsu', 'black hole', 'kara delik', 'incense'], tr: 'Black Hole Tütsülük kara delik tasarımlı dekoratif bir obje. Trendyol\'da:', en: 'The Black Hole Incense Holder is a black-hole themed decor piece. On Trendyol:', links: [pl('tutsu')] },
    { id: 'p_ucak', k: ['ucak', 'maket', 'c-17', 'c17', 'kargo ucagi', 'plane', 'model kit', 'aircraft'], tr: 'Kargo Uçağı Maket Kiti kendin birleştirdiğin bir kit; standıyla birlikte sergileyebilirsin. Trendyol\'da:', en: 'The Cargo Plane Model Kit is a build-it-yourself kit that comes with a display stand. On Trendyol:', links: [pl('ucak')] },
    { id: 'p_kalp', k: ['anahtarlik', 'kalp', 'keychain', 'heart'], tr: '360° Döner Kalp Anahtarlık, dönen halkalarıyla gyroscopic bir fidget. Trendyol\'da:', en: 'The 360° Spinning Heart Keychain is a gyroscopic fidget. On Trendyol:', links: [pl('kalp')] },
    { id: 'p_disli', k: ['disli', 'gear', 'planetary', 'fidget'], tr: 'Planetary Gear Dişli Fidget, dönen dişlileriyle masaüstü oyuncak. Trendyol\'da:', en: 'The Planetary Gear Fidget is a desk toy with spinning gears. On Trendyol:', links: [pl('disli')] },
    { id: 'fiyat', k: ['fiyat', 'kac para', 'kac tl', 'ne kadar', 'ucret', 'pahali', 'indirim', 'kampanya', 'price', 'cost', 'how much', 'discount'],
      tr: 'Hazır ürünlerin güncel fiyatları ve kampanyalar Trendyol mağazamızda. Özel tasarımlarda fiyatı konsept onayından sonra netleştiriyoruz. Drone çekiminde fiyat yer, süre ve teslim edilecek içeriğe göre değişiyor; kısa bir görüşmeyle teklif veriyoruz.',
      en: 'Current prices and deals for ready-made products are on our Trendyol store. For custom designs we confirm the price after you approve the concept. Drone shoot prices depend on location, duration and deliverables; we quote after a short chat.',
      links: [lTY, lHayal, lPkg] },
    { id: 'kargo', k: ['kargo', 'teslimat', 'ne zaman gelir', 'kac gunde', 'gonderim', 'sevkiyat', 'yurt disi', 'shipping', 'delivery', 'ship', 'arrive'],
      tr: 'Siparişleri İstanbul\'daki atölyemizde hazırlayıp her ürünü elden kontrol ettikten sonra Türkiye geneline kargoluyoruz. Kargo süresi ve ücreti her ürünün Trendyol sayfasında yazıyor.',
      en: 'We prepare orders in our Istanbul workshop, check each item by hand and ship across Turkey. Shipping time and cost are shown on each product\'s Trendyol page.',
      links: [lTY] },
    { id: 'siparis', k: ['siparisim', 'kargom', 'kargo takip', 'nerede', 'gelmedi', 'takip', 'order status', 'where is my order', 'tracking'],
      tr: 'Trendyol\'dan verdiğin siparişin durumunu Trendyol uygulamasında <b>Siparişlerim</b> bölümünden görebilirsin. Bir sorun varsa siparişin içinden satıcıya (bize) mesaj atabilir ya da bize e-postayla yazabilirsin.',
      en: 'You can track a Trendyol order under <b>My Orders</b> in the Trendyol app. If something is wrong, message us from the order page or email us.',
      links: [lMail] },
    { id: 'iade', k: ['iade', 'degisim', 'kirik', 'hasarli', 'bozuk', 'eksik', 'return', 'refund', 'broken', 'damaged'],
      tr: 'Trendyol siparişlerinde iade ve değişim Trendyol\'un iade koşullarıyla, Trendyol üzerinden yapılıyor. Ürün kırık ya da hasarlı geldiyse fotoğrafıyla birlikte siparişin içinden bize yaz, hemen ilgilenelim.',
      en: 'Returns and exchanges for Trendyol orders go through Trendyol under its return policy. If an item arrived broken, message us from the order page with a photo and we\'ll sort it out.',
      links: [lMail] },
    { id: 'malzeme', k: ['malzeme', 'pla', 'plastik', 'dayanikli', 'saglam', 'sicak', 'gunes', 'bulasik', 'material', 'durable', 'heat'],
      tr: 'Ürünlerimizi Bambu Lab X2D yazıcımızda <b>PLA</b> malzemeyle basıyoruz. Günlük kullanımda sağlam; ama PLA yüksek sıcaklığa dayanıklı değil, o yüzden güneşte kalan araç içi ya da bulaşık makinesi gibi sıcak ortamlardan uzak tutmanı öneririz.',
      en: 'We print on our Bambu Lab X2D using <b>PLA</b>. It\'s sturdy for everyday use, but PLA doesn\'t like high heat, so keep it away from hot cars and dishwashers.' },
    { id: 'renk', k: ['renk', 'renkli', 'siyah', 'beyaz', 'mavi', 'kirmizi', 'colour', 'color'],
      tr: 'Hazır ürünlerin renk seçenekleri Trendyol ürün sayfasında. Özel tasarımlarda tek renk (sade, mat) ya da çok renkli (AMS ile) baskı yapabiliyoruz.',
      en: 'Colour options for ready-made products are on each Trendyol page. For custom work we print single colour (clean, matte) or multicolour (with AMS).',
      links: [lTY, lHayal] },
    { id: 'ozel', k: ['ozel tasarim', 'kisiye ozel', 'kisisel', 'ozel uretim', 'figur', 'heykel', 'biblo', 'fotograftan', 'resimden', 'evcil', 'kedi', 'kopek', 'hediye', 'isim yaz', 'custom', 'personalised', 'personalized', 'figure', 'gift', 'pet'],
      tr: 'Tabii! <b>Hayalini anlat</b> sayfasında fikrini yaz ya da fotoğraf yükle. Sana iki seçenek sunuyoruz: fotoğrafına en yakın hazır lisanslı modeller ya da yapay zeka desteğiyle sana özel bir konsept. Onaylarsan atölyede basıp kargoluyoruz; fiyatı konsept onayından sonra netleştiriyoruz.',
      en: 'Sure! On the <b>Describe your idea</b> page, write your idea or upload a photo. We offer two options: the closest licensed ready-made models, or an AI-assisted custom concept. Once you approve, we print and ship it; the price is confirmed after concept approval.',
      links: [lHayal] },
    { id: 'karakter', k: ['karakter', 'cizgi film', 'marvel', 'disney', 'pokemon', 'anime', 'marka logosu', 'character', 'cartoon'],
      tr: 'Telifli marka ve çizgi film karakterlerini basmıyoruz. Ama benzer havada, sana özel ve özgün bir tasarım hazırlayabiliriz.',
      en: 'We don\'t print trademarked brand or cartoon characters, but we can design something original in a similar spirit.', links: [lHayal] },
    { id: 'toplu', k: ['toplu', 'kurumsal', 'logolu', 'logo', 'adet', 'firma', 'sirket', 'etkinlik hediye', 'promosyon', 'bulk', 'corporate', 'wholesale'],
      tr: 'Kurumsal hediye, logolu ürün ve etkinlik hediyelikleri için adetli üretim yapıyoruz. İletişim formunda konu olarak "toplu sipariş"i seç; adet, ölçü ve tarih yazarsan teklifle dönelim.',
      en: 'We do batch production for corporate gifts, branded items and event giveaways. Pick "bulk order" on the contact form with quantity, size and date and we\'ll send a quote.',
      links: [lContact] },
    { id: 'parca', k: ['yedek parca', 'parca', 'aparat', 'olculu', 'prototip', 'tutucu', 'kirilan', 'kirildi', 'bulunmuyor', 'bulamiyorum', 'uretimden kalkti', 'klips', 'kapak', 'menteşe', 'mentese', 'tekerlek', 'kulp', 'spare part', 'prototype', 'replacement', 'broke', 'discontinued'],
      tr: 'Kırılan, kaybolan ya da üretimden kalktığı için bulunamayan parçaları ölçüsüne göre tasarlayıp basıyoruz: ev aletleri, mobilya, araç içi klipsler, kumanda kapakları, oyuncak parçaları ve ölçüye özel aparatlar. Yedek Parça sayfasından fotoğraf ve ölçüleriyle talep gönder, fiyatla dönelim. (Fren, gaz hattı gibi güvenlik açısından kritik parçaları basmıyoruz.)',
      en: 'We redesign and print parts that broke, went missing or are discontinued: appliance fittings, furniture parts, car interior clips, remote covers, toy parts and made-to-measure adapters. Send photos and sizes from the Spare Parts page and we\'ll quote. (We don\'t print safety-critical parts such as brakes or gas lines.)',
      links: [lParca, lMail] },
    { id: 'p_dyson', k: ['dyson', 'sac kurutma', 'fon makinesi', 'hair dryer'], tr: 'Dyson uyumlu saç kurutma makinesi standımız var: kaymaz taban, kablo düzeni ve başlıklar için saklama yeri, dört renk seçeneği. Trendyol\'da:', en: 'We make a Dyson-compatible hair dryer stand: non-slip base, cable management and attachment storage, in four colours. On Trendyol:', links: [L('Dyson uyumlu stand', 'Dyson-compatible stand', 'https://www.trendyol.com/basbaya/hair-dryer-uyumlu-sac-kurutma-makinesi-standi-p-1209114347', 1)] },
    { id: 'p_supurge', k: ['supurge', 'koltuk arasi', 'dar uc', 'pencere rayi', 'ray temizleme', 'vacuum', 'crevice', 'window track'], tr: 'Ekstra ince, 25 cm uzunluğunda süpürge ucumuz var: koltuk aralarına, pencere raylarına ve dar aralıklara uzanıyor. Süpürgen için başka bir aparat ya da kırık bir parça lazımsa yedek parça talebi de gönderebilirsin.', en: 'We make an extra-slim 25 cm vacuum nozzle for sofa gaps, window tracks and tight spaces. Need a different fitting or a broken part for your vacuum? Send a spare part request.', links: [L('Süpürge ucu', 'Crevice tool', 'https://www.trendyol.com/basbaya/ekstra-ince-uzun-supurge-ucu-25-cm-pencere-rayi-ve-dar-aralik-temizleme-aparati-p-1217241453', 1), lParca] },
    { id: 'drone', k: ['drone', 'dron', 'havadan', 'hava cekimi', 'cekim', 'video', 'aerial', 'shoot', 'filming'],
      tr: 'Basbaya Studio ile İstanbul ve çevresinde havadan fotoğraf ve video çekiyoruz: düğün ve nişan, organizasyon, inşaat takibi, emlak ve arsa, otel ve restoran, kurumsal tanıtım, sosyal medya/reels, tarım ve özel günler. Çekip kurguluyor, paylaşıma hazır teslim ediyoruz.',
      en: 'With Basbaya Studio we shoot aerial photo and video in Istanbul and nearby: weddings, events, construction progress, real estate, hotels and restaurants, corporate, social media/reels, farmland and family occasions. We shoot, edit and deliver ready to post.',
      links: [lStudio, lPkg] },
    { id: 'paket', k: ['paket', 'hizli cekim', 'standart', 'aylik', 'package', 'plan'],
      tr: '3 paketimiz var:<br>• <b>Hızlı Çekim:</b> 1 lokasyon, ~1 saat uçuş, 15 düzenlenmiş fotoğraf, 1 adet 30–60 sn dikey video, 3 iş günü içinde teslim.<br>• <b>Standart</b> (en çok tercih edilen): yarım gün çekim, 30 fotoğraf, 1–2 dk kurgulu video + 2 reels, 4K ham görüntüler dahil.<br>• <b>Proje / Aylık:</b> ayda 1–2 planlı çekim, aynı açılardan kayıt, aylık ilerleme videosu, proje sonunda timelapse.',
      en: 'We have 3 packages:<br>• <b>Quick Shoot:</b> 1 location, ~1 hour of flight, 15 edited photos, one 30–60 s vertical video, delivered within 3 business days.<br>• <b>Standard</b> (most popular): half-day shoot, 30 photos, 1–2 min edited video + 2 reels, 4K raw footage included.<br>• <b>Project / Monthly:</b> 1–2 planned shoots a month, same angles each time, monthly progress video, timelapse at the end.',
      links: [lPkg] },
    { id: 'dugun', k: ['dugun', 'nisan', 'save the date', 'gelin', 'wedding', 'engagement'],
      tr: 'Düğün ve nişanda mekânın havadan açılışını, gelin-damat girişini, dış mekân anlarını ve save the date sahnelerini çekiyor, düğün videosuna eklenecek kurgulu klipler teslim ediyoruz. Genelde <b>Standart</b> paket uygun oluyor.',
      en: 'For weddings we film the venue from above, the couple\'s entrance, outdoor moments and save-the-date scenes, and deliver edited clips for your wedding film. The <b>Standard</b> package usually fits best.',
      links: [L('Düğün için teklif al', 'Get a wedding quote', R('studio') + '#hizmetler'), lPkg] },
    { id: 'insaat', k: ['insaat', 'santiye', 'proje takibi', 'ilerleme', 'timelapse', 'construction', 'site progress'],
      tr: 'İnşaat ve proje takibinde ayda 1–2 planlı çekimle her seferinde aynı açılardan kayıt alıyor, aylık ilerleme videosu ve proje sonunda timelapse özet hazırlıyoruz. Bunun için <b>Proje / Aylık</b> paketi var.',
      en: 'For construction we do 1–2 planned shoots a month from the same angles, a monthly progress video and a timelapse at the end: the <b>Project / Monthly</b> package.',
      links: [lPkg] },
    { id: 'emlak', k: ['emlak', 'arsa', 'villa', 'satilik', 'kiralik', 'otel', 'restoran', 'real estate', 'hotel', 'land'],
      tr: 'Emlak, arsa, otel ve restoranlar için konumu ve çevresini havadan gösteren fotoğraf ve videolar çekiyoruz. Tek lokasyon için <b>Hızlı Çekim</b>, daha kapsamlı tanıtım için <b>Standart</b> paket iyi bir başlangıç.',
      en: 'For property, land, hotels and restaurants we shoot aerial photos and video showing the location and surroundings. <b>Quick Shoot</b> suits a single spot; <b>Standard</b> suits a fuller promo.',
      links: [lPkg] },
    { id: 'bolge', k: ['bolge', 'istanbul', 'sehir disi', 'nereye', 'hangi il', 'ankara', 'izmir', 'bursa', 'kocaeli', 'location', 'area', 'where'],
      tr: 'Hizmet bölgemiz <b>İstanbul ve çevresi</b>. Şehir dışı çekimler için tarih ve yeri yazın, birlikte bakalım. 3D ürünleri ise Türkiye\'nin her yerine kargoluyoruz.',
      en: 'Our drone service area is <b>Istanbul and nearby</b>. For shoots elsewhere, send us the date and place. 3D products ship anywhere in Turkey.',
      links: [lContact] },
    { id: 'teslim_drone', k: ['ne zaman teslim', 'kac gunde teslim', 'teslim suresi', 'kurgu suresi', 'turnaround'],
      tr: 'Hızlı Çekim paketinde teslim 3 iş günü içinde. Diğer paketlerde teslim süresini çekimin kapsamına göre teklifte netleştiriyoruz.',
      en: 'Quick Shoot is delivered within 3 business days. For other packages we confirm turnaround in the quote, depending on scope.', links: [lPkg] },
    { id: 'ekipman', k: ['ekipman', 'hangi drone', 'dji', 'mini 5', 'kamera', '4k', 'camera', 'equipment'],
      tr: 'DJI Mini 5 Pro ile çekiyoruz: 1 inç 50 MP sensör, 14 stop dinamik aralık, f/1.8 diyafram (düşük ışıkta net) ve 48 mm yakın plan.',
      en: 'We fly a DJI Mini 5 Pro: 1-inch 50 MP sensor, 14 stops of dynamic range, f/1.8 aperture for low light and a 48 mm close-up lens.' },
    { id: 'hava', k: ['yagmur', 'ruzgar', 'hava durumu', 'hava kotu', 'iptal', 'erteleme', 'rain', 'wind', 'weather', 'cancel'],
      tr: 'Çekim gününden önce hava ve uçuş koşullarını kontrol edip planlıyoruz. Koşullar uygun olmazsa ne yapacağımızı teklif görüşmesinde birlikte netleştiriyoruz.',
      en: 'We check weather and flight conditions before the shoot day. What happens if conditions aren\'t right is agreed together during the quote.', links: [lContact] },
    { id: 'surec', k: ['nasil calisiyor', 'surec', 'nasil oluyor', 'adim', 'how does it work', 'process', 'steps'],
      tr: 'Drone çekiminde süreç 3 adım: <b>1)</b> yeri, tarihi ve ne istediğini konuşup teklif veriyoruz, <b>2)</b> çekim günü planlanan açılardan çekiyoruz, <b>3)</b> renk ayarı ve kurgusu yapılmış dosyaları paylaşıma hazır teslim ediyoruz. Özel 3D tasarımda ise: anlat → seçeneklerini gör → seç → basıp gönderelim.',
      en: 'Drone shoots take 3 steps: <b>1)</b> we discuss place, date and goals and send a quote, <b>2)</b> we shoot the planned angles, <b>3)</b> we deliver colour-graded, edited files ready to post. Custom 3D: describe → see options → choose → we print and ship.',
      links: [lStudio, lHayal] },
    { id: 'iletisim', k: ['iletisim', 'ulas', 'mail', 'e-posta', 'eposta', 'telefon numara', 'numara', 'whatsapp', 'instagram', 'dm', 'contact', 'email', 'phone', 'reach'],
      tr: 'Bize <b>info@basbaya.com</b> adresinden ya da iletişim formundan ulaşabilirsin. Instagram\'da 3D ürünler için <b>@basbayacom</b>, drone çekimleri için <b>@basbaya.studio</b>.',
      en: 'Reach us at <b>info@basbaya.com</b> or via the contact form. On Instagram: <b>@basbayacom</b> for 3D products, <b>@basbaya.studio</b> for drone work.',
      links: [lContact, lMail, L('@basbayacom', '@basbayacom', 'https://www.instagram.com/basbayacom/', 1), L('@basbaya.studio', '@basbaya.studio', 'https://www.instagram.com/basbaya.studio/', 1)] },
    { id: 'adres', k: ['adres', 'atolye', 'ziyaret', 'magazaniz nerede', 'gelip', 'elden', 'address', 'visit', 'workshop', 'pick up'],
      tr: 'Atölyemiz İstanbul\'da; satışlarımızı Trendyol üzerinden online yapıyoruz. Elden teslim ya da görüşme için bize yaz, birlikte planlayalım.',
      en: 'Our workshop is in Istanbul and we sell online through Trendyol. For pickup or a meeting, write to us and we\'ll arrange it.', links: [lContact] },
    { id: 'hakkimizda', k: ['kimsiniz', 'hakkinizda', 'basbaya nedir', 'kim', 'about', 'who are you'],
      tr: 'Basbaya, İstanbul\'da 3D tasarım, üretim ve drone çekimi yapan küçük bir ekip. Kendi tasarımlarımızı kendi atölyemizde basıyor, Basbaya Studio ile de havadan çekim yapıyoruz.',
      en: 'Basbaya is a small Istanbul team doing 3D design, production and drone filming. We print our own designs in our own workshop and shoot aerial content as Basbaya Studio.',
      links: [L('Hakkımızda', 'About us', R('about'))] },
    { id: 'insan', k: ['insanla', 'canli destek', 'yetkili', 'gercek kisi', 'operator', 'human', 'real person', 'agent'],
      tr: 'Ben hazır cevaplarla çalışan bir asistanım. Ekibimizle konuşmak için iletişim formunu doldur ya da info@basbaya.com adresine yaz; en kısa sürede dönüyoruz.',
      en: 'I\'m an assistant with ready-made answers. To reach the team, use the contact form or email info@basbaya.com and we\'ll get back to you soon.',
      links: [lContact, lMail] }
  ];
  var CHIPS = EN ? [['Products', 'products'], ['Shipping & returns', 'shipping returns'], ['Custom design', 'custom design'], ['Drone packages', 'drone package'], ['Contact', 'contact']]
                 : [['Ürünler', 'ürünler'], ['Kargo ve iade', 'kargo iade'], ['Özel tasarım', 'özel tasarım'], ['Drone paketleri', 'drone paket'], ['İletişim', 'iletişim']];

  function norm(s) {
    return (' ' + s + ' ').toLocaleLowerCase('tr').replace(/[ıİ]/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/â/g, 'a')
      .replace(/[^a-z0-9\-' ]+/g, ' ').replace(/\s+/g, ' ');
  }
  function answer(q) {
    var n = norm(q), scored = [];
    KB.forEach(function (it) {
      var s = 0;
      it.k.forEach(function (k) {
        var kn = norm(k).trim(); if (!kn) return;
        if (n.indexOf(' ' + kn) !== -1) s += 2 + kn.length / 6;
      });
      if (it.id === 'drone' || it.id === 'urunler') s *= 0.7;
      if (s > 0) scored.push([s, it]);
    });
    scored.sort(function (a, b) { return b[0] - a[0]; });
    // selamlama başka bir soruyla geldiyse soruyu öne al
    if (scored.length > 1 && scored[0][1].id === 'selam') scored.shift();
    var out = scored.slice(0, scored.length > 1 && scored[1][0] >= scored[0][0] * 0.8 && scored[1][1].id !== 'selam' ? 2 : 1).map(function (x) { return x[1]; });
    // genel bir soruda (fiyat, kargo, renk…) ürün adı da geçtiyse o ürünün linkini ekle
    var prods = scored.filter(function (x) { return x[1].id.indexOf('p_') === 0 && out.indexOf(x[1]) === -1; }).map(function (x) { return x[1]; });
    if (prods.length && out.length && out[0].id.indexOf('p_') !== 0) {
      var first = out[0];
      out[0] = { id: first.id, tr: first.tr, en: first.en, chips: first.chips, links: prods.map(function (p) { return p.links[0]; }).concat(first.links || []) };
    }
    return out;
  }

  var css = '.bbc-btn{position:fixed;right:20px;bottom:84px;z-index:9998;width:60px;height:60px;border-radius:999px;border:0;background:#0A1433;color:#fff;box-shadow:0 12px 32px rgba(10,20,51,.35);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s ease,box-shadow .2s ease}'
    + '.bbc-btn:hover{transform:scale(1.06);box-shadow:0 16px 40px rgba(10,20,51,.45)}.bbc-btn:focus-visible{outline:3px solid #4C7BF4;outline-offset:3px}'
    + '.bbc-btn .bbc-dot{position:absolute;top:4px;right:4px;width:12px;height:12px;border-radius:99px;background:#3DDC84;border:2px solid #0A1433}'
    + '.bbc-hint{position:fixed;right:90px;bottom:96px;z-index:9998;background:#fff;color:#0A1433;font:500 14px/1.35 Inter,system-ui,sans-serif;padding:10px 14px;border-radius:14px 14px 4px 14px;box-shadow:0 10px 30px rgba(10,20,51,.18);max-width:220px;cursor:pointer;animation:bbcIn .35s ease}'
    + '.bbc-win{position:fixed;right:20px;bottom:84px;z-index:9999;width:370px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 110px);background:#F4F6FA;border-radius:24px;box-shadow:0 24px 70px rgba(10,20,51,.35);display:flex;flex-direction:column;overflow:hidden;font-family:Inter,system-ui,sans-serif;color:#0A1433;animation:bbcIn .25s ease}'
    + '@keyframes bbcIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}'
    + '.bbc-head{background:#0A1433;color:#fff;padding:16px 16px 16px 18px;display:flex;align-items:center;gap:12px}.bbc-av{width:38px;height:38px;border-radius:99px;background:#fff;display:flex;align-items:center;justify-content:center;flex:none}'
    + '.bbc-head b{display:block;font-size:15px}.bbc-head span{font-size:12px;color:#C9D3F0}.bbc-x{margin-left:auto;background:transparent;border:0;color:#fff;cursor:pointer;width:36px;height:36px;border-radius:99px;font-size:20px;line-height:1}.bbc-x:hover{background:rgba(255,255,255,.12)}'
    + '.bbc-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}'
    + '.bbc-m{max-width:86%;padding:11px 14px;border-radius:18px;font-size:14.5px;line-height:1.5;word-wrap:break-word}.bbc-bot{background:#fff;border:1px solid #E1E5EE;border-bottom-left-radius:6px;align-self:flex-start}.bbc-me{background:#0A1433;color:#fff;border-bottom-right-radius:6px;align-self:flex-end}'
    + '.bbc-links{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.bbc-links a{font-size:13px;font-weight:600;color:#0A1433;background:#E9EDF5;border-radius:999px;padding:7px 12px;text-decoration:none}.bbc-links a:hover{background:#E1E5EE}'
    + '.bbc-chips{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:100%}.bbc-chips button{font:600 13px Inter,system-ui,sans-serif;color:#0A1433;background:transparent;border:1.5px solid #0A1433;border-radius:999px;padding:7px 12px;cursor:pointer}.bbc-chips button:hover{background:#0A1433;color:#fff}'
    + '.bbc-typing{display:flex;gap:4px;align-items:center}.bbc-typing i{width:7px;height:7px;border-radius:9px;background:#9AA3BF;animation:bbcT 1s infinite}.bbc-typing i:nth-child(2){animation-delay:.15s}.bbc-typing i:nth-child(3){animation-delay:.3s}@keyframes bbcT{0%,60%,100%{opacity:.3}30%{opacity:1}}'
    + '.bbc-form{display:flex;gap:8px;padding:12px;border-top:1px solid #E1E5EE;background:#fff}.bbc-form input{flex:1;font:400 15px Inter,system-ui,sans-serif;border:1.5px solid #C5CBD8;border-radius:999px;padding:11px 16px;color:#0A1433;outline:none;min-width:0}.bbc-form input:focus{border-color:#0A1433}'
    + '.bbc-form button{width:44px;height:44px;border-radius:99px;border:0;background:#0A1433;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none}'
    + '.bbc-foot{font-size:11px;color:#6B7391;text-align:center;padding:0 12px 10px;background:#fff}'
    + '@media (max-width:520px){.bbc-win{right:0;bottom:0;width:100vw;max-width:100vw;height:100%;max-height:100%;border-radius:0}.bbc-btn{right:16px;bottom:76px;width:56px;height:56px}.bbc-hint{right:82px;bottom:86px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/></svg>';
  var btn = document.createElement('button'); btn.className = 'bbc-btn'; btn.type = 'button';
  btn.setAttribute('aria-label', EN ? 'Open help chat' : 'Yardım sohbetini aç'); btn.innerHTML = ICON + '<span class="bbc-dot"></span>';
  document.body.appendChild(btn);

  var store = { get: function (k) { try { return JSON.parse(sessionStorage.getItem(k)); } catch (e) { return null; } }, set: function (k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  var hist = store.get('bbc-h') || [];
  var hint = null;
  if (!store.get('bbc-seen')) {
    setTimeout(function () {
      if (win) return;
      hint = document.createElement('div'); hint.className = 'bbc-hint';
      hint.textContent = EN ? 'Hi! Got a question? I can help. 👋' : 'Merhaba! Sorun mu var? Yardımcı olayım. 👋';
      hint.onclick = open; document.body.appendChild(hint);
      setTimeout(function () { if (hint) { hint.remove(); hint = null; } }, 9000);
    }, 4000);
  }

  var win = null, log = null, inp = null;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function scroll() { log.scrollTop = log.scrollHeight; }
  function addMe(t) { var d = document.createElement('div'); d.className = 'bbc-m bbc-me'; d.textContent = t; log.appendChild(d); scroll(); }
  function addBot(html, links) {
    var d = document.createElement('div'); d.className = 'bbc-m bbc-bot'; d.innerHTML = html;
    if (links && links.length) {
      var w = document.createElement('div'); w.className = 'bbc-links';
      links.forEach(function (l) { var a = document.createElement('a'); a.href = l.u; a.textContent = l.t + (l.ext && l.u.indexOf('mailto') ? ' ↗' : ' →'); if (l.ext && l.u.indexOf('mailto')) { a.target = '_blank'; a.rel = 'noopener'; } w.appendChild(a); });
      d.appendChild(w);
    }
    log.appendChild(d); scroll();
  }
  function addChips() {
    var w = document.createElement('div'); w.className = 'bbc-chips';
    CHIPS.forEach(function (c) { var b = document.createElement('button'); b.type = 'button'; b.textContent = c[0]; b.onclick = function () { ask(c[0], c[1]); }; w.appendChild(b); });
    log.appendChild(w); scroll();
  }
  function reply(q) {
    var hits = answer(q);
    if (!hits.length) {
      return [{ h: EN ? 'Sorry, I couldn\'t find an answer to that. 🙏 You can pick a topic below, or write to the team and we\'ll get back to you.'
                      : 'Bunu tam anlayamadım, kusura bakma. 🙏 Aşağıdan bir konu seçebilir ya da ekibimize yazabilirsin; en kısa sürede dönüyoruz.', l: [lContact, lMail], chips: 1 }];
    }
    return hits.map(function (it) { return { h: EN ? it.en : it.tr, l: it.links, chips: it.chips }; });
  }
  function ask(shown, query) {
    addMe(shown); hist.push({ me: shown });
    var ty = document.createElement('div'); ty.className = 'bbc-m bbc-bot bbc-typing'; ty.innerHTML = '<i></i><i></i><i></i>'; log.appendChild(ty); scroll();
    setTimeout(function () {
      ty.remove();
      reply(query || shown).forEach(function (r) { addBot(r.h, r.l); hist.push({ bot: r.h, l: r.l }); if (r.chips) addChips(); });
      hist = hist.slice(-30); store.set('bbc-h', hist);
    }, 550 + Math.random() * 400);
  }
  function open() {
    if (hint) { hint.remove(); hint = null; }
    store.set('bbc-seen', 1);
    if (win) return;
    win = document.createElement('div'); win.className = 'bbc-win'; win.setAttribute('role', 'dialog'); win.setAttribute('aria-label', EN ? 'Basbaya help' : 'Basbaya yardım');
    win.innerHTML = '<div class="bbc-head"><div class="bbc-av"><img src="' + (window.__bbIcon || '/assets/img/icon_navy.png') + '" alt="" style="height:24px;width:auto"></div>'
      + '<div><b>' + (EN ? 'Basbaya Assistant' : 'Basbaya Asistan') + '</b><span>' + (EN ? 'Usually answers instantly' : 'Genelde anında cevap verir') + '</span></div>'
      + '<button type="button" class="bbc-x" aria-label="' + (EN ? 'Close' : 'Kapat') + '">×</button></div>'
      + '<div class="bbc-log" aria-live="polite"></div>'
      + '<form class="bbc-form"><input type="text" maxlength="300" autocomplete="off" placeholder="' + (EN ? 'Type your question…' : 'Sorunu yaz…') + '" aria-label="' + (EN ? 'Your question' : 'Sorunuz') + '">'
      + '<button type="submit" aria-label="' + (EN ? 'Send' : 'Gönder') + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></form>'
      + '<div class="bbc-foot">' + (EN ? 'Automated answers · for orders and quotes, contact us' : 'Otomatik cevaplar · sipariş ve teklif için bize yazın') + '</div>';
    document.body.appendChild(win);
    btn.style.display = 'none';
    log = win.querySelector('.bbc-log'); inp = win.querySelector('input');
    win.querySelector('.bbc-x').onclick = close;
    win.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    win.querySelector('form').onsubmit = function (e) { e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = ''; ask(v); };
    if (hist.length) {
      hist.forEach(function (h) { if (h.me) addMe(h.me); else addBot(h.bot, h.l); });
      addChips();
    } else {
      addBot(EN ? 'Hi! 👋 I\'m the Basbaya assistant. I can answer questions about our products, shipping, custom designs and drone shoots. Pick a topic or type your question.'
                : 'Merhaba! 👋 Ben Basbaya asistanı. Ürünler, kargo, özel tasarım ve drone çekimi hakkındaki sorularını cevaplayabilirim. Bir konu seç ya da sorunu yaz.');
      addChips();
    }
    setTimeout(function () { if (window.matchMedia('(min-width: 521px)').matches) inp.focus(); }, 50);
  }
  function close() { if (!win) return; win.remove(); win = null; btn.style.display = ''; btn.focus(); }
  btn.onclick = open;
})();
