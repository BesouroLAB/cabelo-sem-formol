import React from "react";

interface ProductPlan {
  name: string;
  price: string;
  features: string[];
  isWinner?: boolean;
}

interface PricingComparisonProps {
  rivalName: string;
  rivalPlan: ProductPlan;
  ourName: string;
  ourPlan: ProductPlan;
}

/**
 * Tabela de comparação entre dois produtos (Rival vs Nossa Indicação).
 * Estilizado com Matte Gold e Deep Onyx do DNA CAsemform.
 */
export function PricingComparison({ rivalName, rivalPlan, ourName, ourPlan }: PricingComparisonProps) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto font-sans">
      {/* Rival Card */}
      <div className={`rounded-xl p-6 border-2 ${rivalPlan.isWinner ? 'border-[#C2A878] shadow-lg relative' : 'border-gray-200 bg-white'}`}>
        {rivalPlan.isWinner && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2A878] text-[#1A1A1A] px-4 py-1 text-xs font-bold uppercase rounded-full tracking-widest shadow-sm">
            Melhor Custo-Benefício
          </div>
        )}
        <h4 className="text-xl font-bold text-center text-[#1A1A1A] mb-2 font-serif">{rivalName} - {rivalPlan.name}</h4>
        <div className="text-2xl font-bold text-center text-[#1A1A1A] mb-6">
          {rivalPlan.price}
        </div>
        <ul className="space-y-3">
          {rivalPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Card */}
      <div className={`rounded-xl p-6 border-2 ${ourPlan.isWinner ? 'border-[#C2A878] shadow-lg relative bg-[#FAFAFA]' : 'border-gray-200 bg-white'}`}>
        {ourPlan.isWinner && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2A878] text-[#1A1A1A] px-4 py-1 text-xs font-bold uppercase rounded-full tracking-widest shadow-sm">
            Nossa Escolha
          </div>
        )}
        <h4 className="text-xl font-bold text-center text-[#1A1A1A] mb-2 font-serif">{ourName} - {ourPlan.name}</h4>
        <div className="text-2xl font-bold text-center text-[#1A1A1A] mb-6">
          {ourPlan.price}
        </div>
        <ul className="space-y-3">
          {ourPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[#1A1A1A]/90">
              <svg className="w-5 h-5 text-[#C2A878] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              <span className={ourPlan.isWinner ? "font-medium" : ""}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
