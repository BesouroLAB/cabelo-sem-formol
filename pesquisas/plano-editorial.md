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
| ✅ | `/progressivas/fashion-gold-resenha` | A · Resenha | **Lote 1 ✔** — química corrigida (sulfito), FAQ, aviso Fashion Hair, redireciona Borabella |
| ✅ | `/progressivas/borabella-nao-chore-mais-resenha` | A · Resenha | **Lote 1 ✔** — reescrita completa (money page destaque) |
| ✅ | `/progressivas/prohall-select-one-resenha` | A · Resenha | **Lote 1 ✔** — resenha honesta c/ achado regulatório |
| ✅ | `/progressivas/forever-liss-resenha` | A · Resenha | **Lote 1 ✔** — desambiguação 3D/Zero × Ingel Maxx. ⚠️ ASIN pendente (CTA via busca) |
| ✅ | `/progressivas/mutari-progressiva-resenha` | A · Resenha | **Lote 1 ✔** — Grau 2 + glioxílico. ⚠️ ASIN pendente (CTA via busca) |

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
**LOTE 2 FINALIZADO ✔ (15/07/2026)** - Artigos focados em YMYL, com schema FAQPage e linkagem interna.

| # | URL | KW alvo | Fonte | Status |
|---|---|---|---|---|
| 6 | `/progressivas/progressiva-sem-formol-faz-mal` | "progressiva sem formol faz mal" (Alta demanda) | `seo/pesquisa-ymyl-alisamento.md` ⚠️ YMYL | ✅ Lote 2 |
| 7 | `/progressivas/progressiva-sem-formol-estraga-o-cabelo` | "…estraga o cabelo" | idem | ✅ Lote 2 |
| 8 | `/progressivas/progressiva-organica-tem-formol` | "progressiva orgânica tem formol" | `produtos/inci-anvisa-atualizacao.md` | ✅ Lote 2 |
| 9 | `/progressivas/progressiva-sem-formol-tem-glioxilico` | "…tem glioxílico" (tema quente: restrição Anvisa) | idem | ✅ Lote 2 |
| 10 | `/progressivas/quanto-tempo-dura` | "quanto tempo dura progressiva sem formol" | dossiês de produto | ✅ Lote 2 |
| 11 | `/progressivas/progressiva-organica-vs-sem-formol` | "progressiva orgânica ou sem formol diferença" | `seo/guia-alisamento-sem-formol.md` | ✅ Lote 2 |

### Lote 3 — Comparativos + recortes do Silo 1 (Templates B e C) — 7 artigos
**LOTE 3 FINALIZADO ✔ (15/07/2026)** - Alta conversão e guias técnicos de perfis.

| # | URL | Template | Nota | Status |
|---|---|---|---|---|
| 12 | `/progressivas/fashion-gold-vs-borabella` | B | Alta conversão; empurra para a money Borabella | ✅ Lote 3 |
| 13 | `/progressivas/borabella-vs-prohall-select-one` | B | Premium vs custo-benefício | ✅ Lote 3 |
| 14 | `/progressivas/prohall-vs-let-me-be` | B | | ✅ Lote 3 |
| 15 | `/progressivas/progressiva-sem-formol-cabelo-cacheado` | C | | ✅ Lote 3 |
| 16 | `/progressivas/progressiva-sem-formol-cabelo-crespo` | C | | ✅ Lote 3 |
| 17 | `/progressivas/progressiva-sem-formol-cabelo-fino` | C | Ângulo técnico: pausa/temperatura | ✅ Lote 3 |
| 18 | `/progressivas/progressiva-para-loiras-sem-amarelar` | C | Dor real: amarelar/chumbar | ✅ Lote 3 |

### Lote 4 — Autoridade + investigativos do Silo 1 — 8 artigos
**LOTE 4 FINALIZADO ✔ (15/07/2026)** - Foco E-E-A-T (Segurança), SEM CTA (exceto os 2 primeiros com ressalvas). Todos redirecionam para a money page Borabella.

