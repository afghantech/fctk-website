import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs } from '@/lib/site-data';

type PageProps = {
  params: Promise<{ program: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { program: slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) return { title: 'Программа не найдена' };

  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { program: slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
        Направление обучения
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">{program.title}</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{program.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.5rem] border border-border bg-white p-5">
          <p className="text-sm text-slate-500">Уровень</p>
          <p className="mt-2 text-lg font-semibold text-slate-950">{program.degree}</p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-white p-5">
          <p className="text-sm text-slate-500">Длительность</p>
          <p className="mt-2 text-lg font-semibold text-slate-950">{program.duration}</p>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-white p-5">
          <p className="text-sm text-slate-500">Форма</p>
          <p className="mt-2 text-lg font-semibold text-slate-950">{program.format}</p>
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Что изучают</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {program.highlights.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
