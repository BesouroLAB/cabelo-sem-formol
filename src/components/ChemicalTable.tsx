'use client';

interface ChemicalRow {
    marca: string;
    baseAtiva: string;
    ph: string;
    compativelLoiras: string;
    notaCSF: number;
}

interface ChemicalTableProps {
    data: ChemicalRow[];
}

export default function ChemicalTable({ data }: ChemicalTableProps) {
    const getScoreColor = (score: number) => {
        if (score >= 9.5) return 'text-emerald-600 bg-emerald-50';
        if (score >= 9.0) return 'text-amber-600 bg-amber-50';
        if (score >= 8.5) return 'text-orange-600 bg-orange-50';
        return 'text-gray-600 bg-gray-50';
    };

    return (
        <div className="my-6 overflow-x-auto">
            <div className="inline-block min-w-full">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {/* Header */}
                    <div className="bg-gray-50 border-b border-gray-200">
                        <div className="grid grid-cols-5 gap-2 px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Marca</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Base Ativa</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">pH</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Compatível c/ Loiras?</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Nota CSF</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="divide-y divide-gray-100">
                        {data.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-5 gap-2 px-4 py-3 items-center ${index === 0 ? 'bg-violet-50/50' : ''}`}
                            >
                                <span className={`text-sm font-semibold ${index === 0 ? 'text-violet-700' : 'text-gray-900'}`}>
                                    {row.marca}
                                </span>
                                <span className="text-xs text-gray-600">{row.baseAtiva}</span>
                                <span className="text-xs font-mono text-gray-700">{row.ph}</span>
                                <span className="text-xs text-gray-600">{row.compativelLoiras}</span>
                                <div className="flex justify-center">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getScoreColor(row.notaCSF)}`}>
                                        {row.notaCSF}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
