import { CheckCircle2, XCircle } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  contras: string[];
}

export function ProsCons({ pros = [], contras = [] }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
      {/* Coluna de Prós */}
      <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm">
        <h3 className="flex items-center text-emerald-800 font-bold text-lg mb-4">
          <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
          O que gostamos
        </h3>
        <ul className="space-y-3">
          {pros.map((pro, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-emerald-500 mr-2 mt-1 font-bold">•</span>
              <span className="text-emerald-900 leading-snug">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Coluna de Contras */}
      <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-sm">
        <h3 className="flex items-center text-rose-800 font-bold text-lg mb-4">
          <XCircle className="w-5 h-5 mr-2 text-rose-600" />
          O que poderia ser melhor
        </h3>
        <ul className="space-y-3">
          {contras.map((contra, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-rose-500 mr-2 mt-1 font-bold">•</span>
              <span className="text-rose-900 leading-snug">{contra}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
