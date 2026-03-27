import Link from 'next/link';
import type { Program } from '@/lib/site-data';

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-omsu-blue">
        {program.degree}
      </p>
      <h3 className="mt-3 text-xl font-bold leading-7 text-slate-950">{program.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {program.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm text-slate-600">
        <span>{program.duration}</span>
        <span>{program.format}</span>
      </div>

      <Link
        href={`/academics/${program.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-omsu-blue"
      >
        Открыть программу →
      </Link>
    </article>
  );
}
