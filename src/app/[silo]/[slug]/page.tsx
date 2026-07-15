import { getArticleBySlug, getAllArticlePaths } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ProsCons } from '@/components/mdx/ProsCons';
import { ChemicalTable } from '@/components/mdx/ChemicalTable';
import { ArticleHeader } from '@/components/mdx/ArticleHeader';
import { AffiliateToast } from '@/components/mdx/AffiliateToast';

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

export async function generateMetadata({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);
  
  if (!article) return {};

  return {
    title: `${article.frontmatter.title} | Cabelo Sem Formol`,
    description: article.frontmatter.description,
  };
}

// Mapeamento de componentes customizados disponíveis no MDX
const mdxComponents = {
  ProsCons,
  ChemicalTable,
  ArticleHeader,
  AffiliateToast,
};

export default async function ArticlePage({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-[#C2A878] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}
