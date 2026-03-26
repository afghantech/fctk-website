export type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Главная", exact: true },
  {
    href: "/academics",
    label: "Обучение",
    children: [
      { href: "/academics/pmi", label: "ПМИ" },
      { href: "/academics/ivt", label: "ИВТ" },
      { href: "/academics/master", label: "Магистратура" },
      { href: "/academics/aspir", label: "Аспирантура" },
      { href: "/academics/vkr", label: "ВКР" },
    ],
  },
  { href: "/nauka", label: "Наука" },
  { href: "/abitur", label: "Абитуриентам" },
  { href: "/contacts", label: "Контакты" },
];
