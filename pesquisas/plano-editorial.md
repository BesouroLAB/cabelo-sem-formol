# Plano Editorial Programático — Cabelo Sem Formol

> **Documento operacional.** Gerado a partir de: `blueprint-original.md` (estratégia),
> `keywords/lista-mestra-keywords-cabelosemformol.xlsx` (81 keywords), `keywords/playbook-uso-por-produto.xlsx`
> (regras de CTA por produto) e dossiês em `pesquisas/produtos/` e `pesquisas/seo/`.
>
> **Como usar:** produzir na ordem dos lotes. Todo artigo segue o contrato de frontmatter de
> `.agent/skills/seo-programatico/SKILL.md` (o build valida). Lote publicado = atualizar Status aqui.

---

## Estado atual (15/07/2026)

| Publicado | URL | Template | Situação |
|---|---|---|---|
| ✅ | `/progressivas/melhor-progressiva-sem-formol` | Pilar | **Stub de teste** — segurar (é P3/Fase 4); manter fino até a Fase 3 |
| ✅ | `/progressivas/fashion-gold-resenha` | A · Resenha | Publicado e validado no Google. Ver ⚠️ decisão de CTA abaixo |
| ✅ | `/progressivas/borabella-nao-chore-mais-resenha` | A · Resenha | **Stub** — é a money page nº 1: reescrever no Lote 1 |

Infra pronta: 4 silos registrados (`progressivas`, `chapinhas`, `chuveiro`, `cuidados`), schemas
validados, sitemap/robots automáticos, FAQ programático, validação de frontmatter no build.

---

## Regras transversais (do playbook — valem para TODO artigo)

1. **Money-page** (produto limpo + afiliado forte): CTA direto via `/go/[slug]`. Ex.: Borabella, Forever Liss.
2. **Resenha de autoridade** (produto ok, afiliado fraco): usa a autoridade, SEM CTA próprio (ou "com aviso"), redireciona para a Borabella.
3. **Investigativo/Alerta** (glioxílico, origem duvidosa): SEM CTA. Protege o leitor e redireciona.
4. **Sempre**: ressalvas visíveis (loiro/laranja, cheiro, glioxílico) · conferir ASIN + vendedor antes de CTA · conferir INCI/Anvisa (base: `produtos/inci-anvisa-atualizacao.md`).
5. **Nunca**: afirmar "aprovada pela Anvisa" sem registro · endossar uso por gestante · resenhar produto-fantasma.
6. Publicar em **lotes de 5–10/semana** (guardrail anti-Scaled Content Abuse).

⚠️ **Decisão pendente (Fashion Gold):** o playbook classifica como "Autoridade, CTA: Não → redireciona Borabella"
(afiliado fraco). Porém encontramos o ASIN da variação licenciada Fashion Hair (`B0F7FJTB9Y`, já em `/go/fashion-gold`).
Recomendação: manter CTA "com aviso" explicando a variação de nome + bloco de redirecionamento para a Borabella.
**Confirmar com o Tiago.**

---

## FASE 2 — Cauda longa (agora)

### Lote 1 — Money pages do Silo 1 (dossiês prontos) — 5 artigos
| # | URL | Template | Playbook | Fonte | KW alvo |
|---|---|---|---|---|---|
| 1 | `/progressivas/borabella-nao-chore-mais-resenha` **(reescrever)** | A · `review` | Money-page destaque · CTA `/go/borabella-nao-chore-mais` | `produtos/dossie-borabella-nao-chore-mais.md` | "borabella não chore mais resenha" |
| 2 | `/progressivas/prohall-select-one-resenha` | A · `review` | Money c/ aviso (falsificação; Grau 1/2, RE 579/2025) · `/go/prohall-select-one-300ml` + `-1l` | `produtos/dossie-prohall-select-one.md` | "prohall select one resenha" |
| 3 | `/progressivas/forever-liss-resenha` | A · `review` | Money-page · CTA (⚠️ cadastrar ASIN em afiliados.ts) · desambiguar formol×sem formol (Ingel Maxx) | `produtos/dossie-forever-liss.md` | "forever liss progressiva resenha" |
| 4 | `/progressivas/mutari-progressiva-resenha` | A · `review` | Money c/ aviso (glioxílico → teste de mecha; trunfo: registro Grau 2) · (⚠️ cadastrar ASIN) | `produtos/dossie-mutari-progress.md` | "mutari progressiva resenha" |
| 5 | `/progressivas/fashion-gold-resenha` **(upgrade)** | A · `review` | Ver decisão ⚠️ acima · adicionar `faq:` + bloco alternativa Borabella | `seo/dossie-investigativo-fashion-gold.md` + `produtos/dossie-fashion-gold-ybera.md` | "fashion gold vale a pena" |

