# 🎯 ESTRATÉGIA SEO — FASE 2

> **O que este documento faz:** consolida a inteligência dos 16 arquivos da Fase 0 e 1 em uma estratégia SEO operável — reconciliando a arquitetura real do site (4 silos) com o método do playbook, decidindo o destino do backlog de 9 artigos novos, resolvendo as decisões pendentes que se acumularam nos dossiês, e priorizando o roadmap.
> **Data:** 18/07/2026 · **Substitui:** a arquitetura de 5 silos proposta no playbook (que era ideal-teórica; ficamos com a real).
> **Companheiros:** `matriz-linkagem-interna.md` (a matriz das linkagens) e `mapa-linkagem.mermaid` (visualização).

---

## 1. A DECISÃO DE ARQUITETURA (o que muda, o que fica)

**FICA:** a estrutura de 4 silos do site (Progressivas / Chapinhas / Cuidados Pós-Química / Progressiva de Chuveiro). É funcional, tem 50 artigos publicados, tem SEO técnico impecável (sitemap dinâmico, MDX, frontmatter individual). Não vamos mexer no que funciona.

**NÃO ENTRAM:** os silos extras propostos no playbook (/melhores/, /guias/, /como-fazer/) — a intenção editorial deles é absorvida DENTRO dos silos existentes. Simplificação vence pureza teórica.

**MUDA (o modelo mental — não o URL):** cada silo passa a ter uma **intenção editorial primária declarada** e absorve tipos de conteúdo do playbook original:

| Silo | Intenção primária | Absorve do playbook | Papel comercial |
|---|---|---|---|
| **Progressivas (100–130)** | Decisão de compra + educação técnica | /melhores/ · /reviews/ · /guias/ (personas) · ToFu regulatório | Motor de comissão principal |
| **Chapinhas (200–210)** | Hardware, ticket alto | /reviews/ (hardware) · comparativos | Segunda maior comissão |
| **Cuidados Pós-Química (300–304)** | Retenção + recompra recorrente | Home care + cronograma | LTV / recorrência |
| **Progressiva de Chuveiro (400–406)** | Entrada de funil, expectativa honesta | Alinhamento temporário | Volume + primeiro clique |

**A camada transversal que faltava** (o equivalente aos "guias" do playbook e ao ToFu regulatório) fica resolvida por **duas coisas complementares**:

- **Tags/categorias transversais de PERSONA** (implementação técnica de tag, sem virar silo) — ex.: `tag:descolorida`, `tag:crespo`, `tag:grisalho`, `tag:masculino`. Um artigo pode viver em `/progressivas/` E ter a tag da persona, aparecendo em página-lista.
- **Um HUB EDITORIAL regulatório** — o artigo 110 promovido a pilar de autoridade (ver §3), que serve de âncora YMYL para o site inteiro.

**Resultado:** 4 silos + N tags de persona + 1 hub regulatório. Simples, escalável, respeita o que já existe.

---

## 2. AS 5 TESES TRANSVERSAIS DO SITE (o DNA editorial que atravessa tudo)

Estas viram bordões repetidos (com moderação) e critérios de decisão em qualquer artigo:

1. **"Verifique o registro na Anvisa antes de comprar."** — o tutorial do painel (novo pilar B) é o link mais repetido do site.
2. **"O teste de mecha decide."** — 3 a 4 dias antes, e é diagnóstico (P3, P6, P13) tanto quanto preview (P1).
3. **"Sem formol não significa regularizada"** — a diferença glioxílico livre × derivados × ativos permitidos. Herdada da auditoria.
4. **"Manutenção > aplicação."** — a durabilidade está nas mãos dela. O pilar do Silo 3.
5. **"Menos é mais para o fio frágil."** — persona-específica (P4, P13, P3) mas cabe em qualquer conteúdo que tangencie fragilidade.

---

## 3. O DESTINO DO BACKLOG DE 9 ARTIGOS NOVOS

Cada artigo do backlog do mapa de personas ganha silo, prioridade, persona-dona e tipo:

