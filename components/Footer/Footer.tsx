import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-omsu-gray">
          © {new Date().getFullYear()} ФЦТМК ОмГУ
          </p>
        </div>

        <div className="space-y-2 text-sm text-omsu-gray">
          <p className="font-semibold text-omsu-black">Разделы</p>
          <div className="flex flex-col gap-2">
            <Link href="/academics" className="hover:text-omsu-blue">
              Направления обучения
            </Link>
            <Link href="/nauka" className="hover:text-omsu-blue">
              Наука
            </Link>
            <Link href="/contacts" className="hover:text-omsu-blue">
              Контакты
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm text-omsu-gray">
          <p className="font-semibold text-omsu-black">Контакты</p>
          <p>644053, г. Омск, ул. Нефтезаводская 11</p>
          <p>fm@omsu.ru</p>
          <p>+7 (3812) 22-22-09, 22-46-04</p>
          <p><a href="https://vk.com/fctk_omsu" target="_blank" rel="noopener noreferrer">VK</a></p>
        </div>
      </div>
    </footer>
  );
}
