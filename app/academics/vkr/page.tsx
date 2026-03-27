import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ВКР',
};

export default function VkrPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">ВКР</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
      </p>
    </section>
  );
}
