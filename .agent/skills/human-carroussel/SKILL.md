---
name: human-carroussel
description: >-
  Sistema de geração de carrosséis Instagram em duas frentes: carrossel sob
  demanda a partir de tema ou conteúdo próprio, e geração diária automatizada
  a partir de notícias. O pipeline editorial faz pesquisa, triagem, headline,
  arquitetura narrativa, validação e render visual coerente. White-label —
  identidade visual e editorial vêm da configuração da marca. Use SEMPRE que
  o usuário pedir "carrossel", "carrossel de Instagram", "gerar carrossel",
  "criar carrossel sobre...", "news carrossel", ou qualquer pedido de
  criação de carrossel Instagram com pipeline editorial completo.
---
> ?? **DIRETRIZ GLOBAL (CABELO SEM FORMOL):** 
> Todas as instru��es abaixo devem ser executadas e comunicadas EXCLUSIVAMENTE em **Portugu�s do Brasil (pt-BR)**.
> O contexto absoluto do seu trabalho � o projeto **"Cabelo Sem Formol"** � um blog de SEO focado em jornalismo investigativo, qu�mica capilar (progressivas sem formol) e monetiza��o via Amazon.
> Aja de forma alinhada ao E-E-A-T: nunca alucine dados m�dicos ou qu�micos, consulte sempre a Anvisa.

# News-to-Carrossel — Sistema de Geração de Carrosséis Instagram

Sistema de geração de carrosséis Instagram em duas frentes: carrossel sob demanda a partir de tema ou conteúdo próprio, e geração diária automatizada a partir de notícias. O pipeline editorial faz pesquisa, triagem, headline, arquitetura narrativa, validação e render visual coerente.

**White-label.** Sistema base não está atrelado a nenhuma marca. Identidade visual e editorial vêm da configuração da marca (cor, handle, nicho, audiência, veículo editorial de referência). Trocar a marca = trocar a configuração + as referências visuais.

---

## Modos de operação

### Modo 1 — Carrossel sob demanda (por tema ou conteúdo próprio)

Quando a pessoa pede algo como:

```text
/carrossel quero um carrossel sobre bicicletas elétricas em São Paulo
```

O sistema não espera um briefing perfeito. Ele assume a pesquisa e a estratégia:

1. Interpreta o tema
2. Pesquisa contexto, dados recentes e sinais de comportamento
3. Escolhe um ângulo editorial específico
4. Cria headline e arquitetura narrativa de 9 slides
5. Gera legenda e direção visual
6. Renderiza quando a marca está configurada, ou entrega o plano completo para render

### Modo 2 — Geração automatizada a partir de notícias

Ciclo em duas etapas:

**Etapa 1 — News Scout (pesquisa):**
- Varre fontes de notícia via busca web
- Deduplica e escreve título/resumo/relevância/link
- Identifica dica visual para cada notícia

**Etapa 2 — Carousel Creator (geração):**
- Lê configuração da marca
- Escolhe notícia do feed
- Executa pipeline editorial completo
- Extrai foto da notícia (cascata de tentativas)
- Decodifica referências visuais com vision nativa
- Gera capa via modelo de imagem (Nano Banana 2 ou GPT Image 2)
- Gera slides 2-9 usando capa + refs visuais como referência (coerência slide-a-slide)
- Aplica logo via composição quando houver

---

## Configuração editorial

Toda vez que roda, o sistema lê estas configurações:

- **Brand Identity** — variáveis da marca (nome, handle, cor, nicho, audiência, voz)
- **Manual editorial** — 7 parâmetros, anti-AI-slop, tom editorial
- **Engine de headlines** — famílias de ganchos, banco de outliers, veredito interno
- **Arquitetura narrativa** — estrutura 18 campos / 9 slides
- **Design system** — princípios visuais universais
- **Referências de qualidade** — 2 carrosséis-âncora
- **Referências visuais** — imagens reais de inspiração (vision real)
- **Fontes de notícia** — tabela estruturada de fontes monitoradas

Quando o sistema sair com carrossel mediano, **edita a configuração, não o prompt**. Re-roda. Itera.

---

## Pipeline editorial (sob demanda)

### 1. Interpretação do tema

O sistema recebe um tema (frase curta, link, texto colado) e:
- Identifica o assunto central
- Pesquisa na web por contexto, dados recentes, ângulos alternativos
- Define **1 ângulo editorial específico** (não genérico)

### 2. Headline

Gera 3 opções de headline usando as famílias de gancho do engine:
- Gancho de curiosidade
- Gancho de dados/número
- Gancho de polêmica/opinião

Cada headline precisa funcionar como **primeira frase visível no feed** — o scroll-stopper.

### 3. Arquitetura narrativa (9 slides)

Estrutura fixa:

| Slide | Papel | Regra |
|---|---|---|
| 1 | **Capa** — headline + visual forte | Scroll-stopper. Não revela tudo |
| 2-3 | **Contexto** — por que isso importa | Dados, cenário, setup |
| 4-6 | **Desenvolvimento** — o recorte editorial | Insight, análise, exemplo |
| 7-8 | **Virada** — o que muda, o que surpreende | Tensão, contraste, revelação |
| 9 | **Fechamento** — CTA + identidade | Não "gostou? salva" — CTA coerente com o ângulo |

### 4. Direção visual

Para cada slide:
- Paleta (da marca + mood do tema)
- Tipografia (display na capa, body nos internos)
- Composição (hierarquia visual, respiro, safe zones)
- Imagem/ilustração quando necessário

### 5. Render

Geração via **Nano Banana 2** (`nano_banana_2`) ou **GPT Image 2** (`gpt_image_2`), via MCP ou sandbox da IDE:

- Capa gerada primeiro (é a âncora visual)
- Slides internos gerados usando capa como referência de coerência
- Formato: 1080×1350 (4:5)
- Logo aplicada nos slides 1 e 9 quando houver

### 6. Legenda + hashtags

- Legenda no tom da marca (capturado do manual editorial)
- Mix de hashtags pesquisadas: grande (alcance), média (tema), nicho (comunidade)

---

## Estrutura de arquivos

```
{brand-slug}/
├── config/                     # configuração da marca
│   ├── brand-identity.md
│   ├── manual-editorial.md
│   ├── headline-engine.md
│   ├── arquitetura-narrativa.md
│   ├── design-system.md
│   ├── referencias-qualidade.md
│   ├── referencias-visuais.md
│   └── fontes-noticias.md
├── state/{YYYY-MM-DD}/         # snapshot do dia (modo automático)
│   ├── news.json
│   ├── narrativa.json
│   ├── visual-plan.json
│   ├── slides/                 # slide-01.png … slide-09.png
│   └── .completed
└── output/                     # carrosséis finais
```

---

## Princípios

- **White-label.** A marca vem da configuração, não do sistema
- **Ângulo editorial, nunca genérico.** Cada carrossel tem um recorte específico, não "tudo sobre X"
- **Capa é âncora.** Os slides internos herdam a coerência visual da capa
- **Pesquise, não invente.** Dados, contexto e hashtags saem de busca real
- **9 slides, estrutura fixa.** A arquitetura narrativa é testada — siga-a
- **Sem re-render:** se o carrossel veio fraco, edite a configuração editorial, não re-dispare às cegas

