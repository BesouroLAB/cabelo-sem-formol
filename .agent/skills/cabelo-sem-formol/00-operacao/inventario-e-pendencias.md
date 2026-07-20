# INVENTÁRIO E PENDÊNCIAS VIVAS
> Atualizar a CADA entrega. Última atualização: 20/07/2026.

## Status dos 50 artigos existentes (após reprocessamento planejado)

Legenda de ação: AUDITAR (revisar+linkar) · PROMOVER (virar pilar) · REPOSICIONAR (corrigir promessa) · ALERTA (converter, tirar afiliado) · OK (revisado).

### Silo 1 — Progressivas (30)
| ID | Título | Status marca | Ação | Persona-dona |
|---|---|---|---|---|
| 101 | Melhor Progressiva Sem Formol | — | AUDITAR (pilar-mãe) | P12/P1 |
| 102 | Fashion Gold | ⚠️ contradição | ALERTA/pausar rec. | P14/P1 |
| 103 | Prohall Select One | 🔴 Grau 1 | ALERTA/pausar | P10 |
| 104 | Forever Liss | 🟢 | AUDITAR | P4/P3 |
| 105 | Mutari | 🟡 derivados | AUDITAR (modelo 3 camadas) | P2 |
| 106 | Borabella Não Chore Mais | 🟡 pirogalol | AUDITAR | P1 |
| 107 | Faz mal? | — | AUDITAR | P12 |
| 108 | Estraga o cabelo? | — | AUDITAR | P12 |
| 109 | Orgânica tem formol? | — | AUDITAR | P12 |
| 110 | Tem glioxílico? | — | **PROMOVER a pilar** | P12 |
| 111 | Quanto tempo dura? | — | AUDITAR | P11 |
| 112 | Orgânica vs Sem Formol | — | AUDITAR | P12 |
| 113 | Fashion Gold vs Borabella | — | AUDITAR (rever status) | P1 |
| 114 | Borabella vs Prohall | — | AUDITAR | P10 |
| 115 | Prohall vs Let Me Be | — | AUDITAR | P10 |
| 116 | Cacheado | — | AUDITAR | P1 |
| 117 | Crespo | — | AUDITAR | P2 |
| 118 | Fino | — | AUDITAR | P4 |
| 119 | Loiras/Sem amarelar | — | AUDITAR | P3 |
| 120 | Salvatore | ⚪ sem dados | AUDITAR pós-painel | ? |
| 121 | Adlux Premium Pro 20 | ⚪ | AUDITAR pós-painel | ? |
| 122 | Onixx | ⚪ | AUDITAR pós-painel | ? |
| 123 | Let Me Be Pro Repair | 🟡 | AUDITAR (corrigir menores) | P3/P9 |
| 124 | Tyrrel Oxireduct | 🟡 INCI? | AUDITAR pós-verificação | P2 |
| 125 | Japinha Orgânica | 🔴 glioxílico livre | **ALERTA (zero afiliado)** | P12 |
| 126 | Maria Escandalosa | ⚪ | AUDITAR pós-painel | ? |
| 127 | Para grávidas | — | AUDITAR (zero afiliado) | P7 |
| 128 | Compatibilidade com Henê | — | AUDITAR | P6 |
| 129 | Curto | — | AUDITAR (absorve P14) | P14 |
| 130 | Uso Profissional | — | AUDITAR | P10 |

### Silo 2 — Chapinhas (10)
201 Lizze Extreme · 202 MQ Pro 480 · 203 Lizze Supreme · 204 Duelo Lizze×MQ · 205 Duelo Extreme×Supreme · 206 Titânio ou Cerâmica · 207 Temperatura ideal · 208 Melhor profissional (HUB) · 209 Chapinha fino · 210 Chapinha cacheado — TODAS: AUDITAR (`[CONFIRMAR]` specs atuais).

### Silo 3 — Pós-Química (4)
301 Cronograma (HUB) · 302 Durar mais · 303 O que não pode · 304 Shampoo sem sulfato — TODAS: AUDITAR (expandir tabela pós por marca).

### Silo 4 — Chuveiro (6)
401 Hidraliso · 402 Alisa mesmo? · 403 Chuveiro vs Salão · 404 La Bella Liss · 405 Funciona? · 406 Melhores (HUB) — TODAS: **REPOSICIONAR** (alinha, não alisa).

