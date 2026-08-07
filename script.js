/* ============================================================
   TravelHub - Байконур · логика лэндинга
   i18n (RU/EN/中文) · starfield · countdown · reveal · lightbox
   форма → WhatsApp
   ============================================================ */
'use strict';

/* Страница всегда открывается сверху, но прямые якоря из рекламы (#tour-1day) сохраняются */
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
    'meta.desc': 'Увидеть запуск ракеты с Байконура вживую: туры 1-3 дня от 100 000 ₸. Лицензированный принимающий туроператор Казахстана. Пропуска, гиды RU/EN/CN, наблюдение с официально определённой смотровой площадки. Туры по всему Казахстану: Мангистау, горы Алматы, Астана.',

    'nav.aria': 'Основная навигация',
    'nav.burger': 'Открыть меню',
    'lang.aria': 'Выбор языка',
    'nav.regions': 'Казахстан',
    'nav.tours': 'Туры',
    'nav.route': 'Маршрут',
    'nav.video': 'Видео',
    'nav.included': 'Что включено',
    'nav.why': 'Почему мы',
    'nav.schedule': 'Пуски',
    'nav.contacts': 'Контакты',
    'nav.cta': 'Узнать стоимость',

    'hero.kicker': 'Лицензированный туроператор Казахстана',
    'hero.title1': 'Старт ракеты.',
    'hero.title2': 'Вживую.',
    'hero.title3': 'С Байконура.',
    'hero.sub': 'Байконур - наша специализация. Весь Казахстан - наша территория.',
    'hero.cta1': 'Узнать стоимость',
    'hero.cta2': 'Смотреть туры',
    'hero.next': 'До ближайшего пуска - Союз / Прогресс МС-35',
    'hero.datenote': 'Дата уточняется по графику Роскосмоса',
    'cd.days': 'дней',
    'cd.hours': 'часов',
    'cd.min': 'минут',
    'cd.sec': 'секунд',

    'reg.kicker': 'А ещё - весь Казахстан',
    'reg.title': 'Возим по всей стране',
    'reg.sub': 'Байконур - главное направление. Но Казахстан огромен: марсианские плато, снежные горы и футуристичные города.',
    'reg.almaty': 'Алматы',
    'reg.almatyX': 'Горы, озёра, каньоны',
    'reg.altAlmaty': 'Горные вершины и озёра Алматы',
    'reg.bozzhyra': 'Мангистау · Бозжыра',
    'reg.bozzhyraX': 'Марсианские плато',
    'reg.altBozzhyra': 'Плато Бозжыра, скалы-клыки в степи Мангистау',
    'reg.astana': 'Астана',
    'reg.astanaX': 'Байтерек ночью',
    'reg.altAstana': 'Монумент Байтерек, ночная Астана',
    'reg.astana2': 'Скайлайн столицы',
    'reg.astana2X': 'Город будущего',
    'reg.altAstana2': 'Футуристичный скайлайн Астаны',
    'reg.mangystau': 'Мангистау',
    'reg.mangystauX': 'Каньоны и Каспий',
    'reg.altMangystau': 'Меловые каньоны и степь Мангистау',
    'reg.ctaText': 'Разрабатываем индивидуальные программы по всему Казахстану по запросу.',
    'reg.cta': 'Обсудить маршрут',

    'tours.kicker': 'Туры и цены',
    'tours.title': 'Выберите свою космическую программу',
    'tours.sub': 'Индивидуалам, группам, турагентствам и международным туроператорам',
    'tours.bestseller': 'Бестселлер',
    'price.from': 'от',
    'price.request': 'цена по запросу',
    'price.note': 'Цена от 150 000 ₸ на человека. Итоговая стоимость зависит от программы тура, даты запуска и количества участников.',
    'price.unit': '/ человека',
    'price.detail': 'Итоговая стоимость рассчитывается индивидуально и зависит от программы, даты посещения, запуска ракеты, количества участников, транспорта, проживания и дополнительных услуг.',
    't1.price': '150 000 ₸',
    't2.price': '300-450 тыс. ₸',
    't3.price': '100 000 ₸',
    'btn.book': 'Узнать стоимость',

    't1.name': 'Байконур: наблюдение запуска, 1 день',
    't1.desc': 'Экспедиция к легендарному космодрому в день пуска. Грохот двигателей, пламя и дрожь земли - с официально определённой смотровой площадки.',
    't1.inc': 'Трансферы · гид · пропуска · смотровая площадка',
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

    'vid.kicker': 'Живое видео с наших туров',
    'vid.title': 'Так это выглядит вживую',
    'vid.sub': 'Наши туристы наблюдают пуск ракеты на закате - настоящее видео, снятое на туре TravelHub, без монтажа.',
    'vid.p1': 'Реальные кадры с официально определённой смотровой площадки',
    'vid.p2': 'Пламя, грохот и дрожь земли - без спецэффектов',
    'vid.p3': 'Именно это вы увидите на нашем туре',
    'vid.caption': 'Пуск на закате · тур TravelHub, Байконур',
    'vid.videoAria': 'Видео запуска ракеты на Байконуре с тура TravelHub',

    'inc.kicker': 'Всё уже включено',
    'inc.title': 'Вы наблюдаете запуск - остальное делаем мы',
    'inc.i1': 'Гиды-переводчики: русский, английский, китайский',
    'inc.i2': 'Проживание в отелях',
    'inc.i3': 'Завтраки',
    'inc.i4': 'Все трансферы по программе',
    'inc.i5': 'Наблюдение запуска с официально определённой смотровой площадки',
    'inc.i6': 'Встреча с космонавтами - по предварительному согласованию',
    'inc.i7': 'Оформление пропусков и вся логистика',

    'why.kicker': 'Почему TravelHub',
    'why.title': 'Космос - это серьёзно. Мы тоже.',
    'why.w1t': 'Официальная смотровая площадка',
    'why.w1x': 'Наблюдение с официально определённой смотровой площадки - безопасно и по правилам космодрома.',
    'why.w2t': 'Лицензированный туроператор РК',
    'why.w2x': 'Официальная лицензия на въездной и внутренний туризм. Работаем прозрачно и по договору.',
    'why.w3t': 'Пропуска и логистика - на нас',
    'why.w3x': 'Космодром - режимный объект. Все разрешения, пропуска и трансферы оформляем сами.',
    'why.w4t': 'Профессиональные гиды',
    'why.w4x': 'Знают Байконур изнутри и рассказывают о космосе так, что мурашки - до старта.',
    'why.w5t': '100% возврат',
    'why.w5x': 'При переносе или отмене запуска гарантируется 100% возврат. В случае изменения, переноса или отмены запуска мы предложим альтернативную дату, изменение программы или возврат средств в соответствии с условиями договора.',
    'why.w6t': 'Специализация + территория',
    'why.w6x': 'Байконур - наша специализация. Весь Казахстан - наша территория.',

    'gal.a1': 'Стартовый комплекс космодрома Байконур',
    'gal.c1': 'Стартовый комплекс, Байконур',
    'gal.a2': 'Ракета «Энергия-М» в монтажно-испытательном корпусе Байконура',
    'gal.c2': 'Ракета «Энергия-М», МИК',
    'gal.a3': 'Космический корабль «Буран» в монтажном корпусе Байконура',
    'gal.c3': 'Корабль «Буран», монтажный корпус',

    'lic.kicker': 'Работаем официально',
    'lic.title': 'Настоящая лицензия туроператора РК',
    'lic.short': 'Лицензия туроператора № 26004458 от 13.02.2026, ТОО «TravelHub», въездной и внутренний туризм.',
    'lic.alt': 'Первая страница государственной лицензии туроператора TravelHub',
    'lic.zoom': 'Нажмите, чтобы увеличить',
    'lic.zoomAria': 'Открыть лицензию крупно',
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
    'sched.warn': 'Даты запусков могут изменяться по решению соответствующих организаций. TravelHub не является организатором космических запусков и не может гарантировать неизменность даты и времени запуска.',

    'how.kicker': 'Просто и понятно',
    'how.title': 'Как забронировать',
    'how.s1t': 'Оставьте заявку',
    'how.s1x': 'Выберите программу и укажите количество участников.',
    'how.s2t': 'Получите предложение',
    'how.s2x': 'Мы подтвердим программу, стоимость и необходимые документы.',
    'how.s3t': 'Оформление разрешений',
    'how.s3x': 'После получения документов начинается процедура согласования посещения.',
    'how.s4t': 'Приезжайте на Байконур',
    'how.s4x': 'TravelHub организует согласованные услуги по программе.',

    'bk.kicker': 'Заявка за 30 секунд',
    'bk.title': 'Оставьте заявку - рассчитаем стоимость тура',
    'bk.sub': 'Заполните форму - заявка откроется в WhatsApp, мы ответим быстро. Никаких данных на сервер не отправляем.',
    'bk.p1': 'Ответ в WhatsApp в течение рабочего дня',
    'bk.p2': 'Поможем выбрать дату под ближайший пуск',
    'bk.p3': 'При отмене или переносе пуска - 100% возврат или альтернативная дата по договору.',
    'refund.full': 'При переносе или отмене запуска гарантируется 100% возврат. В случае изменения, переноса или отмены запуска мы предложим альтернативную дату, изменение программы или возврат средств в соответствии с условиями договора.',

    'form.name': 'Имя и фамилия',
    'form.namePh': 'Как к вам обращаться',
    'form.country': 'Страна / гражданство',
    'form.countryPh': 'Например, Китай',
    'form.wa': 'WhatsApp',
    'form.waPh': '+7 700 000 0000',
    'form.email': 'E-mail',
    'form.emailPh': 'you@example.com',
    'form.count': 'Количество туристов',
    'form.countPh': '2',
    'form.tour': 'Выбранный тур',
    'form.tourPh': '- выберите тур -',
    'form.o1': 'Байконур: запуск, 1 день - от 150 000 ₸ / человека',
    'form.o2': 'Байконур: 3 дня - 300 000-450 000 ₸ / человека',
    'form.o3': 'Байконур: «Буран», 1 день - от 100 000 ₸ / человека',
    'form.o4': 'Корпоратив / группы / MICE',
    'form.o5': 'Весь Казахстан под запрос',
    'form.date': 'Желаемая дата',
    'form.datePh': 'например, 09.09.2026',
    'form.comment': 'Комментарий',
    'form.commentPh': 'Пожелания к программе, вопросы',
    'form.err': 'Пожалуйста, укажите имя, тур и WhatsApp или e-mail',
    'form.submit': 'Получить предложение',
    'form.success': 'Спасибо! Мы получили вашу заявку. Менеджер TravelHub свяжется с вами для уточнения программы, стоимости и необходимых документов.',

    'b2b.title': 'Для туроператоров и турагентств',
    'b2b.text': 'TravelHub сотрудничает с зарубежными туристическими компаниями и формирует программы по Байконуру и Казахстану для индивидуальных туристов и групп. Для получения B2B-предложения свяжитесь с нами.',
    'b2b.cta': 'Запросить B2B-предложение',

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
    'lb.close': 'Закрыть',
    'wa.t1': 'Здравствуйте! Интересует тур: Байконур - наблюдение запуска, 1 день',
    'wa.t2': 'Здравствуйте! Интересует тур: Байконур - расширенная программа, 3 дня',
    'wa.t3': 'Здравствуйте! Интересует тур: Байконур - «Буран», 1 день',
    'wa.t4': 'Здравствуйте! Интересует корпоративный тур / приём группы (MICE)',
    'wa.t5': 'Здравствуйте! Интересует индивидуальный тур по Казахстану',
    'wa.custom': 'Здравствуйте! Хотим обсудить индивидуальную программу по Казахстану',
    'wa.b2b': 'Здравствуйте! Мы турагентство / туроператор и хотим обсудить B2B-сотрудничество с TravelHub.',
    'wa.hello': 'Здравствуйте! Заявка с сайта TravelHub',
    'wa.fName': 'Имя и фамилия',
    'wa.fCountry': 'Страна',
    'wa.fWa': 'WhatsApp',
    'wa.fEmail': 'E-mail',
    'wa.fCount': 'Туристов',
    'wa.fTour': 'Тур',
    'wa.fDate': 'Дата',
    'wa.fComment': 'Комментарий'
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    'meta.title': 'TravelHub - Baikonur Rocket Launch Tours | Kazakhstan Tour Operator',
    'meta.desc': 'Watch a real rocket launch from Baikonur: 1-3 day tours from €190. Licensed inbound tour operator in Kazakhstan. Permits, RU/EN/CN guides, viewing from the officially designated observation platform. Tours across Kazakhstan: Mangystau, Almaty mountains, Astana.',

    'nav.aria': 'Main navigation',
    'nav.burger': 'Open menu',
    'lang.aria': 'Language selection',
    'nav.regions': 'Kazakhstan',
    'nav.tours': 'Tours',
    'nav.route': 'Route',
    'nav.video': 'Video',
    'nav.included': 'What’s included',
    'nav.why': 'Why us',
    'nav.schedule': 'Launches',
    'nav.contacts': 'Contacts',
    'nav.cta': 'Get a quote',

    'hero.kicker': 'Licensed tour operator in Kazakhstan',
    'hero.title1': 'A rocket launch.',
    'hero.title2': 'For real.',
    'hero.title3': 'From Baikonur.',
    'hero.sub': 'Baikonur is our specialty. All of Kazakhstan is our territory.',
    'hero.cta1': 'Get a quote',
    'hero.cta2': 'See the tours',
    'hero.next': 'Next launch - Soyuz / Progress MS-35',
    'hero.datenote': 'Date subject to Roscosmos schedule updates',
    'cd.days': 'days',
    'cd.hours': 'hours',
    'cd.min': 'minutes',
    'cd.sec': 'seconds',

    'reg.kicker': 'And also - all of Kazakhstan',
    'reg.title': 'We travel the whole country',
    'reg.sub': 'Baikonur is our main direction. But Kazakhstan is vast: Martian plateaus, snow-capped mountains and futuristic cities.',
    'reg.almaty': 'Almaty',
    'reg.almatyX': 'Mountains, lakes, canyons',
    'reg.altAlmaty': 'Mountain peaks and lakes near Almaty',
    'reg.bozzhyra': 'Mangystau · Bozzhyra',
    'reg.bozzhyraX': 'Martian plateaus',
    'reg.altBozzhyra': 'Bozzhyra plateau, fang-shaped cliffs in the Mangystau steppe',
    'reg.astana': 'Astana',
    'reg.astanaX': 'Baiterek at night',
    'reg.altAstana': 'Baiterek monument, Astana at night',
    'reg.astana2': 'Capital skyline',
    'reg.astana2X': 'City of the future',
    'reg.altAstana2': 'Futuristic skyline of Astana',
    'reg.mangystau': 'Mangystau',
    'reg.mangystauX': 'Canyons and the Caspian',
    'reg.altMangystau': 'Chalk canyons and steppe of Mangystau',
    'reg.ctaText': 'We design custom programs across all of Kazakhstan on request.',
    'reg.cta': 'Discuss a route',

    'tours.kicker': 'Tours & prices',
    'tours.title': 'Choose your space program',
    'tours.sub': 'For individuals, groups, travel agencies and international tour operators',
    'tours.bestseller': 'Bestseller',
    'price.from': 'from',
    'price.request': 'price on request',
    'price.note': 'Price from 150,000 ₸ per person. The final cost depends on the tour program, the launch date and the number of participants.',
    'price.unit': 'per person',
    'price.detail': 'The final price is calculated individually and depends on the program, the visit date, the rocket launch, the number of participants, transport, accommodation and additional services.',
    't1.price': '€290',
    't2.price': '€570-860',
    't3.price': '€190',
    'btn.book': 'Get a quote',

    't1.name': 'Baikonur: launch viewing, 1 day',
    't1.desc': 'An expedition to the legendary cosmodrome on launch day. The roar of engines, the flame and the trembling ground - from the officially designated observation platform.',
    't1.inc': 'Transfers · guide · permits · observation platform',
    't2.name': 'Baikonur: extended program, 3 days',
    't2.desc': 'Full immersion: rocket rollout, Gagarin’s Start, museums and the launch itself. Three days inside living space history.',
    't2.inc': 'Hotel · breakfasts · transfers · guide · permits',
    't2.note': 'Crewed launch - €860 · uncrewed - from €570',
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

    'vid.kicker': 'Live footage from our tours',
    'vid.title': 'This is what it looks like for real',
    'vid.sub': 'Our travelers watch a rocket launch at sunset - real footage filmed on a TravelHub tour, unedited.',
    'vid.p1': 'Real footage from the officially designated observation platform',
    'vid.p2': 'Flame, roar and trembling ground - no special effects',
    'vid.p3': 'This is exactly what you will see on our tour',
    'vid.caption': 'Launch at sunset · TravelHub tour, Baikonur',
    'vid.videoAria': 'Video of a rocket launch at Baikonur from a TravelHub tour',

    'inc.kicker': 'Everything is included',
    'inc.title': 'You watch the launch - we handle the rest',
    'inc.i1': 'Guide-interpreters: Russian, English, Chinese',
    'inc.i2': 'Hotel accommodation',
    'inc.i3': 'Breakfasts',
    'inc.i4': 'All transfers on the program',
    'inc.i5': 'Launch viewing from the officially designated observation platform',
    'inc.i6': 'Meeting with cosmonauts - subject to prior arrangement',
    'inc.i7': 'Permits handled and full logistics',

    'why.kicker': 'Why TravelHub',
    'why.title': 'Space is serious business. So are we.',
    'why.w1t': 'Official observation platform',
    'why.w1x': 'Viewing from the officially designated observation platform - safe and in line with cosmodrome rules.',
    'why.w2t': 'Licensed tour operator of Kazakhstan',
    'why.w2x': 'Official license for inbound and domestic tourism. Transparent work under contract.',
    'why.w3t': 'Permits & logistics on us',
    'why.w3x': 'The cosmodrome is a restricted site. We arrange all permissions, passes and transfers ourselves.',
    'why.w4t': 'Professional guides',
    'why.w4x': 'They know Baikonur from the inside and tell space stories that give you goosebumps before liftoff.',
    'why.w5t': '100% refund',
    'why.w5x': 'If the launch is postponed or canceled, a 100% refund is guaranteed. In case of any change, postponement or cancellation of the launch, we will offer an alternative date, a program change or a refund in accordance with the terms of the contract.',
    'why.w6t': 'Specialty + territory',
    'why.w6x': 'Baikonur is our specialty. All of Kazakhstan is our territory.',

    'gal.a1': 'Launch complex of the Baikonur Cosmodrome',
    'gal.c1': 'Launch complex, Baikonur',
    'gal.a2': 'Energia-M rocket inside the Baikonur assembly and test facility',
    'gal.c2': 'Energia-M rocket, assembly facility',
    'gal.a3': 'Buran space shuttle inside the Baikonur assembly building',
    'gal.c3': 'Buran shuttle, assembly building',

    'lic.kicker': 'Fully licensed',
    'lic.title': 'A genuine Kazakhstan tour operator license',
    'lic.short': 'Tour operator license No. 26004458 dated 13.02.2026, TravelHub LLP, inbound and domestic tourism.',
    'lic.alt': 'First page of the state tour operator license of TravelHub',
    'lic.zoom': 'Click to enlarge',
    'lic.zoomAria': 'Open the license enlarged',
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
    'sched.warn': 'Launch dates may change by decision of the relevant organizations. TravelHub is not the organizer of space launches and cannot guarantee that the launch date and time will remain unchanged.',

    'how.kicker': 'Simple and clear',
    'how.title': 'How to book',
    'how.s1t': 'Leave a request',
    'how.s1x': 'Choose a program and tell us the number of participants.',
    'how.s2t': 'Get an offer',
    'how.s2x': 'We confirm the program, cost and required documents.',
    'how.s3t': 'Permit processing',
    'how.s3x': 'Once the documents are received, the visit approval procedure begins.',
    'how.s4t': 'Come to Baikonur',
    'how.s4x': 'TravelHub arranges the agreed services according to the program.',

    'bk.kicker': 'A 30-second request',
    'bk.title': 'Leave a request - we will calculate your tour cost',
    'bk.sub': 'Fill in the form - your request opens in WhatsApp and we reply fast. No data is sent to any server.',
    'bk.p1': 'WhatsApp reply within one business day',
    'bk.p2': 'We will help you pick a date for the next launch',
    'bk.p3': 'If the launch is canceled or postponed - a 100% refund or an alternative date under the contract.',
    'refund.full': 'If the launch is postponed or canceled, a 100% refund is guaranteed. In case of any change, postponement or cancellation of the launch, we will offer an alternative date, a program change or a refund in accordance with the terms of the contract.',

    'form.name': 'Full name',
    'form.namePh': 'How should we address you',
    'form.country': 'Country / citizenship',
    'form.countryPh': 'e.g. China',
    'form.wa': 'WhatsApp',
    'form.waPh': '+7 700 000 0000',
    'form.email': 'E-mail',
    'form.emailPh': 'you@example.com',
    'form.count': 'Number of travelers',
    'form.countPh': '2',
    'form.tour': 'Selected tour',
    'form.tourPh': '- choose a tour -',
    'form.o1': 'Baikonur: launch, 1 day - from €290 per person',
    'form.o2': 'Baikonur: 3 days - €570-860 per person',
    'form.o3': 'Baikonur: Buran, 1 day - from €190 per person',
    'form.o4': 'Corporate / groups / MICE',
    'form.o5': 'All of Kazakhstan, tailor-made',
    'form.date': 'Preferred date',
    'form.datePh': 'e.g. 09.09.2026',
    'form.comment': 'Comment',
    'form.commentPh': 'Program preferences, questions',
    'form.err': 'Please enter your name, a tour and WhatsApp or e-mail',
    'form.submit': 'Get an offer',
    'form.success': 'Thank you! We have received your request. A TravelHub manager will contact you to confirm the program, cost and required documents.',

    'b2b.title': 'For tour operators and travel agencies',
    'b2b.text': 'TravelHub works with international travel companies and builds programs around Baikonur and Kazakhstan for individual travelers and groups. To receive a B2B offer, get in touch with us.',
    'b2b.cta': 'Request a B2B offer',

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
    'lb.close': 'Close',
    'wa.t1': 'Hello! I’m interested in the tour: Baikonur launch viewing, 1 day',
    'wa.t2': 'Hello! I’m interested in the tour: Baikonur extended program, 3 days',
    'wa.t3': 'Hello! I’m interested in the tour: Baikonur Buran tour, 1 day',
    'wa.t4': 'Hello! I’m interested in a corporate / group tour (MICE)',
    'wa.t5': 'Hello! I’m interested in a tailor-made tour around Kazakhstan',
    'wa.custom': 'Hello! We’d like to discuss a custom program in Kazakhstan',
    'wa.b2b': 'Hello! We are a travel agency / tour operator and would like to discuss B2B cooperation with TravelHub.',
    'wa.hello': 'Hello! Booking request from the TravelHub website',
    'wa.fName': 'Full name',
    'wa.fCountry': 'Country',
    'wa.fWa': 'WhatsApp',
    'wa.fEmail': 'E-mail',
    'wa.fCount': 'Travelers',
    'wa.fTour': 'Tour',
    'wa.fDate': 'Date',
    'wa.fComment': 'Comment'
  },

  /* ---------------- 中文（简体） ---------------- */
  zh: {
    'meta.title': 'TravelHub - 拜科努尔火箭发射观摩之旅 | 哈萨克斯坦旅游运营商',
    'meta.desc': '亲眼见证拜科努尔火箭发射：一至三日游，€190 起。哈萨克斯坦持牌接待旅游运营商：办理通行证，俄英中三语导游，在官方指定的观景平台观看发射。畅游哈萨克斯坦全境：曼格斯套、阿拉木图雪山、阿斯塔纳。',

    'nav.aria': '主导航',
    'nav.burger': '打开菜单',
    'lang.aria': '语言选择',
    'nav.regions': '哈萨克斯坦',
    'nav.tours': '线路',
    'nav.route': '行程',
    'nav.video': '视频',
    'nav.included': '费用包含',
    'nav.why': '选择我们',
    'nav.schedule': '发射日程',
    'nav.contacts': '联系方式',
    'nav.cta': '获取报价',

    'hero.kicker': '哈萨克斯坦持牌旅游运营商',
    'hero.title1': '火箭发射。',
    'hero.title2': '亲眼见证。',
    'hero.title3': '就在拜科努尔。',
    'hero.sub': '拜科努尔是我们的专长，整个哈萨克斯坦是我们的天地。',
    'hero.cta1': '获取报价',
    'hero.cta2': '浏览线路',
    'hero.next': '距最近一次发射 - 联盟号 / 进步MS-35',
    'hero.datenote': '具体日期以俄罗斯航天集团发射计划为准',
    'cd.days': '天',
    'cd.hours': '时',
    'cd.min': '分',
    'cd.sec': '秒',

    'reg.kicker': '不只拜科努尔 - 畅游全境',
    'reg.title': '带您走遍哈萨克斯坦',
    'reg.sub': '拜科努尔是我们的主打线路，但哈萨克斯坦幅员辽阔：火星般的高原、雪山与未来之城。',
    'reg.almaty': '阿拉木图',
    'reg.almatyX': '雪山、湖泊、峡谷',
    'reg.altAlmaty': '阿拉木图的雪山群峰与湖泊',
    'reg.bozzhyra': '曼格斯套 · 博兹吉拉',
    'reg.bozzhyraX': '火星般的高原',
    'reg.altBozzhyra': '曼格斯套草原上的博兹吉拉高原尖峰',
    'reg.astana': '阿斯塔纳',
    'reg.astanaX': '夜色中的巴伊杰列克塔',
    'reg.altAstana': '夜幕下的阿斯塔纳巴伊杰列克观景塔',
    'reg.astana2': '首都天际线',
    'reg.astana2X': '未来之城',
    'reg.altAstana2': '阿斯塔纳未来感十足的天际线',
    'reg.mangystau': '曼格斯套',
    'reg.mangystauX': '峡谷与里海',
    'reg.altMangystau': '曼格斯套的白垩峡谷与草原',
    'reg.ctaText': '我们按需为您定制贯穿哈萨克斯坦全境的专属行程。',
    'reg.cta': '咨询路线',

    'tours.kicker': '线路与价格',
    'tours.title': '选择您的太空之旅',
    'tours.sub': '服务个人游客、团队、旅行社及国际旅游运营商',
    'tours.bestseller': '热销',
    'price.from': '起价',
    'price.request': '价格面议',
    'price.note': '价格每人 150 000 ₸ 起。最终费用取决于行程方案、发射日期及参与人数。',
    'price.unit': '/ 每人',
    'price.detail': '最终价格根据行程方案、访问日期、火箭发射、参与人数、交通、住宿及附加服务单独核算。',
    't1.price': '€290',
    't2.price': '€570-860',
    't3.price': '€190',
    'btn.book': '获取报价',

    't1.name': '拜科努尔：观看火箭发射一日游',
    't1.desc': '发射当天前往传奇航天发射场。在官方指定的观景平台，亲身感受引擎的轰鸣、烈焰与大地的震颤。',
    't1.inc': '全程接送 · 导游 · 通行证 · 观景平台',
    't2.name': '拜科努尔：深度三日游',
    't2.desc': '全方位沉浸体验：火箭转运、加加林发射台、博物馆以及发射本身。三天置身鲜活的航天历史之中。',
    't2.inc': '酒店 · 早餐 · 接送 · 导游 · 通行证',
    't2.note': '载人发射 - €860 · 无人发射 - €570 起',
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

    'vid.kicker': '来自我们旅程的实拍视频',
    'vid.title': '这就是现场的真实景象',
    'vid.sub': '我们的游客在日落时分观看火箭发射--由 TravelHub 旅程实地拍摄，未经剪辑。',
    'vid.p1': '在官方指定的观景平台实地拍摄',
    'vid.p2': '烈焰、轰鸣与大地震颤--绝无特效',
    'vid.p3': '这正是您在我们旅程中将看到的景象',
    'vid.caption': '日落发射 · TravelHub 旅程，拜科努尔',
    'vid.videoAria': 'TravelHub 旅程中拍摄的拜科努尔火箭发射视频',

    'inc.kicker': '费用全包',
    'inc.title': '您只管观看发射，其余交给我们',
    'inc.i1': '俄语、英语、中文导游翻译',
    'inc.i2': '酒店住宿',
    'inc.i3': '早餐',
    'inc.i4': '行程内全部接送',
    'inc.i5': '在官方指定的观景平台观看发射',
    'inc.i6': '与宇航员会面 - 需提前协调安排',
    'inc.i7': '通行证办理及全程后勤保障',

    'why.kicker': '为什么选择 TravelHub',
    'why.title': '太空容不得马虎，我们也一样。',
    'why.w1t': '官方观景平台',
    'why.w1x': '在官方指定的观景平台观看发射 - 安全且符合航天发射场规定。',
    'why.w2t': '哈萨克斯坦持牌旅游运营商',
    'why.w2x': '持有入境游与国内游官方牌照，签订合同，透明经营。',
    'why.w3t': '通行证与后勤全包',
    'why.w3x': '发射场属管制区域。所有许可、通行证和接送均由我们办理。',
    'why.w4t': '专业导游',
    'why.w4x': '他们深谙拜科努尔的一切，航天故事讲得扣人心弦。',
    'why.w5t': '100% 退款保障',
    'why.w5x': '若发射推迟或取消，保证 100% 退款。如遇发射变更、推迟或取消，我们将根据合同条款为您提供替代日期、调整行程或退还款项。',
    'why.w6t': '专长 + 天地',
    'why.w6x': '拜科努尔是我们的专长，整个哈萨克斯坦是我们的天地。',

    'gal.a1': '拜科努尔航天发射场的发射工位',
    'gal.c1': '拜科努尔发射工位',
    'gal.a2': '总装测试厂房中的“能源-M”运载火箭',
    'gal.c2': '“能源-M”火箭 · 总装厂房',
    'gal.a3': '拜科努尔总装厂房中的“暴风雪号”航天飞机',
    'gal.c3': '“暴风雪号”航天飞机 · 总装厂房',

    'lic.kicker': '正规持牌经营',
    'lic.title': '真实的哈萨克斯坦旅游运营商牌照',
    'lic.short': '旅游运营商牌照 № 26004458，2026年2月13日颁发，TravelHub 有限责任公司，入境游与国内游。',
    'lic.alt': 'TravelHub 国家旅游运营商牌照首页',
    'lic.zoom': '点击放大查看',
    'lic.zoomAria': '放大查看牌照',
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
    'sched.warn': '发射日期可能因相关机构的决定而变动。TravelHub 并非航天发射的组织方，无法保证发射日期与时间保持不变。',

    'how.kicker': '简单清晰',
    'how.title': '如何预订',
    'how.s1t': '提交申请',
    'how.s1x': '选择行程方案并告知参加人数。',
    'how.s2t': '获取方案',
    'how.s2x': '我们将确认行程、费用及所需材料。',
    'how.s3t': '办理许可',
    'how.s3x': '收到材料后，即开始办理参观审批手续。',
    'how.s4t': '抵达拜科努尔',
    'how.s4x': 'TravelHub 按方案安排已确认的各项服务。',

    'bk.kicker': '30 秒提交申请',
    'bk.title': '提交申请 - 我们为您核算行程费用',
    'bk.sub': '填写表单后申请将在 WhatsApp 中打开，我们会尽快回复。您的数据不会上传至任何服务器。',
    'bk.p1': '工作日内通过 WhatsApp 回复',
    'bk.p2': '帮您选择最近发射窗口的日期',
    'bk.p3': '发射取消或推迟 - 可获 100% 退款或按合同改期。',
    'refund.full': '若发射推迟或取消，保证 100% 退款。如遇发射变更、推迟或取消，我们将根据合同条款为您提供替代日期、调整行程或退还款项。',

    'form.name': '姓名',
    'form.namePh': '请问如何称呼您',
    'form.country': '国家 / 国籍',
    'form.countryPh': '例如：中国',
    'form.wa': 'WhatsApp',
    'form.waPh': '+7 700 000 0000',
    'form.email': '电子邮箱',
    'form.emailPh': 'you@example.com',
    'form.count': '参加人数',
    'form.countPh': '2',
    'form.tour': '所选线路',
    'form.tourPh': '- 请选择线路 -',
    'form.o1': '拜科努尔：发射一日游 - €290 起 / 每人',
    'form.o2': '拜科努尔：三日游 - €570-860 / 每人',
    'form.o3': '拜科努尔：“暴风雪号”一日游 - €190 起 / 每人',
    'form.o4': '企业团建 / 团队 / MICE',
    'form.o5': '哈萨克斯坦全境定制游',
    'form.date': '期望日期',
    'form.datePh': '例如 09.09.2026',
    'form.comment': '备注',
    'form.commentPh': '行程需求、疑问',
    'form.err': '请填写姓名、选择线路并填写 WhatsApp 或电子邮箱',
    'form.submit': '获取方案',
    'form.success': '感谢您！我们已收到您的申请。TravelHub 的顾问将与您联系，确认行程、费用及所需材料。',

    'b2b.title': '致旅游运营商与旅行社',
    'b2b.text': 'TravelHub 与海外旅游公司合作，为个人游客及团队打造拜科努尔与哈萨克斯坦的行程方案。如需 B2B 合作方案，请与我们联系。',
    'b2b.cta': '索取 B2B 合作方案',

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
    'lb.close': '关闭',
    'wa.t1': '您好！我想咨询：拜科努尔观看火箭发射一日游',
    'wa.t2': '您好！我想咨询：拜科努尔深度三日游',
    'wa.t3': '您好！我想咨询：拜科努尔“暴风雪号”一日游',
    'wa.t4': '您好！我想咨询企业团建 / 团队接待（MICE）行程',
    'wa.t5': '您好！我想咨询哈萨克斯坦定制行程',
    'wa.custom': '您好！我们想咨询哈萨克斯坦定制行程方案',
    'wa.b2b': '您好！我们是旅行社 / 旅游运营商，希望与 TravelHub 洽谈 B2B 合作。',
    'wa.hello': '您好！来自 TravelHub 网站的预订申请',
    'wa.fName': '姓名',
    'wa.fCountry': '国家',
    'wa.fWa': 'WhatsApp',
    'wa.fEmail': '电子邮箱',
    'wa.fCount': '人数',
    'wa.fTour': '线路',
    'wa.fDate': '日期',
    'wa.fComment': '备注'
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

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key] != null) el.setAttribute('placeholder', I18N[lang][key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (I18N[lang][key] != null) el.setAttribute('aria-label', I18N[lang][key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-alt');
    if (I18N[lang][key] != null) el.setAttribute('alt', I18N[lang][key]);
  });

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.title = t('meta.title');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  updateWaLinks();
  try { localStorage.setItem('thlang', lang); } catch (e) { /* приватный режим */ }
}

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

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    switchLang(btn.getAttribute('data-lang'));
  });
});

