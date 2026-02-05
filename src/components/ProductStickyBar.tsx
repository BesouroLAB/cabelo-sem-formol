'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, TrendingUp } from 'lucide-react';
import { slideUp } from '@/lib/animations';

interface ProductStickyBarProps {
    productName: string;
    price: string;
    oldPrice?: string;
    affiliateUrl: string;
    rating?: number;
    image?: string;
}

export default function ProductStickyBar({
    productName,
    price,
    oldPrice,
    affiliateUrl,
    rating,
    image,
}: ProductStickyBarProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Show after scrolling down a bit (e.g., passed the hero section)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={slideUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed bottom-16 left-0 right-0 z-[999] p-4 glass border-t-0 shadow-[0_-8px_30px_rgba(168,85,247,0.15)] md:bottom-0 md:pb-4"
                >
                    <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                        {/* Product Info */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {image && (
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-white/10 border border-white/10 p-1">
                                    <img src={image} alt={productName} className="w-full h-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity" />
                                </div>
                            )}
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                                    <TrendingUp size={12} className="text-green-400" />
                                    Melhor Escolha
                                </span>
                                <h3 className="text-sm font-bold text-white truncate max-w-[200px] md:max-w-none drop-shadow-sm">
                                    {productName}
                                </h3>
                            </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center gap-4 shrink-0">
                            <div className="flex flex-col items-end hidden sm:flex">
                                {oldPrice && (
                                    <span className="text-xs text-slate-400 line-through decoration-red-400">
                                        {oldPrice}
                                    </span>
                                )}
                                <span className="text-xl font-black text-white font-heading drop-shadow-md">
                                    {price}
                                </span>
                            </div>

                            <a
                                href={affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/25 transition-all active:scale-95 overflow-hidden border border-white/10"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2">
                                    <ShoppingBag size={18} />
                                    <span className="hidden sm:inline">Ver Preço</span>
                                    <span className="sm:hidden">Comprar</span>
                                </span>
                            </a>
                        </div>

                        {/* Close Button (Optional, maybe not needed for sticky conversion bars) */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 rounded-full p-1 border border-gray-200 shadow-sm text-gray-400 hover:text-red-500 md:hidden"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
