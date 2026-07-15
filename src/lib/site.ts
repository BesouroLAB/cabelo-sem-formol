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
};

export function getSiloConfig(slug: string): SiloConfig | null {
  return SILOS[slug] ?? null;
}
