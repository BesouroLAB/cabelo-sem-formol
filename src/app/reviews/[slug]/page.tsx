import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Clock, Calendar, User, ChevronRight } from 'lucide-react';
import {
    getArticleByUrlSlug,
    getAllArticles,
    generateArticleSchema,
    generateFAQSchema,
    generateProductSchema,
} from '@/lib/articles';

// Components
import CSFScoreBox from '@/components/CSFScoreBox';
import ProsConsTable from '@/components/ProsConsTable';
import HardwarePairWidget from '@/components/HardwarePairWidget';
import ChemicalTable from '@/components/ChemicalTable';
import SafetyBadge from '@/components/SafetyBadge';
import InternalLink from '@/components/InternalLink';
import AffiliateToast from '@/components/AffiliateToast';
import RelatedArticles, { crossSellMap } from '@/components/RelatedArticles';

// Gerar parâmetros estáticos
export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles
        .filter(a => a.frontmatter.slug.startsWith('/reviews'))
        .map((article) => {
            const slug = article.frontmatter.slug.split('/').pop();
            return { slug };
        });
}

// Gerar metadados
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleByUrlSlug(slug);

    if (!article) {
        return {
            title: 'Artigo não encontrado',
        };
    }

    const { frontmatter } = article;

    return {
        title: `${frontmatter.title} | Cabelo Sem Formol`,
        description: frontmatter.description,
        keywords: frontmatter.keywords,
        authors: [{ name: frontmatter.author }],
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: 'article',
            publishedTime: frontmatter.schema.datePublished,
            modifiedTime: frontmatter.schema.dateModified,
            authors: [frontmatter.author],
            images: [
                {
                    url: frontmatter.ogImage,
                    width: 1200,
                    height: 630,
                    alt: frontmatter.imageAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: frontmatter.title,
            description: frontmatter.description,
            images: [frontmatter.ogImage],
        },
        alternates: {
            canonical: `https://cabelosemformol.com.br${frontmatter.slug}`,
        },
    };
}

export default async function ReviewPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = getArticleByUrlSlug(slug);

    if (!article) {
        notFound();
    }

    const { frontmatter } = article;
    const fileSlug = article.slug;

    // Gerar schemas
    const articleSchema = generateArticleSchema(article);
    const faqSchema = generateFAQSchema(article);
    const productSchema = generateProductSchema(article);

    // Import dinâmico do MDX
    const MDXContent = (await import(`@/content/articles/${fileSlug}.mdx`)).default;

    // Dados para artigos relacionados
    const crossSell = crossSellMap[frontmatter.silo]?.articles || [];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}
            {productSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(productSchema),
                    }}
                />
            )}

            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link
                        href={frontmatter.siloSlug}
                        className="text-gray-500 hover:text-violet-600 transition-colors p-1"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">
                        CabeloSemFormol.com.br
                    </span>
                    <button className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-28">
                <div className="space-y-4 mb-8">
                    <Link
                        href={frontmatter.siloSlug}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-700 transition-colors"
                    >
                        {frontmatter.siloName}
                        <ChevronRight size={12} />
                    </Link>

                    <h1 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                        {frontmatter.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{frontmatter.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>
                                {frontmatter.updatedAt
                                    ? `Atualizado em ${frontmatter.updatedAt}`
                                    : frontmatter.publishedAt}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{frontmatter.readingTime}</span>
                        </div>
                    </div>
                </div>

                <article className="prose max-w-none">
                    <MDXContent
                        components={{
                            CSFScoreBox,
                            ProsConsTable,
                            HardwarePairWidget,
                            ChemicalTable,
                            SafetyBadge,
                            InternalLink,
                        }}
                    />
                </article>

                <RelatedArticles
                    pillarArticle={frontmatter.pillarArticle}
                    satelliteArticles={frontmatter.satelliteArticles}
                    crossSellArticles={crossSell}
                    siloName={frontmatter.siloName}
                />
            </main>

            {frontmatter.featuredProduct && (
                <AffiliateToast
                    productName={frontmatter.featuredProduct.name}
                    price={frontmatter.featuredProduct.price}
                    imageUrl={frontmatter.featuredProduct.image}
                    linkUrl={frontmatter.featuredProduct.affiliateUrl}
                />
            )}
        </>
    );
}
