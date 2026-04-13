import type { Metadata } from 'next';
import { ProgramCard } from '@/components/ProgramCard/ProgramCard';
import { programs } from '@/lib/site-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Бакалавриат и специалитет',
  description: 'Программы бакалавриата и специалитета факультета ЦТМК ОмГУ.',
  path: '/academics/bakalavr',
});

export default function BakalavrPage() {
  const bakalavrPrograms = programs.filter((program) => program.category === 'bakalavr');

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Бакалавриат и специалитет</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Программы базового высшего образования по математике, информатике, разработке ПО и
        кибербезопасности.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {bakalavrPrograms.map((program) => (
          <ProgramCard key={program.slug} program={program} basePath="/academics/bakalavr" />
        ))}
      </div>
    </section>
  );
}
