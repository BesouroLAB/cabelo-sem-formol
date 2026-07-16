---
name: seo-programatico
description: Motor de SEO programático do projeto Cabelo Sem Formol. Define o padrão VALIDADO NO GOOGLE (Rich Results Test, 15/07/2026) de produção de páginas — contrato de frontmatter MDX, fábrica de schemas, registro de silos, templates de artigo e guardrails anti-penalidade. Use SEMPRE que criar/editar artigos, silos, rotas dinâmicas ou dados estruturados.
---
> 🇧🇷 **DIRETRIZ GLOBAL (CABELO SEM FORMOL):**
> Todas as instruções abaixo devem ser executadas e comunicadas EXCLUSIVAMENTE em **Português do Brasil (pt-BR)**.
> O contexto absoluto do seu trabalho é o projeto **"Cabelo Sem Formol"** — um blog de SEO focado em jornalismo investigativo, química capilar (progressivas sem formol) e monetização via Amazon.
> Aja de forma alinhada ao E-E-A-T: nunca alucine dados médicos ou químicos, consulte sempre a Anvisa.

# Motor de SEO Programático (Cabelo Sem Formol)

> ✅ **PADRÃO VALIDADO**: esta arquitetura passou no Google Rich Results Test em 15/07/2026
> (Product snippets + Review snippets + Breadcrumbs sem erros) e obteve PageSpeed 95/100/100 (SEO 100).
> **Não invente arquitetura nova.** Todo artigo novo entra por este pipeline.

## ⚙️ 1. Como o motor funciona (arquitetura real)

**Conteúdo é MDX + frontmatter. Schema é gerado por fábrica. Nada é escrito à mão.**

```
content/[silo]/[NNN]-[slug].mdx        ← artigo (frontmatter = dados estruturados)
        │
src/lib/mdx.ts                          ← lê, VALIDA (build falha se violar o contrato) e ordena
        │
src/lib/site.ts                         ← SITE (domínio único) + SILOS (registro de silos)
src/lib/schema.ts                       ← fábrica de TODOS os JSON-LD (nunca montar schema em página)
        │
src/app/[silo]/page.tsx                 ← hub do silo (CollectionPage + ItemList)
src/app/[silo]/[slug]/page.tsx          ← artigo (Product+review OU Article, Breadcrumb, FAQPage)
src/app/layout.tsx                      ← Organization + WebSite + Person (globais, em toda página)
src/app/sitemap.ts / robots.ts          ← automáticos (lêem o motor; /go/ bloqueado)
```

Regras Next.js 16 (App Router): SSG via `generateStaticParams`; `params` é **Promise** (`await params`);
metadata via `generateMetadata` (canonical relativo — o `metadataBase` do layout resolve).

## 📄 2. Contrato de frontmatter (OBRIGATÓRIO — o build FALHA se violar)

A validação está em `src/lib/mdx.ts` (`validateFrontmatter`). Campos:

```yaml
---
title: "Título SEO (vira <title>, og:title e headline do schema)"   # OBRIGATÓRIO
description: "Meta description 150–160 chars com a keyword."        # OBRIGATÓRIO
date: "2026-07-15"          # OBRIGATÓRIO (YYYY-MM-DD)
updated: "2026-07-15"       # opcional — alimenta dateModified e sitemap
author: "Tiago Fernandes"   # OBRIGATÓRIO ("Tiago Fernandes" → Person; outro → Organization)
schemaType: "review"        # "review" (resenha de produto) ou "article" (todo o resto)
image: "/images/posts/foo.jpg"  # opcional — capa (OG image + schema)
product:                    # OBRIGATÓRIO se schemaType: review
  name: "Progressiva X"     #   → Product.name
  brand: "Marca Y"          #   → Brand
  rating: 4                 #   0–5, nota editorial baseada em avaliações REAIS (nunca inventar)
  affiliateSlug: "slug-go"  #   slug em src/data/afiliados.ts (/go/[slug])
faq:                        # opcional (3 a 7 itens) — gera FAQPage + seção visível espelhada
  - q: "Pergunta em linguagem natural?"
    a: "Resposta direta e citável."
---
```

