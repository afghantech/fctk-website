import Link from "next/link";

const programs = [
  { href: "/academics/pmi", title: "ПМИ", text: "Программная инженерия и математические основы." },
  { href: "/academics/ivt", title: "ИВТ", text: "Информатика и вычислительная техника." },
  { href: "/academics/master", title: "Магистратура", text: "Поступление, треки и требования." },
  { href: "/academics/aspir", title: "Аспирантура", text: "Научная траектория и документы." },
  { href: "/academics/vkr", title: "ВКР", text: "Темы, сроки и порядок защиты." },
];

export default function AcademicsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Обучение</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Раздел для всех образовательных направлений и материалов, связанных с учебным процессом.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <Link
            key={program.href}
            href={program.href}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-omsu-blue/30"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
              {program.title}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{program.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
