'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FlaskConical, Trophy, User } from 'lucide-react';

const navItems = [
    { href: '/', icon: Home, label: 'Início' },
    { href: '/categoria/progressivas-sem-formol', icon: FlaskConical, label: 'Análises' },
    { href: '/ranking/2026', icon: Trophy, label: 'Ranking' },
    { href: '/sobre', icon: User, label: 'Perfil' },
];

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 glass border-t-0 flex items-center justify-around px-6 z-50 md:hidden safe-area-bottom">
            {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-white scale-110 drop-shadow-glow' : 'text-slate-500 hover:text-slate-300'
                            }`}
                    >
                        <Icon size={24} strokeWidth={active ? 2.5 : 1.5} className={active ? "text-primary" : ""} />
                        <span className={`text-[9px] uppercase tracking-widest ${active ? 'font-black text-white' : 'font-bold'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
