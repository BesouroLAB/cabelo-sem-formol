import React from 'react';

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
        <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-bg-dark border-t border-gray-100 dark:border-gray-800 p-4 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] safe-area-bottom md:hidden">
            <div className="max-w-md mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                        {imageUrl ? (
                            <img src={imageUrl} alt={productName} className="w-full h-full object-contain" />
                        ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
                        )}
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-tight text-gray-700 dark:text-gray-300">{productName}</p>
                        <p className="text-lg font-black text-primary">{price}</p>
                    </div>
                </div>
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="bg-primary text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 whitespace-nowrap shadow-md active:scale-95 transition-transform"
                >
                    Comprar Agora
                </a>
            </div>
        </footer>
    );
}
