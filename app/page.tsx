import Link from "next/link";

const highlights = [
  {
    title: "Обучение",
    text: "Программы, учебные планы, магистратура, аспирантура и ВКР.",
    href: "/academics",
  },
  {
    title: "Наука",
    text: "Кафедры, конференции, публикации и студенческие исследования.",
    href: "/nauka",
  },
  {
    title: "Абитуриентам",
    text: "Понятный путь поступления: что сдавать, куда идти и как не потеряться.",
    href: "/abitur",
  },
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-omsu-blue-soft px-4 py-2 text-sm font-medium text-omsu-blue">
            ФЦТМК ОмГУ 
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Официальный сайт факультета цифровых технологий, математики и кибербезопасности ОмГУ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Здесь вы найдете информацию о факультете, его программах, научных исследованиях, абитуриентам и другим вопросам.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/academics"
              className="rounded-2xl bg-omsu-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-omsu-blue-dark"
            >
              Перейти к обучению
            </Link>
            <Link
              href="/contacts"
              className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-omsu-blue hover:text-omsu-blue"
            >
              Контакты
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
          <div className="rounded-2xl bg-white p-5">
            <div className="text-sm font-semibold text-omsu-blue">Фото сюда</div>
            <div className="mt-2 text-lg font-semibold text-slate-900"></div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-omsu-blue/30"
          >
            <h2 className="text-lg font-semibold text-slate-950 group-hover:text-omsu-blue">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
