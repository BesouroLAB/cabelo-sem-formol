import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleFrontmatter {
    id: string;
    slug: string;
    type: 'pillar' | 'satellite';
    silo: number;
    siloName: string;
    siloSlug: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    authorImage: string;
    publishedAt: string;
    updatedAt: string;
    readingTime: string;
    image: string;
    imageAlt: string;
    ogImage: string;
    category: string;
    tags: string[];
    pillarArticle?: {
        id: string;
        title: string;
        slug: string;
    };
    satelliteArticles?: Array<{
        id: string;
        title: string;
        slug: string;
    }>;
    schema: {
        type: string;
        datePublished: string;
        dateModified: string;
        author: {
            type: string;
            name: string;
            url: string;
        };
        publisher: {
            type: string;
            name: string;
            logo: string;
        };
        mainEntityOfPage: string;
    };
    featuredProduct?: {
        name: string;
        brand: string;
        price: string;
        rating: number;
        image: string;
        affiliateUrl: string;
    };
    faq?: Array<{
        question: string;
        answer: string;
    }>;
}

export interface Article {
    frontmatter: ArticleFrontmatter;
    content: string;
    slug: string;
}

export function getArticleSlugs(): string[] {
    const files = fs.readdirSync(articlesDirectory);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
    try {
        const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            frontmatter: data as ArticleFrontmatter,
            content,
            slug,
        };
    } catch {
        return null;
    }
}

export function getAllArticles(): Article[] {
    const slugs = getArticleSlugs();
    return slugs
        .map((slug) => getArticleBySlug(slug))
        .filter((article): article is Article => article !== null)
        .sort((a, b) => {
            const dateA = new Date(a.frontmatter.publishedAt);
            const dateB = new Date(b.frontmatter.publishedAt);
            return dateB.getTime() - dateA.getTime();
        });
}

export function getArticlesBySilo(silo: number): Article[] {
    return getAllArticles().filter((article) => article.frontmatter.silo === silo);
}

export function getPillarArticles(): Article[] {
    return getAllArticles().filter((article) => article.frontmatter.type === 'pillar');
}

export function getSatelliteArticles(pillarId: string): Article[] {
    return getAllArticles().filter(
        (article) =>
            article.frontmatter.type === 'satellite' &&
            article.frontmatter.pillarArticle?.id === pillarId
    );
}

export function getArticleByUrlSlug(urlSlug: string): Article | null {
    const allArticles = getAllArticles();
    return allArticles.find((article) => {
        const articleSlug = article.frontmatter.slug.split('/').pop();
        return articleSlug === urlSlug;
    }) || null;
}

export function getArticleFileSlug(urlSlug: string): string | null {
    const article = getArticleByUrlSlug(urlSlug);
    return article ? article.slug : null;
}

export function generateArticleSchema(article: Article): object {
    const { frontmatter } = article;

    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: frontmatter.title,
        description: frontmatter.description,
        image: `https://cabelosemformol.com.br${frontmatter.image}`,
        datePublished: frontmatter.schema.datePublished,
        dateModified: frontmatter.schema.dateModified,
        author: {
            '@type': frontmatter.schema.author.type,
            name: frontmatter.schema.author.name,
            url: frontmatter.schema.author.url,
        },
        publisher: {
            '@type': frontmatter.schema.publisher.type,
            name: frontmatter.schema.publisher.name,
            logo: {
                '@type': 'ImageObject',
                url: frontmatter.schema.publisher.logo,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': frontmatter.schema.mainEntityOfPage,
        },
    };

    return schema;
}

export function generateFAQSchema(article: Article): object | null {
    const { frontmatter } = article;

    if (!frontmatter.faq || frontmatter.faq.length === 0) {
        return null;
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: frontmatter.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

export function generateProductSchema(article: Article): object | null {
    const { frontmatter } = article;

    if (!frontmatter.featuredProduct) {
        return null;
    }

    const product = frontmatter.featuredProduct;

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        brand: {
            '@type': 'Brand',
            name: product.brand,
        },
        image: `https://cabelosemformol.com.br${product.image}`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            bestRating: 10,
            worstRating: 0,
            ratingCount: 1,
        },
        offers: {
            '@type': 'Offer',
            url: product.affiliateUrl,
            priceCurrency: 'BRL',
            price: product.price.replace(/[^\d,]/g, '').replace(',', '.'),
            availability: 'https://schema.org/InStock',
        },
    };
}
