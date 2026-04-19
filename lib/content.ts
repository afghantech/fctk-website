import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export type ProgramCategory = 'bakalavr' | 'master' | 'aspir';

export type ProgramContent = {
  category: ProgramCategory;
  slug: string;
  title: string;
  code: string;
  degree: string;
  format: string;
  profile: string;
  description: string;
  outcomes: string[];
  careers: string[];
  subjects: string[];
  order: number;
  published: boolean;
};

export type NewsContent = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  order: number;
  published: boolean;
};

export type AboutSectionContent = {
  slug: string;
  title: string;
  order: number;
  published: boolean;
  externalUrl?: string;
  html: string;
};

const CONTENT_ROOT = path.join(process.cwd(), 'content');

async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(remarkHtml).process(markdown);
  return processed.toString();
}

async function getMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.join(directory, entry.name));
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

function normalizeNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' ? value : fallback;
}

function normalizeBoolean(value: unknown, fallback = true): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

export async function getAllNews(): Promise<NewsContent[]> {
  const directory = path.join(CONTENT_ROOT, 'news');
  const files = await getMarkdownFiles(directory);

  const news = await Promise.all(
    files.map(async (filePath, index) => {
      const source = await readFile(filePath, 'utf8');
      const { data } = matter(source);
      const slug = path.basename(filePath, '.md');

      return {
        slug,
        title: typeof data.title === 'string' ? data.title : slug,
        date: typeof data.date === 'string' ? data.date : '',
        excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
        href: typeof data.href === 'string' ? data.href : '/news',
        order: normalizeNumber(data.order, index),
        published: normalizeBoolean(data.published),
      } satisfies NewsContent;
    })
  );

  return news
    .filter((item) => item.published)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'ru'));
}

export async function getProgramsByCategory(category: ProgramCategory): Promise<ProgramContent[]> {
  const directory = path.join(CONTENT_ROOT, 'programs', category);
  const files = await getMarkdownFiles(directory);

  const programs = await Promise.all(
    files.map(async (filePath, index) => {
      const source = await readFile(filePath, 'utf8');
      const { data } = matter(source);
      const slug = path.basename(filePath, '.md');

      return {
        category,
        slug,
        title: typeof data.title === 'string' ? data.title : slug,
        code: typeof data.code === 'string' ? data.code : '',
        degree: typeof data.degree === 'string' ? data.degree : '',
        format: typeof data.format === 'string' ? data.format : '',
        profile: typeof data.profile === 'string' ? data.profile : '',
        description: typeof data.description === 'string' ? data.description : '',
        outcomes: normalizeStringArray(data.outcomes),
        careers: normalizeStringArray(data.careers),
        subjects: normalizeStringArray(data.subjects),
        order: normalizeNumber(data.order, index),
        published: normalizeBoolean(data.published),
      } satisfies ProgramContent;
    })
  );

  return programs
    .filter((item) => item.published)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'ru'));
}

export async function getProgramBySlug(
  category: ProgramCategory,
  slug: string
): Promise<ProgramContent | null> {
  const programs = await getProgramsByCategory(category);
  return programs.find((item) => item.slug === slug) ?? null;
}

export async function getAllPrograms(): Promise<ProgramContent[]> {
  const categories: ProgramCategory[] = ['bakalavr', 'master', 'aspir'];
  const grouped = await Promise.all(categories.map((category) => getProgramsByCategory(category)));
  return grouped.flat();
}

export async function getAboutSections(): Promise<AboutSectionContent[]> {
  const directory = path.join(CONTENT_ROOT, 'about');
  const files = await getMarkdownFiles(directory);

  const sections = await Promise.all(
    files.map(async (filePath, index) => {
      const source = await readFile(filePath, 'utf8');
      const { data, content } = matter(source);
      const slug = path.basename(filePath, '.md');

      return {
        slug,
        title: typeof data.title === 'string' ? data.title : slug,
        order: normalizeNumber(data.order, index),
        published: normalizeBoolean(data.published),
        externalUrl: typeof data.externalUrl === 'string' ? data.externalUrl : undefined,
        html: await markdownToHtml(content),
      } satisfies AboutSectionContent;
    })
  );

  return sections
    .filter((item) => item.published)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'ru'));
}
