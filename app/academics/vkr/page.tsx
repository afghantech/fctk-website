import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'ВКР',
  description: 'Раздел итоговых выпускных квалификационных работ.',
  path: '/academics/vkr',
});

export default function VkrPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">ВКР</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Раздел содержит материалы по подготовке и защите выпускных квалификационных работ студентов.
      </p>

      <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-6">
        <h2 className="text-xl font-bold text-slate-950">Материалы по ВКР</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700">
          <li className="rounded-xl bg-slate-50 px-4 py-3">Требования к структуре и оформлению ВКР</li>
          <li className="rounded-xl bg-slate-50 px-4 py-3">График этапов подготовки и защиты</li>
          <li className="rounded-xl bg-slate-50 px-4 py-3">Рекомендации по выбору темы и научного руководителя</li>
        </ul>
      </div>
    </section>
  );
}
