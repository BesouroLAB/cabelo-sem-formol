import React from 'react';

interface CSFScoreBoxProps {
    score: number;
    verdict: string;
    safetyScore: number;
    straighteningScore: number;
    durabilityScore: number;
}

export default function CSFScoreBox({
    score,
    verdict,
    safetyScore,
    straighteningScore,
    durabilityScore,
}: CSFScoreBoxProps) {
    // Calculate circumference for circular progress (r=36, c=~226)
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 10) * circumference;

    return (
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-l-0 border-r-0 border-b-0 border-t-transparent pt-6 p-6 relative overflow-hidden my-8">
            {/* Dynamic border gradient workaround using pseudo element or inner container if needed, 
          but here using top border logic or a bg gradient div */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-science"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Left: Circular Score */}
                <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Background Circle */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r={radius}
                                stroke="#E5E7EB"
                                strokeWidth="8"
                                fill="transparent"
                            />
                            {/* Progress Circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-primary transition-all duration-1000 ease-out"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold font-heading text-gray-900">{score}</span>
                        </div>
                    </div>

                    <div className="mt-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-yellow-200">
                        Selo Ouro
                    </div>
                </div>

                {/* Right: Verdict & Metrics */}
                <div className="flex-1 w-full">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">Veredito da Redação</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {verdict}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <MetricBar label="Segurança" value={safetyScore} color="bg-success" />
                        <MetricBar label="Alisamento" value={straighteningScore} color="bg-primary" />
                        <MetricBar label="Durabilidade" value={durabilityScore} color="bg-science" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricBar({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div>
            <div className="flex justify-between text-xs font-medium text-gray-500 mb-1 font-heading uppercase tracking-wide">
                <span>{label}</span>
                <span>{value}/10</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                    className={`h-2.5 rounded-full ${color} transition-all duration-1000`}
                    style={{ width: `${(value / 10) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}
