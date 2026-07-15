import { getArticlesBySilo } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const articles = getArticlesBySilo('progressivas');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Descubra a <span className="text-[#C2A878] italic">Verdade</span> sobre os Alisamentos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            Análises químicas profundas, sem achismos e sem falsas promessas. 
            Saiba exatamente o que você está colocando no seu cabelo.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-10 flex items-center">
          Dossiês Mais Recentes
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
                {/* Fallback image when no image is present */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] to-gray-800 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                <h3 className="relative z-10 text-white font-serif font-bold text-xl px-4 text-center">
                  {article.frontmatter.title.replace('Resenha', '').replace('Completa', '').trim()}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-[#C2A878] mb-2 uppercase tracking-wide">
                  Análise Química
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
              Nenhum artigo publicado ainda.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