(function initLang() {
  var saved = null;
  try { saved = localStorage.getItem('thlang'); } catch (e) { /* ignore */ }
  switchLang(saved && I18N[saved] ? saved : 'ru');
})();

/* ============================================================
   3. STARFIELD - мерцающие звёзды (переиспользуемо)
   ============================================================ */
function makeStarfield(canvas, opts) {
  if (!canvas) return;
  opts = opts || {};
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var density = opts.density || 5200;
  var allowMeteor = opts.meteor !== false;

  var stars = [], meteor = null;
  var W = 0, H = 0, dpr = 1;
  var running = false, rafId = 0;
  var scrollFactor = 0, pointerX = 0;

  function resize() {
    var host = canvas.parentElement;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = host.clientWidth; H = host.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
    if (reduceMotion) drawFrame(0);
  }
  function buildStars() {
    stars = [];
    var count = Math.min(240, Math.round((W * H) / density));
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.35,
        a: Math.random() * 0.55 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.6 + 0.5,
        layer: Math.random()
      });
    }
  }
  function drawFrame(time) {
    ctx.clearRect(0, 0, W, H);
    var tSec = time / 1000;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var twinkle = reduceMotion ? 1 : (0.6 + 0.4 * Math.sin(tSec * s.speed + s.phase));
      var offY = scrollFactor * (6 + s.layer * 26);
      var offX = pointerX * (s.layer * 14);
      var y = s.y - offY;
      y = ((y % H) + H) % H;
      ctx.globalAlpha = s.a * twinkle;
      ctx.fillStyle = s.layer > 0.85 ? '#ffd9b0' : '#cfe0ff';
      ctx.beginPath();
      ctx.arc(s.x + offX, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduceMotion && allowMeteor) {
      if (!meteor && Math.random() < 0.003) {
        meteor = { x: Math.random() * W * 0.8 + W * 0.1, y: Math.random() * H * 0.35, vx: 4 + Math.random() * 3, vy: 2 + Math.random() * 1.5, life: 1 };
      }
      if (meteor) {
        meteor.x += meteor.vx; meteor.y += meteor.vy; meteor.life -= 0.02;
        if (meteor.life <= 0 || meteor.x > W || meteor.y > H) { meteor = null; }
        else {
          var grad = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10);
          grad.addColorStop(0, 'rgba(255,255,255,' + (0.85 * meteor.life) + ')');
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.globalAlpha = 1; ctx.strokeStyle = grad; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
  }
  function loop(time) { if (!running) return; drawFrame(time); rafId = requestAnimationFrame(loop); }
  function start() { if (running || reduceMotion) return; running = true; rafId = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(rafId); }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? start() : stop();
    }, { threshold: 0.02 }).observe(canvas.parentElement);
  } else { start(); }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

  window.addEventListener('scroll', function () { scrollFactor = Math.min(window.scrollY / 600, 2); }, { passive: true });
  window.addEventListener('pointermove', function (e) { pointerX = (e.clientX / window.innerWidth - 0.5) * 2; }, { passive: true });
  window.addEventListener('resize', resize);
  resize();
  if (reduceMotion) drawFrame(0);
}
makeStarfield(document.getElementById('starfield'), { density: 5200, meteor: true });
makeStarfield(document.getElementById('videoStars'), { density: 8000, meteor: false });

