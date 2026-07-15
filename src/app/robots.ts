import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /go/ são redirects de afiliado (Amazon) — não devem ser rastreados
      disallow: ['/go/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
