---
name: human-team
description: >-
  Opensquad — framework de orquestração multi-agente. Cria squads de agentes
  de IA que trabalham juntos para produzir conteúdo, investigar perfis,
  executar campanhas e gerar dashboards visuais. Um Arquiteto projeta os
  squads, um Sherlock investiga referências (Instagram, YouTube, Twitter/X,
  LinkedIn), e um Pipeline Runner executa tudo automaticamente com checkpoints
  de aprovação. Use SEMPRE que o usuário pedir "opensquad", "criar squad",
  "montar equipe de agentes", "squad de conteúdo", "orquestrar agentes",
  "multi-agent", "pipeline de criação", "escritório virtual", ou qualquer
  pedido de criação/execução de squads de agentes para produção de conteúdo.
---
> ?? **DIRETRIZ GLOBAL (CABELO SEM FORMOL):** 
> Todas as instru��es abaixo devem ser executadas e comunicadas EXCLUSIVAMENTE em **Portugu�s do Brasil (pt-BR)**.
> O contexto absoluto do seu trabalho � o projeto **"Cabelo Sem Formol"** � um blog de SEO focado em jornalismo investigativo, qu�mica capilar (progressivas sem formol) e monetiza��o via Amazon.
> Aja de forma alinhada ao E-E-A-T: nunca alucine dados m�dicos ou qu�micos, consulte sempre a Anvisa.

# Opensquad — Framework de Orquestração Multi-Agente

Crie squads de agentes de IA que trabalham juntos — direto do seu IDE.

---

## Como Usar

```
/opensquad
```

Isso abre o menu principal. De lá você pode criar squads, executá-los e mais.

Você também pode ser direto — descreva o que quer em linguagem natural:

```
/opensquad crie um squad para escrever posts no LinkedIn sobre IA
/opensquad execute o squad meu-squad
```

---

## Criar um Squad

```
/opensquad crie um squad para [o que você precisa]
```

O **Arquiteto** faz perguntas, projeta o squad e configura tudo automaticamente.

## Executar um Squad

```
/opensquad execute o squad <nome-do-squad>
```

O squad executa automaticamente, pausando apenas nos checkpoints de decisão.

---

## Escritório Virtual

Interface visual 2D que mostra seus agentes trabalhando em tempo real.

**Passo 1** — Gerar o dashboard:
```
/opensquad dashboard
```

**Passo 2** — Servir localmente:
```bash
npx serve squads/<nome-do-squad>/dashboard
```

**Passo 3** — Abrir `http://localhost:3000`

---

## Arquitetura

### Comandos disponíveis

- `/opensquad` — Menu principal
- `/opensquad create` — Criar squad
- `/opensquad run <name>` — Executar squad
- `/opensquad edit` — Editar squad existente
- `/opensquad dashboard` — Gerar dashboard visual
- `/opensquad help` — Ver todos os comandos

### Estrutura de diretórios

```
_opensquad/               ← Core (não modificar manualmente)
  _memory/                ← Memória persistente (contexto da empresa, preferências)
  _browser_profile/       ← Sessões de browser persistentes (cookies, localStorage)

squads/                   ← Squads criados pelo usuário
  {name}/
    _investigations/      ← Investigações do Sherlock (análises de perfis)
    output/               ← Conteúdo e arquivos gerados
    dashboard/            ← Dashboard visual (se gerado)

skills/                   ← Skills disponíveis para os agentes
```

### Como funciona

1. O `/opensquad` é o ponto de entrada para todas as interações
2. O **Arquiteto** cria e modifica squads
3. Durante criação, o **Sherlock** pode analisar perfis de referência (Instagram, YouTube, Twitter/X, LinkedIn) para extrair padrões reais de conteúdo
4. O **Pipeline Runner** executa squads automaticamente
5. Agentes comunicam via persona switching (inline) ou subagentes (background)
6. **Checkpoints** pausam execução para input/aprovação do usuário

---

## Regras

- Sempre use `/opensquad` para interagir com o sistema
- Não edite manualmente files em `_opensquad/core/`
- Squad YAML pode ser editado manualmente, mas prefira `/opensquad edit`
- Contexto da empresa em `_opensquad/_memory/company.md` é carregado em todo squad run
- Ao gerar arquivos, reporte a pasta final como link clicável e liste todos os arquivos gerados (exceto `.md`)

## Sessões de Browser

Opensquad usa perfil de browser persistente para manter login em plataformas sociais:
- Sessões em `_opensquad/_browser_profile/` (gitignored, privadas)
- Primeiro acesso a uma plataforma: login manual uma vez
- Execuções subsequentes reutilizam a sessão salva

---

## Skills bundled

O sistema vem com skills utilitárias para os agentes:

- **apify** — scraping e automação de dados
- **blotato** — geração de conteúdo
- **canva** — integração com Canva
- **image-ai-generator** — geração de imagens via IA
- **image-creator** — criação de imagens
- **image-fetcher** — busca e download de imagens
- **instagram-publisher** — publicação no Instagram
- **opensquad-agent-creator** — criação de novos agentes
- **opensquad-skill-creator** — criação de novas skills
- **resend** — envio de emails
- **template-designer** — design de templates

---

## Scripts utilitários

- `scripts/create-campaign-folder.js` — cria estrutura de pasta de campanha
- `scripts/render-project-document.js` — renderiza documento do projeto

