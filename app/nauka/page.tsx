import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Наука',
  description: 'Научные события, проекты, публикации и конференции факультета ЦТМК ОмГУ.',
  path: '/nauka',
});

export default function NaukaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Наука</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">Разделы научной деятельности факультета:</p>
      <ul className="mt-6 space-y-3 text-base">
        <li>
          <Link href="/nauka/conf" className="font-semibold text-omsu-blue hover:underline">
            Научные конференции факультета
          </Link>
        </li>
        <li>
          <Link href="/nauka/sci_journ" className="font-semibold text-omsu-blue hover:underline">
            Научные журналы факультета
          </Link>
        </li>
      </ul>
    </section>
  );
}
