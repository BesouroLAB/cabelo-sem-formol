export const AMAZON_TAG = 'cabelosemformol-20'; // Substituir pela tag real depois

export interface AfiliadoLink {
  asin: string;
  urlBase: string; // URL base sem a tag
}

// Dicionário de redirecionamento.
// Chave: slug curto da URL (/go/[slug])
export const LINKS_AFILIADO: Record<string, AfiliadoLink> = {
  'borabella-nao-chore-mais': {
    asin: 'B08XYZ123',
    urlBase: 'https://www.amazon.com.br/dp/B08XYZ123',
  },
  'fashion-gold': {
    asin: 'B0FGOLD000', // Placeholder — substituir pelo ASIN real da Fashion Gold
    urlBase: 'https://www.amazon.com.br/dp/B0FGOLD000',
  },
  'prohall-select-one': {
    asin: 'B09ABC456',
    urlBase: 'https://www.amazon.com.br/dp/B09ABC456',
  },
  'taiff-style-pro': {
    asin: 'B07DEF789',
    urlBase: 'https://www.amazon.com.br/dp/B07DEF789',
  }
};

/**
 * Monta a URL final com a tag de afiliado
 */
export function getAffiliateUrl(slug: string, refId?: string): string {
  const link = LINKS_AFILIADO[slug];
  if (!link) return '/'; // Fallback para a home se não achar

  const url = new URL(link.urlBase);
  url.searchParams.set('tag', AMAZON_TAG);
  
  // Se passarmos um refId (ex: s1-topo), podemos adicionar para analytics
  if (refId) {
    url.searchParams.set('linkCode', 'll1');
    url.searchParams.set('ref_', refId); 
  }

  return url.toString();
}
