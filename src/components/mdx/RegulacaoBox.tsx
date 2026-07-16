import React from "react";

interface RegulacaoBoxProps {
  orgao: string; // Ex: "ANVISA", "Ministério da Saúde"
  children: React.ReactNode;
}

/**
 * Caixa de alerta de regulação focada em saúde capilar e segurança (Anvisa).
 * Cores baseadas no Lab Green do DNA do CAsemform.
 */
export function RegulacaoBox({ orgao = "ANVISA", children }: RegulacaoBoxProps) {
  return (
    <div className="my-8 rounded-lg border-l-4 border-[#2A5A4A] bg-[#2A5A4A]/5 p-6 text-[#1A1A1A] shadow-sm font-sans">
      <div className="mb-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2A5A4A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span className="font-bold text-[#2A5A4A] uppercase tracking-wider text-xs">
          Regulamentação Oficial — {orgao}
        </span>
      </div>
      <div className="text-sm leading-relaxed opacity-95 prose prose-sm prose-a:text-[#2A5A4A] prose-a:font-medium">
        {children}
      </div>
    </div>
  );
}
