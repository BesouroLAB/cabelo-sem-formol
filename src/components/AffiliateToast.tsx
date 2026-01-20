import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AffiliateToastProps {
    productName: string;
    price: string;
    imageUrl: string;
    linkUrl: string;
}

export default function AffiliateToast({
    productName,
    price,
    imageUrl,
    linkUrl
}: AffiliateToastProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 md:hidden">
            <div className="flex items-center justify-between max-w-md mx-auto gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                        {/* Placeholder for image - in real implementation use Next/Image */}
                        {imageUrl ? (
                            <img src={imageUrl} alt={productName} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gray-200" />
                        )}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-1">{productName}</h4>
                        <span className="text-success font-bold text-sm tracking-tight">{price}</span>
                    </div>
                </div>

                <a
                    href={linkUrl}
                    className="flex-1 max-w-[140px] bg-success hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm active:scale-95 transition-all shadow-md"
                >
                    Ver Oferta
                    <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
}
