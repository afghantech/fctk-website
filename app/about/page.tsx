import type { Metadata } from 'next';
import { getAboutSections } from '@/lib/content';
import { buildPageMetadata } from '@/lib/seo';
import AboutSections from './sections';

export const metadata: Metadata = buildPageMetadata({
  title: 'Факультет',
  description: 'О факультете, его структуре и ключевых образовательных проектах.',
  path: '/about',
});

export default async function AboutPage() {
  const sections = (await getAboutSections())
    .filter((section) => section.published)
    .sort((a, b) => a.order - b.order);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-omsu-blue">
          Факультет
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-omsu-gray">
          О факультете, его структуре и ключевых образовательных проектах.
        </p>
      </header>

      <AboutSections sections={sections} />
    </main>
  );
}