import Link from 'next/link';
import { ArrowLeft, ShowerHead, FileText, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Praticidade no Box: O que Funciona e o que é Marketing | Cabelo Sem Formol',
    description: 'Hidraliso, La Bella Liss ou Phinna? Testamos as progressivas de chuveiro virais do Instagram. Veja qual alisa e qual só hidrata.',
};

const brands = [
    {
        name: 'Hidraliso',
        objective: 'Alisar Ondas',
        verdict: 'A única com potência real.',
        link: '/review/hidraliso',
        highlight: true,
    },
    {
        name: 'La Bella Liss',
        objective: 'Desmaiar Volume',
        verdict: 'Melhor cheiro e preço baixo.',
        link: '/review/la-bella-liss',
        highlight: false,
    },
    {
        name: 'Phinna',
        objective: 'Manutenção',
        verdict: 'Brilho gloss intenso.',
        link: '/review/phinna',
        highlight: false,
    },
];

const articles = [
    {
        id: '301',
        emoji: '🚿',
        title: 'A Verdade Técnica: Progressiva de chuveiro alisa cabelo crespo?',
        link: '/artigo/progressiva-chuveiro-cabelo-crespo',
    },
    {
        id: '304',
        emoji: '🏆',
        title: 'O Ranking: As 3 Melhores Opções (Do Luxo ao Baratinho)',
        link: '/artigo/ranking-progressivas-chuveiro',
    },
];

export default function SiloChuveiro() {
    return (
        <>
            {/* Header Sticky */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link href="/" className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">No Chuveiro</span>
                    <div className="w-6" />
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-8 space-y-8">
                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-100 rounded-2xl mb-2">
                        <ShowerHead size={28} className="text-sky-600" strokeWidth={1.5} />
                    </div>

                    <h1 className="text-2xl font-bold font-heading text-gray-900 leading-tight">
                        Liso em 15 Minutos? Vamos alinhar expectativas.
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Testamos as marcas virais da internet. A verdade: elas <strong className="text-gray-800">não substituem a química de salão</strong>,
                        mas salvam a sua semana.
                    </p>
                </section>

                {/* Batalha das Marcas */}
                <section className="space-y-4">
                    <h2 className="text-lg font-bold font-heading text-gray-900">
                        Batalha das Marcas
                    </h2>

                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Marca</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Objetivo</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Veredito</span>
                        </div>

                        {/* Table Body */}
                        {brands.map((brand, index) => (
                            <Link
                                key={brand.name}
                                href={brand.link}
                                className={`grid grid-cols-3 gap-2 px-4 py-4 items-center hover:bg-gray-50 transition-colors ${index !== brands.length - 1 ? 'border-b border-gray-50' : ''
                                    } ${brand.highlight ? 'bg-violet-50/50' : ''}`}
                            >
                                <span className={`text-sm font-bold ${brand.highlight ? 'text-violet-700' : 'text-gray-900'}`}>
                                    {brand.name}
                                </span>
                                <span className="text-xs text-gray-600">{brand.objective}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs text-gray-600 line-clamp-2">{brand.verdict}</span>
                                    <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
                                </div>
                            </Link>
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
