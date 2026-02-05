import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';

interface EditorialCardProps {
    title: string;
    excerpt?: string;
    category?: string;
    image?: string;
    rating?: string | number;
    slug: string;
    author?: string;
    readTime?: string;
    isPriority?: boolean;
}

export default function EditorialCard({
    title,
    excerpt,
    category = "Editorial",
    image,
    rating,
    slug,
    author = "CSF Editorial",
    readTime = "5 min",
    isPriority = false
}: EditorialCardProps) {
    return (
        <div className="flex flex-col items-stretch justify-start rounded-3xl bg-white/5 border border-emerald-500/10 overflow-hidden shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
            {/* Image Container */}
            <Link href={slug} className="relative w-full aspect-[16/9] overflow-hidden bg-emerald-950">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-organic-bg/80 via-transparent to-transparent opacity-60" />

                {/* Rating Badge Overlay */}
                {rating && (
                    <div className="absolute top-4 right-4 bg-organic-bg/80 backdrop-blur-md border border-emerald-500/20 px-2 py-1 rounded-lg flex items-center gap-1">
                        <Star size={10} className="text-amber-400 fill-amber-400" />
                        <span className="text-[10px] font-bold text-white">{rating}</span>
                    </div>
                )}
            </Link>

            <div className="flex w-full grow flex-col items-stretch justify-center gap-3 p-6">
                {/* Metadata */}
                <div className="flex items-center gap-2">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{category}</span>
                    <span className="w-1 h-1 bg-emerald-500/30 rounded-full"></span>
                    <span className="text-emerald-500/60 text-[10px] font-medium flex items-center gap-1">
                        <Clock size={10} /> {readTime}
                    </span>
                </div>

                {/* Content */}
                <Link href={slug} className="group-hover:opacity-90 transition-opacity">
                    <h3 className="text-white text-xl md:text-2xl font-heading font-bold leading-tight tracking-tight">
                        {title}
                    </h3>
                    {excerpt && (
                        <p className="text-slate-400 text-sm font-body leading-relaxed line-clamp-2 mt-2 font-medium">
                            {excerpt}
                        </p>
                    )}
                </Link>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-emerald-900 border border-emerald-500/20 flex items-center justify-center overflow-hidden">
                            <span className="text-[8px] font-black text-primary">CSF</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{author}</span>
                    </div>

                    <Link href={slug} className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary hover:bg-primary-glow text-organic-bg text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all">
                        Ler Artigo
                    </Link>
                </div>
            </div>
        </div>
    );
}
