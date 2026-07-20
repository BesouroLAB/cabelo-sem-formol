# 📚 Pacote de Inteligência Editorial — Portal Cabelo Sem Formol

Material de referência (staging) do blog de afiliado Amazon no nicho de **alisamento capilar sem formol**. Reúne a skill orquestradora, a estratégia SEO, a base regulatória YMYL, os 14 dossiês de persona e os documentos operacionais vivos.

> **Ponto de entrada:** `SKILL.md`. Consulte-o ANTES de qualquer tarefa — ele roteia para o arquivo certo e guarda os 8 padrões inegociáveis.
> **Status:** referência/staging em `pesquisas/`. Ainda **não** é uma skill ativa em `.agent/skills/`.
> **Regra viva:** `00-operacao/inventario-e-pendencias.md` é atualizado a cada entrega.

---

## Estrutura

```
cabelo-sem-formol/
├── README.md                         ← este índice
├── SKILL.md                          ← orquestrador / ponto de entrada
├── 00-operacao/                      ← documentos vivos, usados a cada tarefa
│   ├── inventario-e-pendencias.md    ← status dos 50 artigos + pendências [CONFIRMAR] abertas
│   └── prompt-mestre-redacao.md      ← prompt-mestre de redação (artigos não-review)
├── 01-estrategia/                    ← estratégia e arquitetura de linkagem
│   ├── estrategia-seo-fase2.md       ← estratégia SEO Fase 2 (4 silos, ondas, decisões)
│   ├── matriz-linkagem-interna.md    ← matriz de links internos (🔴 obrigatório / 🔵 recomendado)
│   ├── mapa-linkagem.mermaid          ← visualização da malha de linkagem
│   └── mapa-personas-capilares.md    ← mapa das 14 personas × cobertura dos artigos
├── 02-regulatorio/                   ← base de conformidade YMYL
│   ├── dossie-regulatorio-mestre.md  ← Anvisa + Amazon Associados + CDC (briefing interno)
│   └── auditoria-anvisa-marcas.md    ← auditoria de status regulatório marca a marca
└── 03-personas/                      ← 14 dossiês de persona (uma por perfil)
    ├── dossie-p1-cacheada.md         ├── dossie-p8-mae-crianca.md
    ├── dossie-p2-crespa.md           ├── dossie-p9-diy.md
    ├── dossie-p3-descolorida.md      ├── dossie-p10-profissional.md
    ├── dossie-p4-fio-fino.md         ├── dossie-p11-guardia.md
    ├── dossie-p5-lisa-frizz.md       ├── dossie-p12-cetica.md
    ├── dossie-p6-henezada.md         ├── dossie-p13-grisalha.md
    ├── dossie-p7-gestante.md         └── dossie-p14-masculino.md
```

---

## Ordem de leitura recomendada

Para quem chega no pacote pela primeira vez:

1. **`SKILL.md`** — a visão geral, os padrões inegociáveis e a tabela de roteamento.
2. **`01-estrategia/estrategia-seo-fase2.md`** — a arquitetura de 4 silos, as 3 ondas de publicação e as decisões consolidadas.
3. **`02-regulatorio/dossie-regulatorio-mestre.md`** — as regras Anvisa/Amazon/CDC que viram o "checklist anti-picareta" do nicho.
4. **`01-estrategia/mapa-personas-capilares.md`** — quem são as 14 personas e onde estão as lacunas de conteúdo.
5. **`03-personas/dossie-pN-*.md`** — o dossiê da persona-dona, antes de escrever para ela.
6. **`00-operacao/`** — o `inventario-e-pendencias.md` (o que fazer a seguir) e o `prompt-mestre-redacao.md` (como escrever).

## Como o SKILL.md roteia (resumo)

| A tarefa é… | Vá para |
|---|---|
| Escrever guia de persona, tutorial, dúvida técnica, pilar | `00-operacao/prompt-mestre-redacao.md` |
| Decidir linkagem interna | `01-estrategia/matriz-linkagem-interna.md` |
| Verificar norma antes de afirmar | `02-regulatorio/dossie-regulatorio-mestre.md` (+ verificação ao vivo) |
| Saber status de uma marca | `02-regulatorio/auditoria-anvisa-marcas.md` (+ reverificar no painel) |
| Entender uma persona | `03-personas/dossie-p{N}-*.md` |
| Saber o status/pendências do conteúdo | `00-operacao/inventario-e-pendencias.md` |

---

## Próximos passos possíveis (fora do escopo desta organização)

- Promover o pacote a **skill ativa** em `.agent/skills/cabelo-sem-formol/`.
- Produzir o **backlog de 9 artigos novos** (B1–B9) — ver `00-operacao/inventario-e-pendencias.md` e a §3 da estratégia.
- Resolver as pendências **`[CONFIRMAR]`** que exigem painéis logados (Anvisa/Amazon).
