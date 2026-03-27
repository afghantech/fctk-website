export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export type Program = {
  slug: string;
  title: string;
  degree: string;
  duration: string;
  format: string;
  description: string;
  highlights: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: '27 марта 2026',
    title: '🤖 Факультет цифровых технологий, математики и кибербезопасности ОмГУ — участник выставочной программы чемпионата по робототехнике «Иннотех».',
    excerpt:
      '',
    href: '/nauka',
  },
  {
    id: 'news-2',
    date: '27 марта 2026',
    title: '🔥 ОмГУ на «Цифровом хакатоне»',
    excerpt:
      '',
    href: '/nauka',
  },
  {
    id: 'news-3',
    date: '27 марта 2026',
    title: '🧑‍💻 В ОмГУ проходит интенсив «В ИТ в ОмГУ»',
    excerpt:
      '',
    href: '/nauka',
  },
];

export const programs: Program[] = [
  {
    slug: 'kb',
    title: 'Компьютерная безопасность',
    degree: 'Специалитет',
    duration: '5 лет 6 месяцев',
    format: 'Очная форма',
    description:
      'Готовим специалистов, способных проводить анализ защищенности компьютерных систем и разрабатывать подсистемы обеспечения информационной безопасности с использованием передовых технологий. IT-трек дисциплин программы дает необходимые компетенции в области программной разработки и цифровых технологий в целом.',
    highlights: ['Анализ угроз ИБ', 'Пентест', 'Разработка ПО'],
  },
  {
    slug: 'pmi',
    title: 'Прикладная математика и информатика',
    degree: 'Бакалавриат',
    duration: '4 года',
    format: 'Очная форма',
    description:
      'Программа направлена на подготовку программистов-разработчиков и специалистов в различных сферах информационных технологий. Программа предполагает глубокое сочетание специфики разработки ПО, математического моделирования и машинного обучения (Data Science, Big Data, искусственный интеллект и т.д.)',
    highlights: ['Системное программирование', 'Сети и ОС', 'Архитектура ЭВМ'],
  },
  {
    slug: 'ivt_m',
    title: 'Информатика и вычислительная техника',
    degree: 'Магистратура',
    duration: '2 года',
    format: 'Очная форма',
    description:
      'Современная магистерская программа с акцентом на ML, нейросети и работу с большими данными.',
    highlights: ['Machine Learning', 'Data Engineering', 'Applied AI'],
  },
  {
    slug: 'security',
    title: 'Математическое моделирование, численные методы и комплексы программ',
    degree: 'Аспирантура',
    duration: '3 года',
    format: 'Очная форма',
    description:
      'Подготовка специалистов по защите информации, анализу угроз и построению безопасных систем.',
    highlights: ['Защита информации', 'Кибербезопасность', 'Реверс-анализ'],
  },
];

export const contactInfo = {
  address: '644053, г. Омск, ул. Нефтезаводская 11',
  phone: '+7 (3812) 22-22-09, 22-46-04',
  email: 'fm@omsu.ru',
  officeHours: 'Пн–Пт, 09:00–17:00',
  mapHref: 'https://yandex.ru/maps/org/omgu_im_f_m_dostoyevskogo_fakultet_tsifrovykh_tekhnologiy_i_kiberbezopasnosti/180494969112/?ll=73.269604%2C55.030803&z=21',
};
