import type { Metadata } from 'next';
import { Hero } from '@/components/Hero/Hero';
import { NewsBlock } from '@/components/NewsBlock/NewsBlock';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Главная',
  description: 'Официальный сайт факультета ЦТМК ОмГУ: обучение, наука, новости и контакты.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsBlock />
    </>
  );
}
