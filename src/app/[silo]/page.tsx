import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { getArticlesBySilo, getSilos } from '@/lib/mdx';
import { getSiloConfig, SILOS } from '@/lib/site';
import { getBreadcrumbSchema, getSiloCollectionSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ silo: string }>;
}

export async function generateStaticParams() {
  // Só gera hubs para silos que existem em /content/ E estão registrados em SILOS
  return getSilos()
    .filter((silo) => silo in SILOS)
    .map((silo) => ({ silo }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { silo } = await params;
  const config = getSiloConfig(silo);
  if (!config) return {};

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: `/${config.slug}`,
    },
    openGraph: {
      type: 'website',
      url: `/${config.slug}`,
      title: config.title,
      description: config.description,
    },
  };
}

export default async function SiloHubPage({ params }: PageProps) {
  const { silo } = await params;
  const config = getSiloConfig(silo);

  if (!config) {
    notFound();
  }

  const articles = getArticlesBySilo(silo);

  return (
    <div className="bg-white">
      <JsonLd data={getSiloCollectionSchema(config, articles)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: config.title, path: `/${config.slug}` },
        ])}
      />

      {/* Hub Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#C2A878] transition-colors">Início</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-[#C2A878]">{config.title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight max-w-3xl">
            {config.headline}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl font-light">
            {config.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-10 flex items-center">
          Todos os dossiês de {config.title}
          <span className="ml-4 flex-1 h-px bg-gray-200"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.silo}/${article.slug}`}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] to-gray-800 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                <span className="relative z-10 text-white font-serif font-bold text-xl px-4 text-center">
                  {article.frontmatter.title.replace('Resenha', '').replace('Completa', '').trim()}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-[#C2A878] mb-2 uppercase tracking-wide">
                  {config.categoryLabel}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-[#C2A878] transition-colors">
                  {article.frontmatter.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {article.frontmatter.description}
                </p>
                <div className="flex items-center text-[#1A1A1A] font-bold text-sm mt-auto">
                  Ler dossiê completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          {articles.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              Nenhum artigo publicado ainda neste silo.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
