/**
 * Fonte única de verdade para identidade e URLs do site.
 * Todo metadata, JSON-LD, sitemap e rota programática DEVE ler daqui —
 * nunca hardcode domínio ou nome do site em páginas.
 */

export const SITE = {
  name: 'Cabelo Sem Formol',
  tagline: 'A Ciência do Liso Saudável',
  description:
    'Portal investigativo de saúde capilar: dossiês químicos, análises de INCI e resenhas honestas das melhores progressivas sem formol do mercado.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cabelosemformol.com.br',
  locale: 'pt_BR',
  language: 'pt-BR',
} as const;

/** Monta URL absoluta a partir de um path (ex: absoluteUrl('/sobre')) */
export function absoluteUrl(path: string = '/'): string {
  return new URL(path, SITE.url).toString();
}

/**
 * Registro de Silos — coração do SEO programático.
 * Cada silo é um hub temático (/[silo]) que agrupa artigos satélites.
 * Para lançar um novo silo: adicionar a pasta em /content/ E registrar aqui.
 * Silos não registrados aqui retornam 404 (evita rotas fantasma no Google).
 */
export interface SiloConfig {
  /** Slug da pasta em /content/ e da URL */
  slug: string;
  /** Nome exibido em breadcrumbs e no hub */
  title: string;
  /** H1 do hub do silo */
  headline: string;
  /** Meta description do hub (150-160 chars, com keyword principal) */
  description: string;
  /** Rótulo curto de categoria exibido nos cards */
  categoryLabel: string;
}

export const SILOS: Record<string, SiloConfig> = {
  progressivas: {
    slug: 'progressivas',
    title: 'Progressivas Sem Formol',
    headline: 'Progressivas Sem Formol: Dossiês e Resenhas Honestas',
    description:
      'Análises químicas de progressivas sem formol: lemos a bula (INCI), checamos a Anvisa e cruzamos centenas de avaliações reais antes de recomendar.',
    categoryLabel: 'Análise Química',
  },
  chapinhas: {
    slug: 'chapinhas',
    title: 'Chapinhas Profissionais',
    headline: 'Chapinhas para Progressiva: Análises Técnicas Honestas',
    description:
      'Resenhas técnicas de chapinhas profissionais: titânio vs cerâmica, temperatura real por tipo de fio e o que centenas de compradoras relatam na prática.',
    categoryLabel: 'Análise Técnica',
  },
  chuveiro: {
    slug: 'chuveiro',
    title: 'Progressiva de Chuveiro',
    headline: 'Progressiva de Chuveiro: Funciona ou É Mito?',
    description:
      'Investigamos as progressivas de chuveiro: o que a fórmula realmente faz, expectativa realista de resultado e o que as compradoras relatam após o uso.',
    categoryLabel: 'Investigação',
  },
  cuidados: {
    slug: 'cuidados',
    title: 'Cuidados Pós-Química',
    headline: 'Cuidados Pós-Progressiva: Faça o Liso Durar Mais',
    description:
      'Cronograma capilar, shampoos sem sulfato e acidificação: guias práticos para manter o resultado da progressiva por mais tempo, sem achismo.',
    categoryLabel: 'Guia Prático',
  },
};

export function getSiloConfig(slug: string): SiloConfig | null {
  return SILOS[slug] ?? null;
}
