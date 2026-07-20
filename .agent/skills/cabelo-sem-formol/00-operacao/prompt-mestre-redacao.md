# PROMPT-MESTRE DE REDAÇÃO — artigos (não-review)

> Para reviews e comparativos, use a skill **reviews-comparativos**. Este prompt cobre: pilares, guias de persona, tutoriais/HowTo, dúvidas técnicas, artigos de proteção.

## Variáveis de entrada (preencher antes de escrever)
- `{TIPO}`: pilar | guia_persona | tutorial | duvida_tecnica | protecao
- `{PERSONA}`: P1…P14 (a persona-dona)
- `{SILO}`: progressivas | chapinhas | pos-quimica | chuveiro
- `{TIER}`: A | B | C
- `{TITULO_ALVO}` e `{SLUG}`
- `{LINKS_INTERNOS}`: lista 🔴/🔵 da matriz para este artigo
- `{TRACKING_ID}`: ID de rastreamento Amazon deste artigo
- `{FONTES}`: dossiês e verificações ao vivo disponíveis

## Tabela de profundidade por tier

| Tier | Palavras-alvo | H2s | FAQ | Profundidade |
|---|---|---|---|---|
| **A** (pilar/persona quente) | 2000–3500 | 6–10 | 6 | Exaustivo; tabelas; todos os ângulos |
| **B** (padrão) | 1200–2000 | 4–6 | 4–5 | Completo mas focado |
| **C** (cauda longa) | 700–1200 | 3–4 | 3–4 | Enxuto; responde e sai |

## Estrutura obrigatória (answer-first em tudo)

1. **Abertura (sem H2):** responde a intenção de busca nas primeiras 2–3 frases. Sem enrolação, sem "neste artigo você vai aprender". Diga a resposta, depois desdobre.
2. **H2s:** cada um abre com 1–2 frases que respondem a pergunta implícita do H2 (formato snippet), depois desenvolve. Números SEMPRE com fonte nomeada e data.
3. **Componentes** (chamar via design-system): `AlertaAnvisa` onde há risco/norma; `ChecklistRotulo` em artigos de critério; `TabelaComparativa` quando compara; `CTAAmazon` só em pontos de decisão (nunca em artigo de proteção).
4. **Veredito/encaminhamento por persona** perto do fim.
5. **FAQ/AEO:** 4–6 perguntas People-Also-Ask, cada resposta em formato snippet (1 parágrafo curto, autossuficiente), com "(verificado em [data])" quando traz número/norma.
6. **Fontes** com data no rodapé.

## Frontmatter MDX de saída
```yaml
---
title: "{TITULO_ALVO}"
description: "meta description única, 150-160 char, com a resposta-chave"
slug: "{SLUG}"
silo: "{SILO}"
tier: "{TIER}"
intent: "informational | commercial | transactional"
personas: ["{PERSONA}"]
tracking_id: "{TRACKING_ID}"
updated: "AAAA-MM-DD"
verificado_em: "AAAA-MM-DD"
author: "{nome do autor E-E-A-T}"
---
```

## Voz e tom
- PT-BR, caloroso e direto. Prosa > listas (listas só quando a informação é genuinamente uma lista).
- Anti-hype: o inimigo estético é a página de "milagre capilar". Nunca imite o tom dela.
- Trate a leitora como adulta inteligente e confusa por CULPA DO MERCADO, não por incapacidade dela.
- Zero promessa de resultado. "Resultados variam." Honestidade sobre incerteza é força, não fraqueza.
- Para P14 (masculino): mais enxuto, direto, dados rápidos, sem contexto emocional.
- Para proteção (P7, P8): acolher sem culpar; encaminhar ao profissional; ZERO CTA de compra.

## Checklist antes de entregar (o mesmo do §7 da estratégia)
- [ ] Answer-first em cada H2? · [ ] Zero preço em texto? · [ ] Disclosure + CTAs corretos (ou ausentes se proteção)? · [ ] Links 🔴 da matriz presentes? · [ ] `AlertaAnvisa` onde há risco? · [ ] Registro citado com data (se recomenda)? · [ ] FAQ snippet? · [ ] Fontes datadas? · [ ] `[CONFIRMAR]` no não-verificado? · [ ] Tom revisado (proteção)?

## Exemplo de abertura answer-first (guia de persona P3)
> **Ruim (hype/enrolação):** "Você é loira e sonha com o liso perfeito? Então continue lendo porque neste artigo completo vamos revelar tudo!"
> **Bom (answer-first honesto):** "Fazer progressiva em cabelo descolorido é o procedimento de maior risco do nicho: a Anvisa orienta evitar alisamento logo após a descoloração, e um estudo da USP mediu fibra 4x mais porosa nessa combinação. Dá para fazer com segurança — mas depende do estado do fio, de um intervalo e de um teste de mecha. Veja como decidir."
