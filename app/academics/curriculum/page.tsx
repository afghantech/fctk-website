import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Учебные планы',
  description: 'Документы и материалы по образовательным программам факультета ЦТМК ОмГУ.',
};

export default function CurriculumPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Учебные планы</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        В этом разделе размещаются учебные планы по программам бакалавриата, специалитета,
        магистратуры и аспирантуры.
      </p>

      <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Документы и материалы</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700">
          <li className="rounded-xl bg-slate-50 px-4 py-3">Учебные планы (по направлениям подготовки)</li>
          <li className="rounded-xl bg-slate-50 px-4 py-3">Рабочие программы дисциплин</li>
          <li className="rounded-xl bg-slate-50 px-4 py-3">Календарные учебные графики</li>
        </ul>
      </div>
    </section>
  );
}
