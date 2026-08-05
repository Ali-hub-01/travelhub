/* ============================================================
   TravelHub - Байконур · логика лэндинга
   i18n (RU/EN/中文) · starfield · countdown · reveal · форма → WhatsApp
   ============================================================ */
'use strict';

/* ---------- Мобильный фикс: страница всегда открывается сверху,
   но прямые якоря из рекламы (#tour-1day и т.п.) сохраняются ---------- */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('load', function () {
  if (!location.hash) window.scrollTo(0, 0);
});

/* ============================================================
   1. СЛОВАРЬ ПЕРЕВОДОВ - все видимые строки на 3 языках
   ============================================================ */
var I18N = {
  /* ---------------- РУССКИЙ ---------------- */
  ru: {
    'meta.title': 'TravelHub - туры на запуск ракеты с Байконура | Туроператор Казахстана',
    'meta.desc': 'Увидеть запуск ракеты с Байконура вживую: туры 1-3 дня от 100 000 ₸. Лицензированный принимающий туроператор Казахстана. Пропуска, гиды RU/EN/CN, ближайшие безопасные точки наблюдения.',

    'nav.aria': 'Основная навигация',
    'nav.burger': 'Открыть меню',
    'lang.aria': 'Выбор языка',
    'nav.tours': 'Туры',
    'nav.route': 'Маршрут',
    'nav.included': 'Что включено',
    'nav.why': 'Почему мы',
    'nav.schedule': 'Пуски',
    'nav.contacts': 'Контакты',
    'nav.cta': 'Забронировать',

    'hero.kicker': 'Лицензированный туроператор Казахстана',
    'hero.title1': 'Старт ракеты.',
    'hero.title2': 'Вживую.',
    'hero.title3': 'С Байконура.',
    'hero.sub': 'Байконур - наша специализация. Весь Казахстан - наша территория.',
    'hero.cta1': 'Забронировать тур',
    'hero.cta2': 'Смотреть туры',
    'hero.next': 'До ближайшего пуска - Союз / Прогресс МС-35',
    'hero.datenote': 'Дата уточняется по графику Роскосмоса',
    'cd.days': 'дней',
    'cd.hours': 'часов',
    'cd.min': 'минут',
    'cd.sec': 'секунд',

    'tours.kicker': 'Туры и цены',
    'tours.title': 'Выберите свою космическую программу',
    'tours.sub': 'Индивидуалам, группам, турагентствам и международным туроператорам',
    'tours.bestseller': 'Бестселлер',
    'price.from': 'от',
    'price.request': 'цена по запросу',
    'btn.book': 'Забронировать',

    't1.name': 'Байконур: наблюдение запуска, 1 день',
    't1.desc': 'Экспедиция к легендарному космодрому в день пуска. Грохот двигателей, пламя и дрожь земли - с ближайшей безопасной точки.',
    't1.inc': 'Трансферы · гид · пропуска · точка наблюдения',
    't2.name': 'Байконур: расширенная программа, 3 дня',
    't2.desc': 'Полное погружение: вывоз ракеты, Гагаринский старт, музеи и сам запуск. Три дня внутри живой космической истории.',
    't2.inc': 'Отель · завтраки · трансферы · гид · пропуска',
    't2.note': 'Пилотируемый пуск - 450 000 ₸ · беспилотный - от 300 000 ₸',
    't3.name': 'Байконур: тур «Буран», 1 день',
    't3.desc': 'Легендарный корабль «Буран» и ракета «Энергия-М» в монтажно-испытательном корпусе. Плюс музей космонавтики.',
    't3.inc': 'Трансферы · гид · пропуска · музей',
    't4.name': 'Корпоратив · группы · MICE',
    't4.desc': 'Корпоративные выезды, тимбилдинги и приём групп любого размера. Разработаем сценарий под задачи вашей компании.',
    't4.inc': 'Программа под ключ · логистика · сопровождение',
    't5.name': 'Весь Казахстан под запрос',
    't5.desc': 'Марсианские каньоны Мангистау, горы Алматы, футуристичная Астана. Соберём индивидуальный маршрут по всей стране.',
    't5.inc': 'Индивидуальная программа · расчёт стоимости · организация на месте',

    'custom.title': 'Не нашли нужный маршрут?',
    'custom.text': 'Расскажите, какой Казахстан хотят увидеть ваши туристы - мы разработаем программу под запрос, рассчитаем стоимость и организуем поездку на месте.',
    'custom.cta': 'Обсудить программу',

    'route.kicker': 'Маршрут тура на Байконур',
    'route.title': '7 точек одного большого дня',
    'route.sub': 'От степного мемориала - до огня стартующей ракеты',
    'route.p1': 'Мемориал Коркыт Ата',
    'route.p2': 'Беседка Гагарина',
    'route.p3': 'Гагаринский старт - Площадка №1',
    'route.p4': 'Наблюдение запуска ракеты',
    'route.p5': 'Ракета «Энергия-М»',
    'route.p6': 'Космический корабль «Буран»',
    'route.p7': 'Музей космонавтики',
    'route.imgalt': 'Карта маршрута тура на Байконур: 7 точек от мемориала Коркыт Ата до музея космонавтики',

    'inc.kicker': 'Всё уже включено',
    'inc.title': 'Вы наблюдаете запуск - остальное делаем мы',
    'inc.i1': 'Гиды-переводчики: русский, английский, китайский',
    'inc.i2': 'Проживание в отелях',
    'inc.i3': 'Завтраки',
    'inc.i4': 'Все трансферы по программе',
    'inc.i5': 'Доступ на космодром и наблюдение с ближайших безопасных точек',
    'inc.i6': 'Встречи с космонавтами',
    'inc.i7': 'Оформление пропусков и вся логистика',

    'why.kicker': 'Почему TravelHub',
    'why.title': 'Космос - это серьёзно. Мы тоже.',
    'why.w1t': 'Ближайшие точки наблюдения',
    'why.w1x': 'Смотрите старт с ближайших безопасных площадок - максимум эмоций без компромиссов.',
    'why.w2t': 'Лицензированный туроператор РК',
    'why.w2x': 'Официальная лицензия на въездной и внутренний туризм. Работаем прозрачно и по договору.',
    'why.w3t': 'Пропуска и логистика - на нас',
    'why.w3x': 'Космодром - режимный объект. Все разрешения, пропуска и трансферы оформляем сами.',
    'why.w4t': 'Профессиональные гиды',
    'why.w4x': 'Знают Байконур изнутри и рассказывают о космосе так, что мурашки - до старта.',
    'why.w5t': '100% возврат',
    'why.w5x': 'Пуск отменён или перенесён - вернём деньги полностью либо перенесём вашу поездку.',
    'why.w6t': 'Специализация + территория',
    'why.w6x': 'Байконур - наша специализация. Весь Казахстан - наша территория.',

    'gal.a1': 'Стартовый комплекс космодрома Байконур',
    'gal.c1': 'Стартовый комплекс, Байконур',
    'gal.a2': 'Ракета «Энергия-М» в монтажно-испытательном корпусе Байконура',
    'gal.c2': 'Ракета «Энергия-М», МИК',

    'lic.kicker': 'Работаем официально',
    'lic.title': 'Лицензированный туроператор Республики Казахстан',
    'lic.numL': 'Лицензия туроператора',
    'lic.typeL': 'Вид деятельности',
    'lic.typeV': 'Въездной и внутренний туризм',
    'lic.compL': 'Компания',
    'lic.compV': 'ТОО «TravelHub»',
    'lic.bin': 'БИН',
    'lic.cityL': 'Город',
    'lic.cityV': 'Астана, Казахстан',

    'sch.kicker': 'Расписание пусков',
    'sch.title': 'Ближайшие запуски с Байконура',
    'sch.l1m': 'сентября 2026',
    'sch.l1n': 'Союз-2.1а · Прогресс МС-35',
    'sch.l1x': 'Грузовой корабль к МКС · доступны туры 1 и 3 дня',
    'sch.next': 'ближайший',
    'sch.l2m': 'ноября 2026',
    'sch.l2n': 'Союз-2.1а · Прогресс МС-36',
    'sch.l2x': 'Грузовой корабль к МКС · открыто бронирование',
    'sch.open': 'бронирование открыто',
    'sch.note': 'Даты пусков уточняются по графику Роскосмоса - подтвердим при бронировании.',

    'bk.kicker': 'Заявка за 30 секунд',
    'bk.title': 'Забронируйте место у стартового стола',
    'bk.sub': 'Заполните форму - заявка откроется в WhatsApp, мы ответим быстро. Никаких данных на сервер не отправляем.',
    'bk.p1': 'Ответ в WhatsApp в течение рабочего дня',
    'bk.p2': 'Поможем выбрать дату под ближайший пуск',
    'bk.p3': '100% возврат при отмене или переносе пуска',

    'form.name': 'Ваше имя',
    'form.namePh': 'Как к вам обращаться',
    'form.tour': 'Тур',
    'form.tourPh': '- выберите тур -',
    'form.o1': 'Байконур: запуск, 1 день - от 150 000 ₸',
    'form.o2': 'Байконур: 3 дня - 300 000-450 000 ₸',
    'form.o3': 'Байконур: «Буран», 1 день - 100 000 ₸',
    'form.o4': 'Корпоратив / группы / MICE',
    'form.o5': 'Весь Казахстан под запрос',
    'form.date': 'Дата (необязательно)',
    'form.datePh': 'например, 09.09.2026',
    'form.pax': 'Человек (необязательно)',
    'form.paxPh': '2',
    'form.err': 'Пожалуйста, укажите имя и выберите тур',
    'form.btn': 'Отправить в WhatsApp',

    'ct.kicker': 'Контакты',
    'ct.title': 'Связь с Землёй - на связи 7 дней в неделю',
    'ct.waHint': 'Отвечаем быстрее всего',
    'ct.emHint': 'Для агентств и туроператоров',
    'ct.cityL': 'Офис',
    'ct.cityV': 'Астана, Казахстан',
    'ct.cityHint': 'Принимаем туристов по всей стране',

    'ft.slogan': 'Байконур - наша специализация. Весь Казахстан - наша территория.',
    'ft.company': 'ТОО «TravelHub» · БИН 240640028614 · Астана, Казахстан',
    'ft.license': 'Лицензия туроператора № 26004458 от 13.02.2026 · въездной и внутренний туризм',
    'ft.rights': 'Все права защищены',

    'wa.fab': 'Написать в WhatsApp',
    /* Предзаполненные сообщения WhatsApp */
    'wa.t1': 'Здравствуйте! Интересует тур: Байконур - наблюдение запуска, 1 день',
    'wa.t2': 'Здравствуйте! Интересует тур: Байконур - расширенная программа, 3 дня',
    'wa.t3': 'Здравствуйте! Интересует тур: Байконур - «Буран», 1 день',
    'wa.t4': 'Здравствуйте! Интересует корпоративный тур / приём группы (MICE)',
    'wa.t5': 'Здравствуйте! Интересует индивидуальный тур по Казахстану',
    'wa.custom': 'Здравствуйте! Хотим обсудить индивидуальную программу по Казахстану',
    'wa.hello': 'Здравствуйте! Заявка с сайта TravelHub',
    'wa.fName': 'Имя',
    'wa.fTour': 'Тур',
    'wa.fDate': 'Дата',
    'wa.fPax': 'Человек'
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    'meta.title': 'TravelHub - Baikonur Rocket Launch Tours | Kazakhstan Tour Operator',
    'meta.desc': 'Watch a real rocket launch from Baikonur: 1-3 day tours from 100,000 ₸. Licensed inbound tour operator in Kazakhstan. Permits, RU/EN/CN guides, closest safe viewing points.',

    'nav.aria': 'Main navigation',
    'nav.burger': 'Open menu',
    'lang.aria': 'Language selection',
    'nav.tours': 'Tours',
    'nav.route': 'Route',
    'nav.included': 'What’s included',
    'nav.why': 'Why us',
    'nav.schedule': 'Launches',
    'nav.contacts': 'Contacts',
    'nav.cta': 'Book now',

    'hero.kicker': 'Licensed tour operator in Kazakhstan',
    'hero.title1': 'A rocket launch.',
    'hero.title2': 'For real.',
    'hero.title3': 'From Baikonur.',
    'hero.sub': 'Baikonur is our specialty. All of Kazakhstan is our territory.',
    'hero.cta1': 'Book a tour',
    'hero.cta2': 'See the tours',
    'hero.next': 'Next launch - Soyuz / Progress MS-35',
    'hero.datenote': 'Date subject to Roscosmos schedule updates',
    'cd.days': 'days',
    'cd.hours': 'hours',
    'cd.min': 'minutes',
    'cd.sec': 'seconds',

    'tours.kicker': 'Tours & prices',
    'tours.title': 'Choose your space program',
    'tours.sub': 'For individuals, groups, travel agencies and international tour operators',
    'tours.bestseller': 'Bestseller',
    'price.from': 'from',
    'price.request': 'price on request',
    'btn.book': 'Book now',

    't1.name': 'Baikonur: launch viewing, 1 day',
    't1.desc': 'An expedition to the legendary cosmodrome on launch day. The roar of engines, the flame and the trembling ground - from the closest safe viewpoint.',
    't1.inc': 'Transfers · guide · permits · viewing point',
    't2.name': 'Baikonur: extended program, 3 days',
    't2.desc': 'Full immersion: rocket rollout, Gagarin’s Start, museums and the launch itself. Three days inside living space history.',
    't2.inc': 'Hotel · breakfasts · transfers · guide · permits',
    't2.note': 'Crewed launch - 450,000 ₸ · uncrewed - from 300,000 ₸',
    't3.name': 'Baikonur: Buran tour, 1 day',
    't3.desc': 'The legendary Buran shuttle and the Energia-M rocket inside the assembly and test facility. Plus the Museum of Cosmonautics.',
    't3.inc': 'Transfers · guide · permits · museum',
    't4.name': 'Corporate · groups · MICE',
    't4.desc': 'Corporate retreats, team building and groups of any size. We will design a scenario tailored to your company’s goals.',
    't4.inc': 'Turnkey program · logistics · full support',
    't5.name': 'All of Kazakhstan, tailor-made',
    't5.desc': 'The Martian canyons of Mangystau, the Almaty mountains, futuristic Astana. We will build a custom itinerary across the whole country.',
    't5.inc': 'Custom program · cost estimate · on-site arrangements',

    'custom.title': 'Didn’t find the right itinerary?',
    'custom.text': 'Tell us what kind of Kazakhstan your travelers want to see - we will design a program on request, estimate the cost and arrange everything on the ground.',
    'custom.cta': 'Discuss a program',

    'route.kicker': 'Baikonur tour route',
    'route.title': '7 stops of one big day',
    'route.sub': 'From a steppe memorial to the fire of a launching rocket',
    'route.p1': 'Korkyt Ata Memorial',
    'route.p2': 'Gagarin’s Gazebo',
    'route.p3': 'Gagarin’s Start - Site No. 1',
    'route.p4': 'Rocket launch viewing',
    'route.p5': 'Energia-M rocket',
    'route.p6': 'Buran space shuttle',
    'route.p7': 'Museum of Cosmonautics',
    'route.imgalt': 'Baikonur tour route map: 7 stops from the Korkyt Ata Memorial to the Museum of Cosmonautics',

    'inc.kicker': 'Everything is included',
    'inc.title': 'You watch the launch - we handle the rest',
    'inc.i1': 'Guide-interpreters: Russian, English, Chinese',
    'inc.i2': 'Hotel accommodation',
    'inc.i3': 'Breakfasts',
    'inc.i4': 'All transfers on the program',
    'inc.i5': 'Cosmodrome access and viewing from the closest safe points',
    'inc.i6': 'Meetings with cosmonauts',
    'inc.i7': 'Permits handled and full logistics',

    'why.kicker': 'Why TravelHub',
    'why.title': 'Space is serious business. So are we.',
    'why.w1t': 'Closest viewing points',
    'why.w1x': 'Watch the launch from the closest safe areas - maximum emotion, no compromises.',
    'why.w2t': 'Licensed tour operator of Kazakhstan',
    'why.w2x': 'Official license for inbound and domestic tourism. Transparent work under contract.',
    'why.w3t': 'Permits & logistics on us',
    'why.w3x': 'The cosmodrome is a restricted site. We arrange all permissions, passes and transfers ourselves.',
    'why.w4t': 'Professional guides',
    'why.w4x': 'They know Baikonur from the inside and tell space stories that give you goosebumps before liftoff.',
    'why.w5t': '100% refund',
    'why.w5x': 'If the launch is canceled or postponed, we refund you in full or reschedule your trip.',
    'why.w6t': 'Specialty + territory',
    'why.w6x': 'Baikonur is our specialty. All of Kazakhstan is our territory.',

    'gal.a1': 'Launch complex of the Baikonur Cosmodrome',
    'gal.c1': 'Launch complex, Baikonur',
    'gal.a2': 'Energia-M rocket inside the Baikonur assembly and test facility',
    'gal.c2': 'Energia-M rocket, assembly facility',

    'lic.kicker': 'Fully licensed',
    'lic.title': 'Licensed tour operator of the Republic of Kazakhstan',
    'lic.numL': 'Tour operator license',
    'lic.typeL': 'Activity',
    'lic.typeV': 'Inbound and domestic tourism',
    'lic.compL': 'Company',
    'lic.compV': 'TravelHub LLP',
    'lic.bin': 'BIN',
    'lic.cityL': 'City',
    'lic.cityV': 'Astana, Kazakhstan',

    'sch.kicker': 'Launch schedule',
    'sch.title': 'Upcoming launches from Baikonur',
    'sch.l1m': 'September 2026',
    'sch.l1n': 'Soyuz-2.1a · Progress MS-35',
    'sch.l1x': 'Cargo ship to the ISS · 1-day and 3-day tours available',
    'sch.next': 'next launch',
    'sch.l2m': 'November 2026',
    'sch.l2n': 'Soyuz-2.1a · Progress MS-36',
    'sch.l2x': 'Cargo ship to the ISS · booking open',
    'sch.open': 'booking open',
    'sch.note': 'Launch dates follow the Roscosmos schedule and may change - we confirm them at booking.',

    'bk.kicker': 'A 30-second request',
    'bk.title': 'Book your place by the launch pad',
    'bk.sub': 'Fill in the form - your request opens in WhatsApp and we reply fast. No data is sent to any server.',
    'bk.p1': 'WhatsApp reply within one business day',
    'bk.p2': 'We will help you pick a date for the next launch',
    'bk.p3': '100% refund if the launch is canceled or postponed',

    'form.name': 'Your name',
    'form.namePh': 'How should we address you',
    'form.tour': 'Tour',
    'form.tourPh': '- choose a tour -',
    'form.o1': 'Baikonur: launch, 1 day - from 150,000 ₸',
    'form.o2': 'Baikonur: 3 days - 300,000-450,000 ₸',
    'form.o3': 'Baikonur: Buran, 1 day - 100,000 ₸',
    'form.o4': 'Corporate / groups / MICE',
    'form.o5': 'All of Kazakhstan, tailor-made',
    'form.date': 'Date (optional)',
    'form.datePh': 'e.g. 09.09.2026',
    'form.pax': 'People (optional)',
    'form.paxPh': '2',
    'form.err': 'Please enter your name and choose a tour',
    'form.btn': 'Send via WhatsApp',

    'ct.kicker': 'Contacts',
    'ct.title': 'Ground control - online 7 days a week',
    'ct.waHint': 'The fastest way to reach us',
    'ct.emHint': 'For agencies and tour operators',
    'ct.cityL': 'Office',
    'ct.cityV': 'Astana, Kazakhstan',
    'ct.cityHint': 'We welcome travelers across the country',

    'ft.slogan': 'Baikonur is our specialty. All of Kazakhstan is our territory.',
    'ft.company': 'TravelHub LLP · BIN 240640028614 · Astana, Kazakhstan',
    'ft.license': 'Tour operator license No. 26004458 dated 13.02.2026 · inbound and domestic tourism',
    'ft.rights': 'All rights reserved',

    'wa.fab': 'Message us on WhatsApp',
    'wa.t1': 'Hello! I’m interested in the tour: Baikonur launch viewing, 1 day',
    'wa.t2': 'Hello! I’m interested in the tour: Baikonur extended program, 3 days',
    'wa.t3': 'Hello! I’m interested in the tour: Baikonur Buran tour, 1 day',
    'wa.t4': 'Hello! I’m interested in a corporate / group tour (MICE)',
    'wa.t5': 'Hello! I’m interested in a tailor-made tour around Kazakhstan',
    'wa.custom': 'Hello! We’d like to discuss a custom program in Kazakhstan',
    'wa.hello': 'Hello! Booking request from the TravelHub website',
    'wa.fName': 'Name',
    'wa.fTour': 'Tour',
    'wa.fDate': 'Date',
    'wa.fPax': 'People'
  },

  /* ---------------- 中文（简体） ---------------- */
  zh: {
    'meta.title': 'TravelHub - 拜科努尔火箭发射观摩之旅 | 哈萨克斯坦旅游运营商',
    'meta.desc': '亲眼见证拜科努尔火箭发射：一至三日游，100 000 ₸ 起。哈萨克斯坦持牌接待旅游运营商：办理通行证，俄英中三语导游，最近的安全观测点。',

    'nav.aria': '主导航',
    'nav.burger': '打开菜单',
    'lang.aria': '语言选择',
    'nav.tours': '线路',
    'nav.route': '行程',
    'nav.included': '费用包含',
    'nav.why': '选择我们',
    'nav.schedule': '发射日程',
    'nav.contacts': '联系方式',
    'nav.cta': '立即预订',

    'hero.kicker': '哈萨克斯坦持牌旅游运营商',
    'hero.title1': '火箭发射。',
    'hero.title2': '亲眼见证。',
    'hero.title3': '就在拜科努尔。',
    'hero.sub': '拜科努尔是我们的专长，整个哈萨克斯坦是我们的天地。',
    'hero.cta1': '预订行程',
    'hero.cta2': '浏览线路',
    'hero.next': '距最近一次发射 - 联盟号 / 进步MS-35',
    'hero.datenote': '具体日期以俄罗斯航天集团发射计划为准',
    'cd.days': '天',
    'cd.hours': '时',
    'cd.min': '分',
    'cd.sec': '秒',

    'tours.kicker': '线路与价格',
    'tours.title': '选择您的太空之旅',
    'tours.sub': '服务个人游客、团队、旅行社及国际旅游运营商',
    'tours.bestseller': '热销',
    'price.from': '起价',
    'price.request': '价格面议',
    'btn.book': '立即预订',

    't1.name': '拜科努尔：观看火箭发射一日游',
    't1.desc': '发射当天前往传奇航天发射场。在最近的安全观测点，亲身感受引擎的轰鸣、烈焰与大地的震颤。',
    't1.inc': '全程接送 · 导游 · 通行证 · 观测点',
    't2.name': '拜科努尔：深度三日游',
    't2.desc': '全方位沉浸体验：火箭转运、加加林发射台、博物馆以及发射本身。三天置身鲜活的航天历史之中。',
    't2.inc': '酒店 · 早餐 · 接送 · 导游 · 通行证',
    't2.note': '载人发射 - 450 000 ₸ · 无人发射 - 300 000 ₸ 起',
    't3.name': '拜科努尔：“暴风雪号”一日游',
    't3.desc': '在总装测试厂房近距离参观传奇的“暴风雪号”航天飞机与“能源-M”运载火箭，并游览航天博物馆。',
    't3.inc': '接送 · 导游 · 通行证 · 博物馆',
    't4.name': '企业团建 · 团队 · MICE',
    't4.desc': '企业出行、团建活动及各类规模团队接待。我们将根据贵公司的需求量身定制活动方案。',
    't4.inc': '一站式方案 · 后勤保障 · 全程陪同',
    't5.name': '哈萨克斯坦全境定制游',
    't5.desc': '曼格斯套的火星峡谷、阿拉木图的雪山、未来之城阿斯塔纳。我们为您定制贯穿全国的专属路线。',
    't5.inc': '个性化行程 · 费用核算 · 当地落地安排',

    'custom.title': '没有找到合适的路线？',
    'custom.text': '告诉我们您的游客想看到怎样的哈萨克斯坦--我们将按需求设计行程、核算费用，并负责当地的全部落地安排。',
    'custom.cta': '咨询定制方案',

    'route.kicker': '拜科努尔行程路线',
    'route.title': '一天之内的七大站点',
    'route.sub': '从草原上的纪念碑，到火箭升空的烈焰',
    'route.p1': '阔尔库特·阿塔纪念碑',
    'route.p2': '加加林凉亭',
    'route.p3': '加加林发射台 - 1号发射场',
    'route.p4': '观看火箭发射',
    'route.p5': '“能源-M”运载火箭',
    'route.p6': '“暴风雪号”航天飞机',
    'route.p7': '航天博物馆',
    'route.imgalt': '拜科努尔行程路线图：从阔尔库特·阿塔纪念碑到航天博物馆的七个站点',

    'inc.kicker': '费用全包',
    'inc.title': '您只管观看发射，其余交给我们',
    'inc.i1': '俄语、英语、中文导游翻译',
    'inc.i2': '酒店住宿',
    'inc.i3': '早餐',
    'inc.i4': '行程内全部接送',
    'inc.i5': '进入发射场，在最近的安全观测点观看发射',
    'inc.i6': '与宇航员见面',
    'inc.i7': '通行证办理及全程后勤保障',

    'why.kicker': '为什么选择 TravelHub',
    'why.title': '太空容不得马虎，我们也一样。',
    'why.w1t': '最近的观测点',
    'why.w1x': '在距离最近的安全观测点观看发射--震撼体验，绝不妥协。',
    'why.w2t': '哈萨克斯坦持牌旅游运营商',
    'why.w2x': '持有入境游与国内游官方牌照，签订合同，透明经营。',
    'why.w3t': '通行证与后勤全包',
    'why.w3x': '发射场属管制区域。所有许可、通行证和接送均由我们办理。',
    'why.w4t': '专业导游',
    'why.w4x': '他们深谙拜科努尔的一切，航天故事讲得扣人心弦。',
    'why.w5t': '100% 退款保障',
    'why.w5x': '若发射取消或推迟，我们将全额退款或为您改期。',
    'why.w6t': '专长 + 天地',
    'why.w6x': '拜科努尔是我们的专长，整个哈萨克斯坦是我们的天地。',

    'gal.a1': '拜科努尔航天发射场的发射工位',
    'gal.c1': '拜科努尔发射工位',
    'gal.a2': '总装测试厂房中的“能源-M”运载火箭',
    'gal.c2': '“能源-M”火箭 · 总装厂房',

    'lic.kicker': '正规持牌经营',
    'lic.title': '哈萨克斯坦共和国持牌旅游运营商',
    'lic.numL': '旅游运营商牌照',
    'lic.typeL': '经营范围',
    'lic.typeV': '入境游与国内游',
    'lic.compL': '公司',
    'lic.compV': 'TravelHub 有限责任公司',
    'lic.bin': 'BIN（商业登记号）',
    'lic.cityL': '城市',
    'lic.cityV': '哈萨克斯坦 · 阿斯塔纳',

    'sch.kicker': '发射时间表',
    'sch.title': '拜科努尔近期发射安排',
    'sch.l1m': '2026年9月',
    'sch.l1n': '联盟-2.1a · 进步MS-35',
    'sch.l1x': '国际空间站货运飞船 · 一日游与三日游均可预订',
    'sch.next': '最近发射',
    'sch.l2m': '2026年11月',
    'sch.l2n': '联盟-2.1a · 进步MS-36',
    'sch.l2x': '国际空间站货运飞船 · 已开放预订',
    'sch.open': '开放预订',
    'sch.note': '发射日期以俄罗斯航天集团计划为准，可能调整--预订时我们会与您确认。',

    'bk.kicker': '30 秒提交申请',
    'bk.title': '预订您在发射台旁的位置',
    'bk.sub': '填写表单后申请将在 WhatsApp 中打开，我们会尽快回复。您的数据不会上传至任何服务器。',
    'bk.p1': '工作日内通过 WhatsApp 回复',
    'bk.p2': '帮您选择最近发射窗口的日期',
    'bk.p3': '发射取消或推迟可获 100% 退款',

    'form.name': '您的姓名',
    'form.namePh': '请问如何称呼您',
    'form.tour': '线路',
    'form.tourPh': '- 请选择线路 -',
    'form.o1': '拜科努尔：发射一日游 - 150 000 ₸ 起',
    'form.o2': '拜科努尔：三日游 - 300 000-450 000 ₸',
    'form.o3': '拜科努尔：“暴风雪号”一日游 - 100 000 ₸',
    'form.o4': '企业团建 / 团队 / MICE',
    'form.o5': '哈萨克斯坦全境定制游',
    'form.date': '日期（选填）',
    'form.datePh': '例如 09.09.2026',
    'form.pax': '人数（选填）',
    'form.paxPh': '2',
    'form.err': '请填写姓名并选择线路',
    'form.btn': '通过 WhatsApp 发送',

    'ct.kicker': '联系我们',
    'ct.title': '“地面控制中心”--每周 7 天在线',
    'ct.waHint': '回复最快的联系方式',
    'ct.emHint': '面向旅行社与旅游运营商',
    'ct.cityL': '办公室',
    'ct.cityV': '哈萨克斯坦 · 阿斯塔纳',
    'ct.cityHint': '在全国范围内接待游客',

    'ft.slogan': '拜科努尔是我们的专长，整个哈萨克斯坦是我们的天地。',
    'ft.company': 'TravelHub 有限责任公司 · BIN 240640028614 · 哈萨克斯坦阿斯塔纳',
    'ft.license': '旅游运营商牌照 № 26004458 · 2026年2月13日颁发 · 入境游与国内游',
    'ft.rights': '版权所有',

    'wa.fab': '通过 WhatsApp 联系我们',
    'wa.t1': '您好！我想咨询：拜科努尔观看火箭发射一日游',
    'wa.t2': '您好！我想咨询：拜科努尔深度三日游',
    'wa.t3': '您好！我想咨询：拜科努尔“暴风雪号”一日游',
    'wa.t4': '您好！我想咨询企业团建 / 团队接待（MICE）行程',
    'wa.t5': '您好！我想咨询哈萨克斯坦定制行程',
    'wa.custom': '您好！我们想咨询哈萨克斯坦定制行程方案',
    'wa.hello': '您好！来自 TravelHub 网站的预订申请',
    'wa.fName': '姓名',
    'wa.fTour': '线路',
    'wa.fDate': '日期',
    'wa.fPax': '人数'
  }
};

