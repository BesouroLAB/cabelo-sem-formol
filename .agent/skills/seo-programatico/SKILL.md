---
name: seo-programatico
description: Motor de SEO programático do projeto Cabelo Sem Formol. Define os 4 templates de página (Resenha, Comparativo, Recorte, Dúvida), data models, regras de geração com Next.js 16 generateStaticParams, schema markup por template, linkagem interna e guardrails anti-penalidade. Use SEMPRE que o trabalho envolver geração de páginas em escala, templates programáticos, ou arquitetura de rotas dinâmicas do blog.
---

# Motor de SEO Programático (Cabelo Sem Formol)

Esta skill define as regras de arquitetura para geração em escala de páginas otimizadas para SEO, usando Next.js 16. Escala na estrutura, profundidade no conteúdo. Página fina = penalidade.

## ⚙️ 1. Arquitetura Base (Next.js 16 `generateStaticParams`)
Todas as páginas programáticas devem ser estáticas no momento da build (SSG via `generateStaticParams`).
- **NÃO USE** `getServerSideProps` ou rotas dinâmicas não cacheadas.
- Use **`export const dynamicParams = false`** para retornar 404 em slugs desconhecidos.
- ⚠️ **Next.js 16:** `params` é **Promise**:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  }
  ```

## 📐 2. Os 4 Templates

### Template A — Resenha `/{silo}/[slug]-resenha`
- Rota: `src/app/(silo)/[slug]/page.tsx` (cada silo tem sua pasta)
- Data: `src/data/progressivas.ts`, `chapinhas.ts`, `chuveiro.ts`
- Schemas: `Article` + `Product` + `Review` + `FAQPage` + `BreadcrumbList`

### Template B — Comparativo `/{silo}/[slugA]-vs-[slugB]`
- Rota: `src/app/(silo)/[slugA]-vs-[slugB]/page.tsx`
- Data: `src/data/comparativos.ts`
- Schemas: `Article` + `FAQPage` + `BreadcrumbList`

### Template C — Recorte de público `/{silo}/[categoria]-para-cabelo-[tipo]`
- Rota: dinâmico combinando `categoria` × `tiposCabelo`
- Data: `src/data/tiposCabelo.ts` + data do silo
- Schemas: `Article` + `FAQPage` + `BreadcrumbList`

### Template D — Dúvida/segurança `/{silo}/[pergunta-slug]`
- Rota: `src/app/(silo)/[slug]/page.tsx` (mesmo pattern, conteúdo diferente)
- Data: `src/data/duvidas.ts`
- Schemas: `Article` + `FAQPage` + `BreadcrumbList`
- Primeiro parágrafo = resposta direta (candidato a featured snippet)

## 💾 3. Data Models (`src/data/`)

Dados estáticos em TypeScript para máxima performance e controle de versão:

```typescript
// progressivas.ts
interface Progressiva {
  slug: string;
  nome: string;
  marca: string;
  ativos: string[];       // ex: ["ácido glioxílico", "queratina"]
  indicacao: string;       // para quem serve
  tiposCabelo: string[];   // ex: ["crespo", "cacheado"]
  passoUnico: boolean;
  prosReais: string[];     // extraídos de avaliações REAIS
  contrasReais: string[];  // extraídos de avaliações REAIS
  fonteAvaliacoes: string; // ex: "Amazon BR — 847 avaliações"
  faq: { q: string; a: string }[];
  amazon: { asin: string; url: string };
  alternativa?: { nome: string; url: string };
}
```

```typescript
// comparativos.ts
interface Comparativo {
  slugA: string;
  slugB: string;
  silo: "progressivas" | "chapinhas" | "chuveiro";
  quandoEscolherA: string;
  quandoEscolherB: string;
  tabelaComparativa: Record<string, [string, string]>;
  veredito: string;
}
```

## 🔗 4. Linkagem Interna Automatizada
- Resenha → bloco dinâmico "Veja também:" com comparativos e recortes do mesmo silo.
- Comparativo → linka para as resenhas dos 2 produtos.
- Recorte → linka para resenhas dos produtos recomendados + pilar.
- Dúvida → linka para money pages relevantes.
- Silo 4 (cuidados) → linka para money pages dos Silos 1–3.
- **Nenhuma página pode ser órfã** — mínimo 2 links internos entrando.

## 🚧 5. Guardrails Anti-Penalidade (OBRIGATÓRIOS)
1. Cada página traz algo que as outras NÃO têm — dados daquele produto/perfil específico.
2. Sem texto "molde" repetido palavra por palavra entre páginas. Os blocos `prosReais[]` e `contrasReais[]` garantem conteúdo único por produto.
3. Publicar em lotes controlados (5-10 por semana), não centenas de uma vez.
4. Só criar página se houver conteúdo real para preencher — sem página-fantasma.
5. Mínimo 60% de conteúdo único por página em relação a páginas do mesmo template.

## ✅ 6. Validação
Após o build:
- `grep '"@type"' .next/server/app/<rota>.html` — verificar schemas
- Google Rich Results Test
- Verificar que cada rota programática tem título/meta description únicos
