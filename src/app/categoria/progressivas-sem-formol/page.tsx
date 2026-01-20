import Link from 'next/link';
import { ArrowRight, Shield, ArrowLeft, Trophy, FileText, FlaskConical, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'O Laboratório do Liso: Ranking de Segurança e Performance | Cabelo Sem Formol',
    description: 'Testamos pH, compatibilidade e resultado real das principais progressivas orgânicas do Brasil. Veja qual marca alisa sem estragar o fio.',
};

const podium = [
    {
        position: '🥇',
        medal: 'OURO',
        badge: 'Campeã Geral',
        name: 'Fashion Gold',
        tag: 'Para quem não quer errar.',
        verdict: 'Liso espelhado e compatível com tudo.',
        link: '/review/progressiva-fashion-gold',
        buttonText: 'Ler Review Completo',
        bgGradient: 'from-amber-50 via-yellow-50 to-orange-50',
        borderColor: 'border-amber-200/50',
        buttonGradient: 'from-amber-500 to-orange-500',
        badgeGradient: 'from-amber-400 to-orange-400',
    },
    {
        position: '🥈',
        medal: 'PRATA',
        badge: 'Melhor Custo-Benefício',
        name: 'Prohall Select One',
        tag: 'Potência Máxima.',
        verdict: 'Alisa cabelos resistentes gastando pouco.',
        link: '/review/prohall-select-one',
        buttonText: 'Ver Análise',
        bgGradient: 'from-gray-50 via-slate-50 to-gray-100',
        borderColor: 'border-gray-200/50',
        buttonGradient: 'from-gray-500 to-gray-600',
        badgeGradient: 'from-gray-400 to-slate-500',
    },
    {
        position: '🥉',
        medal: 'BRONZE',
        badge: 'A Mais Suave',
        name: 'Borabella Não Chore Mais',
        tag: 'Conforto Total.',
        verdict: 'Zero ardência e tratamento intenso.',
        link: '/review/borabella-nao-chore-mais',
        buttonText: 'Ver Preço',
        bgGradient: 'from-orange-50/50 via-amber-50/50 to-yellow-50/50',
        borderColor: 'border-orange-200/50',
        buttonGradient: 'from-orange-400 to-amber-500',
        badgeGradient: 'from-orange-300 to-amber-400',
    },
];

const articles = [
    {
        id: '101',
        emoji: '📄',
        title: 'O Ranking Completo: As 5 Melhores Progressivas de 2026',
        link: '/artigo/ranking-melhores-progressivas-2026',
    },
    {
        id: '102',
        emoji: '🧪',
        title: 'Mito ou Verdade: Progressiva Orgânica tem formol escondido?',
        link: '/artigo/progressiva-organica-formol-mito',
    },
    {
        id: '104',
        emoji: '👱‍♀️',
        title: 'Especial Loiras: Qual progressiva não amarela o fio descolorido?',
        link: '/artigo/melhor-progressiva-loiras',
    },
];

export default function SiloProgressivas() {
    return (
        <>
            {/* Header Sticky */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link href="/" className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">Progressivas & Ácidos</span>
                    <div className="w-6" />
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-8 space-y-8">
                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-violet-100">
                        <Shield size={14} className="text-violet-600" />
                        <span>Análise Independente • Sem Fake News</span>
                    </div>

                    <h1 className="text-2xl font-bold font-heading text-gray-900 leading-tight">
                        Alisamento Seguro Existe?
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Nossa equipe analisou a ficha técnica de <strong className="text-gray-800">12 marcas</strong>.
                        Descubra quais passaram no teste de pH e segurança da Anvisa.
                    </p>
                </section>

                {/* O Pódio 2026 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Trophy size={20} className="text-amber-500" />
                        <h2 className="text-lg font-bold font-heading text-gray-900">
                            O Pódio 2026
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {podium.map((item) => (
                            <article
                                key={item.name}
                                className={`group relative bg-gradient-to-br ${item.bgGradient} rounded-2xl border ${item.borderColor} overflow-hidden`}
                            >
                                <div className={`absolute top-3 right-3 bg-gradient-to-r ${item.badgeGradient} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm`}>
                                    {item.position} {item.medal}
                                </div>
                                <div className="p-5">
                                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                        <div className="text-gray-400 text-xs">Foto {item.name}</div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.badge}</span>
                                    <h3 className="text-base font-bold text-gray-900 mt-1 mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-violet-600 font-medium mb-1">{item.tag}</p>
                                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                        {item.verdict}
                                    </p>
                                    <Link
                                        href={item.link}
                                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.buttonGradient} hover:opacity-90 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95`}
                                    >
                                        {item.buttonText}
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Lista de Leitura Obrigatória */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <FileText size={20} className="text-violet-600" />
                        <h2 className="text-lg font-bold font-heading text-gray-900">
                            Leitura Obrigatória
                        </h2>
                    </div>

                    <div className="space-y-2">
                        {articles.map((article) => (
                            <Link
                                key={article.id}
                                href={article.link}
                                className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-gray-200 transition-all active:scale-[0.99]"
                            >
                                <span className="text-lg">{article.emoji}</span>
                                <span className="flex-1 text-sm font-medium text-gray-800 leading-tight">{article.title}</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
