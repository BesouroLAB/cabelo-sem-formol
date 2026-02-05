'use client';

import React from 'react';
import { Check, X, Trophy, AlertCircle } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    winnerValue: string | boolean;
    competitorValue: string | boolean;
}

interface ComparisonTableProps {
    winnerName: string;
    competitorName: string;
    rows: ComparisonRow[];
    winnerImage?: string;
}

export default function ComparisonTable({
    winnerName,
    competitorName,
    rows,
    winnerImage,
}: ComparisonTableProps) {
    return (
        <div className="my-8 overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
                <div className="p-4 flex items-center justify-center font-bold text-slate-400 text-xs uppercase tracking-wider">
                    Característica
                </div>
                <div className="p-4 flex flex-col items-center justify-center border-l border-r border-white/10 bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    {winnerImage && (
                        <img src={winnerImage} alt={winnerName} className="w-12 h-12 object-contain mb-2 drop-shadow-md" />
                    )}
                    <span className="flex items-center gap-1 text-white font-black text-sm text-center drop-shadow-sm">
                        <Trophy size={14} className="fill-yellow-400 text-yellow-400" />
                        {winnerName}
                    </span>
                    <span className="text-[10px] text-white font-bold bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full mt-1">
                        Vencedor
                    </span>
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-slate-400">
                    <span className="font-semibold text-sm text-center opacity-80">{competitorName}</span>
                    <span className="text-[10px] text-slate-500 mt-1">Outros</span>
                </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/10">
                {rows.map((row, index) => (
                    <div key={index} className="grid grid-cols-3 hover:bg-white/5 transition-colors">
                        {/* Feature Name */}
                        <div className="p-4 flex items-center justify-center text-xs font-bold text-slate-400 text-center">
                            {row.feature}
                        </div>

                        {/* Winner Value */}
                        <div className="p-4 flex items-center justify-center border-l border-r border-white/10 bg-white/5 font-medium text-white text-sm text-center">
                            {typeof row.winnerValue === 'boolean' ? (
                                row.winnerValue ? (
                                    <Check size={20} className="text-green-400" />
                                ) : (
                                    <X size={20} className="text-red-400" />
                                )
                            ) : (
                                <span className="text-purple-300 font-bold">{row.winnerValue}</span>
                            )}
                        </div>

                        {/* Competitor Value */}
                        <div className="p-4 flex items-center justify-center text-slate-500 text-sm text-center">
                            {typeof row.competitorValue === 'boolean' ? (
                                row.competitorValue ? (
                                    <Check size={18} className="text-slate-600" />
                                ) : (
                                    <X size={18} className="text-slate-600" />
                                )
                            ) : (
                                <span>{row.competitorValue}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Footer */}
            <div className="bg-white/5 p-3 flex items-center justify-center gap-2 text-[10px] text-slate-500 border-t border-white/10">
                <AlertCircle size={12} />
                <span>Comparativo baseado em fichas técnicas oficiais e testes laboratoriais.</span>
            </div>
        </div>
    );
}
