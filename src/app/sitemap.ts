import type { MetadataRoute } from 'next';
import { articles, JOURNAL_UPDATED } from '../lib/journal-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://goodchaser.noorintelligence.tech';
  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: JOURNAL_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: base + '/journal', lastModified: JOURNAL_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    ...['/about', '/privacy', '/terms', '/refunds', '/cookies'].map((p) => ({ url: base + p, priority: 0.3 })),
  ];
  return [
    ...pages,
    ...articles.map((a) => ({
      url: `${base}/journal/${a.slug}`,
      lastModified: a.updated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
