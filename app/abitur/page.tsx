import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Абитуриентам',
  description: 'Переход на официальный портал приемной комиссии ОмГУ.',
  path: '/abitur',
});

export default function AbiturPage() {
  redirect('https://abit.omsu.ru/');
}
