import type { Metadata } from 'next';
import { ProgramCard } from '@/components/ProgramCard/ProgramCard';
import { getProgramsByCategory } from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Магистратура',
  description: 'Программы магистратуры факультета ЦТМК ОмГУ.',
  path: '/academics/master',
});

export default async function MasterPage() {
  const masterPrograms = await getProgramsByCategory('master');

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
