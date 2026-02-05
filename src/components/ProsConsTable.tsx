import { CheckCircle2, XCircle } from 'lucide-react';

interface ProsConsTableProps {
    pros: string[];
    cons: string[];
}

export default function ProsConsTable({ pros, cons }: ProsConsTableProps) {
    return (
        <div className="grid grid-cols-2 gap-3 my-6">
            {/* Prós */}
            <div className="bg-green-950/20 p-4 rounded-xl border border-green-900/30 glass">
                <div className="flex items-center gap-2 mb-3 text-green-400">
                    <CheckCircle2 size={20} />
                    <span className="font-bold text-sm uppercase">Prós</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-400 font-medium">
                    {pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                    ))}
                </ul>
            </div>

            {/* Contras */}
            <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30 glass">
                <div className="flex items-center gap-2 mb-3 text-red-400">
                    <XCircle size={20} />
                    <span className="font-bold text-sm uppercase">Contras</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-400 font-medium">
                    {cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
