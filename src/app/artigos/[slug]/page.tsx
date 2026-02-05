import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Clock, Calendar, User, ChevronRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import {
    getArticleByUrlSlug,
    getAllArticles,
    generateArticleSchema,
    generateFAQSchema,
    generateProductSchema,
} from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Components
import CSFScoreBox from '@/components/CSFScoreBox';
import ProsConsTable from '@/components/ProsConsTable';
import HardwarePairWidget from '@/components/HardwarePairWidget';
import ChemicalTable from '@/components/ChemicalTable';
import SafetyBadge from '@/components/SafetyBadge';
import InternalLink from '@/components/InternalLink';
import ProductStickyBar from '@/components/ProductStickyBar';
import RelatedArticles, { crossSellMap } from '@/components/RelatedArticles';
import ChemicalAnalysisCard from '@/components/ChemicalAnalysisCard';

// Gerar parâmetros estáticos
export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles
        .filter(a => a.frontmatter.slug.startsWith('/artigos'))
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

export default async function ArticlePage({
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

    // Generate schemas
    const articleSchema = generateArticleSchema(article);
    const faqSchema = generateFAQSchema(article);
    const productSchema = generateProductSchema(article);

    // Cross sell data
    const crossSell = crossSellMap[frontmatter.silo]?.articles || [];

    return (
        <div className="bg-organic-bg min-h-screen font-body text-slate-200 selection:bg-emerald-500/30">
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

            {/* Sticky Header */}
            <div className="sticky top-0 z-50 flex items-center bg-organic-bg/80 backdrop-blur-md px-4 py-3 justify-between border-b border-white/5">
                <Link href="/" className="text-white hover:text-primary transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-tight flex-1 text-center truncate px-4">
                    {frontmatter.siloName || 'Journal'}
                </h2>
                <button className="text-white hover:text-primary transition-colors">
                    <Share2 size={20} />
                </button>
            </div>

            {/* Hero Image / Sheet Layout Wrapper */}
            <div className="@container">
                <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-emerald-950">
                    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${frontmatter.ogImage})` }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-organic-bg via-transparent to-transparent opacity-80" />
                </div>
            </div>

            {/* Main Content Sheet */}
            <main className="relative -mt-12 rounded-t-[2.5rem] bg-organic-bg px-6 pt-10 pb-32 shadow-2xl border-t border-white/5 mx-auto max-w-4xl">

                {/* Article Header */}
                <div className="mb-8 border-b border-white/5 pb-8">
                    <div className="mb-6 flex justify-center md:justify-start">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/20">
                            Editorial Técnico
                        </span>
                    </div>

                    <h1 className="font-heading font-bold text-3xl md:text-5xl leading-[1.15] text-white mb-6 text-center md:text-left drop-shadow-lg">
                        {frontmatter.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                        {/* Rating */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-end gap-2">
                                <p className="text-white text-4xl font-black leading-none tracking-tighter">4.8</p>
                                <div className="flex mb-1 gap-0.5">
                                    {[1, 2, 3, 4].map(i => <Star key={i} size={14} className="fill-primary text-primary" />)}
                                    <Star size={14} className="fill-primary/50 text-primary" />
                                </div>
                            </div>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Pontuação CSF</p>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-10 bg-white/10 hidden md:block" />

                        {/* Author */}
                        <div className="flex items-center gap-3 bg-white/5 p-2 pr-4 rounded-full border border-white/5">
                            <div className="size-10 rounded-full bg-emerald-900 border border-emerald-500/30 flex items-center justify-center font-heading font-black text-primary text-xs">
                                CSF
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-sm font-bold leading-tight tracking-tight">{frontmatter.author}</p>
                                <p className="text-primary text-[10px] font-bold uppercase tracking-wider">Especialista Químico</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <article className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-white 
                    prose-p:text-slate-300 prose-p:leading-relaxed 
                    prose-strong:text-white prose-strong:font-black
                    prose-li:text-slate-300
                    first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-primary first-letter:mt-1">
                    <MDXRemote
                        source={article.content}
                        components={{
                            CSFScoreBox,
                            ProsConsTable,
                            HardwarePairWidget,
                            ChemicalTable,
                            SafetyBadge,
                            InternalLink,
                            ChemicalAnalysisCard,
                        }}
                    />
                </article>

                {/* Related Section */}
                <div className="mt-16 pt-10 border-t border-white/5">
                    <h3 className="font-heading text-2xl text-white mb-6">Continue Lendo</h3>
                    <RelatedArticles
                        pillarArticle={frontmatter.pillarArticle}
                        satelliteArticles={frontmatter.satelliteArticles}
                        crossSellArticles={crossSell}
                        siloName={frontmatter.siloName}
                    />
                </div>
            </main>

            {frontmatter.featuredProduct && (
                <ProductStickyBar
                    productName={frontmatter.featuredProduct.name}
                    price={frontmatter.featuredProduct.price}
                    image={frontmatter.featuredProduct.image}
                    affiliateUrl={frontmatter.featuredProduct.affiliateUrl}
                    rating={frontmatter.featuredProduct.rating}
                />
            )}
        </div>
    );
}
