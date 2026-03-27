import type { Metadata } from 'next';
import { ContactBlock } from '@/components/ContactBlock/ContactBlock';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Адрес, телефон и почта факультета ЦТМК ОмГУ.',
};

export default function ContactsPage() {
  return (
    <section className="py-10">
      <ContactBlock />
    </section>
  );
}