/* ============================================================
   2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
   ============================================================ */
var WA_PHONE = 'https://wa.me/77760909818';
var currentLang = 'ru';

function t(key) {
  var dict = I18N[currentLang] || I18N.ru;
  return dict[key] != null ? dict[key] : (I18N.ru[key] != null ? I18N.ru[key] : key);
}

function switchLang(lang) {
  if (!I18N[lang]) lang = 'ru';
  currentLang = lang;

  // Тексты
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
  });
  // Плейсхолдеры
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key] != null) el.setAttribute('placeholder', I18N[lang][key]);
  });
  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (I18N[lang][key] != null) el.setAttribute('aria-label', I18N[lang][key]);
  });
  // alt изображений
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-alt');
    if (I18N[lang][key] != null) el.setAttribute('alt', I18N[lang][key]);
  });

  // Язык документа + title + description
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.title = t('meta.title');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

  // Подсветка активной кнопки
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Предзаполненные WhatsApp-ссылки на текущем языке
  updateWaLinks();

  // Запоминаем выбор
  try { localStorage.setItem('thlang', lang); } catch (e) { /* приватный режим */ }
}

/* WhatsApp-ссылки: у каждой кнопки data-wa = ключ сообщения */
function updateWaLinks() {
  document.querySelectorAll('[data-wa]').forEach(function (link) {
    var code = link.getAttribute('data-wa');
    var msg;
    if (code === 'fab') msg = t('wa.hello');
    else if (code === 'custom') msg = t('wa.custom');
    else msg = t('wa.' + code);
    link.href = WA_PHONE + '?text=' + encodeURIComponent(msg);
  });
}

