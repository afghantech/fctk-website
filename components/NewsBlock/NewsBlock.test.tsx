import { render, screen, within } from '@testing-library/react';
import { NewsBlock } from './NewsBlock';
import { getAllNews } from '@/lib/content';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('@/lib/content', () => ({
  getAllNews: jest.fn(),
}));

describe('NewsBlock', () => {
  const mockedGetAllNews = getAllNews as jest.MockedFunction<typeof getAllNews>;

  it('рендерит только 3 последние новости и ссылку на все новости', async () => {
    mockedGetAllNews.mockResolvedValue([
      {
          slug: 'news-1',
          date: '2026-04-01',
          title: 'Новость 1',
          excerpt: 'Описание 1',
          href: '/news/news-1',
          order: 0,
          published: false
      },
      {
          slug: 'news-2',
          date: '2026-04-02',
          title: 'Новость 2',
          excerpt: 'Описание 2',
          href: '/news/news-2',
          order: 0,
          published: false
      },
      {
          slug: 'news-3',
          date: '2026-04-03',
          title: 'Новость 3',
          excerpt: 'Описание 3',
          href: '/news/news-3',
          order: 0,
          published: false
      },
      {
          slug: 'news-4',
          date: '2026-04-04',
          title: 'Новость 4',
          excerpt: 'Описание 4',
          href: '/news/news-4',
          order: 0,
          published: false
      },
    ]);

    const ui = await NewsBlock();
    render(ui);

    expect(screen.getByRole('heading', { name: 'Последние новости' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Все новости' })).toHaveAttribute('href', '/news');

    expect(screen.getByText('Новость 1')).toBeInTheDocument();
    expect(screen.getByText('Новость 2')).toBeInTheDocument();
    expect(screen.getByText('Новость 3')).toBeInTheDocument();
    expect(screen.queryByText('Новость 4')).not.toBeInTheDocument();

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });

  it('ведет ссылки на страницы новостей', async () => {
    mockedGetAllNews.mockResolvedValue([
      {
          slug: 'news-1',
          date: '2026-04-01',
          title: 'Новость 1',
          excerpt: 'Описание 1',
          href: '/news/news-1',
          order: 0,
          published: false
      },
      {
          slug: 'news-2',
          date: '2026-04-02',
          title: 'Новость 2',
          excerpt: 'Описание 2',
          href: '/news/news-2',
          order: 0,
          published: false
      },
      {
          slug: 'news-3',
          date: '2026-04-03',
          title: 'Новость 3',
          excerpt: 'Описание 3',
          href: '/news/news-3',
          order: 0,
          published: false
      },
    ]);
  
    const ui = await NewsBlock();
    render(ui);
  
    const links = screen.getAllByRole('link', { name: /подробнее/i });
  
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', '/news/news-1');
    expect(links[1]).toHaveAttribute('href', '/news/news-2');
    expect(links[2]).toHaveAttribute('href', '/news/news-3');
  });
});