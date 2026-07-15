---
name: schema-e-geo
description: Fonte de verdade de structured data (Schema.org / JSON-LD) e GEO (otimização para respostas de IA) do projeto Cabelo Sem Formol. Define quais schemas usar por template (Resenha, Comparativo, Recorte, Dúvida), como injetá-los no Next.js 16, e checklist para ser citado por ChatGPT, Claude, Perplexity e Gemini. Use SEMPRE que criar/editar páginas, schema markup ou metadata.
---

# Schema.org + GEO (Cabelo Sem Formol)

Dois objetivos: (1) ganhar **rich snippets** no Google e (2) ser **citado pelas IAs**.

## 🧩 1. Como Injetar JSON-LD (Next.js 16)
- `next/head` **não existe** no App Router. Use `<JsonLd data={...} />` (`src/components/seo/JsonLd.tsx`).
- Geradores tipados em `src/lib/schema.ts`. NUNCA escreva JSON-LD à mão.
- Passe array de schemas para renderizar vários de uma vez.

## 📐 2. Schema por Template

| Template | Schemas Obrigatórios |
|---|---|
| **A — Resenha** | `Article` + `Product` + `Review` + `FAQPage` + `BreadcrumbList` |
| **B — Comparativo** | `Article` + `FAQPage` + `BreadcrumbList` |
| **C — Recorte** | `Article` + `FAQPage` + `BreadcrumbList` |
| **D — Dúvida** | `Article` + `FAQPage` + `BreadcrumbList` |
| Pilar (MDX) | `Article` + `FAQPage` + `BreadcrumbList` |
| `/sobre` | `Organization` + `BreadcrumbList` |
| `/autor` | `Person` + `BreadcrumbList` |

### Schema `Product` + `Review` (Template A — Resenha)
```json
{
  "@type": "Product",
  "name": "Prohall Select One",
  "brand": { "@type": "Brand", "name": "Prohall" },
  "review": {
    "@type": "Review",
    "author": { "@type": "Person", "name": "[Autor]" },
    "reviewBody": "Análise baseada em curadoria de avaliações reais...",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5"
    }
  }
}
```
> **ATENÇÃO:** A `ratingValue` deve refletir a média das avaliações de compradoras reais, NÃO uma nota inventada. Cite a fonte: "Nota média de 847 avaliações na Amazon BR".

### FAQPage (OBRIGATÓRIO em toda página de conteúdo)
- Mínimo 3, máximo 7 perguntas.
- FAQ **visível** na página DEVE espelhar exatamente o schema — o Google penaliza divergência.
- Perguntas em linguagem natural (como o usuário pergunta).

## 🤖 3. Checklist GEO (Ser Citado por IA)
- [ ] **Resposta direta** no primeiro parágrafo (bloco extraível)
- [ ] **Dados específicos e citáveis** ("82% das compradoras elogiam...", "registrado na ANVISA sob nº...")
- [ ] **Tabelas comparativas** — estrutura que a IA extrai fácil
- [ ] **FAQ** com perguntas em linguagem natural
- [ ] **Data de atualização visível** + `dateModified` no schema
- [ ] **Autoria** (Person schema em `/autor`)
- [ ] **Definições claras** ("O que é ácido glioxílico?") — fáceis de extrair como resposta
- [ ] **Disclosure de afiliado** — transparência que sinaliza confiança

## 🕷️ 4. Crawlers de IA
`robots.txt` deve **permitir** GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Queremos ser citados.

## 🚫 5. Anti-padrões
| ❌ Não faça | ✅ Faça |
|---|---|
| Publicar sem data | `datePublished`/`dateModified` |
| FAQ no schema mas não na página | FAQ visível espelhando schema |
| Nota inventada no Review schema | Nota média real de avaliações |
| `next/head` | `<JsonLd>` + metadata API |
| Atribuição vaga ("especialistas dizem") | Fonte nomeada ("segundo avaliações na Amazon") |

## ✅ 6. Validação
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/
