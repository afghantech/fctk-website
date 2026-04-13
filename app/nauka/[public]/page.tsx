import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildPageMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ public: string }>;
};

const conferenceItems = [
  'Ежегодная Международная научная конференция "Математическое и компьютерное моделирование"',
  'Ежегодная Всероссийская научно-практическая конференция "Методика преподавания математических и естественно-научных дисциплин: современные проблемы и тенденции развития"',
  'Ежегодная Региональная конференция магистрантов, аспирантов и молодых ученых по физике, математике и химии "ФМХ ОмГУ"',
];

const journalItems = [
  {
    title:
      'Математические структуры и моделирование',
    href: 'http://msm.omsu.ru/',
    description: 'Входит в ПЕРЕЧЕНЬ ВАК журналов как индексируемый в MathSciNet и zbMATH.',
  },
  {
    title: 'Другие журналы университета',
    href: 'https://omsu.ru/science/nauchnye-izdaniya-omgu/nauchnaya-periodika/',
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { public: publicSlug } = await params;

  if (publicSlug === 'conf') {
    return buildPageMetadata({
      title: 'Научные конференции факультета',
      description: 'Перечень научных конференций факультета.',
      path: '/nauka/conf',
    });
  }

  if (publicSlug === 'sci_journ') {
    return buildPageMetadata({
      title: 'Научные журналы факультета',
      description: 'Перечень научных журналов факультета и университета.',
      path: '/nauka/sci_journ',
    });
  }

  return buildPageMetadata({
    title: 'Страница не найдена',
    description: 'Запрошенная страница раздела науки не найдена.',
    path: '/nauka',
  });
}

export default async function NaukaPublicPage({ params }: PageProps) {
  const { public: publicSlug } = await params;

  if (publicSlug === 'conf') {
    return (
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Научные конференции факультета</h1>
        <ul className="mt-6 space-y-3">
          {conferenceItems.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-white px-4 py-3 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (publicSlug === 'sci_journ') {
    return (
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Научные журналы факультета</h1>
        <ul className="mt-6 space-y-3">
          {journalItems.map((item) => (
            <li key={item.href} className="rounded-xl border border-border bg-white px-4 py-3 text-slate-700">
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-omsu-blue hover:underline"
              >
                {item.title}
              </Link>
              {item.title === 'Математические структуры и моделирование' && ( 
        <span className="ml-1 text-slate-600">
          <br />
          Входит в ПЕРЕЧЕНЬ ВАК журналов как индексируемый в MathSciNet и zbMATH.
        </span>
      )}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  notFound();
}
