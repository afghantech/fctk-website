import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { UIProvider } from "@/components/providers/ui-context";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ФЦТМК ОмГУ",
    template: "%s | ФЦТМК ОмГУ",
  },
  description: "Официальный сайт факультета цифровых технологий, математики и кибербезопасности ОмГУ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <UIProvider>
          <div className="min-h-screen bg-white text-slate-900">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
