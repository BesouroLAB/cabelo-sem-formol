'use client';

import Link from 'next/link';
import { ArrowLeft, Share2, Clock, Calendar, User } from 'lucide-react';

interface ArticleHeaderProps {
    title: string;
    author: string;
    publishedAt: string;
    updatedAt?: string;
    readingTime: string;
    category: string;
    categoryLink: string;
}

export default function ArticleHeader({
    title,
    author,
    publishedAt,
    updatedAt,
    readingTime,
    category,
    categoryLink,
}: ArticleHeaderProps) {
    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: title,
                url: window.location.href,
            });
        }
    };

    return (
        <>
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link href={categoryLink} className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-bold text-sm tracking-tight text-gray-900">CabeloSemFormol.com.br</span>
                    <button onClick={handleShare} className="text-gray-500 hover:text-violet-600 transition-colors p-1">
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            {/* Article Header */}
            <div className="space-y-4 mb-8">
                {/* Category Badge */}
                <Link
                    href={categoryLink}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-700 transition-colors"
                >
                    {category}
                </Link>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                    {title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{updatedAt ? `Atualizado em ${updatedAt}` : publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{readingTime}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
