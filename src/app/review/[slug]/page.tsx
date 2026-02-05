import { notFound } from 'next/navigation';
import { getReviewBySlug } from '@/lib/data';
import CSFScoreBox from '@/components/CSFScoreBox';
import HardwarePairWidget from '@/components/HardwarePairWidget';
import ProductStickyBar from '@/components/ProductStickyBar';
import ProsConsTable from '@/components/ProsConsTable';
import Link from 'next/link';
import { ArrowLeft, Share2, CheckCircle, ChevronDown } from 'lucide-react';

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const review = getReviewBySlug(slug);

    if (!review) {
        notFound();
    }

    return (
        <div className="bg-slate-950 min-h-screen pb-24">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 glass border-b-0">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <div className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
                        <Link href="/">
                            <ArrowLeft size={24} />
                        </Link>
                    </div>
                    <h2 className="text-white text-md font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-heading">
                        CabeloSemFormol
                    </h2>
                    <div className="flex w-10 items-center justify-end">
                        <button className="flex cursor-pointer items-center justify-center text-white hover:text-purple-400">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-md mx-auto pb-32">
                {/* Headline Section */}
                <section className="px-4 pt-6">
                    <h1 className="text-white tracking-tight text-[28px] font-bold leading-tight pb-3 font-heading">
                        {review.title}
                    </h1>
                    {/* Profile Header */}
                    <div className="flex items-center gap-3 py-4">
                        <div
                            className="bg-gradient-to-br from-purple-500 to-pink-500 aspect-square rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/20"
                        >
                            CSF
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white text-sm font-bold leading-tight flex items-center gap-1">
                                {review.author}
                                <CheckCircle size={14} className="text-purple-400" />
                            </p>
                            <p className="text-slate-400 text-xs">
                                Especialista em Tricologia • {review.publishDate}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Score Card Section */}
                <section className="p-4">
                    <CSFScoreBox
                        score={review.overallScore}
                        verdict={review.verdict}
                        safetyScore={review.safetyScore}
                        straighteningScore={review.straighteningScore}
                        durabilityScore={review.durabilityScore}
                        ctaText="Ver Preço na Amazon"
                        ctaUrl={review.product.affiliateLink}
                    />
                </section>

                {/* TOC Accordion */}
                <section className="px-4 py-4">
                    <div className="glass rounded-xl overflow-hidden border-white/10">
                        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors">
                            <span className="font-bold text-sm text-white">Índice do Conteúdo</span>
                            <ChevronDown size={20} className="text-slate-400" />
                        </div>
                    </div>
                </section>

                {/* Pros & Cons */}
                <section className="px-4 py-4">
                    <ProsConsTable pros={review.pros} cons={review.cons} />
                </section>

                {/* Technical Table */}
                <section className="px-4 py-6">
                    <h2 className="text-lg font-bold text-white mb-4 font-heading">Especificações Clínicas</h2>
                    <div className="overflow-hidden glass rounded-xl border-white/10">
                        <table className="w-full text-left text-sm">
                            <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-4 font-semibold text-slate-400">Componente Ativo</td>
                                    <td className="px-4 py-4 text-white font-medium">{review.chemicalData.base}</td>
                                </tr>
                                <tr className="bg-white/5 border-b border-white/5">
                                    <td className="px-4 py-4 font-semibold text-slate-400">Nível de pH</td>
                                    <td className="px-4 py-4 text-white font-medium">{review.chemicalData.ph}</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-4 font-semibold text-slate-400">Volume</td>
                                    <td className="px-4 py-4 text-white font-medium">300ml / 500ml</td>
                                </tr>
                                <tr className="bg-white/5">
                                    <td className="px-4 py-4 font-semibold text-slate-400">Incompatível Com</td>
                                    <td className="px-4 py-4 text-white font-medium">
                                        {review.chemicalData.incompatible.join(', ')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Hardware Widget */}
                {review.hardwarePair && (
                    <section className="px-4 py-4">
                        <HardwarePairWidget
                            title={review.hardwarePair.title}
                            productName={review.hardwarePair.productName}
                            productImage={review.hardwarePair.productImage}
                            description={review.hardwarePair.description}
                            ctaText={review.hardwarePair.ctaText}
                            ctaUrl={review.hardwarePair.ctaUrl}
                        />
                    </section>
                )}
            </main>

            {/* Sticky Mobile/Desktop Bar */}
            <ProductStickyBar
                productName={review.product.name}
                price={review.product.price}
                image={review.product.imageUrl}
                affiliateUrl={review.product.affiliateLink}
                rating={review.overallScore}
            />
        </div>
    );
}
