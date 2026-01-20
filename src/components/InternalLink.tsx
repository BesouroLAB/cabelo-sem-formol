'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface InternalLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: 'inline' | 'block';
}

export default function InternalLink({ href, children, variant = 'inline' }: InternalLinkProps) {
    if (variant === 'block') {
        return (
            <Link
                href={href}
                className="flex items-center gap-2 my-4 p-4 bg-violet-50 hover:bg-violet-100 border border-violet-100 rounded-xl text-violet-700 font-medium text-sm transition-colors active:scale-[0.99]"
            >
                <span className="flex-1">{children}</span>
                <ChevronRight size={16} className="flex-shrink-0" />
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="text-violet-600 hover:text-violet-700 underline underline-offset-2 decoration-violet-300 hover:decoration-violet-500 font-medium transition-colors"
        >
            {children}
        </Link>
    );
}
