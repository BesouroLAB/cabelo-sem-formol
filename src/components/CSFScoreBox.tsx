'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface CSFScoreBoxProps {
    score: number;
    badge?: string;
    title?: string;
    verdict: string;
    scores?: {
        seguranca: number;
        alisamento: number;
        durabilidade: number;
    };
    // Legacy props
    safetyScore?: number;
    straighteningScore?: number;
    durabilityScore?: number;
    ctaText?: string;
    ctaUrl?: string;
}

export default function CSFScoreBox({
    score,
    verdict,
    scores,
    safetyScore,
    straighteningScore,
    durabilityScore,
    ctaText,
    ctaUrl,
}: CSFScoreBoxProps) {
    // Use new scores prop or legacy individual props
    const seguranca = scores?.seguranca ?? safetyScore ?? 0;
    const alisamento = scores?.alisamento ?? straighteningScore ?? 0;
    const durabilidade = scores?.durabilidade ?? durabilityScore ?? 0;

    return (
        <section className="glass rounded-xl overflow-hidden my-6 border-purple-500/20 shadow-xl shadow-purple-900/10">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mb-1">MÉTRICAS BESOULAB</p>
                        <p className="text-white text-2xl font-bold font-heading">Performance Index</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg shadow-purple-500/30">
                        <span className="text-3xl font-black text-white">{score}</span>
                    </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-5 mb-8">
                    <ScoreItem label="Segurança Clínica" value={seguranca} />
                    <ScoreItem label="Poder de Alisamento" value={alisamento} />
                    <ScoreItem label="Durabilidade" value={durabilidade} />
                </div>

                {/* Verdict Box */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                    <p className="text-sm text-slate-300 leading-relaxed italic relative z-10">
                        &quot;{verdict}&quot;
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            {ctaText && ctaUrl && (
                <Link
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:brightness-110 text-white font-bold py-5 px-6 text-center transition-all flex items-center justify-center gap-3 active:scale-95 group"
                >
                    <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                    <span className="tracking-tight">{ctaText}</span>
                </Link>
            )}
        </section>
    );
}

function ScoreItem({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
                <p className="text-xs font-semibold text-slate-400">{label}</p>
                <p className="text-sm font-black text-white">{value}/10</p>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    style={{ width: `${value * 10}%` }}
                ></div>
            </div>
        </div>
    );
}
