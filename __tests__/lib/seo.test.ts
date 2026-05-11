import { buildPageMetadata, getSiteUrl } from '@/lib/seo';

describe('seo', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.VERCEL_URL;
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('getSiteUrl', () => {
    it('берёт NEXT_PUBLIC_SITE_URL если задан', () => {
      process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com';
      expect(getSiteUrl()).toBe('https://example.com');
    });

    it('иначе использует VERCEL_URL', () => {
      process.env.VERCEL_URL = 'my-app.vercel.app';
      expect(getSiteUrl()).toBe('https://my-app.vercel.app');
    });

    it('иначе возвращает localhost', () => {
      expect(getSiteUrl()).toBe('http://localhost:3000');
    });
  });

  it('buildPageMetadata нормализует path и строит openGraph/twitter', () => {
    const meta = buildPageMetadata({
      title: 'Факультет',
      description: 'Описание',
      path: 'about',
    });

    expect(meta.title).toBe('Факультет');
    expect(meta.description).toBe('Описание');
    expect(meta.openGraph?.url).toBe('/about');
    expect(meta.openGraph?.images?.[0]).toMatchObject({
      url: '/images/campus-hero.png',
      width: 1200,
      height: 630,
      alt: 'Факультет',
    });
    expect(meta.twitter).toMatchObject({
      card: 'summary_large_image',
      title: 'Факультет',
      description: 'Описание',
      images: ['/images/campus-hero.png'],
    });
  });
});
