import { SITE, absoluteUrl, SiloConfig } from '@/lib/site';
import { ArticleData } from '@/lib/mdx';
import { AUTOR_TIAGO, getAutorSchema } from '@/data/autor';

/**
 * Fábrica de dados estruturados (schema.org) — SEO programático.
 * Todo JSON-LD do site nasce aqui, alimentado pelo frontmatter dos artigos
 * e pelo registro de silos. Nenhuma página monta schema à mão.
 *
 * IDs canônicos (@id) permitem que o Google conecte as entidades entre páginas:
 * Organization <- publisher de todo Article <- author Person <- ProfilePage.
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const AUTHOR_ID = `${SITE.url}/sobre#tiago-fernandes`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/autor/tiago-perfil.jpg'),
    },
    founder: { '@id': AUTHOR_ID },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': ORG_ID },
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    ...getAutorSchema(),
    '@id': AUTHOR_ID,
    worksFor: { '@id': ORG_ID },
  };
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl('/sobre'),
    name: `Sobre ${AUTOR_TIAGO.name} | ${SITE.name}`,
    inLanguage: SITE.language,
    isPartOf: { '@id': WEBSITE_ID },
    // Referencia por @id — o Person completo já é emitido globalmente no layout raiz
    mainEntity: { '@id': AUTHOR_ID },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getSiloCollectionSchema(silo: SiloConfig, articles: ArticleData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: absoluteUrl(`/${silo.slug}`),
    name: silo.title,
    description: silo.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.frontmatter.title,
        url: absoluteUrl(`/${article.silo}/${article.slug}`),
      })),
    },
  };
}

/**
 * Gera o schema principal de um artigo a partir do frontmatter:
 * - schemaType "review" + product => Product com `review` aninhado (padrão recomendado
 *   pelo Google para review única — satisfaz Product [exige offers/review/aggregateRating]
 *   e Review snippet ao mesmo tempo; NÃO usar Review->itemReviewed->Product, pois o
 *   Product fica sem prova de review quando avaliado isoladamente pelo Rich Results Test).
 * - caso contrário => Article
 */
export function getArticleSchema(article: ArticleData) {
  const { frontmatter } = article;
  const url = absoluteUrl(`/${article.silo}/${article.slug}`);
  const image = frontmatter.image ? absoluteUrl(frontmatter.image) : undefined;

  const authorRef =
    frontmatter.author === AUTOR_TIAGO.name
      ? { '@id': AUTHOR_ID }
      : { '@type': 'Organization', '@id': ORG_ID };

  const product = frontmatter.product;
  if (frontmatter.schemaType === 'review' && product) {
    const productImage = image ?? (product.image ? absoluteUrl(product.image) : undefined);

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: frontmatter.description,
      url,
      inLanguage: SITE.language,
      ...(productImage ? { image: productImage } : {}),
      ...(product.brand ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
      review: {
        '@type': 'Review',
        datePublished: new Date(frontmatter.date).toISOString(),
        author: authorRef,
        publisher: { '@id': ORG_ID },
        ...(typeof product.rating === 'number'
          ? {
              reviewRating: {
                '@type': 'Rating',
                ratingValue: product.rating,
                bestRating: 5,
                worstRating: 0,
              },
            }
          : {}),
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    url,
    mainEntityOfPage: url,
    inLanguage: SITE.language,
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: article.lastModified.toISOString(),
    author: authorRef,
    publisher: { '@id': ORG_ID },
    ...(image ? { image } : {}),
  };
}
