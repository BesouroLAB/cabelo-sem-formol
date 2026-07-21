import React from 'react';

interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, date }) => {
  return (
    <header className="mb-10 pb-8 border-b border-gray-200">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6 leading-tight">
        {title}
      </h1>
      <div className="flex items-center text-sm text-gray-600 font-sans">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
            <img src="/autor/tiago-perfil.jpg" alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-[#1A1A1A]">{author}</p>
            <p>Pesquisador Independente & Especialista em UX</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="bg-[#D4C5B9]/30 text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-semibold">
            Atualizado em: {date}
          </span>
        </div>
      </div>
    </header>
  );
};
