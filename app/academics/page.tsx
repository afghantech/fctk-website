import type { Metadata } from 'next';
import { ProgramCard } from '@/components/ProgramCard/ProgramCard';
import { programs } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Обучение',
  description: 'Направления подготовки, программы и учебные треки факультета ЦТМК ОмГУ.',
};

export default function AcademicsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
          Обучение
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Направления обучения</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}