| # | Título proposto | Persona-dona | Silo (URL) | Prioridade | Tipo |
|---|---|---|---|---|---|
| **B1** | Como consultar se sua progressiva é registrada na Anvisa (passo a passo) | P12 Cética | `/progressivas/` (pilar B — âncora do site) | 🔴 Ondas 1 | Tutorial + hub |
| **B2** | Teste de mecha passo a passo: o que ninguém te contou | P9 DIY | `/progressivas/` | 🔴 Onda 1 | Tutorial (hub de segurança linkado por todos os reviews) |
| **B3** | Progressiva infantil: por que não existe (e o que a Anvisa diz) | P8 Mãe de criança | `/progressivas/` | 🔴 Onda 1 | Proteção YMYL (zero afiliado — ver §5) |
| **B4** | Como aplicar progressiva sem formol em casa (guia completo) | P9 DIY | `/progressivas/` | 🟡 Onda 2 | HowTo schema — carrinho natural |
| **B5** | Descoloração + progressiva: o intervalo seguro | P3 Descolorida | `/progressivas/` | 🟡 Onda 2 | Guia YMYL |
| **B6** | Alinhar × alisar: o espectro completo para cacheadas | P1 Cacheada | `/progressivas/` (pontecom Silo 4) | 🟡 Onda 2 | Guia de decisão |
| **B7** | Progressiva em cabelo grisalho: o que muda | P13 Grisalha | `/progressivas/` | 🟢 Onda 3 | Guia de persona |
| **B8** | Progressiva masculina sem formol: guia direto | P14 Masculino | `/progressivas/` | 🟢 Onda 3 | Guia de persona |
| **B9** | Protetor térmico: precisa mesmo? Como escolher | P11 + P5 + P4 | `/chapinhas/` | 🟢 Onda 3 | Guia + review |

**Todos os B1–B8 no silo `/progressivas/`** porque a intenção primária deles é decisão/educação sobre alisamento — não criam silo novo. B9 vai para `/chapinhas/` porque protetor térmico é acessório de hardware térmico. Reformas conceituais discutidas com o dono do blog: cabem OU dentro dos slugs existentes (renumerando/rebatizando) OU como slugs novos dentro do mesmo silo — decisão do dev, aqui só amarramos a estratégia.

---

## 4. AS 3 ONDAS DE PUBLICAÇÃO (a ordem)

**Onda 1 (imediata — as 3 fundações):** B1 (painel Anvisa), B2 (teste de mecha), B3 (infantil).
Por quê nesta ordem: B1 arma todos os reviews (o link "verifique o registro" que aparece em cada peça); B2 é linkado por todos os HowTos e por artigos de risco (P3, P6, P13); B3 protege o site (E-E-A-T + segurança infantil).

**Onda 2 (Q seguinte — as amplificações):** B4 (HowTo casa), B5 (descoloração+intervalo), B6 (alinhar×alisar).
Depois da Onda 1 porque cada um destes DEPENDE das fundações: B4 depende de B1 e B2; B5 depende de B2; B6 depende de B1.

**Onda 3 (após consolidação):** B7 (grisalha), B8 (masculino), B9 (protetor térmico). Personas de menor volume mas altíssimo LTV — fazem sentido depois que o site já tem fluxo do topo consolidado.

**Antes de qualquer onda:** o **reprocessamento dos 50 artigos existentes** (§6) — é o que dá base sólida para as novas ondas linkarem em conteúdo já auditado.

---

## 5. AS DECISÕES PENDENTES — RESOLVIDAS

Ao longo dos 14 dossiês acumularam-se decisões marcadas para você. Aqui a proposta consolidada (você marca ok ou ajusta):

### D1 · Afiliados no artigo 127 (Gestante)
**Proposta:** ZERO afiliados de alisamento. Recomendo também **zero afiliados de qualquer tipo** — o artigo é 100% de proteção. Se um dia quiser monetizar a categoria "cuidado seguro na gravidez" (shampoo/creme suave), fazer em artigo separado com tag P7, nunca no 127.

