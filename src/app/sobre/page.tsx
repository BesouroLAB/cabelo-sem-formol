import { ShieldCheck, Flame, Zap, Droplets, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Sobre Nós | Cabelo Sem Formol',
    description: 'Conheça a missão do Cabelo Sem Formol: levar ciência, segurança e o liso perfeito para todas as brasileiras, sem riscos à saúde.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-16 pb-24">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    {/* Placeholder for a nice aesthetic image */}
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-rose-900" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Ciência por trás do <span className="text-rose-400">Brilho.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Nascemos para provar que você não precisa escolher entre saúde e o cabelo dos seus sonhos.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container px-4 -mt-16 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que Cabelo Sem Formol?</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Durante décadas, o mercado de alisamento foi dominado pelo medo. Formol, ardência, fumaça tóxica e o risco silencioso de doenças graves eram considerados "parte do preço" da beleza.
                                </p>
                                <p>
                                    O <strong>Cabelo Sem Formol (CSF)</strong> surgiu para questionar esse status quo. Somos um portal independente dedicado a testar e analisar a nova geração de cosméticos ácidos e tecnologias térmicas.
                                </p>
                                <p>
                                    Nosso compromisso é com a <strong>verdade técnica</strong>. Se um produto alisa mas afina a ponta do seu cabelo, nós diremos. Se uma chapinha promete 250°C mas entrega 220°C, nós mediremos.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-rose-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <ShieldCheck className="w-10 h-10 text-rose-500 mb-3" />
                                <span className="font-bold text-slate-900">+50</span>
                                <span className="text-sm text-slate-500">Produtos Testados</span>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <Flame className="w-10 h-10 text-blue-500 mb-3" />
                                <span className="font-bold text-slate-900">Zero</span>
                                <span className="text-sm text-slate-500">Formol</span>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <Zap className="w-10 h-10 text-amber-500 mb-3" />
                                <span className="font-bold text-slate-900">100%</span>
                                <span className="text-sm text-slate-500">Foco em Brilho</span>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <Heart className="w-10 h-10 text-emerald-500 mb-3" />
                                <span className="font-bold text-slate-900">Saúde</span>
                                <span className="text-sm text-slate-500">Em Primeiro Lugar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Principles */}
            <section className="container px-4 py-20">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Nossos Pilares Editoriais</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Droplets className="text-blue-500" /> Curadoria Rigorosa
                        </h3>
                        <p className="text-slate-600">
                            Não falamos de todos os produtos, apenas daqueles que passam pelo nosso crivo de composição e segurança da ANVISA.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Zap className="text-amber-500" /> Teste de Bancada
                        </h3>
                        <p className="text-slate-600">
                            Usamos termômetros infravermelhos e medidores de pH para validar as promessas das marcas de hardware e química.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ShieldCheck className="text-emerald-500" /> Independência
                        </h3>
                        <p className="text-slate-600">
                            Mantemos nossa integridade editorial. Links de afiliados ajudam a manter o site, mas não influenciam nossas notas e rankings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container px-4 py-16">
                <div className="bg-slate-900 rounded-[2rem] p-12 text-center text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <h2 className="text-3xl font-bold mb-6">Pronta para o seu melhor liso?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Explore nossos rankings e reviews e descubra qual a melhor tecnologia para a saúde do seu fio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/blog"
                            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full transition-all active:scale-95 shadow-lg shadow-rose-500/25"
                        >
                            Ver Blog e Rankings
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
