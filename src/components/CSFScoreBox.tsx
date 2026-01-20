'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

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
    badge = 'Selo Ouro',
    title = 'Veredito da Redação',
    verdict,
    scores,
    safetyScore,
    straighteningScore,
    durabilityScore,
    ctaText,
    ctaUrl,
}: CSFScoreBoxProps) {
    // Calculate circumference for circular progress (r=36, c=~226)
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 10) * circumference;

    // Use new scores prop or legacy individual props
    const seguranca = scores?.seguranca ?? safetyScore ?? 0;
    const alisamento = scores?.alisamento ?? straighteningScore ?? 0;
    const durabilidade = scores?.durabilidade ?? durabilityScore ?? 0;

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden my-8">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600"></div>

            <div className="p-6">
                {/* Header with badge */}
                <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
                    <Award size={16} className="text-violet-600" />
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                        BesouroLAB Certified
                    </span>
                </div>

                <div className="flex flex-col items-center mb-6">
                    {/* Circular Score */}
                    <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                        {/* Background Circle */}
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                            <circle
                                cx="64"
                                cy="64"
                                r={radius}
                                stroke="#E5E7EB"
                                strokeWidth="6"
                                fill="transparent"
                            />
                            {/* Progress Circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r={radius}
                                stroke="url(#scoreGradient)"
                                strokeWidth="6"
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                            />
                            <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#7C3AED" />
                                    <stop offset="100%" stopColor="#9333EA" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-black text-gray-900 tracking-tighter">{score}</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Score</span>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full flex items-center gap-1 border border-amber-200 shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-wide">{badge}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5"></div>

                {/* Verdict */}
                <div className="text-center mb-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</h3>
                    <p className="text-base font-medium text-gray-800 leading-snug">
                        "{verdict}"
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Segurança</div>
                        <div className="font-bold text-gray-700">{seguranca}</div>
                    </div>
                    <div className="text-center border-l border-r border-gray-100">
                        <div className="text-xs text-gray-400 mb-1">Alisamento</div>
                        <div className="font-bold text-gray-700">{alisamento}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Durabilidade</div>
                        <div className="font-bold text-gray-700">{durabilidade}</div>
                    </div>
                </div>

                {/* CTA Button */}
                {ctaText && ctaUrl && (
                    <Link
                        href={ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        {ctaText}
                        <ArrowRight size={18} />
                    </Link>
                )}
            </div>
        </div>
    );
}
