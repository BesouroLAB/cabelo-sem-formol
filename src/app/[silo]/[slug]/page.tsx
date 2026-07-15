import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug, getAllArticlePaths } from '@/lib/mdx';
import { getSiloConfig } from '@/lib/site';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ProsCons } from '@/components/mdx/ProsCons';
import { ChemicalTable } from '@/components/mdx/ChemicalTable';
import { ArticleHeader } from '@/components/mdx/ArticleHeader';
import { AffiliateToast } from '@/components/mdx/AffiliateToast';
import { SmartLink } from '@/components/mdx/SmartLink';

interface PageProps {
  params: Promise<{
    silo: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = getAllArticlePaths();
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) return {};

  const { frontmatter } = article;
  const path = `/${silo}/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: new Date(frontmatter.date).toISOString(),
      modifiedTime: article.lastModified.toISOString(),
      authors: [frontmatter.author],
      ...(frontmatter.image ? { images: [{ url: frontmatter.image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      ...(frontmatter.image ? { images: [frontmatter.image] } : {}),
    },
  };
}

// Mapeamento de componentes customizados disponíveis no MDX
const mdxComponents = {
  ProsCons,
  ChemicalTable,
  ArticleHeader,
  AffiliateToast,
  // Todo link markdown passa pelas regras de SEO (sponsored em /go/, Link interno etc.)
  a: SmartLink,
};

export default async function ArticlePage({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) {
    notFound();
  }

  const siloConfig = getSiloConfig(silo);
  const siloTitle = siloConfig?.title ?? silo;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <JsonLd data={getArticleSchema(article)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: siloTitle, path: `/${silo}` },
          { name: article.frontmatter.title, path: `/${silo}/${slug}` },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-[#C2A878] transition-colors">Início</Link>
        <span className="mx-2 text-gray-300">/</span>
        <Link href={`/${silo}`} className="hover:text-[#C2A878] transition-colors">{siloTitle}</Link>
      </nav>

      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-[#C2A878] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}
