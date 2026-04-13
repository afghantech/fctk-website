'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationProvider, useNavigation } from '@/components/Navigation/NavigationContext';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/academics', label: 'Обучение' },
  { href: '/nauka', label: 'Наука' },
  { href: 'https://abit.omsu.ru/', label: 'Абитуриентам', external: true },
  { href: '/contacts', label: 'Контакты' },
];

function HeaderShell() {
  const pathname = usePathname();
  const { isOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="https://omsu.ru/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть сайт ОмГУ"
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-soft"
          >
            <Image src="/images/logo-omsu.png" alt="Логотип ОмГУ" width={44} height={44} className="h-11 w-11 object-contain" />
          </Link>
          <Link href="/" className="flex flex-col leading-tight" onClick={closeMenu}>
            <span className="text-sm text-omsu-gray">ФАКУЛЬТЕТ ЦИФРОВЫХ ТЕХНОЛОГИЙ, <br />МАТЕМАТИКИ И КИБЕРБЕЗОПАСНОСТИ</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.external
              ? false
              : item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium',
                  active
                    ? 'bg-omsu-blue text-white'
                    : 'text-omsu-gray hover:bg-black/5 hover:text-omsu-blue'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-omsu-blue shadow-sm transition hover:bg-black/5 lg:hidden"
        >
          <span className="sr-only">Меню</span>
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const active = item.external
                ? false
                : item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium',
                    active
                      ? 'bg-omsu-blue text-white'
                      : 'bg-black/5 text-omsu-gray hover:bg-black/10 hover:text-omsu-blue'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Header() {
  return (
    <NavigationProvider>
      <HeaderShell />
    </NavigationProvider>
  );
}
