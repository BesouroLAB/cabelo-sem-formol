import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Dados do produto avaliado — alimenta o schema Review/Product (rich results).
 * Preencher no frontmatter apenas em artigos de resenha (schemaType: "review").
 */
export interface ProductFrontmatter {
  name: string;
  brand?: string;
  /** Nota editorial de 0 a 5 (ex: 3.5) */
  rating?: number;
  /** Slug do link de afiliado em /go/[slug], se houver */
  affiliateSlug?: string;
  image?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  /** Data de publicação (ISO: YYYY-MM-DD) */
  date: string;
  /** Data da última atualização editorial (ISO). Se ausente, usa `date`. */
  updated?: string;
  author: string;
  /** "review" gera schema Product+review; qualquer outro valor gera Article */
  schemaType?: 'review' | 'article';
  /** Caminho da imagem de capa relativo a /public (ex: /images/posts/foo.jpg) */
  image?: string;
  /** Produto avaliado (obrigatório quando schemaType === "review") */
  product?: ProductFrontmatter;
  /**
   * FAQ do artigo (3 a 7 itens): gera o schema FAQPage E a seção visível
   * renderizada no fim do artigo — sempre espelhados (exigência do Google).
   */
  faq?: FaqItem[];
  [key: string]: unknown;
}

export interface ArticleData {
  slug: string;
  silo: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  originalFilename: string;
  /** Data mais recente entre `updated` e `date` — usada em sitemap e modifiedTime */
  lastModified: Date;
}

/**
 * Normaliza o nome do arquivo removendo o prefixo numérico (ex: "106-nome.mdx" -> "nome")
 */
function getSlugFromFilename(filename: string): string {
  // Remove a extensão .mdx
  const withoutExt = filename.replace(/\.mdx?$/, '');
  // Remove o padrão numérico inicial (ex: "106-")
  return withoutExt.replace(/^\d+-/, '');
}

function parseDate(value: string | undefined, fallback: Date): Date {
  if (!value) return fallback;
  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? fallback : parsed;
}

/**
 * GUARDA DE PADRÃO SEO — roda em toda leitura de artigo (portanto no build).
 * Se um artigo violar o contrato de frontmatter validado no Rich Results Test,
 * o build FALHA com mensagem clara. Isso garante que todo artigo futuro siga
 * exatamente o mesmo padrão de dados estruturados.
 */
function validateFrontmatter(fm: ArticleFrontmatter, file: string): void {
  const errors: string[] = [];

  if (!fm.title) errors.push('campo obrigatório "title" ausente');
  if (!fm.description) errors.push('campo obrigatório "description" ausente');
  if (!fm.author) errors.push('campo obrigatório "author" ausente');
  if (!fm.date) {
    errors.push('campo obrigatório "date" ausente (formato YYYY-MM-DD)');
  } else if (isNaN(new Date(fm.date).getTime())) {
    errors.push(`"date" inválida: "${fm.date}" (use YYYY-MM-DD)`);
  }
  if (fm.updated && isNaN(new Date(fm.updated).getTime())) {
    errors.push(`"updated" inválida: "${fm.updated}" (use YYYY-MM-DD)`);
  }

  if (fm.schemaType === 'review') {
    if (!fm.product?.name) {
      errors.push('schemaType "review" exige "product.name" (alimenta o schema Product+review)');
    }
    if (fm.product?.rating !== undefined) {
      const r = fm.product.rating;
      if (typeof r !== 'number' || r < 0 || r > 5) {
        errors.push(`"product.rating" deve ser número entre 0 e 5 (recebido: ${r})`);
      }
    }
  }

  if (fm.faq !== undefined) {
    if (!Array.isArray(fm.faq) || fm.faq.some((item) => !item?.q || !item?.a)) {
      errors.push('"faq" deve ser lista de itens { q, a } preenchidos');
    } else if (fm.faq.length < 3 || fm.faq.length > 7) {
      errors.push(`"faq" deve ter entre 3 e 7 itens (recebido: ${fm.faq.length})`);
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `[PADRÃO SEO VIOLADO] ${file}:\n  - ${errors.join('\n  - ')}\n` +
        `Consulte o contrato de frontmatter em .agent/skills/seo-programatico/SKILL.md`
    );
  }
}

/**
 * Retorna todos os silos disponíveis (pastas dentro de content/)
 */
export function getSilos(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((dir) => {
    return fs.statSync(path.join(CONTENT_DIR, dir)).isDirectory();
  });
}

/**
 * Retorna todos os artigos de um silo, ordenados do mais recente para o mais antigo
 */
export function getArticlesBySilo(silo: string): ArticleData[] {
  const siloDir = path.join(CONTENT_DIR, silo);
  if (!fs.existsSync(siloDir)) return [];

  const files = fs.readdirSync(siloDir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  const articles = files.map((filename) => {
    const filePath = path.join(siloDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const frontmatter = data as ArticleFrontmatter;

    validateFrontmatter(frontmatter, `content/${silo}/${filename}`);

    const publishedAt = parseDate(frontmatter.date, fs.statSync(filePath).mtime);
    const lastModified = parseDate(frontmatter.updated, publishedAt);

    return {
      slug: getSlugFromFilename(filename),
      silo,
      frontmatter,
      content,
      originalFilename: filename,
      lastModified,
    };
  });

  return articles.sort(
    (a, b) =>
      parseDate(b.frontmatter.date, b.lastModified).getTime() -
      parseDate(a.frontmatter.date, a.lastModified).getTime()
  );
}

/**
 * Retorna todos os artigos de todos os silos (para sitemap e listagens globais)
 */
export function getAllArticles(): ArticleData[] {
  return getSilos().flatMap((silo) => getArticlesBySilo(silo));
}

/**
 * Busca um artigo específico pelo slug público (sem o prefixo numérico)
 */
export function getArticleBySlug(silo: string, publicSlug: string): ArticleData | null {
  const articles = getArticlesBySilo(silo);
  return articles.find((article) => article.slug === publicSlug) || null;
}

/**
 * Retorna todas as rotas possíveis para o generateStaticParams
 */
export function getAllArticlePaths() {
  return getAllArticles().map((article) => ({
    silo: article.silo,
    slug: article.slug,
  }));
}
