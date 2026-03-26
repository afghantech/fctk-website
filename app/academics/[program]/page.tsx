import { notFound } from "next/navigation";

const programContent: Record<string, { title: string; lead: string; body: string[] }> = {
  pmi: {
    title: "ПМИ",
    lead: "Страница программы «Прикладная математика и информатика».",
    body: [
      "Здесь позже удобно разместить учебный план, список дисциплин, кафедры и контакты кураторов.",
      "Каркас уже готов под Markdown-контент или CMS, поэтому наполнение можно подключить без переписывания маршрута.",
    ],
  },
  ivt: {
    title: "ИВТ",
    lead: "Страница программы «Информатика и вычислительная техника».",
    body: [
      "Подойдёт для описания профиля, результатов обучения, практик и карьерных треков.",
      "Можно добавить блоки с документами, FAQ и новостями направления.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(programContent).map((program) => ({ program }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program } = await params;
  const data = programContent[program];

  if (!data) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-omsu-blue">
          Направление подготовки
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">{data.title}</h1>
        <p className="mt-4 text-slate-600">{data.lead}</p>

        <div className="mt-8 grid gap-4">
          {data.body.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