| # | URL | Playbook | Fonte | Status |
|---|---|---|---|---|
| 19 | `/progressivas/salvatore-resenha` | Autoridade · CTA c/ aviso se ASIN confiável (tanino; cheiro; laranja em loiro) | `produtos/dossie-salvatore-blue-gold.md` | ✅ Lote 4 |
| 20 | `/progressivas/adlux-premium-pro-20-resenha` | Alerta intermediário · CTA c/ aviso (advertência de queda no rótulo) | `produtos/dossie-adlux-premium-pro-20.md` | ✅ Lote 4 |
| 21 | `/progressivas/onixx-progressiva-resenha` | Cauteloso · SEM CTA · **absorve "bio lizz"** | `produtos/dossie-onixx.md` + `produtos/nota-resolucao-bio-lizz.md` | ✅ Lote 4 |
| 22 | `/progressivas/let-me-be-pro-repair-resenha` | Cauteloso · SEM CTA (falsificação no ML; qual pote é sem formol) | `produtos/dossie-let-me-be.md` | ✅ Lote 4 |
| 23 | `/progressivas/tyrrel-oxireduct-resenha` | Investigativo · SEM CTA (INCI contradiz "orgânico": glioxal + DMDM) | `produtos/dossie-tyrrel-oxireduct.md` | ✅ Lote 4 |
| 24 | `/progressivas/japinha-organica-resenha` | Investigativo · SEM CTA (sem registro Anvisa localizado; claim de gravidez perigoso ⚠️) | `produtos/dossie-japinha-organica.md` | ✅ Lote 4 |
| 25 | `/progressivas/maria-escandalosa-resenha` | Alerta · SEM CTA (relatos de cheiro de formol; sem SAC) | `produtos/dossie-maria-escandalosa.md` | ✅ Lote 4 |
| 26 | ~~bio-lizz-resenha~~ | **Desambiguação — NÃO criar.** Keyword dobra na resenha Onixx (#21) | — | ❌ Abortado |

### Lote 5 — Silo 2: Chapinhas (abre o silo) — 8 artigos
**LOTE 5 FINALIZADO ✔ (15/07/2026)** - Criação do Silo de Chapinhas com resenhas de hardware de alto ticket e guias de segurança YMYL.

| # | URL | Tipo | Fonte | Status |
|---|---|---|---|---|
| 27 | `/chapinhas/lizze-extreme-resenha` | Money (Review) | `pesquisas/produtos/chapinhas.md` | ✅ Lote 5 |
| 28 | `/chapinhas/mq-pro-480-resenha` | Money (Review) | `pesquisas/produtos/chapinhas.md` | ✅ Lote 5 |
| 29 | `/chapinhas/lizze-supreme-resenha` | Money (Review) | `pesquisas/produtos/chapinhas.md` | ✅ Lote 5 |
| 30 | `/chapinhas/lizze-extreme-vs-mq-pro-480` | Comparativo | `pesquisas/produtos/chapinhas.md` | ✅ Lote 5 |
| 31 | `/chapinhas/lizze-extreme-vs-supreme` | Comparativo | `pesquisas/produtos/chapinhas.md` | ✅ Lote 5 |
| 32 | `/chapinhas/titanio-ou-ceramica` | Guia YMYL | *Conhecimento técnico (condução térmica)* | ✅ Lote 5 |
| 33 | `/chapinhas/temperatura-ideal-chapinha` | Guia YMYL | *Conhecimento técnico (ponto de fusão)* | ✅ Lote 5 |
| 34 | `/chapinhas/melhor-chapinha-profissional` | Pilar do Silo 2 | *Ranking das 3 acima* | ✅ Lote 5 |

### Lote 6 — Silos 3 e 4 (abrem os silos) — 8 artigos
**LOTE 6 FINALIZADO ✔ (15/07/2026)** - Criação dos silos de Cuidados e Chuveiro concluída.

| # | URL | Tipo | Status |
|---|---|---|---|
| 35 | `/cuidados/cronograma-capilar-pos-progressiva` | Pilar P1 | ✅ Lote 6 |
| 36 | `/cuidados/como-fazer-progressiva-durar-mais` | Dúvida | ✅ Lote 6 |
| 37 | `/cuidados/o-que-nao-pode-depois-da-progressiva` | Dúvida / YMYL | ✅ Lote 6 |
| 38 | `/cuidados/shampoo-sem-sulfato-progressiva` | Money (Monetiza shampoos) | ✅ Lote 6 |
| 39 | `/chuveiro/hidraliso-resenha` | Resenha (A) | ✅ Lote 6 |
| 40 | `/chuveiro/progressiva-de-chuveiro-alisa-mesmo` | Dúvida YMYL | ✅ Lote 6 |
| 41 | `/chuveiro/chuveiro-vs-salao` | Dúvida | ✅ Lote 6 |
| 42 | `/chuveiro/la-bella-liss-resenha` | Resenha (A) | ✅ Lote 6 |

---

## FASE 3 — Pilares + restante — **FINALIZADA ✔ (15/07/2026)**
- `/progressivas/melhor-progressiva-sem-formol` — **Reescrita completa do pilar concluída** (ranking completo, linkando 14 satélites).
- `/chuveiro/progressiva-de-chuveiro-funciona` — **Pilar do silo de chuveiro criado**.
- `/chuveiro/melhores-progressivas-de-chuveiro` — **Ranking de chuveiro criado**.
- Recortes P2 restantes criados:
  - `/progressivas/progressiva-para-gravidas` (Gestantes) ✅
  - `/progressivas/compatibilidade-progressiva-e-hene` (Henê) ✅
  - `/progressivas/cabelo-curto-com-progressiva` (Corte curto) ✅
  - `/progressivas/progressiva-profissional` (Profissional vs Farmácia) ✅
  - `/chapinhas/chapinha-cabelo-fino` (Fios finos) ✅
  - `/chapinhas/chapinha-cabelo-cacheado` (Modelagem de cachos) ✅

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
