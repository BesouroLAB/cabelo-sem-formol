'use client';

import Link from 'next/link';
import { ArrowRight, AlertTriangle, Zap, Info } from 'lucide-react';

interface HardwarePairWidgetProps {
    icon?: 'warning' | 'bolt' | 'info';
    title: string;
    description: string;
    recommendation?: string;
    productName: string;
    productImage?: string;
    ctaText: string;
    ctaUrl: string;
}

export default function HardwarePairWidget({
    icon = 'bolt',
    title,
    description,
    recommendation,
    productName,
    productImage,
    ctaText,
    ctaUrl,
}: HardwarePairWidgetProps) {
    const IconComponent = {
        warning: AlertTriangle,
        bolt: Zap,
        info: Info,
    }[icon];

    const iconColors = {
        warning: 'text-amber-400',
        bolt: 'text-purple-400',
        info: 'text-blue-400',
    }[icon];

    return (
        <div className="glass rounded-2xl border border-white/10 p-5 my-6 relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className={`p-1.5 rounded-lg ${icon === 'warning' ? 'bg-amber-500/10' : icon === 'bolt' ? 'bg-purple-500/10' : 'bg-blue-500/10'}`}>
                    <IconComponent size={18} className={iconColors} />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-[0.1em] text-slate-300">
                    {title}
                </h4>
            </div>

            {/* Content */}
            <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-4">
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                        {description}
                    </p>

                    {recommendation && (
                        <p className="text-xs font-semibold text-white bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                            <span className="text-yellow-400">💡</span> {recommendation}
                        </p>
                    )}

                    <Link
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:brightness-110 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-95 group"
                    >
                        {ctaText}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Product Image */}
                <div className="w-24 h-24 bg-white/5 rounded-2xl p-3 border border-white/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
                    {productImage ? (
                        <img
                            src={productImage}
                            alt={productName}
                            className="max-w-full max-h-full object-contain relative z-10"
                        />
                    ) : (
                        <div className="text-[10px] text-slate-500 text-center font-bold tracking-tight relative z-10">{productName}</div>
                    )}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg z-20">
                        OFFER
                    </span>
                </div>
            </div>
        </div>
    );
}
