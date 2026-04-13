import type { Metadata } from 'next';
import Link from 'next/link';
import { newsItems } from '@/lib/site-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Новости',
  description: 'Актуальные новости факультета цифровых технологий, математики и кибербезопасности ОмГУ.',
  path: '/news',
});

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">Новости</p>
        <h1 className="mt-2 text-3xl font-bold text-omsu-black sm:text-4xl">Все новости</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-sm font-medium text-omsu-gray">{item.date}</p>
            <h2 className="mt-3 text-lg font-bold leading-7 text-omsu-black">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-omsu-gray">{item.excerpt}</p>
            <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-omsu-blue">
              Подробнее →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