### Lote 2 — Dúvidas de alto tráfego do Silo 1 (Template D) — 6 artigos
Resposta direta no 1º parágrafo (featured snippet) + `faq:` + links para money pages do Lote 1.

| # | URL | KW alvo | Fonte |
|---|---|---|---|
| 6 | `/progressivas/progressiva-sem-formol-faz-mal` | "progressiva sem formol faz mal" (Alta demanda) | `seo/pesquisa-ymyl-alisamento.md` ⚠️ YMYL |
| 7 | `/progressivas/progressiva-sem-formol-estraga-o-cabelo` | "…estraga o cabelo" | idem |
| 8 | `/progressivas/progressiva-organica-tem-formol` | "progressiva orgânica tem formol" | `produtos/inci-anvisa-atualizacao.md` |
| 9 | `/progressivas/progressiva-sem-formol-tem-glioxilico` | "…tem glioxílico" (tema quente: restrição Anvisa) | idem |
| 10 | `/progressivas/quanto-tempo-dura` | "quanto tempo dura progressiva sem formol" | dossiês de produto |
| 11 | `/progressivas/progressiva-organica-vs-sem-formol` | "progressiva orgânica ou sem formol diferença" | `seo/guia-alisamento-sem-formol.md` |

### Lote 3 — Comparativos + recortes do Silo 1 (Templates B e C) — 7 artigos
| # | URL | Template | Nota |
|---|---|---|---|
| 12 | `/progressivas/fashion-gold-vs-borabella` | B | Alta conversão; empurra para a money Borabella |
| 13 | `/progressivas/borabella-vs-prohall-select-one` | B | Premium vs custo-benefício |
| 14 | `/progressivas/prohall-vs-let-me-be` | B | |
| 15 | `/progressivas/progressiva-sem-formol-cabelo-cacheado` | C | |
| 16 | `/progressivas/progressiva-sem-formol-cabelo-crespo` | C | |
| 17 | `/progressivas/progressiva-sem-formol-cabelo-fino` | C | Ângulo técnico: pausa/temperatura |
| 18 | `/progressivas/progressiva-para-loiras-sem-amarelar` | C | Dor real: amarelar/chumbar |

### Lote 4 — Autoridade + investigativos do Silo 1 — 8 artigos
SEM CTA (exceto indicado). Todos redirecionam para a money page Borabella.

