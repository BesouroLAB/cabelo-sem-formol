import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, ArrowRight, ChevronRight, Star, Shield, Zap, Droplets } from 'lucide-react';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'Ranking 2026: As Melhores Progressivas e Chapinhas | Cabelo Sem Formol',
    description: 'O ranking definitivo de progressivas sem formol e chapinhas de titânio. Análises técnicas, comparativos e guias de compra atualizados para 2026.',
};

const rankings = [
    {
        category: 'Progressivas Sem Formol',
        icon: '🧪',
        description: 'As melhores químicas orgânicas testadas em laboratório',
        silo: 1,
        items: [
            { position: 1, name: 'Fashion Gold', brand: 'Ybera Paris', score: 9.8, badge: 'Ouro', slug: '/reviews/fashion-gold-vale-a-pena', highlight: true },
            { position: 2, name: 'Borabella Não Chore Mais', brand: 'Borabella', score: 9.4, badge: 'Prata', slug: '/reviews/melhores-progressivas-sem-formol-2026' },
            { position: 3, name: 'Prohall Select One', brand: 'Prohall', score: 9.2, badge: 'Bronze', slug: '/reviews/prohall-select-one-resenha' },
        ],
        ctaText: 'Ver Ranking Completo',
        ctaSlug: '/reviews/melhores-progressivas-sem-formol-2026',
    },
    {
        category: 'Chapinhas de Titânio',
        icon: '🔥',
        description: 'Ferramentas profissionais para selagem térmica perfeita',
        silo: 2,
        items: [
            { position: 1, name: 'Lizze Extreme', brand: 'Lizze', score: 9.9, badge: 'Diamante', slug: '/reviews/lizze-extreme-resenha-verdade', highlight: true },
            { position: 2, name: 'MQ Pro 480', brand: 'MQ', score: 9.5, badge: 'Ouro', slug: '/reviews/melhor-chapinha-para-progressiva-titanium' },
            { position: 3, name: 'Taiff Style Pro', brand: 'Taiff', score: 9.0, badge: 'Prata', slug: '/reviews/chapinha-taiff-style-pro-titanium-resenha' },
        ],
        ctaText: 'Ver Guia de Chapinhas',
        ctaSlug: '/reviews/melhor-chapinha-para-progressiva-titanium',
    },
    {
        category: 'Progressivas de Chuveiro',
        icon: '🚿',
        description: 'Praticidade para manutenção rápida do liso',
        silo: 3,
        items: [
            { position: 1, name: 'Hidraliso', brand: 'Hidraliso', score: 8.8, badge: 'Ouro', slug: '/reviews/hidraliso-resenha-funciona', highlight: true },
            { position: 2, name: 'Phinna Shower Liss', brand: 'Phinna', score: 8.4, badge: 'Prata', slug: '/reviews/melhores-progressivas-de-chuveiro-ranking' },
            { position: 3, name: 'La Bella Liss', brand: 'La Bella Liss', score: 8.2, badge: 'Bronze', slug: '/reviews/la-bella-liss-progressiva-chuveiro-resenha' },
        ],
        ctaText: 'Ver Ranking de Chuveiro',
        ctaSlug: '/reviews/melhores-progressivas-de-chuveiro-ranking',
    },
];

const getBadgeColor = (badge: string) => {
    switch (badge) {
        case 'Diamante': return 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
        case 'Ouro': return 'bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]';
        case 'Prata': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
        case 'Bronze': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        default: return 'bg-slate-800/50 text-slate-500 border-white/5';
    }
};

const getPositionIcon = (position: number) => {
    switch (position) {
        case 1: return <span className="text-2xl drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">🥇</span>;
        case 2: return <span className="text-2xl">🥈</span>;
        case 3: return <span className="text-2xl">🥉</span>;
        default: return <span className="text-lg font-bold text-slate-500">{position}º</span>;
    }
};

export default function RankingPage() {
    return (
        <div className="bg-organic-bg min-h-screen">
            <Header />

            <main className="max-w-md mx-auto px-4 pt-10 pb-28 space-y-12">
                {/* Hero */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-900/40 text-emerald-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                        <Trophy size={14} className="animate-pulse" />
                        Dossiê Técnico 2026
                    </div>

                    <h1 className="text-3xl font-black font-heading text-white drop-shadow-md">
                        Ranking <span className="text-gradient">Absoluto</span>
                    </h1>

                    <p className="text-sm text-slate-400 leading-relaxed max-w-[300px] mx-auto font-medium">
                        A autoridade definitiva em alisamento. Dados laboratoriais convertidos em performance real.
                    </p>
                </section>

                {/* Rankings */}
                {rankings.map((ranking, idx) => (
                    <section key={idx} className="space-y-6">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 px-1">
                            <div className="size-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                                {ranking.icon}
                            </div>
                            <div>
                                <h2 className="text-lg font-black font-heading text-white tracking-tight">
                                    {ranking.category}
                                </h2>
                                <p className="text-[10px] text-emerald-500/70 font-black uppercase tracking-widest">{ranking.description}</p>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="space-y-3">
                            {ranking.items.map((item) => (
                                <Link
                                    key={item.position}
                                    href={item.slug}
                                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all active:scale-[0.98] glass group animate-in fade-in slide-in-from-bottom-2 ${item.highlight
                                        ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10 bg-emerald-900/10'
                                        : 'border-white/5 hover:border-white/20'
                                        }`}
                                    style={{ animationDelay: `${item.position * 100}ms` }}
                                >
                                    {/* Position */}
                                    <div className="w-8 flex justify-center flex-shrink-0">
                                        {getPositionIcon(item.position)}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-base text-white truncate drop-shadow-sm group-hover:text-emerald-300 transition-colors font-heading">{item.name}</span>
                                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md border uppercase tracking-tighter ${getBadgeColor(item.badge)}`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.brand}</span>
                                    </div>

                                    {/* Score */}
                                    <div className="flex items-center gap-2 flex-shrink-0 pl-2 border-l border-white/5">
                                        <div className="flex flex-col items-end">
                                            <span className="text-xl font-black text-white leading-none">{item.score.toFixed(1)}</span>
                                            <span className="text-[8px] font-black text-amber-500 uppercase tracking-tighter">Nota CSF</span>
                                        </div>
                                        <ChevronRight size={16} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href={ranking.ctaSlug}
                            className="flex items-center justify-center gap-2 text-xs font-black text-emerald-400 hover:text-emerald-300 py-3 glass rounded-xl border border-emerald-500/20 transition-all active:scale-95 uppercase tracking-[0.2em]"
                        >
                            {ranking.ctaText}
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </section>
                ))}

                {/* Metodologia */}
                <section className="glass rounded-3xl p-6 space-y-6 border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Shield size={80} className="text-emerald-500" />
                    </div>

                    <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        Critérios Científicos
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Shield size={14} className="text-emerald-400" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Segurança</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Análise química de pH e ativos alisantes.</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Zap size={14} className="text-amber-400" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Performance</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Teste de tensão superficial e selagem.</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Star size={14} className="text-emerald-400" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Durabilidade</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Avaliação estrutural após 15 lavagens.</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Droplets size={14} className="text-cyan-400" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Retenção</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Capacidade de retenção hídrica do fio.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="text-center space-y-6 pt-6">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                        Não encontrou sua marca preferida?
                    </p>
                    <Link
                        href="/blog"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-amber-600 text-white py-4 px-8 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-emerald-500/20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            Ver Todas as Análises
                            <ArrowRight size={16} />
                        </span>
                    </Link>
                </section>
            </main>
        </div>
    );
}
