import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AUTOR_TIAGO } from '@/data/autor';
import { SITE } from '@/lib/site';
import { getProfilePageSchema, getBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: `Quem Somos — ${AUTOR_TIAGO.name}`,
  description: `Conheça ${AUTOR_TIAGO.name}, curador do ${SITE.name}: ${AUTOR_TIAGO.bioCurta}`,
  alternates: {
    canonical: '/sobre',
  },
  openGraph: {
    type: 'profile',
    url: '/sobre',
    title: `Quem Somos — ${AUTOR_TIAGO.name} | ${SITE.name}`,
    description: AUTOR_TIAGO.bioCurta,
    images: [{ url: AUTOR_TIAGO.fotoUrl }],
  },
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      <JsonLd data={getProfilePageSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: 'Sobre', path: '/sobre' },
        ])}
      />

      {/* Hero editorial */}
      <section className="bg-[#1A1A1A] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-[#C2A878] uppercase tracking-widest mb-4">
            Quem assina os dossiês
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Por que confiar no {SITE.name}?
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
          <Image
            src={AUTOR_TIAGO.fotoUrl}
            alt={`Foto de ${AUTOR_TIAGO.name}, ${AUTOR_TIAGO.role} do ${SITE.name}`}
            width={160}
            height={160}
            className="rounded-lg object-cover border border-gray-200 shadow-sm"
            priority
          />
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-1">
              {AUTOR_TIAGO.name}
            </h2>
            <p className="text-sm font-bold text-[#C2A878] uppercase tracking-wide mb-4">
              {AUTOR_TIAGO.role}
            </p>
            <p className="text-gray-700 leading-relaxed">{AUTOR_TIAGO.bioCurta}</p>
            <a
              href={AUTOR_TIAGO.linkedin}
              rel="noopener noreferrer me"
              target="_blank"
              className="inline-block mt-4 text-sm font-bold text-[#1A1A1A] border-b-2 border-[#C2A878] hover:text-[#C2A878] transition-colors"
            >
              Ver perfil no LinkedIn →
            </a>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-serif">
          {AUTOR_TIAGO.bioLonga.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}

          <h2>Nosso método de curadoria</h2>
          <p>
            Nenhum produto é recomendado aqui sem passar por três filtros: a leitura da{' '}
            <strong>lista INCI oficial</strong> (a fórmula química real do rótulo), a checagem da{' '}
            <strong>situação regulatória na Anvisa</strong> e o cruzamento de{' '}
            <strong>centenas de avaliações de consumidoras reais</strong> — com atenção especial às
            notas baixas, onde moram os problemas que a publicidade esconde.
          </p>
          <p>
            Não realizamos testes físicos em laboratório próprio e não aceitamos produtos de marcas
            em troca de resenha positiva. Quando um produto é irregular ou perigoso, dizemos com
            todas as letras.
          </p>

          <h2>Transparência sobre afiliados</h2>
          <p>
            Participamos do Programa de Associados da Amazon. Se você comprar por um dos nossos
            links, recebemos uma pequena comissão — sem custo extra para você. Isso financia nossa
            pesquisa independente e nunca influencia o veredito de uma análise.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/progressivas"
            className="inline-flex items-center font-bold text-[#1A1A1A] hover:text-[#C2A878] transition-colors"
          >
            Ler nossos dossiês de progressivas sem formol →
          </Link>
        </div>
      </section>
    </div>
  );
}
