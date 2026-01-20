import Link from 'next/link';
import { ArrowLeft, Droplets, ArrowRight, Sparkles, Droplet, CalendarDays } from 'lucide-react';

export const metadata = {
    title: 'Cronograma Pós-Química: Faça o Liso Durar 3 Meses | Cabelo Sem Formol',
    description: 'Seu cabelo quebrou ou a progressiva saiu rápido? Guia completo de Cronograma Capilar, Acidificação e Shampoos com pH baixo.',
};

const pillars = [
    {
        icon: Sparkles,
        iconBg: 'bg-violet-100 text-violet-600',
        title: 'Acidificação',
        description: 'O segredo do brilho espelhado que fecha as cutículas.',
        link: '/artigo/acidificacao-capilar',
        buttonText: 'Entenda Acidificação',
        bgColor: 'bg-violet-50',
        borderColor: 'border-violet-100',
    },
    {
        icon: Droplet,
        iconBg: 'bg-sky-100 text-sky-600',
        title: 'Limpeza Suave',
        description: 'Shampoos que lavam sem remover a progressiva.',
        link: '/artigo/top-5-shampoos-pos-quimica',
        buttonText: 'Top 5 Shampoos',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-100',
    },
    {
        icon: CalendarDays,
        iconBg: 'bg-emerald-100 text-emerald-600',
        title: 'Cronograma',
        description: 'A agenda exata de reposição de massa.',
        link: '/artigo/cronograma-capilar-pos-quimica',
        buttonText: 'Baixar Tabela',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
    },
];

export default function SiloTratamento() {
    return (
        <>
            {/* Header Sticky */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link href="/" className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">S.O.S Pós-Química</span>
                    <div className="w-6" />
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-8 space-y-8">
                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-2xl mb-2">
                        <Droplets size={28} className="text-emerald-600" strokeWidth={1.5} />
                    </div>

                    <h1 className="text-2xl font-bold font-heading text-gray-900 leading-tight">
                        Não jogue seu dinheiro no ralo.
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Usar shampoo de supermercado em cabelo com progressiva é o <strong className="text-gray-800">erro nº 1</strong>.
                        Aprenda a cuidar da química ácida.
                    </p>
                </section>

                {/* Os 3 Pilares da Durabilidade */}
                <section className="space-y-4">
                    <h2 className="text-lg font-bold font-heading text-gray-900">
                        Os 3 Pilares da Durabilidade
                    </h2>

                    <div className="space-y-4">
                        {pillars.map((pillar) => (
                            <article
                                key={pillar.title}
                                className={`${pillar.bgColor} rounded-2xl border ${pillar.borderColor} p-5 space-y-4`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 ${pillar.iconBg} rounded-xl flex items-center justify-center`}>
                                        <pillar.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-900">{pillar.title}</h3>
                                </div>

                                <p className="text-sm text-gray-700">{pillar.description}</p>

                                <Link
                                    href={pillar.link}
                                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95"
                                >
                                    {pillar.buttonText}
                                    <ArrowRight size={14} />
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Final */}
                <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
                        <CalendarDays size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                        Quer o Cronograma Completo?
                    </h3>
                    <p className="text-sm text-gray-600">
                        Baixe nossa tabela de reposição de massa e nutrição para cabelos com progressiva.
                    </p>
                    <Link
                        href="/cronograma"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg transition-all active:scale-95"
                    >
                        Baixar Cronograma Grátis
                        <ArrowRight size={16} />
                    </Link>
                </section>
            </main>
        </>
    );
}
