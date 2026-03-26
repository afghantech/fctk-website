"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/navigation";
import { useUI } from "@/components/providers/ui-context";

function isActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUI();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-omsu-blue/30"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-omsu-blue text-sm font-bold text-white shadow-soft">
            Ф
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-omsu-blue">
              ФЦТМК
            </div>
            <div className="text-sm text-slate-500">ОмГУ имени Ф. М. Достоевского</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-omsu-blue text-white shadow-soft"
                    : "text-slate-700 hover:bg-omsu-blue-soft hover:text-omsu-blue",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 p-3 text-omsu-blue transition hover:bg-omsu-blue-soft lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span className="sr-only">{mobileMenuOpen ? "Закрыть" : "Открыть"} меню</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "lg:hidden",
          mobileMenuOpen ? "block border-t border-slate-200 bg-white" : "hidden",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-2">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href, item.exact);
              return (
                <div key={item.href} className="rounded-2xl border border-slate-200">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium",
                      active
                        ? "bg-omsu-blue text-white"
                        : "bg-white text-slate-800 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {item.label}
                    {item.children ? <span className="text-xs opacity-70">раздел</span> : null}
                  </Link>

                  {item.children ? (
                    <div className="border-t border-slate-200 bg-slate-50 px-3 py-2">
                      <div className="grid gap-1">
                        {item.children.map((child) => {
                          const childActive = isActive(pathname, child.href, child.exact);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className={[
                                "rounded-xl px-3 py-2 text-sm transition",
                                childActive
                                  ? "bg-omsu-blue text-white"
                                  : "text-slate-700 hover:bg-white hover:text-omsu-blue",
                              ].join(" ")}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
