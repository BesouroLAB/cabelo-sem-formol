import React from 'react';
import { FlaskConical, Leaf, ShieldCheck, Droplets, Info } from 'lucide-react';

interface Ingredient {
    name: string;
    inci: string;
    function: string;
    benefit: string;
}

interface ChemicalAnalysisProps {
    productName: string;
    safetyScore: number;
    actives: Ingredient[];
    emollients: Ingredient[];
    preservatives: Ingredient[];
}

export default function ChemicalAnalysisCard({
    productName,
    safetyScore,
    actives,
    emollients,
    preservatives
}: ChemicalAnalysisProps) {

    // Determine score color
    const getScoreColor = (score: number) => {
        if (score >= 9) return 'text-emerald-400';
        if (score >= 7) return 'text-amber-400';
        return 'text-red-400';
    };

    return (
        <div className="w-full bg-[#FDFBF7] dark:bg-[#152e15]/60 border border-emerald-500/20 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl shadow-black/20 my-8">

            {/* Header */}
            <div className="p-6 pb-2">
                <h3 className="font-heading font-bold text-2xl text-emerald-950 dark:text-white leading-tight">
                    Análise Clínica de Ingredientes
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400/80 mt-1">
                    Resumo Clínico: {productName}
                </p>
            </div>

            <div className="px-6 pb-8 space-y-6">

                {/* Score Box */}
                <div className="bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-4 flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-white dark:bg-emerald-950 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                        <FlaskConical className="text-emerald-600 dark:text-emerald-400" size={24} />
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider">Pontuação de Segurança:</span>
                            <span className={`text-xl font-black ${getScoreColor(safetyScore)}`}>{safetyScore} / 10</span>
                        </div>
                        <p className="text-xs text-emerald-700 dark:text-emerald-400/90 leading-tight mt-1">
                            {safetyScore >= 9 ? 'Altamente Seguro. Fórmula focada em ingredientes biocompatíveis.' : 'Fórmula com atenção moderada.'}
                        </p>
                    </div>
                </div>

                {/* Section: Ativos */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/40 px-3 py-2 rounded-lg border-l-4 border-emerald-500">
                        <Leaf className="text-emerald-700 dark:text-emerald-400" size={16} />
                        <h4 className="font-heading font-bold text-emerald-900 dark:text-emerald-100 text-sm uppercase tracking-wider">
                            Ativos Principais
                        </h4>
                    </div>
                    <div className="space-y-4 pl-2">
                        {actives.map((item, idx) => (
                            <div key={idx} className="border-b border-emerald-500/10 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                                <p className="font-heading font-bold text-lg text-slate-800 dark:text-white leading-tight">
                                    {item.name}
                                </p>
                                <p className="text-xs italic text-slate-500 dark:text-slate-400 mb-1">{item.inci}</p>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-0.5">
                                    <p><span className="font-bold text-emerald-600 dark:text-emerald-500 text-xs uppercase">Função:</span> {item.function}</p>
                                    <p><span className="font-bold text-emerald-600 dark:text-emerald-500 text-xs uppercase">Benefício Clínico:</span> {item.benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Emolientes */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/40 px-3 py-2 rounded-lg border-l-4 border-amber-500">
                        <Droplets className="text-emerald-700 dark:text-amber-400" size={16} />
                        <h4 className="font-heading font-bold text-emerald-900 dark:text-emerald-100 text-sm uppercase tracking-wider">
                            Emolientes e Carreadores
                        </h4>
                    </div>
                    <div className="space-y-4 pl-2">
                        {emollients.map((item, idx) => (
                            <div key={idx} className="border-b border-emerald-500/10 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                                <p className="font-heading font-bold text-lg text-slate-800 dark:text-white leading-tight">
                                    {item.name}
                                </p>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-0.5 mt-1">
                                    <p><span className="font-bold text-emerald-600 dark:text-amber-500/80 text-xs uppercase">Função:</span> {item.function}</p>
                                    <p><span className="font-bold text-emerald-600 dark:text-amber-500/80 text-xs uppercase">Ação:</span> {item.benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Conservantes */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/40 px-3 py-2 rounded-lg border-l-4 border-slate-500">
                        <ShieldCheck className="text-emerald-700 dark:text-slate-400" size={16} />
                        <h4 className="font-heading font-bold text-emerald-900 dark:text-emerald-100 text-sm uppercase tracking-wider">
                            Conservantes
                        </h4>
                    </div>
                    <div className="space-y-4 pl-2">
                        {preservatives.map((item, idx) => (
                            <div key={idx} className="border-b border-emerald-500/10 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                                <p className="font-heading font-bold text-lg text-slate-800 dark:text-white leading-tight">
                                    {item.name}
                                </p>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-0.5 mt-1">
                                    <p><span className="font-bold text-emerald-600 dark:text-slate-500 text-xs uppercase">Tipo:</span> {item.function}</p>
                                    {item.benefit && <p><span className="font-bold text-emerald-600 dark:text-slate-500 text-xs uppercase">Obs:</span> {item.benefit}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="bg-emerald-50 dark:bg-black/20 p-4 border-t border-emerald-500/10 dark:border-white/5 text-center">
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-medium">
                    <Info size={10} className="inline mr-1" />
                    As análises são baseadas em literatura científica (CosIng/Anvisa). Consulte um dermatologista.
                </p>
            </div>

        </div>
    );
}
