import Link from 'next/link';
import { newsItems } from '@/lib/site-data';

export function NewsBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
            Новости
          </p>
          <h2 className="mt-2 text-2xl font-bold text-omsu-black sm:text-3xl">
            Последние новости
          </h2>
        </div>
        <Link href="/news" className="text-sm font-semibold text-omsu-blue hover:text-omsu-blue-dark">
          Все новости
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-sm font-medium text-omsu-gray">{item.date}</p>
            <h3 className="mt-3 text-lg font-bold leading-7 text-omsu-black">{item.title}</h3>
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