### D2 · Afiliados no artigo novo B3 (Progressiva infantil)
**Proposta:** ZERO afiliados de alisamento (é o objeto da recusa). Aceitável incluir afiliados de **produtos infantis de cuidado suave** (creme de pentear kids, pente de dentes largos) desde que:
(a) nenhum tenha promessa de alisar;
(b) sejam integrados à seção "o que fazer no lugar" com moderação;
(c) o disclosure fique especialmente claro pela sensibilidade do tema.
Se preferir manter o artigo 100% limpo, o valor de autoridade é ainda maior — decisão sua.

### D3 · Categorias novas de produto descobertas nos dossiês
Duas categorias saíram dos dossiês e não estavam previstas:
- **Corredor guanidina/hidróxidos** (P2 Crespa + P10 Profissional) — dependem de mini-auditoria (lote 2 da auditoria de marcas).
- **Progressivas matizadoras para grisalhos** (P13) — categoria nova completa.
**Proposta:** ambas ficam dentro de `/progressivas/` como reviews individuais e são incorporadas na tabela do 101 (pilar A — ver §6). Adiar para depois da Onda 1, quando a mini-auditoria dessas categorias for feita.

### D4 · Tags/categorias transversais de persona
**Proposta:** implementar como tag no frontmatter MDX (ex.: `personas: [P3, P11]`), com página-lista automática. Não vira silo, não muda URL. Repassar ao dev na próxima janela.

### D5 · O "monitor de status Anvisa" (ideia P10/P12)
**Proposta:** vira SEÇÃO viva DENTRO do artigo B1 (tutorial do painel), atualizada trimestralmente com a tabela da auditoria + a data. Não vira artigo separado (evita ser confundido com o pilar). O changelog dessa tabela é a assinatura de freshness que o Google recompensa em YMYL.

### D6 · Lead magnets sugeridos ao longo dos dossiês
Três emergiram:
- **Checklist da Cética** (8 perguntas — P12) → serve o site inteiro.
- **Ficha do histórico capilar** (P2 + P10) → serve para quem faz química complexa.
- **Tabela de pós-progressiva por marca** (P11) → serve para recompra.
**Proposta:** priorizar a Checklist da Cética como PRIMEIRO lead magnet (é a que mais amplia audiência). As outras duas ficam para depois da Onda 2.

### D7 · Silo 4 — reposicionamento honesto
**Já decidido nos dossiês, formalizar aqui:** todos os 6 artigos do Silo 4 (401–406) reescritos com a promessa correta ("alinha, não alisa"). Isso PROTEGE juridicamente o site (CDC 37) e CONVERTE MELHOR para a persona-dona (P5 Lisa com Frizz). Deve entrar no reprocessamento dos 50 (§6).

### D8 · Artigo 110 promovido a pilar
**Decisão herdada da auditoria e P12:** o 110 ("Tem glioxílico?") deixa de ser cauda longa e vira PILAR de autoridade, ancorado pela tabela da auditoria. Fica no `/progressivas/` (não vira silo próprio) mas ganha estrutura de pilar: URL destacada no menu principal, linkado por todos os reviews.

### D9 · Categoria Fashion Gold / Prohall (casos vermelhos e amarelos)
**Já decidido na auditoria, formalizar:** Japinha (art. 125) vira artigo-alerta (zero afiliado). Prohall (arts. 103, 114, 115): pausar recomendação até confirmação no painel; se confirmar irregular, mesma solução — vira estudo de caso. Fashion Gold (102): pausar até resolução da contradição documental.

---

## 6. REPROCESSAMENTO DOS 50 ARTIGOS EXISTENTES (a base pré-Onda 1)

Cada artigo existente ganha um dos 4 tratamentos abaixo, feito ANTES de publicar B1–B9:

