import type { MetadataRoute } from 'next';
import { getAllPrograms } from '@/lib/content';
import { getSiteUrl } from '@/lib/seo';

const staticRoutes = [
  '/',
  '/academics',
  '/academics/bakalavr',
  '/academics/master',
  '/academics/aspir',
  '/academics/curriculum',
  '/academics/vkr',
  '/abitur',
  '/about',
  '/news',
  '/nauka',
  '/nauka/conf',
  '/nauka/sci_journ',
  '/contacts',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
  const programs = await getAllPrograms();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const programEntries: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${siteUrl}/academics/${program.category}/${program.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...programEntries];
}
