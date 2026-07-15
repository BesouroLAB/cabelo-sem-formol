---
name: content-pipeline
description: Pipeline de produção de conteúdo do Cabelo Sem Formol. Define o fluxo de curadoria (pesquisa de avaliações reais, INCI, YouTube, ANVISA) até publicação. Regras estritas contra alucinação de IA (números, registros, pH). Análise de gap da concorrência e disponibilidade na Amazon antes da escrita.
---

# Workflow e Pipeline de Produção (Cabelo Sem Formol)

Esta skill define a linha de montagem de conteúdo. NUNCA pule etapas. Somos curadores, não inventores.

## 🏭 O Pipeline de 6 Etapas

### Fase 1: Validação Comercial (Go/No-Go)
1. **Checagem de Afiliado:** O produto está na Amazon BR? Se não estiver, só escrevemos se houver outra plataforma de afiliado confiável (ex: Mercado Livre). Não escrevemos resenha-satélite de produto que não monetiza.

### Fase 2: Análise de Gap da Concorrência (SERP)
Antes de escrever, olhar quem já ranqueia no Top 10 para a keyword:
- O que eles cobrem? O que eles NÃO cobrem?
- Qual formato o Google premia (tabela, listicle, FAQ)?
- **O Ângulo:** Qual é o "buraco" que deixaram? Nossa página precisa ter um diferencial claro.

### Fase 3: Research e Curadoria Profunda (Deep Dives)
A IA de pesquisa (Perplexity/ChatGPT) é usada para gerar PISTAS, não fatos absolutos.
1. **Avaliações (O Ouro está nas Negativas):** Mapear notas 1 a 3 estrelas para achar os contras reais. Extrair especificamente: durabilidade relatada (em semanas/meses) e dificuldade de aplicação (casa vs salão).
2. **Ficha Técnica (INCI):** Buscar a lista INCI (ingredientes) completa do rótulo, não apenas o marketing. É na INCI que verificamos se realmente não há derivados de formol.
3. **Segurança (ANVISA & YMYL):** NUNCA inventar número de registro. Se não validar manualmente no site da Anvisa, use "regularizado na Anvisa" ou não cite. Para YMYL (gestantes, saúde), cite órgãos oficiais (SBD, Anvisa) e RECOMENDE consultar profissional.
4. **Vídeos YouTube:** Assistir vídeos de aplicação. Anotar textura, fumaça, ardência.

### Fase 4: Estruturação dos Dados
Converter dados brutos em arrays tipados nos data files (`src/data/`):
- Conectar característica da fórmula à necessidade do fio (ex: "tem ativo X, por isso é melhor para loiras pois não amarela").
- Tratar saídas de IA como *estimativas* até verificação manual. "Com base nas avaliações públicas" é melhor que inventar "Lemos 347 avaliações".

### Fase 5: Geração do Conteúdo (Fábricas A e B)
- **Fábrica A (Pilares MDX):** Textos profundos, +2000 palavras. Escritos seção por seção.
- **Fábrica B (Templates Programáticos):** Resenhas, comparativos. Gerados pelos templates lendo `src/data/`.

### Fase 6: QA + Deploy
- Rodar `next build`, testar schemas, verificar metadatas.

## ⚠️ ALERTA CONTRA ALUCINAÇÃO DE IA
As IAs de geração confabulam específicos: números de avaliações, registros Anvisa, citações médicas, níveis de pH.
- **REGRA DE OURO:** Se você (agente) não tem o dado exato extraído de uma fonte confiável verificada na sessão, NÃO INVENTE. Use termos qualitativos ou omita a métrica.

## 🔍 Prompt de Deep Dive Atualizado

```
Aja como um pesquisador investigativo de cosméticos capilares.
Vou criar conteúdo sobre: [PRODUTO / TEMA].

1. AVALIAÇÕES: Busque em Amazon BR e ML. Foque nas avaliações de 1 a 3 estrelas. Quais as maiores reclamações? Qual a durabilidade média relatada? É fácil aplicar em casa?
2. INCI: Qual a lista de ingredientes (INCI) real do rótulo? Há conservantes que liberam formol?
3. ANVISA/SEGURANÇA: Existe alerta da Anvisa ou SBD sobre o ativo alisante deste produto? O cenário regulatório atual permite seu uso livre?
4. SERP GAP: Pesquise a keyword no Google BR. O que o Top 10 está ignorando que nós podemos responder?
5. YMYL: Se houver implicações de saúde, cite fontes oficiais (órgãos reguladores, não blogs).

IMPORTANTE: Não invente números de registro, pH ou contagem de avaliações. Se não achar, diga que não achou.
```
