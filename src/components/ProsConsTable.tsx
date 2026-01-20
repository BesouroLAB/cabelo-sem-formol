'use client';

import { CheckCircle2, XCircle } from 'lucide-react';

interface ProsConsTableProps {
    pros: string[];
    cons: string[];
}

export default function ProsConsTable({ pros, cons }: ProsConsTableProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {/* Prós */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">Prós</h4>
                <span className="text-[10px] text-emerald-600 block mb-3 font-medium">(Benefícios Clínicos)</span>
                <ul className="space-y-2">
                    {pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contras */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">Contras</h4>
                <span className="text-[10px] text-red-600 block mb-3 font-medium">(Limitações Técnicas)</span>
                <ul className="space-y-2">
                    {cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
