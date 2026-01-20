'use client';

import { Shield, CheckCircle2 } from 'lucide-react';

interface SafetyBadgeProps {
    text: string;
    variant?: 'success' | 'warning' | 'info';
}

export default function SafetyBadge({ text, variant = 'success' }: SafetyBadgeProps) {
    const variants = {
        success: {
            bg: 'bg-emerald-50',
            border: 'border-emerald-200',
            icon: 'text-emerald-600',
            text: 'text-emerald-800',
        },
        warning: {
            bg: 'bg-amber-50',
            border: 'border-amber-200',
            icon: 'text-amber-600',
            text: 'text-amber-800',
        },
        info: {
            bg: 'bg-sky-50',
            border: 'border-sky-200',
            icon: 'text-sky-600',
            text: 'text-sky-800',
        },
    };

    const v = variants[variant];

    return (
        <div className={`${v.bg} ${v.border} border rounded-xl p-4 my-6 flex items-start gap-3`}>
            <Shield size={20} className={`${v.icon} flex-shrink-0 mt-0.5`} />
            <p className={`text-sm ${v.text} leading-relaxed`}>{text}</p>
        </div>
    );
}