/* ============================================================
   4. COUNTDOWN - до ближайшего пуска
   ============================================================ */
(function countdown() {
  var elD = document.getElementById('cdD'),
      elH = document.getElementById('cdH'),
      elM = document.getElementById('cdM'),
      elS = document.getElementById('cdS');
  if (!elD) return;

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
    if (!target) { elD.textContent = elH.textContent = elM.textContent = elS.textContent = '00'; return; }
    var diff = Math.floor((target.getTime() - now) / 1000);
    elD.textContent = pad(Math.floor(diff / 86400));
    elH.textContent = pad(Math.floor((diff % 86400) / 3600));
    elM.textContent = pad(Math.floor((diff % 3600) / 60));
    elS.textContent = pad(diff % 60);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ============================================================
   5. SCROLL-REVEAL
   ============================================================ */
(function reveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  ['.tours-grid', '.why-grid', '.included-grid', '.contacts-grid', '.how-steps'].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        if (child.classList.contains('reveal')) child.style.setProperty('--d', (i % 6) * 0.07 + 's');
      });
    });
  });

  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

/* ============================================================
   6. БУРГЕР-МЕНЮ + тень шапки при скролле
   ============================================================ */
(function menu() {
  var burger = document.getElementById('burgerBtn');
  var nav = document.getElementById('mainNav');
  var header = document.querySelector('.site-header');

  if (burger && nav) {
    function setOpen(open) {
      nav.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    burger.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 900) setOpen(false); });
  }

  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

