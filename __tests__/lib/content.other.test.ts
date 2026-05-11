jest.mock('node:fs/promises', () => ({
  readFile: jest.fn(),
  readdir: jest.fn(),
}));

jest.mock('remark', () => ({
  remark: () => ({
    use: () => ({
      process: async () => ({
        toString: () => '<p>mocked-html</p>',
      }),
    }),
  }),
}));

jest.mock('remark-html', () => ({}));

import { readFile, readdir } from 'node:fs/promises';

const mockedReadFile = readFile as jest.MockedFunction<typeof readFile>;
const mockedReaddir = readdir as jest.MockedFunction<typeof readdir>;

function file(name: string) {
  return { name, isFile: () => true } as unknown as { name: string; isFile: () => boolean };
}

describe('content loaders', () => {
  beforeEach(() => {
    mockedReadFile.mockReset();
    mockedReaddir.mockReset();
  });

  it('getAllNews фильтрует published и сортирует по order', async () => {
    const { getAllNews } = await import('@/lib/content');

    mockedReaddir.mockImplementation(async (dirPath) => {
      const dir = String(dirPath);
      if (dir.endsWith('/content/news')) return [file('b.md'), file('a.md')] as any;
      return [];
    });

    mockedReadFile.mockImplementation(async (filePath) => {
      const p = String(filePath);
      if (p.endsWith('/content/news/a.md')) {
        return `---
title: A
date: 2026-01-01
excerpt: ea
href: /news/a
order: 2
published: true
---` as any;
      }
      if (p.endsWith('/content/news/b.md')) {
        return `---
title: B
date: 2026-01-02
excerpt: eb
href: /news/b
order: 1
published: false
---` as any;
      }
      throw new Error(`Unexpected file: ${p}`);
    });

    const news = await getAllNews();
    expect(news).toHaveLength(1);
    expect(news[0]).toMatchObject({ slug: 'a', title: 'A', href: '/news/a' });
  });

  it('getProgramsByCategory и getProgramBySlug работают и фильтруют unpublished', async () => {
    const { getProgramsByCategory, getProgramBySlug } = await import('@/lib/content');

    mockedReaddir.mockImplementation(async (dirPath) => {
      const dir = String(dirPath);
      if (dir.endsWith('/content/programs/bakalavr')) return [file('p1.md'), file('p2.md')] as any;
      return [];
    });

    mockedReadFile.mockImplementation(async (filePath) => {
      const p = String(filePath);
      if (p.endsWith('/content/programs/bakalavr/p1.md')) {
        return `---
title: Программа 1
code: 01.01.01
degree: Бакалавриат
format: Очная
profile: Профиль
description: desc
order: 2
published: true
outcomes: [a]
careers: [b]
subjects: [c]
---` as any;
      }
      if (p.endsWith('/content/programs/bakalavr/p2.md')) {
        return `---
title: Программа 2
published: false
---` as any;
      }
      throw new Error(`Unexpected file: ${p}`);
    });

    const programs = await getProgramsByCategory('bakalavr');
    expect(programs).toHaveLength(1);
    expect(programs[0].slug).toBe('p1');

    const bySlug = await getProgramBySlug('bakalavr', 'p1');
    expect(bySlug?.title).toBe('Программа 1');
    const missing = await getProgramBySlug('bakalavr', 'missing');
    expect(missing).toBeNull();
  });
});
