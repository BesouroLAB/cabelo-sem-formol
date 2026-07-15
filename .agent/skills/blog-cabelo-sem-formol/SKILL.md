---
name: blog-cabelo-sem-formol
description: Fonte de verdade do projeto "Cabelo Sem Formol" — blog de curadoria e recomendação de produtos capilares (progressivas sem formol, chapinhas, progressivas de chuveiro, cuidados pós-química) para monetização via afiliados Amazon BR. Modelo E-E-A-T de Curador/Pesquisador (sem testes próprios). Contém tese estratégica, arquitetura de 4 silos, 4 templates programáticos, regras E-E-A-T, gestão de links Amazon e guardrails anti-penalidade. Use SEMPRE que o trabalho envolver o blog, artigos, SEO, domínio ou conteúdo do projeto.
---
> ?? **DIRETRIZ GLOBAL (CABELO SEM FORMOL):** 
> Todas as instru��es abaixo devem ser executadas e comunicadas EXCLUSIVAMENTE em **Portugu�s do Brasil (pt-BR)**.
> O contexto absoluto do seu trabalho � o projeto **"Cabelo Sem Formol"** � um blog de SEO focado em jornalismo investigativo, qu�mica capilar (progressivas sem formol) e monetiza��o via Amazon.
> Aja de forma alinhada ao E-E-A-T: nunca alucine dados m�dicos ou qu�micos, consulte sempre a Anvisa.

# Projeto Cabelo Sem Formol — Mente Coletiva (Fonte da Verdade)

Este documento é a regra máxima (Master Skill) para qualquer IA operando no projeto **Cabelo Sem Formol**.

## 🎯 1. Tese Central

O mercado de "melhor progressiva sem formol" e "melhor chapinha" está **saturado** de sites de afiliado fortes e antigos (AnalisaMelhor, mybest, Promobit, Meliuz, Buskando). Um domínio novo **não bate esses termos-cabeça de frente**.

A jogada vencedora tem três tempos:

1. **Entrar pela cauda longa** — dúvidas específicas, produtos individuais, comparativos, recortes por tipo de cabelo. Baixa concorrência, intenção clara, escalável via template.
2. **Construir autoridade e linkagem interna** apontando essa cauda para páginas-pilar.
3. **Só então disputar os termos-cabeça**, já com sinais de autoridade acumulados.

O SEO programático é o motor da etapa 1 — mas programático **não** significa página fina. Significa estrutura repetível preenchida com conteúdo real e útil. Escala na estrutura, profundidade no conteúdo.

## 🛡️ 2. Modelo de Autoridade Honesto (E-E-A-T)

> **REALIDADE:** Nós NÃO testamos produtos. Nossas fontes são: avaliações de compradoras reais, vídeos de aplicação no YouTube e fichas técnicas dos fabricantes.

### Como construímos autoridade SEM fingir testes

- **Em vez de** "testamos o pH" → "analisamos mais de X avaliações verificadas de compradoras"
- **Em vez de** "medimos a temperatura" → "compilamos as especificações oficiais do fabricante e cruzamos com o relato de dezenas de usuárias"
- **Em vez de** "nossa equipe de laboratório" → "assistimos horas de vídeos de aplicação real para observar textura, ardência e resultado"

Isso é curadoria séria, ranqueia, e é 100% defensável.

### Regras Invioláveis

1. **NUNCA inventar número** (nota, pH, %, volume de busca). Se não tem o dado, não cita o dado.
2. **YMYL / saúde:** NADA de afirmar que produto químico "pode ser usado por gestantes". Reproduza apenas o que o fabricante declara, atribuído a ele ("segundo a marca, ..."), e recomende consulta profissional. Ponto de risco real.
3. **SEMPRE incluir aviso de afiliado** — transparência. Os concorrentes fortes fazem e o Google valoriza.
4. **Páginas "Sobre" e "Metodologia" reais** explicando como as recomendações são feitas.
5. **DATA de publicação e atualização** visível em toda página + `datePublished`/`dateModified` no schema.
6. **NUNCA texto-molde repetido** palavra por palavra entre páginas programáticas.
7. **Só criar página se houver conteúdo real** para preenchê-la — sem página-fantasma.
8. **Publicar em lotes controlados**, não centenas de uma vez.

### Metodologia declarada em cada artigo

```
📋 Como pesquisamos este guia:
• Analisamos [X] avaliações de compradoras na Amazon e Mercado Livre
• Assistimos [X] vídeos de aplicação e review no YouTube
• Consultamos os dados técnicos do fabricante
• Verificamos o registro na ANVISA
• Cruzamos opiniões de profissionais publicadas online
• Última atualização: [data]
```

