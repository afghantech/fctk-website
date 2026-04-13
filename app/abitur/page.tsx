import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Абитуриентам',
  description: 'Переход на официальный портал приемной комиссии ОмГУ.',
};

export default function AbiturPage() {
  redirect('https://abit.omsu.ru/');
}
