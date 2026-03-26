import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-omsu-blue">
            ФЦТМК ОмГУ
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Фундамент для сайта факультета.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Разделы</div>
          <div className="mt-3 grid gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-omsu-blue"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Контакты</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Адрес факультета: 644053, г. Омск, ул. Нефтезаводская 11
            <br />
            Электронная почта: fm@omsu.ru
            <br />
            Телефоны: +7 (3812) 22-22-09, 22-46-04
            <br />
            <a href="https://vk.com/fctk_omsu" target="_blank" rel="noopener noreferrer">VK</a>
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} ФЦТМК ОмГУ</span>
          <span>Разработка и техническая поддержка - Парни из Сочи</span>
        </div>
      </div>
    </footer>
  );
}