### Autoria e Credenciais
- Página `/sobre` com história do blog, missão e metodologia editorial.
- Página `/autor` com bio real. Não precisa ser dermatologista — basta ser genuíno (ex: "Pesquisadora independente de cosméticos capilares").
- Schema `Person` no autor.

## 🏛️ 3. Arquitetura de 4 Silos

**Regra de URL:** `/{silo}/{slug}` — sempre o mesmo prefixo por silo. Consistência absoluta.

### Silo 1 — Progressivas sem formol → `/progressivas/`
- **Pilar:** "Melhor progressiva sem formol [ano]" (ranking)
- **Satélites:** resenhas por produto, comparativos, dúvidas de segurança/química, recortes por tipo de cabelo.

### Silo 2 — Chapinhas / pranchas → `/chapinhas/`
- **Pilar:** "Melhor chapinha para progressiva"
- **Satélites:** resenhas por modelo, titânio vs cerâmica, temperatura por tipo de cabelo, comparativos.

### Silo 3 — Progressiva de chuveiro → `/chuveiro/`
- **Pilar:** "Progressiva de chuveiro funciona?"
- **Satélites:** resenhas das marcas, "salão vs chuveiro", para quem serve.

### Silo 4 — Cuidados / pós-química (topo de funil) → `/cuidados/`
- **Pilar:** "Cronograma capilar pós-progressiva"
- **Satélites:** shampoos sem sulfato, como fazer durar, acidificação, o que evitar. Puxa tráfego informacional e faz linkagem para money pages dos silos 1–3.

### Linkagem Interna (Regra de Túnel)
- Satélites linkam para seu Pilar. Pilar linka para satélites.
- Silo 4 (cuidados) linka para money pages dos Silos 1–3.
- Em cada resenha: bloco "Veja também" com comparativos e recortes de público do mesmo silo.
- Nenhuma página pode ser órfã — toda página tem pelo menos 2 links internos entrando.

## 📐 4. Templates de SEO Programático

Cada template = molde escalável. Variáveis `{ }` preenchidas com dados reais (fabricante + avaliações + vídeos).

### Template A — Resenha de produto `/{silo}/{marca}-{produto}-resenha`
> "{Produto} vale a pena? Resenha com {N} avaliações reais"

Blocos: veredito rápido (com CTA afiliado) · o que é / para quem serve · o que dizem as compradoras (prós/contras extraídos de reviews) · ficha técnica oficial · como aplicar · alternativas (linka comparativos) · FAQ (schema).

**Escala:** 1 artigo por produto. **Schemas:** `Article` + `Product` + `Review` + `FAQPage` + `BreadcrumbList`.

### Template B — Comparativo `/{silo}/{A}-vs-{B}`
> "{A} ou {B}? Qual escolher (comparativo honesto)"

Blocos: tabela lado a lado · quando escolher A · quando escolher B · veredito por perfil · CTAs.

**Escala:** pares relevantes dentro de cada silo. **Schemas:** `Article` + `FAQPage` + `BreadcrumbList`.

### Template C — Recorte de público `/{silo}/{categoria}-para-cabelo-{tipo}`
> "Melhor {categoria} para cabelo {tipo}"

Blocos: por que {tipo} exige cuidado específico · top 3 para esse perfil · o que evitar · FAQ.

**Escala:** categoria × tipo de cabelo. **Schemas:** `Article` + `FAQPage` + `BreadcrumbList`.

### Template D — Dúvida/segurança `/{silo}/{pergunta}`
> Responde a pergunta direto no primeiro parágrafo (featured snippet), depois aprofunda.

Blocos: resposta curta · explicação · o que os fabricantes dizem · recomendação prática · produtos relacionados (linka money pages).

**Escala:** 1 por pergunta do cluster. **Schemas:** `Article` + `FAQPage` + `BreadcrumbList`.

### Guardrails Anti-Penalidade (OBRIGATÓRIOS em todo template)
- Cada página traz algo que as outras não têm (dados daquele produto/perfil específico).
- Sem texto "molde" repetido palavra por palavra entre páginas.
- Publicar em lotes controlados, não centenas de uma vez.
- Só criar a página se houver conteúdo real para preencher — sem página-fantasma.

## 🧬 4.5. Classificação Regulatória por Ativo (O Diferencial do Projeto)

