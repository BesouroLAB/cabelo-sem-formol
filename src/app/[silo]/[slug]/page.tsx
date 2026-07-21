import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug, getAllArticlePaths } from '@/lib/mdx';
import { getSiloConfig } from '@/lib/site';
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import { FaqSection } from '@/components/mdx/FaqSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
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

import { RegulacaoBox } from '@/components/mdx/RegulacaoBox';
import { PricingComparison } from '@/components/mdx/PricingComparison';
import { FunnelDiagram } from '@/components/mdx/FunnelDiagram';

// Helpers para gerar IDs de cabeçalhos automaticamente
const getTextContent = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join('');
  if (node.props && node.props.children) return getTextContent(node.props.children);
  return '';
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const Heading2 = ({ children, ...props }: any) => {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h2 id={id} {...props}>{children}</h2>;
};

const Heading3 = ({ children, ...props }: any) => {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h3 id={id} {...props}>{children}</h3>;
};

// Mapeamento de componentes customizados disponíveis no MDX
const mdxComponents = {
  ProsCons,
  ChemicalTable,
  ArticleHeader,
  AffiliateToast,
  RegulacaoBox,
  PricingComparison,
  FunnelDiagram,
  h2: Heading2,
  h3: Heading3,
  // Todo link markdown passa pelas regras de SEO (sponsored em /go/, Link interno etc.)
  a: SmartLink,
};

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; depth: number }[] = [];
  let match;
  
  const cleanText = (text: string) => {
    return text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove links
      .replace(/[*_`]/g, '') // remove formatação
      .trim();
  };

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const text = cleanText(match[2]);
    const id = slugify(text);
    headings.push({ id, text, depth });
  }

  return headings;
}

export default async function ArticlePage({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) {
    notFound();
  }

  const siloConfig = getSiloConfig(silo);
  const siloTitle = siloConfig?.title ?? silo;
  const faq = article.frontmatter.faq;
  const headings = extractHeadings(article.content);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <article className="flex-grow max-w-3xl min-w-0">
          <JsonLd data={getArticleSchema(article)} />
          <JsonLd
            data={getBreadcrumbSchema([
              { name: 'Início', path: '/' },
              { name: siloTitle, path: `/${silo}` },
              { name: article.frontmatter.title, path: `/${silo}/${slug}` },
            ])}
          />
          {faq && faq.length > 0 && <JsonLd data={getFaqSchema(faq)} />}

          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#C2A878] transition-colors">Início</Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href={`/${silo}`} className="hover:text-[#C2A878] transition-colors">{siloTitle}</Link>
          </nav>

          <ArticleHeader 
            title={article.frontmatter.title} 
            author={article.frontmatter.author} 
            date={article.frontmatter.updated || article.frontmatter.date} 
          />

          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-[#C2A878] prose-a:no-underline hover:prose-a:underline">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {faq && faq.length > 0 && <FaqSection faq={faq} />}
        </article>

        {headings.length > 0 && (
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 p-6 bg-[#FAFAFA] rounded-xl border border-gray-100 font-sans">
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-4">Neste Artigo</h4>
              <nav>
                <ul className="space-y-3 text-sm">
                  {headings.map((heading) => (
                    <li 
                      key={heading.id} 
                      className={`${heading.depth === 3 ? 'pl-4 text-gray-500' : 'font-semibold text-gray-700'} hover:text-[#C2A878] transition-colors`}
                    >
                      <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
