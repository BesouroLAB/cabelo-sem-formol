import Link from 'next/link';
import { Menu, Search, Medal, Award, Image as ImageIcon, Star } from 'lucide-react';

export const metadata = {
    title: 'Progressivas Sem Formol: Guia Definitivo 2026 | Cabelo Sem Formol',
    description: 'Nossa equipe clínica testou e aprovou as fórmulas mais seguras e eficazes para um alisamento saudável.',
};

const podium = [
    {
        position: 1,
        medal: '#1 GOLD',
        badgeColor: 'bg-yellow-400 text-white',
        name: 'Bio-Organic Premium',
        description: 'Máxima durabilidade e brilho espelhado.',
        link: '/review/bio-organic-premium',
        featured: true,
    },
    {
        position: 2,
        medal: '#2 SILVER CHOICE',
        badgeColor: 'text-gray-400',
        name: 'EcoLiss Advanced',
        description: 'Ideal para cabelos sensíveis.',
        link: '/review/ecoliss-advanced',
    },
    {
        position: 3,
        medal: '#3 BRONZE CHOICE',
        badgeColor: 'text-orange-600/70',
        name: 'Silk Therapy Plus',
        description: 'Melhor custo-benefício do ano.',
        link: '/review/silk-therapy-plus',
    },
];

const filters = ['Tudo', 'Para Loiras', 'Para Gestantes', 'Cabelos Afros', 'Orgânicas'];

const recentArticles = [
    {
        title: 'Royal Gloss: A revolução dos aminoácidos',
        description: 'Analisamos a nova fórmula do Royal Gloss que promete 100% de liso sem ardência nos olhos ou fumaça tóxica.',
        score: '9.8',
        image: '',
        link: '/review/royal-gloss',
    },
    {
        title: 'Qual a melhor progressiva para loiras?',
        description: 'Descubra quais produtos não amarelam o fio e mantêm a integridade da fibra capilar após a descoloração.',
        score: '9.5',
        image: '',
        link: '/artigo/melhor-progressiva-loiras',
    },
    {
        title: 'Segurança em primeiro lugar: Guia para Gestantes',
        description: 'Entenda os ativos permitidos pela ANVISA e quais marcas oferecem as opções mais seguras para futuras mamães.',
        score: '9.2',
        image: '',
        link: '/artigo/progressiva-gestantes',
    },
];

export default function SiloProgressivas() {
    return (
        <>
            {/* TopAppBar */}
            <nav className="sticky top-0 z-50 flex items-center glass p-4 justify-between border-b-0">
                <div className="text-white flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Menu size={24} />
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 px-3 text-center">
                    CabeloSemFormol
                </h2>
                <div className="flex w-10 items-center justify-end">
                    <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-white hover:bg-white/10">
                        <Search size={24} />
                    </button>
                </div>
            </nav>

            <main className="max-w-md mx-auto">
                {/* Intro Box */}
                <div className="px-4 pt-8 pb-4">
                    <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight pb-3">
                        Progressivas Sem Formol
                    </h1>
                    <p className="text-slate-400 text-base font-normal leading-relaxed">
                        Guia definitivo 2026. Nossa equipe clínica testou e aprovou as fórmulas mais seguras e eficazes para um alisamento saudável.
                    </p>
                </div>

                {/* O Pódio 2026 */}
                <div className="px-4 py-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Medal className="text-purple-400" size={24} />
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-tight">
                            O Pódio 2026
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {podium.map((item) => (
                            <div
                                key={item.name}
                                className={`relative glass rounded-xl p-4 flex items-center gap-4 ${item.featured ? 'border-purple-500/50' : ''}`}
                            >
                                {item.featured && (
                                    <div className="absolute -top-3 -left-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                        <Award size={14} />
                                        {item.medal}
                                    </div>
                                )}
                                <div className="w-24 h-24 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/10">
                                    <ImageIcon className="text-slate-600" size={24} />
                                </div>
                                <div className="flex-1">
                                    {!item.featured && (
                                        <div className={`flex items-center gap-1 ${item.badgeColor} text-[10px] font-bold uppercase mb-1`}>
                                            {item.medal}
                                        </div>
                                    )}
                                    <h3 className="font-bold text-lg leading-tight mb-1 text-white">{item.name}</h3>
                                    <p className="text-xs text-slate-400 mb-3">{item.description}</p>
                                    <Link
                                        href={item.link}
                                        className={`text-sm font-bold py-2 px-4 rounded-lg w-full block text-center transition-all active:scale-95 ${item.featured ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-white/10 text-white'}`}
                                    >
                                        Ver Review
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Horizontal Scrolling Filters (Pills) */}
                <div className="py-4">
                    <div className="flex overflow-x-auto px-4 gap-2 hide-scrollbar">
                        {filters.map((filter, index) => (
                            <button
                                key={filter}
                                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all ${index === 0 ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'bg-white/5 text-slate-300 border border-white/10'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Feed of vertical cards */}
                <div className="px-4 pb-12 space-y-6">
                    <h2 className="text-white text-xl font-bold pt-4 font-heading">Análises Recentes</h2>

                    {recentArticles.map((article, index) => (
                        <Link key={index} href={article.link} className="group flex flex-col gap-3">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white/5 border border-white/10">
                                {article.image ? (
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${article.image})` }}></div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ImageIcon className="text-slate-700" size={40} />
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 glass px-2 py-1 rounded-lg flex items-center gap-1 border border-purple-500/30">
                                    <Star className="text-purple-400 fill-purple-400" size={14} />
                                    <span className="font-bold text-sm text-white">{article.score}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-purple-400 transition-colors">{article.title}</h3>
                                <p className="text-sm text-slate-400 line-clamp-2">{article.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Spacer for bottom nav */}
                <div className="h-20"></div>
            </main>
        </>
    );
}
