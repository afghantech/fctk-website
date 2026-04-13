import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { getSiteUrl } from '@/lib/seo';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const siteUrl = getSiteUrl();
const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Факультет ЦТМК — ОмГУ',
    template: '%s | ФЦТМК ОмГУ',
  },
  description:
    'Официальный сайт факультета ЦТМК ОмГУ: направления обучения, новости, наука и контакты.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ФЦТМК ОмГУ',
    title: 'Факультет ЦТМК — ОмГУ',
    description:
      'Официальный сайт факультета ЦТМК ОмГУ: направления обучения, новости, наука и контакты',
    images: [
      {
        url: '/images/campus-hero.png',
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
    images: ['/images/campus-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metrikaTagSrc = yandexMetrikaId
    ? `https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaId}`
    : '';
  const metrikaWatchSrc = yandexMetrikaId
    ? `https://mc.yandex.ru/watch/${yandexMetrikaId}`
    : '';

  return (
    <html lang="ru">
      <body className={`${roboto.variable} font-sans min-h-screen flex flex-col`}>
        {yandexMetrikaId ? (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`
                (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','${metrikaTagSrc}', 'ym');

                ym(${yandexMetrikaId}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
              `}
            </Script>
            <noscript>
              <div>
                <img src={metrikaWatchSrc} style={{ position: 'absolute', left: '-9999px' }} alt="" />
              </div>
            </noscript>
          </>
        ) : null}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
