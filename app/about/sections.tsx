'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type AboutSection = {
  slug: string;
  title: string;
  html: string;
  externalUrl?: string | null;
  order: number;
  published: boolean;
};

type Props = {
  sections: AboutSection[];
};

export default function AboutSections({ sections }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.slug === activeSlug) ?? null,
    [activeSlug, sections],
  );

  const handleToggle = (slug: string) => {
    setActiveSlug((current) => (current === slug ? null : slug));
  };

  const isExpanded = Boolean(activeSection);

  return (
    <section
      className={[
        'grid gap-4 transition-all duration-300',
        isExpanded ? 'min-h-[60vh] place-items-center' : 'md:grid-cols-2',
      ].join(' ')}
      aria-label="Разделы о факультете"
    >
      {sections.map((section) => {
        const isActive = section.slug === activeSlug;
        const isHidden = Boolean(activeSlug && !isActive);
        const panelId = `about-panel-${section.slug}`;
        const buttonId = `about-button-${section.slug}`;

        if (isHidden) return null;

        return (
          <article
            key={section.slug}
            className={[
              'w-full rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300',
              isExpanded ? 'mx-auto max-w-5xl md:p-8 lg:p-10' : '',
            ].join(' ')}
          >
            <h2 className="m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => handleToggle(section.slug)}
                aria-expanded={isActive}
                aria-controls={panelId}
                className={[
                  'flex w-full items-center justify-between gap-4 rounded-2xl text-left outline-none transition-colors',
                  'hover:bg-omsu-light/40 focus-visible:ring-2 focus-visible:ring-omsu-blue focus-visible:ring-offset-2',
                  isExpanded ? 'px-1 py-1' : 'px-0 py-0',
                ].join(' ')}
              >
                <span className="text-lg font-bold leading-7 text-omsu-black sm:text-xl">
                  {section.title}
                </span>

                <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border text-omsu-blue transition-all duration-200"
                >
                  {isActive ? '✕' : '+'}
                  </span>
              </button>
            </h2>

            {isActive ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="mt-6 space-y-5 text-sm leading-7 text-omsu-gray sm:text-base"
              >
                <div
                  className="prose prose-sm max-w-none prose-headings:scroll-mt-24 prose-a:text-omsu-blue prose-a:underline-offset-4 prose-strong:text-omsu-black"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />

                {section.externalUrl ? (
                  <div className="pt-2">
                    <Link
                      href={section.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-0 py-1 text-sm font-semibold text-omsu-blue underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omsu-blue focus-visible:ring-offset-2"
                      aria-label={`${section.title}: открыть внешнюю страницу в новой вкладке`}
                    >
                      Перейти на сайт
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                ) : null}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlug(null)}
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-omsu-black transition-colors hover:bg-omsu-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omsu-blue focus-visible:ring-offset-2"
                  >
                    Назад к разделам
                  </button>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}