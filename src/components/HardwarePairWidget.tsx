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
        warning: 'text-amber-500',
        bolt: 'text-violet-500',
        info: 'text-sky-500',
    }[icon];

    return (
        <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-5 my-6 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <IconComponent size={20} className={`${iconColors} animate-pulse`} />
                <h4 className="font-bold text-sm uppercase tracking-wide text-violet-700">
                    {title}
                </h4>
            </div>

            {/* Content */}
            <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    {recommendation && (
                        <p className="text-xs font-semibold text-gray-800 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            💡 {recommendation}
                        </p>
                    )}

                    <Link
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-sm transition-colors active:scale-95"
                    >
                        {ctaText}
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Product Image */}
                <div className="w-20 h-20 bg-white rounded-lg p-2 border border-gray-200 flex items-center justify-center flex-shrink-0 relative">
                    {productImage ? (
                        <img
                            src={productImage}
                            alt={productName}
                            className="max-w-full max-h-full object-contain"
                        />
                    ) : (
                        <div className="text-[10px] text-gray-400 text-center">{productName}</div>
                    )}
                    <span className="absolute -bottom-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                        Hot
                    </span>
                </div>
            </div>
        </div>
    );
}
