import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css'
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Факультет ЦТМК — ОмГУ',
    template: '%s | ФЦТМК ОмГУ',
  },
  description:
    'Официальный сайт факультета ЦТМК ОмГУ: направления обучения, новости, наука, контакты и информация для абитуриентов.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ФЦТМК ОмГУ',
    title: 'Факультет ЦТМК — ОмГУ',
    description:
      'Официальный сайт факультета ЦТМК ОмГУ: направления обучения, новости, наука, контакты и информация для абитуриентов.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ФЦТМК ОмГУ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Факультет ФЦТМК — ОмГУ',
    description:
      'Официальный сайт факультета ЦТМК ОмГУ: направления обучения, новости, наука, контакты и информация для абитуриентов.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
