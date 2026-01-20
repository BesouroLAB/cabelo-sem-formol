'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Trophy, BookOpen, User } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/ranking/2026', label: 'Ranking', icon: Trophy },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/sobre', label: 'Sobre', icon: User },
];

export default function StickyFooter() {
    const pathname = usePathname();

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.08)] z-50">
            {/* Safe area for iOS */}
            <div className="pb-[env(safe-area-inset-bottom)]">
                <div className="max-w-md mx-auto px-4 py-3">
                    <div className="flex items-center justify-around">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex flex-col items-center gap-1 transition-colors ${isActive
                                        ? 'text-violet-600'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
