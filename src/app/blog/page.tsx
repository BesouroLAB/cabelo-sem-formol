import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, Clock, FlaskConical, Zap, Droplets, PlusCircle, Calendar } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'Blog | Cabelo Sem Formol',
    description: 'Artigos, reviews e guias sobre progressivas sem formol, chapinhas de titânio e cuidados capilares.',
};

const siloInfo: Record<number, { name: string; icon: React.ReactNode; color: string; iconColor: string }> = {
    1: { name: 'Progressivas', icon: <FlaskConical size={14} />, color: 'bg-emerald-900/40 border-emerald-500/30', iconColor: 'text-emerald-400' },
    2: { name: 'Chapinhas', icon: <Zap size={14} />, color: 'bg-amber-900/40 border-amber-500/30', iconColor: 'text-amber-400' },
    3: { name: 'Chuveiro', icon: <Droplets size={14} />, color: 'bg-cyan-900/40 border-cyan-500/30', iconColor: 'text-cyan-400' },
    4: { name: 'Fios & Saúde', icon: <PlusCircle size={14} />, color: 'bg-white/5 border-white/20', iconColor: 'text-white' },
};

import EditorialCard from '@/components/EditorialCard';

export default function BlogPage() {
    const articles = getAllArticles();

    // Agrupa por silo
    const articlesBySilo = articles.reduce((acc, article) => {
        const silo = article.frontmatter.silo;
        if (!acc[silo]) acc[silo] = [];
        acc[silo].push(article);
        return acc;
    }, {} as Record<number, typeof articles>);

    return (
        <div className="bg-organic-bg min-h-screen">
            <Header />

            <main className="max-w-md mx-auto px-4 pt-10 pb-28 space-y-10">
                {/* Hero */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl font-black font-heading text-white drop-shadow-md">
                        Dossiês <span className="text-gradient">Técnicos</span>
                    </h1>
                    <p className="text-sm text-slate-400 max-w-[280px] mx-auto leading-relaxed font-medium">
                        {articles.length} investigações profundas e estudos técnicos sobre alisamento capilar.
                    </p>
                </section>

                {/* Artigos por Silo */}
                {Object.entries(articlesBySilo)
                    .sort(([a], [b]) => Number(a) - Number(b))
                    .map(([silo, siloArticles]) => {
                        const info = siloInfo[Number(silo)];
                        return (
                            <section key={silo} className="space-y-6">
                                {/* Silo Header */}
                                <div className="flex items-center justify-between px-1">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2 rounded-lg ${info.color} border flex items-center justify-center`}>
                                            <span className={info.iconColor}>{info.icon}</span>
                                        </div>
                                        <h2 className="font-black font-heading text-sm text-white uppercase tracking-widest">{info.name}</h2>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        {siloArticles.length} artigos
                                    </span>
                                </div>

                                {/* Lista de Artigos */}
                                <div className="space-y-6">
                                    {siloArticles.map((article) => {
                                        const { frontmatter } = article;
                                        const isPillar = frontmatter.type === 'pillar';
                                        const urlPath = frontmatter.slug.startsWith('/reviews')
                                            ? frontmatter.slug
                                            : frontmatter.slug.startsWith('/artigos')
                                                ? frontmatter.slug
                                                : `/reviews/${frontmatter.slug}`;

                                        return (
                                            <EditorialCard
                                                key={frontmatter.slug}
                                                slug={urlPath}
                                                title={frontmatter.title}
                                                excerpt={frontmatter.description}
                                                category={isPillar ? "Pillar Post" : "Análise Técnica"}
                                                image={frontmatter.image || frontmatter.ogImage}
                                                author={frontmatter.author}
                                                readTime={frontmatter.readingTime}
                                                isPriority={isPillar}
                                            />
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
            </main>
        </div>
    );
}
