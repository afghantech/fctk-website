import Link from "next/link";

export default function NaukaPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Наука</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Раздел для научных подразделений, проектов, публикаций и конференций.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/nauka/conferences"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:border-omsu-blue/30"
        >
          <h2 className="text-lg font-semibold text-slate-950">Конференции</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Календарь событий, сборники и информация об участии.
          </p>
        </Link>
      </div>
    </section>
  );
}
