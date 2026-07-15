import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  [key: string]: any;
}

export interface ArticleData {
  slug: string;
  silo: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  originalFilename: string;
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
 * Retorna todos os artigos de um determinado silo
 */
export function getArticlesBySilo(silo: string): ArticleData[] {
  const siloDir = path.join(CONTENT_DIR, silo);
  if (!fs.existsSync(siloDir)) return [];

  const files = fs.readdirSync(siloDir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  return files.map((filename) => {
    const filePath = path.join(siloDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: getSlugFromFilename(filename),
      silo,
      frontmatter: data as ArticleFrontmatter,
      content,
      originalFilename: filename,
    };
  });
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
  const silos = getSilos();
  const paths: { silo: string; slug: string }[] = [];

  for (const silo of silos) {
    const articles = getArticlesBySilo(silo);
    for (const article of articles) {
      paths.push({
        silo,
        slug: article.slug,
      });
    }
  }

  return paths;
}