## Backlog de novos (9) — status: ✅ RASCUNHOS ENTREGUES em 20/07/2026
Todos criados como MDX (schemaType article, FAQ 4–5 itens, frontmatter validado, links internos conferidos). Verificados ao vivo os fatos-âncora regulatórios (gov.br/anvisa em 20/07/2026); `[CONFIRMAR]` remanescentes herdados dos dossiês (painel logado, INCI de marcas, diretriz SBD, letra exata de normas).

| # | Persona | Arquivo | Slug público |
|---|---|---|---|
| B1 | P12 | `content/progressivas/131-como-consultar-registro-anvisa.mdx` | /progressivas/como-consultar-registro-anvisa |
| B2 | P9 | `content/progressivas/132-teste-de-mecha-passo-a-passo.mdx` | /progressivas/teste-de-mecha-passo-a-passo |
| B3 | P8 | `content/progressivas/133-progressiva-infantil.mdx` (proteção, zero afiliado) | /progressivas/progressiva-infantil |
| B4 | P9 | `content/progressivas/134-como-aplicar-progressiva-em-casa.mdx` | /progressivas/como-aplicar-progressiva-em-casa |
| B5 | P3 | `content/progressivas/135-descoloracao-e-progressiva-intervalo-seguro.mdx` | /progressivas/descoloracao-e-progressiva-intervalo-seguro |
| B6 | P1 | `content/progressivas/136-alinhar-ou-alisar-cacheadas.mdx` | /progressivas/alinhar-ou-alisar-cacheadas |
| B7 | P13 | `content/progressivas/137-progressiva-cabelo-grisalho.mdx` | /progressivas/progressiva-cabelo-grisalho |
| B8 | P14 | `content/progressivas/138-progressiva-masculina.mdx` | /progressivas/progressiva-masculina |
| B9 | P11 | `content/chapinhas/211-protetor-termico.mdx` | /chapinhas/protetor-termico |

### Frontmatter — estrutura do prompt-mestre (aplicada em 20/07/2026)
Os 9 novos usam o frontmatter completo do prompt-mestre: `title, description (≤160), slug, silo, tier, intent, personas, tracking_id, date, updated, verificado_em, author, schemaType, faq`. `date` foi mantido porque o build (`src/lib/mdx.ts` → `validateFrontmatter`) o exige; os campos extras são aceitos (`[key: string]: unknown`) e ficam disponíveis para as páginas-lista de persona (D4) quando o dev as implementar.

### Pendências abertas dos novos artigos
- **`tracking_id` placeholder:** usei `csf-b1`…`csf-b9` (B3 vazio, é proteção sem afiliado). Criar os tracking IDs reais no painel Amazon Associados e substituir.
- **Linkagem reversa:** os 50 artigos existentes ainda NÃO linkam de volta para B1/B2 (a tríade de conformidade) nem para os demais novos. Inserir os links reversos durante o reprocessamento dos 50 (§6 da estratégia). Os 9 novos já linkam para os existentes.
- **Verificação de build:** frontmatter validado por script espelhando `validateFrontmatter` + slug conferido contra o nome do arquivo; rodar `next build` completo antes de publicar para conferir render MDX.
- **`[CONFIRMAR]` por artigo:** cada MDX carrega marcações no rodapé (faixas por marca, INCI, diretriz SBD, letra da RDC 409, marcas de grisalho/masculino no painel).

## Reprocessamento dos 50 — LOTE CRÍTICO (conformidade) ✅ feito em 20/07/2026
Primeiro lote do §6 da estratégia. Build OK (70 páginas), render conferido, 0 link interno quebrado, 0 preço em texto, 0 CTA para produto pausado.

| Art | Ação | Feito |
|---|---|---|
| 110 | PROMOVER a pilar | Expandido ~3x, tabela marca-a-marca (HTML), 3 camadas, `RegulacaoBox`, hub; frontmatter novo; `schemaType: article` |
| 125 Japinha | ALERTA (zero afiliado) | Reescrito no ângulo da auditoria, anti-hype, `RegulacaoBox`+FAQ, glioxílico livre ancorado no INCI; 0 CTA |
| 103 Prohall | PAUSAR | CTAs e **preços removidos**, `RegulacaoBox` (RE 579/2025), veredito "aguarde"; `review`→`article` (tira estrela) |
| 102 Fashion Gold | PAUSAR (contradição) | Ativo reposicionado como contraditório, IN 124→220, `RegulacaoBox`, CTA removido; `review`→`article` |
| 114 duelo | Ajustar | Prohall fora do páreo, CTAs Prohall removidos, claim "Grau 2" da Borabella corrigido p/ `[CONFIRMAR]` |
| 115 duelo | Ajustar | Veredito "Vá de Prohall" → "verifique antes"; CTAs Prohall removidos; `RegulacaoBox` |

