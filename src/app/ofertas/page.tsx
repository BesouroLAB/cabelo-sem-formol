
import { Sparkles, ArrowRight, Tag } from 'lucide-react';

export default function OfertasPage() {
    return (
        <div className="min-h-screen bg-bg-soft pb-24">
            <main className="max-w-md mx-auto px-4 py-8">
                <header className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-4 shadow-xl shadow-rose-200">
                        <Tag size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight">Melhores Ofertas do Dia</h1>
                    <p className="text-sm text-gray-500 mt-2">Monitoramos os preços da Amazon em tempo real.</p>
                </header>

                <div className="space-y-4">
                    {/* Mock Deals */}
                    <DealCard
                        title="Progressiva Prohall Select One"
                        price="R$ 189,90"
                        oldPrice="R$ 259,90"
                        discount="-27%"
                        image="/images/products/prohall.png" // Placeholder
                        link="#"
                    />
                    <DealCard
                        title="Prancha Lizze Extreme"
                        price="R$ 449,00"
                        oldPrice="R$ 599,00"
                        discount="-25%"
                        image="/images/products/lizze.png" // Placeholder
                        link="#"
                    />
                </div>
            </main>
        </div>
    );
}

function DealCard({ title, price, oldPrice, discount, image, link }: any) {
    return (
        <a href={link} className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-98">
            <div className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-gray-100 rounded-xl shrink-0 flex items-center justify-center text-xs text-gray-400">
                    Img
                </div>
                <div className="flex-1">
                    <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block">
                        {discount} OFF
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{title}</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-gray-900">{price}</span>
                        <span className="text-xs text-gray-400 line-through">{oldPrice}</span>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <ArrowRight size={16} />
                </div>
            </div>
        </a>
    )
}
