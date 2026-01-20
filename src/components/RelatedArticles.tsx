'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface RelatedArticle {
    id: string;
    title: string;
    slug: string;
    type?: 'pillar' | 'satellite' | 'cross-sell';
    badge?: string;
}

interface RelatedArticlesProps {
    pillarArticle?: RelatedArticle;
    satelliteArticles?: RelatedArticle[];
    crossSellArticles?: RelatedArticle[];
    siloName?: string;
}

export default function RelatedArticles({
    pillarArticle,
    satelliteArticles = [],
    crossSellArticles = [],
    siloName,
}: RelatedArticlesProps) {
    const hasPillar = !!pillarArticle;
    const hasSatellites = satelliteArticles.length > 0;
    const hasCrossSell = crossSellArticles.length > 0;

    if (!hasPillar && !hasSatellites && !hasCrossSell) {
        return null;
    }

    return (
        <div className="space-y-6 mt-10 pt-8 border-t border-gray-100">
            {/* Artigo Pilar (para satélites) */}
            {hasPillar && (
                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        📚 Guia Completo
                    </h3>
                    <Link
                        href={pillarArticle.slug}
                        className="flex items-center gap-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 border border-violet-200 rounded-xl p-4 transition-all active:scale-[0.99]"
                    >
                        <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wide">
                                Artigo Pilar
                            </span>
                            <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                                {pillarArticle.title}
                            </h4>
                        </div>
                        <ChevronRight size={18} className="text-violet-400 flex-shrink-0" />
                    </Link>
                </section>
            )}

            {/* Artigos Satélites (para pilares) */}
            {hasSatellites && (
                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        🔗 Leitura Relacionada
                    </h3>
                    <div className="space-y-2">
                        {satelliteArticles.slice(0, 3).map((article) => (
                            <Link
                                key={article.id}
                                href={article.slug}
                                className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-100 rounded-xl p-3 transition-all active:scale-[0.99]"
                            >
                                <span className="flex-1 text-sm text-gray-800 leading-snug line-clamp-2">
                                    {article.title}
                                </span>
                                <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Cross-Sell (entre silos) */}
            {hasCrossSell && (
                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        ⚡ Você também vai precisar
                    </h3>
                    <div className="space-y-2">
                        {crossSellArticles.slice(0, 2).map((article) => (
                            <Link
                                key={article.id}
                                href={article.slug}
                                className="flex items-center gap-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl p-3 transition-all active:scale-[0.99]"
                            >
                                <span className="flex-1 text-sm font-medium text-amber-900 leading-snug">
                                    {article.title}
                                </span>
                                <ArrowRight size={16} className="text-amber-500 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

// Mapeamento estratégico de cross-sell entre silos
export const crossSellMap: Record<number, { silo: number; articles: RelatedArticle[] }> = {
    // Silo 1 (Progressivas) → Silo 2 (Chapinhas)
    1: {
        silo: 2,
        articles: [
            { id: '201', title: 'Qual Chapinha usar com sua Progressiva?', slug: '/reviews/melhor-chapinha-para-progressiva-titanium' },
            { id: '203', title: 'Lizze Extreme: A Tratora do Alisamento', slug: '/reviews/lizze-extreme-resenha-verdade' },
        ],
    },
    // Silo 2 (Chapinhas) → Silo 1 (Progressivas)
    2: {
        silo: 1,
        articles: [
            { id: '101', title: 'Ranking: Melhores Progressivas 2026', slug: '/reviews/melhores-progressivas-sem-formol-2026' },
            { id: '103', title: 'Fashion Gold: O Par Perfeito', slug: '/reviews/fashion-gold-vale-a-pena' },
        ],
    },
    // Silo 3 (Chuveiro) → Silo 1 (Progressivas de verdade)
    3: {
        silo: 1,
        articles: [
            { id: '101', title: 'Quer resultado profissional? Veja o Ranking', slug: '/reviews/melhores-progressivas-sem-formol-2026' },
        ],
    },
    // Silo 4 (Manutenção) → Silo 1 e 2
    4: {
        silo: 1,
        articles: [
            { id: '101', title: 'Qual progressiva usar?', slug: '/reviews/melhores-progressivas-sem-formol-2026' },
            { id: '201', title: 'Chapinha ideal para selagem', slug: '/reviews/melhor-chapinha-para-progressiva-titanium' },
        ],
    },
};
