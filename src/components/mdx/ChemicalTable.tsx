import React from 'react';

interface ChemicalTableProps {
  activeIngredient: string;
  anvisaStatus: string;
  riskLevel: 'Baixo' | 'Médio' | 'Alto';
  formaldehydeFree: boolean;
}

export const ChemicalTable: React.FC<ChemicalTableProps> = ({ 
  activeIngredient, 
  anvisaStatus, 
  riskLevel, 
  formaldehydeFree 
}) => {
  const getRiskColor = (level: string) => {
    switch(level) {
      case 'Baixo': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Alto': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm font-sans">
      <div className="bg-[#1A1A1A] text-white p-4">
        <h3 className="font-serif text-lg font-bold m-0 flex items-center">
          🔬 Raio-X Clínico (Análise de Laboratório)
        </h3>
      </div>
      <div className="bg-white p-0">
        <table className="w-full text-sm text-left border-collapse">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50 w-1/3">Ativo Principal</td>
              <td className="py-3 px-4 font-bold text-[#1A1A1A]">{activeIngredient}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">Status Anvisa</td>
              <td className="py-3 px-4 font-medium text-gray-800">{anvisaStatus}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">Nível de Risco</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRiskColor(riskLevel)}`}>
                  {riskLevel}
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-gray-600 bg-gray-50">Livre de Formol?</td>
              <td className="py-3 px-4">
                {formaldehydeFree ? (
                  <span className="flex items-center text-green-700 font-bold">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    Sim (Comprovado)
                  </span>
                ) : (
                  <span className="flex items-center text-red-700 font-bold">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    Não / Suspeito
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
