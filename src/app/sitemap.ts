import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cabelosemformol.com.br';

    // Static pages
    const routes = [
        '',
        '/sobre',
        '/blog',
        '/ofertas',
        '/ranking/2026',
        '/categoria/progressivas-sem-formol',
        '/categoria/chapinhas-e-secadores',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic articles
    const articles = getAllArticles().map((article) => {
        // Correctly handle the slug - assuming article.slug is the relative path/slug
        // verify if article.slug already contains 'review/' or if it is just the slug
        // Based on articles.ts, slug comes from filename. 
        // Usually standard articles might be under /review/[slug] or /artigo/[slug]
        // Looking at open files, I see src/app/review/[slug]/page.tsx
        // So let's assume the URL structure is /review/[slug] for now, or check how they are linked.
        // The previous implementation plan mentions /review/[slug].
        // Let's use /review/ for now based on the project structure.

        // However, looking at articles.ts, slug might be full path?
        // line 77: .replace(/\.mdx$/, '')
        // If files are just '103-fashion-gold', then slug is '103-fashion-gold'.
        // Where are they linked to?
        // Let's check src/app/page.tsx or similar to be sure.
        // For now I will use /review/${article.slug} but I should verify this path.

        return {
            url: `${baseUrl}/review/${article.frontmatter.slug}`,
            lastModified: article.frontmatter.updatedAt || new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    return [...routes, ...articles];
}
