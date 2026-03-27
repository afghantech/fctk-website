import type { Metadata } from 'next';
import { Hero } from '@/components/Hero/Hero';
import { NewsBlock } from '@/components/NewsBlock/NewsBlock';

export const metadata: Metadata = {
  title: 'Главная',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsBlock />
    </>
  );
}
