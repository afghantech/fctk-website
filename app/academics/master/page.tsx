import type { Metadata } from 'next';
import { ProgramCard } from '@/components/ProgramCard/ProgramCard';
import { programs } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Магистратура',
  description: 'Программы магистратуры факультета ЦТМК ОмГУ.',
};

export default function MasterPage() {
  const masterPrograms = programs.filter((program) => program.category === 'master');

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Магистратура</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Программы углубленной подготовки для развития исследовательских и инженерных компетенций в
        ИТ и прикладной математике.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {masterPrograms.map((program) => (
          <ProgramCard key={program.slug} program={program} basePath="/academics/master" />
        ))}
      </div>
    </section>
  );
}