**Tratamento AUDITAR & REVISAR (o padrão — a maioria):** revisar contra o checklist editorial (§7), aplicar veredito por persona no fim (novo padrão dos reviews), incluir linkagem obrigatória da matriz e componente `AlertaAnvisa` onde couber.

**Tratamento PROMOVER (só um):** art. 110 → pilar. Ampliar em 3–4x o tamanho, incorporar a tabela da auditoria, virar hub da tese "sem formol ≠ regularizada".

**Tratamento REPOSICIONAR (todo o Silo 4):** 401–406 reescritos com a promessa correta (alinhamento temporário, não alisamento químico). Ver dossiê P5.

**Tratamento CONVERTER EM ALERTA (2 artigos):** 125 Japinha (glioxílico livre no INCI); 103/114/115 Prohall até confirmação no painel. Remover link de afiliado, adicionar `AlertaAnvisa` proeminente, converter para tom informativo/de proteção.

Prioridade dentro do reprocessamento: (1) os 4 reviews com contradição/risco (110, 125, 103, 102); (2) o pilar 101; (3) o Silo 4 inteiro; (4) o resto dos reviews; (5) Silo 3; (6) restante.

---

## 7. CHECKLIST EDITORIAL UNIFICADO (aplicável a todo artigo — velho ou novo)

Antes de publicar/republicar QUALQUER artigo:

- [ ] Todo número, norma ou preço é verificado ao vivo — ou marcado `[CONFIRMAR]`?
- [ ] Nenhum preço fixo em texto (regra Amazon Associados)?
- [ ] Disclosure Amazon: global do site + próximo de cada CTA?
- [ ] Links Amazon: diretos, com tag, sem redirect `/vai/` e sem encurtador de terceiros?
- [ ] Se recomenda produto: registro Anvisa verificado e citado com data?
- [ ] Se recomenda produto: ≥2 limitações reais declaradas?
- [ ] Se aborda risco (química, calor, gestante, criança, descolorido, henê): componente `AlertaAnvisa` presente + encaminhamento a profissional/médico?
- [ ] Veredito por persona no fim (reviews) — ou tag de persona (guias)?
- [ ] Answer-first no primeiro parágrafo de cada H2?
- [ ] FAQ em formato snippet no fim (4–6 perguntas)?
- [ ] Fontes com data no rodapé (verificado em [data])?
- [ ] Links internos obrigatórios da matriz cumpridos (ver `matriz-linkagem-interna.md`)?
- [ ] Changelog datado se é review (para reauditorias trimestrais)?
- [ ] Se cita marca da auditoria: usa o status vigente naquele momento (🟢/🟡/🔴/⚪)?
- [ ] Se é conteúdo de proteção (P7, P8): passou pela revisão de tom (nada culpabiliza a leitora)?

---

## 8. INDICADORES QUE VÃO GUIAR O LOOP DA FASE 6

Não é responsabilidade desta fase implementar, mas registrar aqui o que vamos querer medir depois — para a skill de otimização não começar do zero:

- Cliques no CTA "Ver na Amazon" **por artigo** (tracking ID distinto por artigo, decisão da Fase 0).
- Impressões e CTR por artigo no GSC.
- Cliques nos links internos obrigatórios (heatmap ou evento).
- Buscas internas do site (o que ela não encontra dá o próximo backlog).
- Cliques em cada persona/tag transversal (indica se as tags valem a pena).
- Cliques no B1 (tutorial do painel) por artigo de origem — mede se a tese "verifique antes" está funcionando.

Piso de significância: nada com menos de 100 impressões/mês entra em decisão editorial.

---

## 9. RESUMO EXECUTIVO

Em uma tela: o site fica com **os 4 silos que já existem**, ganha **tags transversais de persona**, promove **um pilar regulatório (110)** ao centro, adiciona **9 artigos novos em 3 ondas**, e **reprocessa os 50 existentes** contra um checklist unificado antes de qualquer publicação nova. Tudo ancorado em **5 teses transversais** repetidas com moderação e num **DNA anti-hype** que já é o diferencial competitivo.
