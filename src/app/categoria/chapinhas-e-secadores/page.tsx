import Link from 'next/link';
import { ArrowRight, ArrowLeft, Plug2, FileText, ChevronRight, Thermometer, Zap } from 'lucide-react';

export const metadata = {
    title: 'Engenharia Térmica: Ferramentas que Selam de Verdade | Cabelo Sem Formol',
    description: 'Cerâmica ou Titânio? Analisamos Lizze, Taiff e MQ. Descubra qual chapinha atinge os 250°C reais para ativar sua progressiva.',
};

const profiles = [
    {
        title: 'A Profissional / Exigente',
        icon: Zap,
        iconBg: 'bg-red-100 text-red-600',
        necessity: 'Calor extremo (250°C) para selar em 4 passadas.',
        recommendation: 'Lizze Extreme',
        link: '/review/lizze-extreme',
        buttonText: 'Ler a Verdade sobre a Lizze',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-100',
    },
    {
        title: 'A Iniciante / Cautelosa',
        icon: Thermometer,
        iconBg: 'bg-emerald-100 text-emerald-600',
        necessity: 'Leveza e segurança para fazer sozinha em casa.',
        recommendation: 'Taiff Style Pro',
        link: '/review/taiff-style-pro',
        buttonText: 'Ver Review Taiff',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
    },
];

const articles = [
    {
        id: '201',
        emoji: '📄',
        title: 'Guia Definitivo: Qual a melhor chapinha para progressiva sem formol?',
        link: '/artigo/melhor-chapinha-progressiva',
    },
    {
        id: '203',
        emoji: '⚠️',
        title: 'Alerta: Cuidado ao usar a Lizze Extreme em loiras (Tabela de Temperatura)',
        link: '/artigo/lizze-extreme-loiras-temperatura',
    },
];

export default function SiloChapinhas() {
    return (
        <>
            {/* Header Sticky */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link href="/" className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">Chapinhas & Secadores</span>
                    <div className="w-6" />
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-8 space-y-8">
                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-2">
                        <Plug2 size={28} className="text-orange-600" strokeWidth={1.5} />
                    </div>

                    <h1 className="text-2xl font-bold font-heading text-gray-900 leading-tight">
                        O Segredo não é o Produto, é a Temperatura.
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">90% das falhas</strong> em alisamentos orgânicos acontecem por ferramentas inadequadas.
                        Você precisa de <strong className="text-gray-800">estabilidade térmica</strong>.
                    </p>
                </section>

                {/* Guia Rápido: Qual o Seu Perfil? */}
                <section className="space-y-4">
                    <h2 className="text-lg font-bold font-heading text-gray-900">
                        Qual é o seu perfil?
                    </h2>

                    <div className="space-y-4">
                        {profiles.map((profile) => (
                            <article
                                key={profile.title}
                                className={`${profile.bgColor} rounded-2xl border ${profile.borderColor} p-5 space-y-4`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 ${profile.iconBg} rounded-xl flex items-center justify-center`}>
                                        <profile.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-900">{profile.title}</h3>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Necessidade</span>
                                        <p className="text-sm text-gray-700">{profile.necessity}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Recomendação</span>
                                        <p className="text-sm font-bold text-gray-900">{profile.recommendation}</p>
                                    </div>
                                </div>

                                <Link
                                    href={profile.link}
                                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95"
                                >
                                    {profile.buttonText}
                                    <ArrowRight size={14} />
                                </Link>
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
