import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Наука',
  description: 'Научные события, проекты, публикации и конференции факультета ЦТМК ОмГУ.',
};

export default function NaukaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Наука</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
      </p>
      <Link href="/nauka/conferences" className="mt-6 inline-flex font-semibold text-omsu-blue">
        Перейти к конференциям →
      </Link>
    </section>
  );
}
