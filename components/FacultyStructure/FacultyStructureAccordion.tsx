'use client';

import { useId, useState } from 'react';
import type { FacultyStructureUnit } from '@/lib/content';

type Props = {
  units: FacultyStructureUnit[];
};

function normalizePhone(phone: string): string {
  return phone.replace(/\s+/g, ' ').trim();
}

export function FacultyStructureAccordion({ units }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section aria-label="Структура факультета" className="space-y-3">
      {units.map((unit) => {
        const isActive = unit.slug === activeSlug;
        const buttonId = `${baseId}-faculty-structure-button-${unit.slug}`;
        const panelId = `${baseId}-faculty-structure-panel-${unit.slug}`;

        return (
          <article
            key={unit.slug}
            className="rounded-2xl border border-border bg-white px-4 py-4 shadow-sm sm:px-5"
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => setActiveSlug((current) => (current === unit.slug ? null : unit.slug))}
                aria-expanded={isActive}
                aria-controls={panelId}
                className={[
                  'flex w-full items-center justify-between gap-4 rounded-xl text-left outline-none transition-colors',
                  'hover:bg-omsu-light/40 focus-visible:ring-2 focus-visible:ring-omsu-blue focus-visible:ring-offset-2',
                  'px-3 py-2',
                ].join(' ')}
              >
                <span className="text-base font-semibold leading-6 text-omsu-black sm:text-lg">
                  {unit.title}
                </span>

                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border text-omsu-blue transition-all duration-200"
                >
                  {isActive ? '✕' : '+'}
                </span>
              </button>
            </h3>

            {isActive ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="mt-4 space-y-3 text-sm leading-6 text-omsu-gray sm:text-base"
              >
                {unit.employees.map((employee) => {
                  const showPhoto = employee.isLeader && employee.photoSrc;

                  return (
                    <div
                      key={`${unit.slug}-${employee.fullName}`}
                      className="rounded-xl border border-border/70 bg-omsu-light/20 p-4"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                        {showPhoto ? (
                          <img
                            src={employee.photoSrc}
                            draggable={true}
                            style={{
                              marginLeft: '0px',
                              marginRight: '0px',
                              marginTop: '0px',
                              marginBottom: '-4px',
                              textAlign: 'start',
                              textIndent: '0px',
                              display: 'inline',
                            }}
                            className="h-75 w-75 rounded-xl object-cover"
                            alt={employee.fullName}
                          />
                        ) : null}

                        <div className="min-w-0">
                          <p className="m-0 font-semibold text-omsu-black">{employee.fullName}</p>
                          <p className="m-0 text-omsu-gray">{employee.position}</p>

                          <dl className="mt-3 flex flex-col gap-4">
                            <div className="flex min-w-0 flex-col gap-1.5">
                              <dt className="text-xs font-semibold uppercase leading-4 tracking-wide text-omsu-gray/80">
                                Телефон
                              </dt>
                              <dd className="m-0 min-w-0">
                                <a
                                  className="inline-block max-w-full break-words leading-relaxed text-omsu-blue underline-offset-4 hover:underline"
                                  href={`tel:${normalizePhone(employee.phone)}`}
                                >
                                  {employee.phone}
                                </a>
                              </dd>
                            </div>

                            <div className="flex min-w-0 flex-col gap-1.5">
                              <dt className="text-xs font-semibold uppercase leading-4 tracking-wide text-omsu-gray/80">
                                Почта
                              </dt>
                              <dd className="m-0 min-w-0">
                                <a
                                  className="inline-block max-w-full break-all leading-relaxed text-omsu-blue underline-offset-4 hover:underline sm:break-words"
                                  href={`mailto:${employee.email}`}
                                >
                                  {employee.email}
                                </a>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}

