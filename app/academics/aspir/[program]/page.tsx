import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs } from '@/lib/site-data';

type PageProps = {
  params: Promise<{ program: string }>;
};

const category = 'aspir';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { program: slug } = await params;
  const program = programs.find((item) => item.category === category && item.slug === slug);

  if (!program) return { title: 'Программа не найдена' };

  return {
    title: `${program.title} (${program.profile})`,
    description: program.description,
  };
}

export default async function AspirProgramPage({ params }: PageProps) {
  const { program: slug } = await params;
  const program = programs.find((item) => item.category === category && item.slug === slug);

  if (!program) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
        {program.degree}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">{program.title}</h1>
      <p className="mt-2 text-base text-slate-600">
        {program.code} · {program.profile}
      </p>

      <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Описание программы</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">{program.description}</p>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Чему научишься</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {program.outcomes.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Карьерные перспективы</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {program.careers.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Профильные предметы</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {program.subjects.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
