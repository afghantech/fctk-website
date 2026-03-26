export const metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-950">Контакты</h1>
      <p className="mt-4 leading-7 text-slate-600">
        Здесь разместятся адрес, телефон, почта и схема проезда.
      </p>
    </section>
  );
}
