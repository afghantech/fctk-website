import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Обучение',
  description: 'Направления подготовки, программы и учебные треки факультета ЦТМК ОмГУ.',
  path: '/academics',
});

export default function AcademicsPage() {
  const sections = [
    {
      title: 'Формы и уровни обучения',
      links: [
        { href: '/academics/bakalavr', label: 'Бакалавриат и специалитет' },
        { href: '/academics/master', label: 'Магистратура' },
        { href: '/academics/aspir', label: 'Аспирантура' },
      ],
    },
    {
      title: 'Документы и материалы',
      links: [{ href: '/academics/curriculum', label: 'Учебные планы' }],
    },
    {
      title: 'Итоговые работы',
      links: [{ href: '/academics/vkr', label: 'ВКР' }],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
          Обучение
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Направления обучения</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Выберите уровень подготовки, перейдите к учебным материалам или откройте раздел итоговых
          работ.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.5rem] border border-border bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
            <div className="mt-4 flex flex-col gap-3">
              {section.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-omsu-blue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
