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

describe('getFacultyStructureUnits', () => {
  beforeEach(() => {
    mockedReadFile.mockReset();
    mockedReaddir.mockReset();
  });

  it('читает structure-*.md, сортирует по order и нормализует сотрудников', async () => {
    const { getFacultyStructureUnits } = await import('@/lib/content');

    mockedReaddir.mockResolvedValue([
      file('structure-chair-is.md'),
      file('structure-deanery.md'),
      file('about-faculty.md'),
    ] as any);

    mockedReadFile.mockImplementation(async (filePath) => {
      const path = String(filePath);

      if (path.endsWith('structure-deanery.md')) {
        return `---
title: Деканат
order: 2
published: true
unitType: deanery
employees:
  - fullName: Иванов Иван Иванович
    position: Декан
    phone: "+7 000"
    email: dean@example.com
    isLeader: true
    photoSrc: "/images/staff/dean.jpg"
  - fullName: Петров Петр Петрович
    position: Секретарь
    phone: "+7 001"
    email: secretary@example.com
    isLeader: false
    photoSrc: "/images/staff/should-not-be-used.jpg"
---`;
      }

      if (path.endsWith('structure-chair-is.md')) {
        return `---
title: Кафедра ИБ
order: 1
published: true
unitType: department
employees:
  - fullName: Сидоров Сергей
    position: Заведующий кафедрой
    phone: "+7 010"
    email: head@example.com
    isLeader: true
    photoSrc: "/images/staff/head.jpg"
---`;
      }

      throw new Error(`Unexpected file: ${path}`);
    });

    const units = await getFacultyStructureUnits();

    expect(units).toHaveLength(2);
    expect(units[0].title).toBe('Кафедра ИБ');
    expect(units[1].title).toBe('Деканат');

    expect(units[1].employees).toHaveLength(2);
    expect(units[1].employees[0]).toMatchObject({
      fullName: 'Иванов Иван Иванович',
      isLeader: true,
      photoSrc: '/images/staff/dean.jpg',
    });
    expect(units[1].employees[1]).toMatchObject({
      fullName: 'Петров Петр Петрович',
      isLeader: false,
      photoSrc: undefined,
    });
  });

  it('фильтрует unpublished', async () => {
    const { getFacultyStructureUnits } = await import('@/lib/content');

    mockedReaddir.mockResolvedValue([file('structure-deanery.md')] as any);
    mockedReadFile.mockResolvedValue(`---
title: Деканат
order: 1
published: false
unitType: deanery
employees: []
---` as any);

    await expect(getFacultyStructureUnits()).resolves.toEqual([]);
  });

  it('getAboutSections читает markdown и конвертирует в html', async () => {
    const { getAboutSections } = await import('@/lib/content');

    mockedReaddir.mockResolvedValue([file('about-faculty.md'), file('structure-deanery.md')] as any);
    mockedReadFile.mockImplementation(async (filePath) => {
      const path = String(filePath);
      if (path.endsWith('about-faculty.md')) {
        return `---
title: О факультете
order: 2
published: true
---

Текст` as any;
      }
      if (path.endsWith('structure-deanery.md')) {
        return `---
title: Деканат
order: 1
published: true
unitType: deanery
employees: []
---` as any;
      }
      throw new Error(`Unexpected file: ${path}`);
    });

    const sections = await getAboutSections();
    expect(sections).toHaveLength(1);
    expect(sections[0]).toMatchObject({
      slug: 'about-faculty',
      title: 'О факультете',
      order: 2,
      published: true,
      html: '<p>mocked-html</p>',
    });
  });
});