/* ============================================================
   7. ЛАЙТБОКС - лицензия и галерея
   ============================================================ */
(function lightbox() {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');
  if (!box || !img) return;

  var lastFocus = null;

  function open(src, alt) {
    img.setAttribute('src', src);
    img.setAttribute('alt', alt || '');
    box.hidden = false;
    lastFocus = document.activeElement;
    requestAnimationFrame(function () { box.classList.add('show'); });
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }
  function close() {
    box.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function () { box.hidden = true; img.setAttribute('src', ''); }, 280);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.style.cursor = 'zoom-in';
    var trigger = el.closest('[data-lightbox-btn]') || el;
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      open(el.getAttribute('src'), el.getAttribute('alt'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box || e.target.classList.contains('lightbox-figure')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
})();

/* ============================================================
   8. ФОРМА ЗАЯВКИ → WhatsApp
   ============================================================ */
(function bookingForm() {
  var form = document.getElementById('bookingForm');
  if (!form) return;
  var nameEl = document.getElementById('fName');
  var countryEl = document.getElementById('fCountry');
  var countEl = document.getElementById('fCount');
  var waEl = document.getElementById('fWa');
  var emailEl = document.getElementById('fEmail');
  var dateEl = document.getElementById('fDate');
  var tourEl = document.getElementById('fTour');
  var commentEl = document.getElementById('fComment');
  var errEl = document.getElementById('formError');
  var successEl = document.getElementById('bookingSuccess');

  function val(el) { return el && el.value ? el.value.trim() : ''; }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = val(nameEl);
    var tour = tourEl.value;
    var wa = val(waEl);
    var email = val(emailEl);
    var hasContact = !!wa || !!email;

    nameEl.classList.toggle('invalid', !name);
    tourEl.classList.toggle('invalid', !tour);
    waEl.classList.toggle('invalid', !hasContact);
    emailEl.classList.toggle('invalid', !hasContact);

    if (!name || !tour || !hasContact) {
      errEl.hidden = false;
      (!name ? nameEl : (!tour ? tourEl : waEl)).focus();
      return;
    }
    errEl.hidden = true;

    var tourLabel = t('form.o' + tour.slice(1));
    var lines = [
      t('wa.hello'),
      t('wa.fName') + ': ' + name
    ];
    if (val(countryEl)) lines.push(t('wa.fCountry') + ': ' + val(countryEl));
    if (wa) lines.push(t('wa.fWa') + ': ' + wa);
    if (email) lines.push(t('wa.fEmail') + ': ' + email);
    if (val(countEl)) lines.push(t('wa.fCount') + ': ' + val(countEl));
    if (val(dateEl)) lines.push(t('wa.fDate') + ': ' + val(dateEl));
    lines.push(t('wa.fTour') + ': ' + tourLabel);
    if (val(commentEl)) lines.push(t('wa.fComment') + ': ' + val(commentEl));

    window.open(WA_PHONE + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');

    if (successEl) {
      form.hidden = true;
      successEl.hidden = false;
      successEl.classList.add('in');
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  [nameEl, tourEl, waEl, emailEl].forEach(function (el) {
    el.addEventListener('input', function () {
      el.classList.remove('invalid');
      if (val(nameEl) && tourEl.value && (val(waEl) || val(emailEl))) errEl.hidden = true;
    });
  });
})();
