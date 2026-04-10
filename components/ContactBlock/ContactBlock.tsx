import Link from 'next/link';
import { contactInfo } from '@/lib/site-data';

export function ContactBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2rem] border border-border bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
        <div>

          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Контакты и адрес
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <p><span className="font-semibold text-slate-900">Адрес:</span> {contactInfo.address}</p>
            <p><span className="font-semibold text-slate-900">Телефон:</span> {contactInfo.phone}</p>
            <p><span className="font-semibold text-slate-900">Почта:</span> {contactInfo.email}</p>
            <p><span className="font-semibold text-slate-900">Часы:</span> {contactInfo.officeHours}</p>
          </div>
        </div>

        <Link
          href={contactInfo.mapHref}
          target="_blank"
          className="inline-flex rounded-2xl bg-omsu-Blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-omsu-Blue-Dark"
        >
          Открыть карту
        </Link>
      </div>
    </section>
  );
}
