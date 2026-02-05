'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 glass border-b-0">
            <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <button aria-label="Menu" className="text-white flex items-center justify-center p-1 md:hidden">
                        <Menu size={24} />
                    </button>
                    <Link href="/">
                        <h1 className="text-white text-xl font-bold font-heading leading-tight tracking-tight drop-shadow-md">
                            Cabelo<span className="text-primary">SemFormol</span>
                        </h1>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/categoria/progressivas-sem-formol" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-all">
                        Progressivas
                    </Link>
                    <Link href="/categoria/chapinhas-e-secadores" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-all">
                        Chapinhas
                    </Link>
                    <Link href="/ranking/2026" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-all">
                        Ranking 2026
                    </Link>
                    <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-all">
                        Blog
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center p-2 text-white hover:bg-primary/10 rounded-lg transition-colors group">
                        <Search size={20} className="group-hover:text-primary transition-colors" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