## 2º lote de reprocessamento ✅ feito em 20/07/2026
- **`remark-gfm` instalado e configurado** (`src/app/[silo]/[slug]/page.tsx` → `MDXRemote options.mdxOptions.remarkPlugins`). Tabelas markdown passam a renderizar em todo o site; a do **105 Mutari** (que estava quebrada no ar) agora renderiza. `package.json`/`package-lock.json` atualizados.
- **IN 124/2022 → 220/2023** corrigida em 101, 105, 106, 109, 113.
- **113 (Fashion Gold vs Borabella)** reprocessado: Fashion Gold em tom investigativo (sem recomendação), claim "Borabella Grau 2" → `[CONFIRMAR]`, `RegulacaoBox`, **CTA quebrado `/go/borabella-kit-completo` removido**, Borabella com CTA soft.
- **Silo 4 (401–406)** — a reposição "alinha, não alisa" **já estava feita na prosa**; fiz o cleanup de conformidade: preços em texto removidos (403, 404, 401), `RegulacaoBox` no 402, citação `RDC 07/2015` (não verificada) substituída pelo framework Grau 2, referências ao Prohall pausado trocadas por encaminhamento ao pilar, **CTA quebrado `/go/felps-chuveiro` removido** (406).

Build OK (70 páginas), 0 link interno quebrado, 0 CTA quebrado no Silo 4.

### Achados abertos para os próximos lotes
- **Preços de produto/serviço em texto (padrão #3)** ainda em: 112 (`R$ 150/250/100`, serviço de salão), 123 (`R$ 10`), 130 (`R$ 400`, salão). Converter para qualitativo na revisão de cada um. *(105 Mutari — preço de produto — já corrigido em 20/07/2026.)*
- **Reviews ⚪ sem dados** (120 Salvatore, 121 Adlux, 122 Onixx, 126 Maria Escandalosa): auditar pós-painel.
- **Reviews 🟡 a confirmar no painel:** 104 Forever Liss, 105 Mutari, 106 Borabella, 123 Let Me Be, 124 Tyrrel (+ correção do 123 sobre menores).
- **Linkagem reversa** dos 50 para B1/B2/110 (tríade de conformidade) — pendente.

## PENDÊNCIAS `[CONFIRMAR]` ABERTAS (do dossiê regulatório + dossiês)
1. Texto exato do disclosure no Contrato Operacional (painel logado).
2. % oficial da categoria beleza (painel logado).
3. Concentrações/pH da lista de ativos (texto da IN no DOU) — antes de citar números.
4. Qual redação de lista de ativos vigora: IN 124/2022 × IN 220/2023.
5. Lista completa de frases obrigatórias de rótulo (RDC 409/2020).
6. Ementa exata da Resolução 36/2009.
7. Orientação específica p/ gestantes (Anvisa/SBD/FEBRASGO).
8. Status no painel das 14 marcas (prioridade: Prohall, Japinha, Fashion Gold, depois ⚪).
9. Marcas do corredor guanidina/hidróxidos (categoria nova P2/P10).
10. Marcas de progressiva matizadora p/ grisalhos (categoria nova P13).
11. Specs atuais das chapinhas (201–205, 208).
12. Fonte técnica p/ mecanismo henê+sais metálicos (P6) e teste de mecha p/ henê.
13. Fonte dermatológica p/ afinamento por saúde (P4) e cuidado infantil (P8).

## DECISÕES AGUARDANDO O DONO DO BLOG (§5 da estratégia)
- D1 (127 zero afiliado?), D2 (B3 afiliados infantis?), D3 (categorias novas), D4 (tags persona), D5 (monitor Anvisa), D6 (lead magnets), D7 (Silo 4 — ✅ decidido), D8 (110 pilar — ✅), D9 (casos vermelhos — ✅).
