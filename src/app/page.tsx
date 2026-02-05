import Link from 'next/link';
import Header from '@/components/Header';
import SiloNavigation from '@/components/SiloNavigation';
import { FlaskConical, Ruler, ShieldCheck, Image as ImageIcon, Star, Globe, Share2 } from 'lucide-react';

export const metadata = {
  title: 'Cabelo Sem Formol: Análises Técnicas e Ranking de Alisamentos (2026)',
  description: 'O maior portal de reviews técnicos de progressivas. Testamos pH, temperatura de chapinhas e segurança de marcas como Fashion Gold, Lizze e Prohall.',
};

const featuredArticles = [
  {
    category: 'Review Química',
    categoryColor: 'text-purple-400',
    title: 'A verdade sobre a Progressiva de Ácido Hialurônico',
    rating: '4.9/5.0',
    link: '/review/progressiva-acido-hialuronico',
    image: '', // Placeholder
  },
  {
    category: 'Hardware',
    categoryColor: 'text-blue-400',
    title: 'Guia: As 3 melhores chapinhas para fios finos em 2026',
    rating: '4.7/5.0',
    link: '/guia/melhor-chapinha-fios-finos',
    image: '', // Placeholder
  },
];

export default function Home() {
  return (
    <>
      {/* Header Sticky */}
      <Header />

      <main className="max-w-7xl mx-auto pb-24">
        {/* ========== HERO SECTION ========== */}
        <header className="@container px-4 pt-4">
          <div className="flex min-h-[420px] flex-col gap-8 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 @[480px]:rounded-3xl items-center justify-center p-8 text-center rounded-2xl relative overflow-hidden border border-emerald-500/10 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#10b98115,_transparent_70%)]"></div>
            <div className="relative z-10 flex flex-col gap-6 max-w-lg">
              <div className="inline-flex self-center items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
                <ShieldCheck className="text-primary w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Certificação Técnica 2026
                </span>
              </div>

              <h1 className="text-white text-4xl font-black leading-[1.1] @[480px]:text-6xl drop-shadow-2xl font-heading">
                Alisamento Seguro é <br />
                <span className="text-gradient">Ciência, não sorte.</span>
              </h1>

              <p className="text-slate-400 text-base @[480px]:text-lg font-medium leading-relaxed max-w-md mx-auto">
                Análises de laboratório, testes de pH e reviews imparciais das maiores marcas de progressivas do Brasil.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ranking/2026"
                  className="bg-primary hover:bg-primary-dark text-white transition-all flex min-w-[220px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 group"
                >
                  Ver Ranking Oficial
                  <Ruler className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  className="glass text-white hover:bg-white/5 transition-all flex min-w-[220px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 text-sm font-black uppercase tracking-widest border-white/5 active:scale-95"
                >
                  Dossiês Técnicos
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ========== TRUST BAR ========== */}
        <section className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex flex-1 gap-4 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5 items-center glass group hover:border-emerald-500/30 transition-all">
              <div className="text-primary group-hover:scale-110 transition-transform">
                <FlaskConical size={28} />
              </div>
              <div>
                <h3 className="text-white text-sm font-black leading-tight uppercase tracking-wider font-heading">Análise Química</h3>
                <p className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest">Teste de pH Real</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-2xl border border-amber-500/10 bg-amber-500/5 p-5 items-center glass group hover:border-amber-500/30 transition-all">
              <div className="text-amber-500 group-hover:scale-110 transition-transform">
                <Ruler size={28} />
              </div>
              <div>
                <h3 className="text-white text-sm font-black leading-tight uppercase tracking-wider font-heading">Hardware Scan</h3>
                <p className="text-[10px] text-amber-500/70 font-bold uppercase tracking-widest">Aferição Térmica</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 items-center glass group hover:border-emerald-500/30 transition-all">
              <div className="text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-white text-sm font-black leading-tight uppercase tracking-wider font-heading">Sem Mentiras</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Independência Editorial</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CATEGORIAS PRINCIPAIS ========== */}
        <section className="px-4">
          <h2 className="text-white text-xl font-black leading-tight tracking-tight pb-2 pt-6 font-heading uppercase">
            Categorias em Foco
          </h2>
          <SiloNavigation />
        </section>

        {/* ========== ANÁLISES EM DESTAQUE ========== */}
        <section className="p-4 mb-8">
          <h2 className="text-white text-xl font-black leading-tight tracking-tight pb-4 pt-4 font-heading uppercase">
            Dossiês de Especialista
          </h2>
          <div className="space-y-4">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={article.link} className="flex gap-5 p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all glass group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <FlaskConical size={60} className="text-primary" />
                </div>

                <div className="size-24 shrink-0 bg-emerald-950/40 rounded-xl overflow-hidden flex items-center justify-center border border-emerald-500/20 shadow-inner group-hover:border-emerald-500/40 transition-colors">
                  {article.image ? (
                    <img alt={article.title} className="object-cover w-full h-full" src={article.image} />
                  ) : (
                    <ImageIcon className="text-emerald-900" size={32} />
                  )}
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div className="space-y-2">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight group-hover:text-emerald-300 transition-colors font-heading drop-shadow-sm">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="text-amber-500 fill-amber-500" size={12} />
                      <span className="text-[10px] font-black text-white">{article.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">• Review Técnico</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="bg-organic-bg border-t border-white/5 p-10 pb-28">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2 className="text-white text-xl font-black font-heading tracking-tight drop-shadow-md">
              Cabelo<span className="text-primary">SemFormol</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <Link className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all underline-offset-4 hover:underline" href="/termos">Termos</Link>
              <Link className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all underline-offset-4 hover:underline" href="/privacidade">Privacidade</Link>
              <Link className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all underline-offset-4 hover:underline" href="/contato">Contato</Link>
              <Link className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all underline-offset-4 hover:underline" href="/sobre">Sobre</Link>
            </nav>
            <div className="flex gap-6">
              <button className="size-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary transition-all bg-white/5 hover:bg-primary/10">
                <Globe size={20} />
              </button>
              <button className="size-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-primary transition-all bg-white/5 hover:bg-primary/10">
                <Share2 size={20} />
              </button>
            </div>
            <p className="text-[10px] text-slate-600 max-w-sm leading-relaxed font-medium uppercase tracking-tighter">
              © 2026 Cabelo Sem Formol. Ciência e transparência em saúde capilar. As informações contidas neste portal não substituem consulta médica especializada.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
