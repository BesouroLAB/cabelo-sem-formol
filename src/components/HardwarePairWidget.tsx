import React from 'react';
import { Zap, Thermometer } from 'lucide-react';

interface HardwarePairWidgetProps {
    title: string;
    productName: string;
    imageUrl: string;
    linkUrl: string;
}

export default function HardwarePairWidget({
    title,
    productName,
    imageUrl, // In real app use Next.js Image
    linkUrl
}: HardwarePairWidgetProps) {
    return (
        <div className="my-10 p-4 border border-yellow-200 bg-yellow-50 rounded-lg flex flex-col sm:flex-row items-center gap-4 shadow-sm">
            <div className="p-3 bg-white rounded-full text-yellow-600 shadow-sm shrink-0">
                <Zap size={24} strokeWidth={2.5} />
            </div>

            <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-1 flex items-center justify-center sm:justify-start gap-2">
                    ⚠️ Potencialize o Resultado
                </p>
                <p className="text-gray-700 text-sm leading-snug">
                    {title}
                </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-100 shadow-sm shrink-0 w-full sm:w-auto">
                <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden relative shrink-0">
                    {/* Placeholder for image */}
                    {imageUrl ? (
                        <img src={imageUrl} alt={productName} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">img</div>
                    )}
                </div>
                <div className="flex flex-col flex-1 sm:hidden">
                    <span className="text-xs font-bold text-gray-900">{productName}</span>
                </div>
                <button className="bg-primary hover:bg-violet-700 text-white text-sm font-bold px-4 py-2 rounded-md whitespace-nowrap active:scale-95 transition-transform">
                    Ver Combo Ideal
                </button>
            </div>
        </div>
    );
}
