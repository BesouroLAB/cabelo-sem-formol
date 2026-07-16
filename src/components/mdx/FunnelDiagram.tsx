import React from "react";

interface FunnelDiagramProps {
  topo: string;
  meio: string;
  fundo: string;
}

/**
 * Diagrama de funil / fases adaptado para a estética editorial do CAsemform.
 * Utiliza o Deep Onyx e o Matte Gold.
 */
export function FunnelDiagram({ topo, meio, fundo }: FunnelDiagramProps) {
  return (
    <div className="my-8 max-w-md mx-auto font-sans">
      <div className="flex flex-col items-center gap-1 relative">
        {/* Topo do Funil */}
        <div className="w-full flex items-center justify-center p-4 bg-[#1A1A1A] text-white font-medium rounded-t-lg shadow-md min-h-[80px]">
          <span className="text-center">{topo}</span>
        </div>
        
        {/* Seta */}
        <div className="text-[#1A1A1A] text-xl my-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>

        {/* Meio do Funil */}
        <div className="w-[85%] flex items-center justify-center p-4 bg-[#D4C5B9] text-[#1A1A1A] font-semibold shadow-md min-h-[80px] rounded-md">
          <span className="text-center">{meio}</span>
        </div>

        {/* Seta */}
        <div className="text-[#D4C5B9] text-xl my-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>

        {/* Fundo do Funil */}
        <div className="w-[70%] flex items-center justify-center p-4 bg-[#C2A878] text-[#1A1A1A] font-bold rounded-b-lg shadow-md min-h-[80px]">
          <span className="text-center uppercase tracking-widest text-sm">{fundo}</span>
        </div>
      </div>
    </div>
  );
}
