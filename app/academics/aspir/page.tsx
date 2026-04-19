import type { Metadata } from 'next';
import { ProgramCard } from '@/components/ProgramCard/ProgramCard';
import { getProgramsByCategory } from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Аспирантура',
  description: 'Программы аспирантуры факультета ЦТМК ОмГУ.',
  path: '/academics/aspir',
});

export default async function AspirPage() {
  const aspirPrograms = await getProgramsByCategory('aspir');

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Аспирантура</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Подготовка научно-педагогических кадров по направлениям компьютерных наук,
        телекоммуникаций и теоретической информатики.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {aspirPrograms.map((program) => (
          <ProgramCard key={program.slug} program={program} basePath="/academics/aspir" />
        ))}
      </div>
    </section>
  );
}
