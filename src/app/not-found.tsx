'use client';

import Link from 'next/link';
import { Home, BookOpen, Sparkles, ArrowLeft, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const quickLinks = [
        {
            href: '/',
            label: 'Página Inicial',
            description: 'Voltar para o início',
            icon: Home,
            color: 'from-violet-500 to-purple-600',
        },
        {
            href: '/blog',
            label: 'Blog',
            description: 'Todos os artigos',
            icon: BookOpen,
            color: 'from-pink-500 to-rose-600',
        },
        {
            href: '/ranking/2026',
            label: 'Ranking 2026',
            description: 'As melhores progressivas',
            icon: Sparkles,
            color: 'from-amber-500 to-orange-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    style={{
                        top: '10%',
                        left: '20%',
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />
                <div
                    className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
                    style={{
                        bottom: '20%',
                        right: '15%',
                        transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />
                <div
                    className="absolute w-64 h-64 bg-violet-400/15 rounded-full blur-3xl"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />
            </div>

            {/* Floating hair strands decoration */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"
                        style={{
                            height: `${100 + i * 50}px`,
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            transform: `rotate(${-15 + i * 5}deg)`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* 404 Number with glow effect */}
                <div className="relative mb-8">
                    <h1
                        className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 leading-none select-none"
                        style={{
                            textShadow: '0 0 80px rgba(168, 85, 247, 0.4)',
                        }}
                    >
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-purple-500/10 blur-2xl animate-pulse" />
                    </div>
                </div>

                {/* Message */}
                <div className="mb-12 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Ops! Esse fio se soltou... 💇‍♀️
                    </h2>
                    <p className="text-lg text-purple-200/80 max-w-md mx-auto">
                        A página que você procura não existe mais ou foi movida.
                        Mas calma, seu cabelo continua lindo!
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                <link.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-white mb-1">{link.label}</h3>
                            <p className="text-sm text-purple-200/60">{link.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Search suggestion */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao Início
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all active:scale-95"
                    >
                        <Search className="w-4 h-4" />
                        Explorar Artigos
                    </Link>
                </div>

                {/* Fun fact */}
                <p className="mt-12 text-xs text-purple-300/40">
                    💡 Você sabia? Progressivas orgânicas não têm formol e mantêm seu cabelo saudável!
                </p>
            </div>
        </div>
    );
}
