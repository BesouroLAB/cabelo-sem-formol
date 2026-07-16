export const AMAZON_TAG = 'cabelosemformol-20'; // Substituir pela tag real depois

export interface AfiliadoLink {
  asin: string;
  urlBase: string; // URL base sem a tag
}

// Dicionário de redirecionamento.
// Chave: slug curto da URL (/go/[slug])
export const LINKS_AFILIADO: Record<string, AfiliadoLink> = {
  'borabella-nao-chore-mais': {
    asin: 'B0FBQYSSK5', // Borabella Não Chore Mais 350ml
    urlBase: 'https://www.amazon.com.br/dp/B0FBQYSSK5',
  },
  // Nota E-E-A-T: a Fashion Gold original é vendida majoritariamente em canais
  // próprios/representantes credenciados. O item equivalente na Amazon BR está
  // catalogado sob a distribuidora licenciada "Fashion Hair" (mesma linha de fabricação).
  // Se o texto do artigo mencionar essa diferença de nome, mantenha a transparência com o leitor.
  'fashion-gold': {
    asin: 'B0F7FJTB9Y', // Fashion Hair 300ml (distribuidora licenciada da linha Fashion Gold)
    urlBase: 'https://www.amazon.com.br/dp/B0F7FJTB9Y',
  },
  'prohall-select-one-300ml': {
    asin: 'B08JW8W77V',
    urlBase: 'https://www.amazon.com.br/dp/B08JW8W77V',
  },
  'prohall-select-one-1l': {
    asin: 'B092R8HJ4S',
    urlBase: 'https://www.amazon.com.br/dp/B092R8HJ4S',
  },
  'taiff-style-pro-secador': {
    asin: 'B08T9WBG1J', // Secador Taiff Style Pro 2000W (127V, Prata)
    urlBase: 'https://www.amazon.com.br/dp/B08T9WBG1J',
  },
  'taiff-style-pro-chapinha': {
    asin: 'B09QNQFMYL', // Prancha/Chapinha Taiff Style Pro Titanium (Bivolt)
    urlBase: 'https://www.amazon.com.br/dp/B09QNQFMYL',
  },
  // Chapinhas Profissionais (Lote 5)
  'lizze-extreme': {
    asin: 'B07CN23JR1',
    urlBase: 'https://www.amazon.com.br/dp/B07CN23JR1',
  },
  'lizze-extreme-slim': {
    asin: 'B08K3KRCC6',
    urlBase: 'https://www.amazon.com.br/dp/B08K3KRCC6',
  },
  'lizze-supreme': {
    asin: 'B0B5Y1TXST',
    urlBase: 'https://www.amazon.com.br/dp/B0B5Y1TXST',
  },
  'mq-pro-480': {
    asin: 'B085F3WX23',
    urlBase: 'https://www.amazon.com.br/dp/B085F3WX23',
  },
  'mq-pro-480-slim': {
    asin: 'B0CCJWZ8P7',
    urlBase: 'https://www.amazon.com.br/dp/B0CCJWZ8P7',
  },
  // ⚠️ PENDENTES: sem ASIN verificado ainda. Interim honesto: link de BUSCA da Amazon
  // com a tag (funciona para afiliado). Substituir por /dp/ASIN após conferir
  // vendedor confiável, conforme playbook ("Verificar antes de CTA").
  'forever-liss': {
    asin: 'PENDENTE', // Forever Liss Escova Semi Definitiva 3D/Zero (linha SEM formol)
    urlBase: 'https://www.amazon.com.br/s?k=forever+liss+semi+definitiva+3d',
  },
  'mutari-progress': {
    asin: 'PENDENTE', // Redutor Reconstrutor Mutari Progress Prof
    urlBase: 'https://www.amazon.com.br/s?k=mutari+progress+redutor',
  },
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
