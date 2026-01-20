import { notFound } from 'next/navigation';
import { ChevronRight, FlaskConical, AlertTriangle, Check, X } from 'lucide-react';
import { getReviewBySlug } from '@/lib/data';
import CSFScoreBox from '@/components/CSFScoreBox';
import HardwarePairWidget from '@/components/HardwarePairWidget';
import AffiliateToast from '@/components/AffiliateToast';
import Link from 'next/link';

export default function ReviewPage({ params }: { params: { slug: string } }) {
    // In Next 15 params is async but in 14 it's just props usually, but let's handle as standard content
    const review = getReviewBySlug(params.slug);

    if (!review) {
        notFound();
    }

    return (
        <div className="bg-bg-soft min-h-screen pb-24 font-body">
            {/* Breadcrumb */}
            <nav className="bg-white border-b border-gray-100 py-3 px-4">
                <div className="max-w-3xl mx-auto flex items-center text-xs text-gray-500">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <ChevronRight size={12} className="mx-2" />
                    <span className="text-gray-900 font-medium truncate">{review.product.name}</span>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-4 py-8">

                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                        {review.title}
                    </h1>
                    <div className="flex items-center gap-3 text-sm text-gray-500 border-b border-gray-200 pb-8">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                            CSF
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 block">{review.author}</span>
                            <span className="text-xs">Atualizado em {review.publishDate}</span>
                        </div>
                    </div>
                </header>

                {/* Hero Score */}
                <CSFScoreBox
                    score={review.overallScore}
                    verdict={review.verdict}
                    safetyScore={review.safetyScore}
                    straighteningScore={review.straighteningScore}
                    durabilityScore={review.durabilityScore}
                />

                {/* Content Body */}
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                        {review.subtitle}
                    </p>

                    <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
                        <FlaskConical className="text-science" />
                        Análise Química
                    </h2>

                    <div className="bg-blue-50 border-l-4 border-science p-6 rounded-r-xl mb-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-xs font-bold text-science uppercase mb-1">pH Medido</span>
                                <span className="text-2xl font-bold text-gray-900">{review.chemicalData.ph}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-science uppercase mb-1">Base Ativa</span>
                                <span className="text-lg font-bold text-gray-900 leading-tight">{review.chemicalData.base}</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-100">
                            <span className="block text-xs font-bold text-danger uppercase mb-1">Incompatível Com</span>
                            <div className="flex flex-wrap gap-2">
                                {review.chemicalData.incompatible.map(inc => (
                                    <span key={inc} className="bg-white text-danger px-2 py-1 rounded text-xs font-bold border border-red-100">
                                        {inc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p>
                        Durante nossos testes de bancada, submetemos a <strong className="text-primary">{review.product.name}</strong> a três
                        ciclos de lavagem térmica. O resultado impressionou pela estabilidade das pontes de dissulfeto.
                        Diferente de progressivas à base de Formol (que apenas "encapam" o fio), a base de {review.chemicalData.base}
                        atua no córtex, permitindo modelagem real.
                    </p>

                    {/* HARDWARE WIDGET INSERTION */}
                    {review.hardwarePair && (
                        <HardwarePairWidget
                            title={review.hardwarePair.title}
                            productName={review.hardwarePair.productName}
                            imageUrl={review.hardwarePair.imageUrl}
                            linkUrl={review.hardwarePair.linkUrl}
                        />
                    )}

                    <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-6">Prós e Contras</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h3 className="font-bold text-success mb-4 flex items-center gap-2">
                                <Check size={20} /> Pontos Fortes
                            </h3>
                            <ul className="space-y-3">
                                {review.pros.map(pro => (
                                    <li key={pro} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-success rounded-full shrink-0"></span>
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-danger mb-4 flex items-center gap-2">
                                <AlertTriangle size={20} /> Pontos de Atenção
                            </h3>
                            <ul className="space-y-3">
                                {review.cons.map(con => (
                                    <li key={con} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-danger rounded-full shrink-0"></span>
                                        {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusão</h2>
                    <p>
                        Se você busca segurança acima de tudo, este é o produto definitivo. O investimento inicial é alto,
                        mas o rendimento (média de 15 aplicações) dilui o custo, tornando-a uma opção econômica para profissionais.
                    </p>

                    <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
                        <a
                            href={review.product.affiliateLink}
                            className="inline-block bg-primary hover:bg-violet-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl shadow-violet-200 transition-all active:scale-95"
                        >
                            Ver Preço Oficial
                        </a>
                        <p className="text-xs text-gray-500 mt-3">Link seguro verificado pela Redação CSF</p>
                    </div>

                </div>
            </main>

            {/* Sticky Mobile Footer */}
            <AffiliateToast
                productName={review.product.name}
                price={review.product.price}
                imageUrl={review.product.imageUrl}
                linkUrl={review.product.affiliateLink}
            />
        </div>
    );
}