**Como o schema é decidido (em `getArticleSchema`, validado no Google):**
- `schemaType: review` + `product` → **`Product` no topo com `review` aninhado** (Review→itemReviewed→Product é ERRADO: o Product isolado reprova por falta de offers/review/aggregateRating).
- Qualquer outro caso → `Article`.
- `author`/`publisher` referenciam por `@id` o `Person`/`Organization` emitidos globalmente no layout — por isso o Person PRECISA continuar global (o Rich Results Test valida uma URL por vez e não resolve `@id` de outra página).
- `faq:` no frontmatter → `FAQPage` + `<FaqSection>` visível com os MESMOS dados (Google penaliza divergência).

## 🗂️ 3. Silos (registro obrigatório)

4 silos oficiais (blueprint): `progressivas` · `chapinhas` · `chuveiro` · `cuidados`.

- Novo silo = criar pasta em `content/` **E** registrar em `SILOS` (`src/lib/site.ts`).
- Silo não registrado → 404 no hub (evita rota fantasma).
- URL canônica: `/{silo}/{slug}` — NUNCA misturar prefixos (`/artigos/`, `/reviews/` = erro fatal do site antigo).
- Slug público: o arquivo `106-nome.mdx` vira `/silo/nome` (prefixo numérico é só ordenação interna).

## 📐 4. Os 4 templates de artigo (blueprint § 5)

Todos usam o MESMO pipeline acima — o que muda é conteúdo e frontmatter:

| Template | URL | schemaType | Blocos obrigatórios |
|---|---|---|---|
| **A — Resenha** | `/{silo}/{marca}-{produto}-resenha` | `review` + `product` | veredito rápido c/ CTA · para quem serve · prós/contras de avaliações REAIS (`<ProsCons>`) · ficha técnica (`<ChemicalTable>`) · como aplicar · alternativas · `faq` |
| **B — Comparativo** | `/{silo}/{a}-vs-{b}` | `article` | tabela lado a lado · quando escolher A · quando escolher B · veredito por perfil · CTAs · `faq` |
| **C — Recorte de público** | `/{silo}/{categoria}-para-cabelo-{tipo}` | `article` | por que {tipo} exige cuidado · top 3 para o perfil · o que evitar · `faq` |
| **D — Dúvida/segurança** | `/{silo}/{pergunta}` | `article` | **resposta direta no 1º parágrafo** (featured snippet) · explicação · o que os fabricantes dizem · produtos relacionados · `faq` |

**Links dentro do MDX:** todo link markdown passa pelo `<SmartLink>` automaticamente —
`/go/...` ganha `rel="sponsored nofollow"` (NUNCA linkar Amazon direto no texto; sempre via `/go/[slug]`
cadastrado em `src/data/afiliados.ts`).

## 🔗 5. Linkagem interna (nenhuma página órfã)

- Resenha → linka o pilar do silo + 1–2 comparativos/recortes relacionados.
- Comparativo → linka as 2 resenhas.
- Recorte → linka resenhas dos produtos citados + pilar.
- Dúvida → linka money pages relevantes.
- Silo `cuidados` (topo de funil) → linka money pages dos silos 1–3.
- Produto sem afiliado confiável → resenha de autoridade SEM CTA que redireciona para a money page
  (geralmente Borabella) — ver `pesquisas/playbook-uso-por-produto.xlsx`.

## 🚧 6. Guardrails anti-penalidade (OBRIGATÓRIOS)

1. Cada página traz dados que as outras NÃO têm (daquele produto/perfil). Página fina = penalidade.
2. Sem texto-molde repetido palavra por palavra entre páginas.
3. Publicar em lotes controlados (5–10/semana), não centenas de uma vez.
4. Só criar página com conteúdo real — sem página-fantasma.
5. Nunca inventar número (nota, pH, %, volume). Sem dado = sem dado.
6. ⚠️ YMYL: nunca afirmar segurança para gestantes — só "segundo a marca..." + recomendar profissional.

## ✅ 7. Validação (após cada lote)

1. `npm run build` — a validação de frontmatter roda aqui; build falha se o padrão for violado.
2. `grep -o '<script type="application/ld+json">[^<]*' .next/server/app/<silo>/<slug>.html` — conferir schemas.
3. Google Rich Results Test (https://search.google.com/test/rich-results) na URL publicada.
4. Título/description únicos por página (template `%s | Cabelo Sem Formol` já aplica o sufixo).

## 🗺️ 8. O que produzir (ordem)

A fila de produção operacional está em **`pesquisas/plano-editorial.md`** (gerada da lista mestra de
81 keywords + playbook por produto). Regra: Prioridade 1 primeiro (cauda longa, SERP fraco), pilares
na Fase 3, termos-cabeça saturados só na Fase 4.