> **REGRA:** Nenhum concorrente organiza produtos por status regulatório real. Nós fazemos. Isso é o nosso moat.

### Ativos Alisantes — Status na Anvisa (IN 124/2022)
| Ativo | Status | Produtos que usam |
|---|---|---|
| **Pirogalol** | ✅ Permitido | Borabella |
| **Sulfitos/Bissulfitos** | ✅ Permitido | Fashion Gold (metabissulfito de potássio) |
| **Tioglicolatos** | ✅ Permitido | (alisantes tradicionais, Grau 2) |
| **Hidróxidos** | ✅ Permitido | (relaxamentos clássicos) |
| **Ácido Glioxílico e derivados** | ⚠️ NÃO permitido / sob reavaliação | Mutari, Adlux, Tyrrel, Onixx, (possivelmente Japinha) |
| **Carbocisteína** | ⚠️ NÃO na lista de permitidos | Let Me Be |
| **Tanino** | 🟡 Fora da lista, mas sem ser glioxílico | Salvatore |
| **Formol (formaldeído)** | ❌ Banido como alisante | Maria Escandalosa (relatos), Ingel Maxx (Forever Liss) |

### Tipos de Página por Produto
| Tipo | Quando usar | CTA de compra? |
|---|---|---|
| **Money-page** | Ativo permitido/ok + afiliado Amazon forte | ✅ Sim (Borabella, Forever Liss, Mutari) |
| **Resenha de Autoridade** | Ativo ok, mas sem afiliado Amazon | Não — redirecionar para money-page |
| **Investigativo/Alerta** | Glioxílico, formol, origem duvidosa, sem registro | ❌ Nunca — proteger o leitor |

### Regra sobre Status Anvisa
- **NUNCA** afirmar "aprovada pela Anvisa" sem conferir registro no portal.
- "Número de processo" ≠ "registro". Não são a mesma coisa.
- Dizer o status do ATIVO (ex: "pirogalol é da lista de permitidos") é mais preciso e defensável do que "produto aprovado".
- Se o status está em disputa (como Prohall RE 579/2025), apresentar os fatos verificados e orientar o leitor a conferir.

## 🔗 5. Gestão de Links Amazon

- **Tag Amazon Associates:** `[A DEFINIR]`
- **PROIBIDO:** Link bruto da Amazon, bit.ly, ou similar.
- **MANDATÓRIO:** Todo link de produto = `/go/[slug-produto]` (ex: `/go/prohall-select-one`).
- **Middleware:** `middleware.ts` faz redirect 302 + dispara evento `affiliate_click` no GA4 com `refId`.
- **Base de produtos:** `src/data/produtos-amazon.ts` com `{ slug, nome, marca, asin, preco, urlAmazon }`.
- **Disclosure:** Obrigatório acima do primeiro link de produto em toda página.
- **Múltiplas opções:** Sempre Amazon + pelo menos 1 alternativa (Beleza na Web, ML, loja oficial).
- **Convenção de refId:** `s[N]-[template]-[slug]-[posição]` (ex: `s1-resenha-prohall-topo`).

## 📊 6. Clusters de Keywords (Sementes)

> **Volumes são ESTIMATIVA.** Validar no Google Keyword Planner antes de priorizar.

### Padrões de Intenção
| Intenção | Padrão | Concorrência | Papel |
|---|---|---|---|
| Comercial cabeça | "melhor [categoria]" | **Alta** | Pilar (médio prazo) |
| Comercial produto | "[marca] vale a pena / resenha" | **Baixa–Média** | Money page (prioridade) |
| Comparativo | "[A] vs [B]" | **Baixa** | Money page (prioridade) |
| Segurança/dúvida | "[produto] faz mal / estraga" | **Baixa–Média** | Informacional → linka money |
| Uso/técnica | "como aplicar / temperatura / lavar" | **Baixa** | Informacional → linka money |
| Recorte de público | "[categoria] para cabelo [tipo]" | **Baixa** | Money page de nicho |

### Marcas de Progressiva com Demanda (Ordem de Prioridade de Escrita)
1. **Borabella Não Chore Mais** — Money-page #1 (pirogalol permitido, Amazon forte)
2. **Forever Liss 3D/Zero** — Money-page #2 (marca grande, desambiguação formol×sem formol)
3. **Prohall Select One** — Money-page #3 com ressalva (alta demanda, polêmica Anvisa)
4. **Fashion Gold (Ybera)** — Resenha de autoridade (sulfito permitido, sem Amazon)
5. **Mutari Progress** — Money-page secundária (Grau 2 registrado, glioxílico)
6. **Salvatore Blue Gold** — Resenha de autoridade (tanino genuíno)
7. **Adlux, Let Me Be, Onixx, Paiolla** — Completar conforme dados
8. **Japinha, Maria Escandalosa, Tyrrel** — Investigativos/alertas (NÃO money-pages)