/* Кнопки переключения */
document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    switchLang(btn.getAttribute('data-lang'));
  });
});

/* Стартовый язык: сохранённый или русский */
(function initLang() {
  var saved = null;
  try { saved = localStorage.getItem('thlang'); } catch (e) { /* ignore */ }
  switchLang(saved && I18N[saved] ? saved : 'ru');
})();

/* ============================================================
   3. STARFIELD - мерцающие звёзды на canvas + параллакс
   ============================================================ */
(function starfield() {
  var canvas = document.getElementById('starfield');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var stars = [];
  var meteor = null;
  var W = 0, H = 0, dpr = 1;
  var running = false, rafId = 0;
  var scrollFactor = 0, pointerX = 0;

  function resize() {
    var hero = canvas.parentElement;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
    if (reduceMotion) drawFrame(0); // статичный кадр
  }

  function buildStars() {
    stars = [];
    var count = Math.min(240, Math.round((W * H) / 5200));
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.35,
        a: Math.random() * 0.55 + 0.25,      // базовая яркость
        phase: Math.random() * Math.PI * 2,   // фаза мерцания
        speed: Math.random() * 1.6 + 0.5,     // скорость мерцания
        layer: Math.random()                  // глубина для параллакса
      });
    }
  }

  function drawFrame(time) {
    ctx.clearRect(0, 0, W, H);
    var tSec = time / 1000;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var twinkle = reduceMotion ? 1 : (0.6 + 0.4 * Math.sin(tSec * s.speed + s.phase));
      var offY = scrollFactor * (6 + s.layer * 26);         // параллакс от скролла
      var offX = pointerX * (s.layer * 14);                 // лёгкий параллакс от курсора
      var y = s.y - offY;
      // звёзды уходят наверх - заворачиваем вниз
      y = ((y % H) + H) % H;
      ctx.globalAlpha = s.a * twinkle;
      ctx.fillStyle = s.layer > 0.85 ? '#ffd9b0' : '#cfe0ff';
      ctx.beginPath();
      ctx.arc(s.x + offX, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    // редкий «метеор»
    if (!reduceMotion) {
      if (!meteor && Math.random() < 0.003) {
        meteor = { x: Math.random() * W * 0.8 + W * 0.1, y: Math.random() * H * 0.35, vx: 4 + Math.random() * 3, vy: 2 + Math.random() * 1.5, life: 1 };
      }
      if (meteor) {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life -= 0.02;
        if (meteor.life <= 0 || meteor.x > W || meteor.y > H) {
          meteor = null;
        } else {
          var grad = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10);
          grad.addColorStop(0, 'rgba(255,255,255,' + (0.85 * meteor.life) + ')');
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.globalAlpha = 1;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  function loop(time) {
    if (!running) return;
    drawFrame(time);
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running || reduceMotion) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  // Пауза, когда hero вне вьюпорта / вкладка скрыта
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? start() : stop();
    }, { threshold: 0.02 }).observe(canvas.parentElement);
  } else {
    start();
  }
  document.addEventListener('visibilitychange', function () {
    document.hidden ? stop() : start();
  });

  // Параллакс: скролл + курсор (пассивные слушатели)
  window.addEventListener('scroll', function () {
    scrollFactor = Math.min(window.scrollY / 600, 2);
  }, { passive: true });
  window.addEventListener('pointermove', function (e) {
    pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();
  if (reduceMotion) drawFrame(0);
})();

/* ============================================================
   4. COUNTDOWN - до ближайшего пуска
   ============================================================ */
(function countdown() {
  var elD = document.getElementById('cdD'),
      elH = document.getElementById('cdH'),
      elM = document.getElementById('cdM'),
      elS = document.getElementById('cdS');
  if (!elD) return;

  // Пуски: 9 сентября 2026, затем 24 ноября 2026 (даты уточняются)
  var targets = [
    new Date('2026-09-09T00:00:00'),
    new Date('2026-11-24T00:00:00')
  ];

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var now = Date.now();
    var target = null;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].getTime() > now) { target = targets[i]; break; }
    }
    if (!target) { // все пуски прошли
      elD.textContent = elH.textContent = elM.textContent = elS.textContent = '00';
      return;
    }
    var diff = Math.floor((target.getTime() - now) / 1000);
    var d = Math.floor(diff / 86400);
    var h = Math.floor((diff % 86400) / 3600);
    var m = Math.floor((diff % 3600) / 60);
    var s = diff % 60;
    elD.textContent = pad(d);
    elH.textContent = pad(h);
    elM.textContent = pad(m);
    elS.textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();

