import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, Clock, FlaskConical, Plug2, ShowerHead, Droplets } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
    title: 'Blog | Cabelo Sem Formol',
    description: 'Artigos, reviews e guias sobre progressivas sem formol, chapinhas de titânio e cuidados capilares.',
};

const siloInfo: Record<number, { name: string; icon: React.ReactNode; color: string }> = {
    1: { name: 'Progressivas', icon: <FlaskConical size={14} />, color: 'bg-violet-100 text-violet-700' },
    2: { name: 'Chapinhas', icon: <Plug2 size={14} />, color: 'bg-amber-100 text-amber-700' },
    3: { name: 'Chuveiro', icon: <ShowerHead size={14} />, color: 'bg-sky-100 text-sky-700' },
    4: { name: 'Manutenção', icon: <Droplets size={14} />, color: 'bg-emerald-100 text-emerald-700' },
};

export default function BlogPage() {
    const articles = getAllArticles();

    // Agrupa por silo
    const articlesBySilo = articles.reduce((acc, article) => {
        const silo = article.frontmatter.silo;
        if (!acc[silo]) acc[silo] = [];
        acc[silo].push(article);
        return acc;
    }, {} as Record<number, typeof articles>);

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-center">
                    <span className="font-bold text-sm tracking-tight text-gray-900">CabeloSemFormol.com.br</span>
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 pb-28 space-y-8">
                {/* Hero */}
                <section className="text-center space-y-3">
                    <h1 className="text-2xl font-bold font-heading text-gray-900">
                        Blog & Reviews
                    </h1>
                    <p className="text-sm text-gray-600">
                        {articles.length} artigos sobre alisamento seguro
                    </p>
                </section>

                {/* Artigos por Silo */}
                {Object.entries(articlesBySilo)
                    .sort(([a], [b]) => Number(a) - Number(b))
                    .map(([silo, siloArticles]) => {
                        const info = siloInfo[Number(silo)];
                        return (
                            <section key={silo} className="space-y-3">
                                {/* Silo Header */}
                                <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${info.color}`}>
                                        {info.icon}
                                        {info.name}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {siloArticles.length} artigos
                                    </span>
                                </div>

                                {/* Lista de Artigos */}
                                <div className="space-y-2">
                                    {siloArticles.map((article) => {
                                        const { frontmatter, slug } = article;
                                        const isPillar = frontmatter.type === 'pillar';
                                        const urlPath = frontmatter.slug.startsWith('/reviews')
                                            ? frontmatter.slug
                                            : frontmatter.slug.startsWith('/artigos')
                                                ? frontmatter.slug
                                                : `/reviews/${frontmatter.slug}`;

                                        return (
                                            <Link
                                                key={slug}
                                                href={urlPath}
                                                className={`flex items-start gap-3 p-4 rounded-xl border transition-all active:scale-[0.99] ${isPillar
                                                        ? 'bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200'
                                                        : 'bg-white border-gray-100 hover:border-gray-200'
                                                    }`}
                                            >
                                                <div className="flex-1 min-w-0 space-y-1">
                                                    {isPillar && (
                                                        <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">
                                                            Artigo Pilar
                                                        </span>
                                                    )}
                                                    <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                                                        {frontmatter.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                                        <Clock size={10} />
                                                        <span>{frontmatter.readingTime}</span>
                                                    </div>
                                                </div>
                                                <ChevronRight size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
            </main>
        </>
    );
}