> **Bio Lizz NÃO é marca separada** — é a Bioliss da Onixx. Mesclar no dossiê da Onixx.

### Marcas de Chapinha com Demanda
Taiff Style Pro Titanium · Lizze Extreme · MQ Pro 480 / Max 480 Slim · Taiff Vulcan · Babyliss Nano Titanium · Ga.Ma G-Evo · Taiff Titanium 450 · Salon Line Progress · Gama Italy (cerâmica)

### Recortes de Alto Potencial
- **Por tipo:** cacheado, crespo, ondulado, fino, grosso, poroso
- **Por situação:** loiro/descolorido, com henê, com progressiva anterior, cabelo curto
- **Por temperatura:** qual temperatura para cabelo fino / descolorido / grosso

### Regra de Priorização
**Demanda razoável + SERP fraco = escreva primeiro.**
Demanda alta + SERP forte = deixe para Fase 4.

## 🗓️ 7. Roadmap

| Fase | Timing | O que |
|---|---|---|
| **1 — Fundação** | Semanas 1–2 | URLs consistentes, canonical correto, sitemap, Sobre/Metodologia/Contato, aviso de afiliado, schema base |
| **2 — Cauda longa** | Semanas 2–8 | Satélites de baixa concorrência: resenhas (A), dúvidas (D), recortes (C). Ranqueia rápido e já monetiza |
| **3 — Pilares + comparativos** | Semanas 6–12 | 4 pilares + comparativos (B), com cauda já linkando para eles |
| **4 — Escalar** | Mês 3+ | Expandir templates, atualizar conteúdo, disputar termos-cabeça |

## 💻 8. Stack Técnico
- **Framework:** Next.js 16 (App Router). `params` é Promise — sempre `await`.
- **Estilo:** Tailwind CSS v4.
- **Conteúdo:** MDX para pilares + TypeScript data files (`src/data/`) para programáticos.
- **Deploy:** Vercel.
- **Analytics:** GA4 + GSC + Vercel Analytics.

### Data Models (`src/data/`)
- `progressivas.ts` — `{ slug, nome, marca, ativos, indicacao, tiposCabelo[], prosReais[], contrasReais[] }`
- `chapinhas.ts` — `{ slug, nome, marca, temperatura, material, bivolt, prosReais[], contrasReais[] }`
- `chuveiro.ts` — idem progressivas
- `tiposCabelo.ts` — `{ slug, nome, descricao, cuidadosEspecificos }`
- `comparativos.ts` — `{ slugA, slugB, silo, quandoA, quandoB }`
- `produtos-amazon.ts` — `{ slug, nome, marca, asin, preco, urlAmazon, urlAlternativa }`

## 🤖 9. Interação do Agente
- **NUNCA** finja first-hand testing. **NUNCA** invente dados.
- Se o Tiago trouxer dados de Deep Dive, salve em `pesquisas/` (por subpasta: `seo/`, `produtos/`, `keywords/`) antes de processar.
- Adote postura de **pesquisador sênior de beleza + desenvolvedor Sênior**.
- Para claims YMYL: atribua ao fabricante + recomende profissional.
- Se a keyword não tiver volume validado, marque como "ESTIMATIVA".
- **Antes de escrever qualquer artigo**, consulte o cheat sheet em `redator-cabelo-sem-formol/references/fichas-produto.md`.
- **Antes de recomendar qualquer produto**, verifique o grupo regulatório na Seção 4.5 acima.
- Produtos do Grupo "Investigativo/Alerta" **NUNCA** recebem CTA de compra — redirecionar para money-page.

## 📚 10. Referências do Projeto

| Arquivo | O que contém |
|---|---|
| `pesquisas/produtos/dossie-*.md` | Dossiês individuais de cada marca (13 produtos) |
| `pesquisas/seo/*.md` | Deep dives de mercado e YMYL (6 arquivos) |
| `pesquisas/keywords/*.xlsx` | Lista mestra de 81 keywords + playbook de uso por produto |
| `content-pipeline/references/inteligencia-mercado.md` | Inteligência de mercado consolidada |
| `redator-cabelo-sem-formol/references/fichas-produto.md` | Cheat sheet do redator (resumo por produto) |

