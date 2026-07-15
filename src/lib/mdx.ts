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

export interface ArticleFrontmatter {
  title: string;
  description: string;
  /** Data de publicação (ISO: YYYY-MM-DD) */
  date: string;
  /** Data da última atualização editorial (ISO). Se ausente, usa `date`. */
  updated?: string;
  author: string;
  /** "review" gera schema Review+Product; qualquer outro valor gera Article */
  schemaType?: 'review' | 'article';
  /** Caminho da imagem de capa relativo a /public (ex: /images/posts/foo.jpg) */
  image?: string;
  /** Produto avaliado (obrigatório quando schemaType === "review") */
  product?: ProductFrontmatter;
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
