import type { Metadata } from 'next';
import { ContactBlock } from '@/components/ContactBlock/ContactBlock';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Контакты',
  description: 'Адрес, телефон и почта факультета ЦТМК ОмГУ.',
  path: '/contacts',
});

export default function ContactsPage() {
  return (
    <section className="py-10">
      <ContactBlock />
      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A614aa944b81508fc2b2bc0dedc3bd47f59e3cbe773e434a02ba3f2b7fea5eec7&source=constructor"
            width="100%"
            height="675"
            frameBorder="0"
            title="Карта расположения факультета"
          />
        </div>
      </div>
    </section>
  );
}