/* ============================================================
   5. SCROLL-REVEAL - плавное появление секций
   ============================================================ */
(function reveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  // Каскадные задержки внутри сеток
  ['.tours-grid', '.why-grid', '.included-grid'].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        if (child.classList.contains('reveal')) {
          child.style.setProperty('--d', (i % 6) * 0.07 + 's');
        }
      });
    });
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

/* ============================================================
   6. БУРГЕР-МЕНЮ + смус-скролл
   ============================================================ */
(function menu() {
  var burger = document.getElementById('burgerBtn');
  var nav = document.getElementById('mainNav');
  if (!burger || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  burger.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // Закрываем меню при клике по ссылке (смус-скролл делает CSS scroll-behavior)
  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 900) setOpen(false);
  });
})();

/* ============================================================
   7. ФОРМА ЗАЯВКИ → WhatsApp (без бэкенда)
   ============================================================ */
(function bookingForm() {
  var form = document.getElementById('bookingForm');
  if (!form) return;
  var nameEl = document.getElementById('fName');
  var tourEl = document.getElementById('fTour');
  var dateEl = document.getElementById('fDate');
  var paxEl = document.getElementById('fPax');
  var errEl = document.getElementById('formError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = nameEl.value.trim();
    var tour = tourEl.value;

    // Базовая валидация: имя + тур обязательны
    nameEl.classList.toggle('invalid', !name);
    tourEl.classList.toggle('invalid', !tour);
    if (!name || !tour) {
      errEl.hidden = false;
      (!name ? nameEl : tourEl).focus();
      return;
    }
    errEl.hidden = true;

    // Название выбранного тура - на текущем языке
    var tourLabel = t('form.o' + tour.slice(1));

    // Собираем сообщение на текущем языке
    var lines = [
      t('wa.hello'),
      t('wa.fName') + ': ' + name,
      t('wa.fTour') + ': ' + tourLabel
    ];
    if (dateEl.value.trim()) lines.push(t('wa.fDate') + ': ' + dateEl.value.trim());
    if (paxEl.value.trim()) lines.push(t('wa.fPax') + ': ' + paxEl.value.trim());

    window.open(WA_PHONE + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });

  // Снимаем ошибку при вводе
  [nameEl, tourEl].forEach(function (el) {
    el.addEventListener('input', function () {
      el.classList.remove('invalid');
      if (nameEl.value.trim() && tourEl.value) errEl.hidden = true;
    });
  });
})();
