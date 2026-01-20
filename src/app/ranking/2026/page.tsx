import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, ArrowRight, ChevronRight, Star, Shield, Zap, Droplets } from 'lucide-react';

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
        case 'Diamante': return 'bg-violet-100 text-violet-700 border-violet-200';
        case 'Ouro': return 'bg-amber-100 text-amber-700 border-amber-200';
        case 'Prata': return 'bg-gray-100 text-gray-700 border-gray-200';
        case 'Bronze': return 'bg-orange-100 text-orange-700 border-orange-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
};

const getPositionIcon = (position: number) => {
    switch (position) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return `${position}º`;
    }
};

export default function RankingPage() {
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-center">
                    <span className="font-bold text-sm tracking-tight text-gray-900">CabeloSemFormol.com.br</span>
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-28 space-y-8">
                {/* Hero */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-violet-200">
                        <Trophy size={14} />
                        Atualizado em Janeiro 2026
                    </div>

                    <h1 className="text-2xl font-bold font-heading text-gray-900">
                        Ranking Oficial 2026
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Os melhores produtos testados e aprovados pela nossa redação. Análises técnicas, comparativos de pH e testes de durabilidade.
                    </p>
                </section>

                {/* Rankings */}
                {rankings.map((ranking, idx) => (
                    <section key={idx} className="space-y-4">
                        {/* Category Header */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{ranking.icon}</span>
                            <div>
                                <h2 className="text-lg font-bold font-heading text-gray-900">
                                    {ranking.category}
                                </h2>
                                <p className="text-xs text-gray-500">{ranking.description}</p>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="space-y-2">
                            {ranking.items.map((item) => (
                                <Link
                                    key={item.position}
                                    href={item.slug}
                                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all active:scale-[0.99] ${item.highlight
                                            ? 'bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200 shadow-sm'
                                            : 'bg-white border-gray-100 hover:border-gray-200'
                                        }`}
                                >
                                    {/* Position */}
                                    <span className="text-xl w-8 text-center flex-shrink-0">
                                        {getPositionIcon(item.position)}
                                    </span>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-sm text-gray-900 truncate">{item.name}</span>
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getBadgeColor(item.badge)}`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500">{item.brand}</span>
                                    </div>

                                    {/* Score */}
                                    <div className="flex items-center gap-1 flex-shrink-0">
                                        <span className="text-lg font-bold text-gray-900">{item.score}</span>
                                        <ChevronRight size={16} className="text-gray-400" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href={ranking.ctaSlug}
                            className="flex items-center justify-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 py-2 transition-colors"
                        >
                            {ranking.ctaText}
                            <ArrowRight size={14} />
                        </Link>
                    </section>
                ))}

                {/* Metodologia */}
                <section className="bg-gray-50 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Nossa Metodologia
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                            <Shield size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-gray-900">Segurança</span>
                                <p className="text-[10px] text-gray-500">Análise de pH e composição</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Zap size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-gray-900">Performance</span>
                                <p className="text-[10px] text-gray-500">Testes de alisamento</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Star size={16} className="text-violet-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-gray-900">Durabilidade</span>
                                <p className="text-[10px] text-gray-500">Avaliação pós-lavagens</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Droplets size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs font-semibold text-gray-900">Compatibilidade</span>
                                <p className="text-[10px] text-gray-500">Testes em diferentes tipos</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="text-center space-y-3">
                    <p className="text-sm text-gray-600">
                        Não encontrou o que procura?
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-bold text-sm transition-colors active:scale-95"
                    >
                        Explorar por Categoria
                        <ArrowRight size={16} />
                    </Link>
                </section>
            </main>
        </>
    );
}
