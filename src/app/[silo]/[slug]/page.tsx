import { getArticleBySlug, getAllArticlePaths } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ProsCons } from '@/components/mdx/ProsCons';

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
};

export default async function ArticlePage({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {article.frontmatter.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <time dateTime={article.frontmatter.date}>
            Publicado em: {new Date(article.frontmatter.date).toLocaleDateString('pt-BR')}
          </time>
          <span>Por {article.frontmatter.author}</span>
        </div>
      </header>

      {/* Componente para Disclosure de Afiliados Obrigatório */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
        <p className="text-sm text-amber-700">
          <strong>Aviso de Transparência:</strong> Este artigo contém links de afiliado. 
          Se você comprar através dos nossos links, podemos receber uma comissão sem custo extra para você. 
          Isso nos ajuda a manter o site.
        </p>
      </div>

      <div className="prose prose-lg prose-amber max-w-none">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}