| # | URL | Playbook | Fonte |
|---|---|---|---|
| 19 | `/progressivas/salvatore-resenha` | Autoridade · CTA c/ aviso se ASIN confiável (tanino; cheiro; laranja em loiro) | `produtos/dossie-salvatore-blue-gold.md` |
| 20 | `/progressivas/adlux-premium-pro-20-resenha` | Alerta intermediário · CTA c/ aviso (advertência de queda no rótulo) | `produtos/dossie-adlux-premium-pro-20.md` |
| 21 | `/progressivas/onixx-progressiva-resenha` | Cauteloso · SEM CTA · **absorve "bio lizz"** (é Bioliss da Onixx — não criar página própria) | `produtos/dossie-onixx.md` + `produtos/nota-resolucao-bio-lizz.md` |
| 22 | `/progressivas/let-me-be-pro-repair-resenha` | Cauteloso · SEM CTA (falsificação no ML; qual pote é sem formol) | `produtos/dossie-let-me-be.md` |
| 23 | `/progressivas/tyrrel-oxireduct-resenha` | Investigativo · SEM CTA (INCI contradiz "orgânico": glioxal + DMDM) | `produtos/dossie-tyrrel-oxireduct.md` |
| 24 | `/progressivas/japinha-organica-resenha` | Investigativo · SEM CTA (sem registro Anvisa localizado; claim de gravidez perigoso ⚠️) | `produtos/dossie-japinha-organica.md` |
| 25 | `/progressivas/maria-escandalosa-resenha` | Alerta · SEM CTA (relatos de cheiro de formol; sem SAC) | `produtos/dossie-maria-escandalosa.md` |
| 26 | ~~bio-lizz-resenha~~ | **Desambiguação — NÃO criar.** Keyword dobra na resenha Onixx (#21) | — |

### Lote 5 — Silo 2: Chapinhas (abre o silo) — 8 artigos
Criar pasta `content/chapinhas/` (o hub e o sitemap nascem sozinhos).
Fontes: `seo/dossie-chapinhas-profissionais.md` + `seo/analise-chapinha-profissional.md`.
ASINs já cadastrados: `/go/taiff-style-pro-chapinha`, `/go/taiff-style-pro-secador`.

| # | URL | Template | Nota |
|---|---|---|---|
| 27 | `/chapinhas/taiff-style-pro-titanium-resenha` | A · `review` | Melhor geral nos rankings; money page |
| 28 | `/chapinhas/lizze-extreme-resenha` | A · `review` | 250°C reais — alerta fio fino/descolorido |
| 29 | `/chapinhas/mq-pro-480-titanium-resenha` | A · `review` | 17 níveis — favorita p/ loiras |
| 30 | `/chapinhas/temperatura-chapinha-progressiva` | D | Tabela de temperatura por fio — muito buscado |
| 31 | `/chapinhas/titanio-ou-ceramica` | D | Dúvida central do nicho |
| 32 | `/chapinhas/lizze-extreme-vs-mq-480` | B | Temperatura fixa vs regulagem |
| 33 | `/chapinhas/temperatura-cabelo-descolorido` | D | |
| 34 | `/chapinhas/diferenca-chapinha-comum-progressiva` | D | |

### Lote 6 — Silos 3 e 4 (abrem os silos) — 8 artigos
| # | URL | Template | Nota |
|---|---|---|---|
| 35 | `/cuidados/cronograma-capilar-pos-progressiva` | **Pilar (P1!)** | Único pilar de baixa concorrência — pode sair já. Fonte: `seo/faq-cuidados-pos-progressiva.md` |
| 36 | `/cuidados/como-fazer-progressiva-durar-mais` | D | Linka money pages silos 1–2 |
| 37 | `/cuidados/o-que-nao-pode-depois-da-progressiva` | D | |
| 38 | `/cuidados/shampoo-sem-sulfato-progressiva` | C | Monetiza shampoos (cadastrar ASINs) |
| 39 | `/chuveiro/hidraliso-resenha` | A · `review` | "Queridinha do Instagram" |
| 40 | `/chuveiro/progressiva-de-chuveiro-alisa-mesmo` | D | Expectativa: alinhamento ≠ alisamento |
| 41 | `/chuveiro/chuveiro-vs-salao` | D | |
| 42 | `/chuveiro/la-bella-liss-resenha` | A · `review` | Ângulo: a "baratinha" funciona? |

---

## FASE 3 — Pilares + restante (após lotes 1–6, com a cauda linkando)

- `/progressivas/melhor-progressiva-sem-formol` — **reescrever o pilar de verdade** (ranking completo, tabela comparativa, linka todas as resenhas). Atualizar ano no título a cada janeiro.
- `/chapinhas/melhor-chapinha-para-progressiva` (pilar silo 2)
- `/chuveiro/progressiva-de-chuveiro-funciona` (pilar silo 3) + `/chuveiro/melhores-progressivas-de-chuveiro`
- Recortes P2 restantes (cabelo curto, henê, profissional, chapinha cabelo fino/cacheado, ⚠️ grávida — YMYL máximo cuidado)

## FASE 4 — Termos-cabeça (mês 3+, só com autoridade acumulada)
"melhor progressiva sem formol" · "melhor chapinha profissional" · "melhor chapinha de titânio" · variações "2026".

---

## Checklist por artigo (colar no início de cada produção)

- [ ] Keyword e URL conferidas na lista mestra (não duplicar/canibalizar)
- [ ] Dossiê lido + INCI/Anvisa conferido (`produtos/inci-anvisa-atualizacao.md`)
- [ ] Papel do produto conferido no playbook (CTA? redireciona?)
- [ ] ASIN cadastrado em `src/data/afiliados.ts` ANTES do CTA (vendedor confiável?)
- [ ] Frontmatter completo (`schemaType`, `product`, `faq` 3–7) — o build valida
- [ ] Resposta direta no 1º parágrafo (Template D) / veredito rápido no topo (Template A)
- [ ] Mínimo 2 links internos entrando e saindo (pilar + relacionados)
- [ ] Ressalvas visíveis (não esconder contras)
- [ ] `npm run build` verde + conferir JSON-LD no HTML
- [ ] Pós-deploy: Rich Results Test na URL
