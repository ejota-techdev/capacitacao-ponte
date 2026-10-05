# capacitacao-ponte

Projeto do **Grupo B** na Capacitação TechDev 2026.2 (EJOTA).
Cliente fictício: **Ponte Idiomas**. Pacote: site institucional + agente de atendimento + automação.

## Links

| O quê | Onde |
| --- | --- |
| Wireframe | [Figma](https://www.figma.com/design/aH6Q6JPKpZFrO8XDRg8BRV/Wireframes-%E2%80%94-Capacita%C3%A7%C3%A3o-TechDev-2026.2) (página Ponte Idiomas) |
| Site publicado | _preencher na semana 1_ |
| Tarefas e prazos | Google Classroom da capacitação |

## Estrutura

```
site-estatico/   Semana 1: HTML, CSS e JS (home + página interna)
site/            Semana 2: projeto Next.js (criar com: npx create-next-app@latest site)
n8n/             Fluxos do n8n exportados em JSON (semanas 2 a 4)
docs/            Ata da REP, checklist de repasse, documentação dos fluxos, testes do agente
```

## Como trabalhar

1. Atualize a `main` (Fetch/Pull origin no GitHub Desktop).
2. Crie uma branch por tarefa: `feat/secao-servicos`, `fix/menu-celular`, `docs/ata-rep`.
3. Commits pequenos, com mensagem no presente: "Adiciona seção de serviços".
4. Abra um PR usando o modelo (ele aparece sozinho) e peça revisão a alguém do grupo.
5. Merge só depois da aprovação. Ninguém faz commit direto na `main`.

Segredos (URLs de webhook, tokens, chaves) ficam em `.env.local`, que já está no `.gitignore`.

## Entregas

| Semana | Entrega | Onde no repositório |
| --- | --- | --- |
| 1 | Site estático publicado, pelo menos 3 PRs revisados | `site-estatico/` |
| 2 | Site em Next.js com formulário e rotas `/api/lead` e `/api/leads` | `site/`, `n8n/`, `docs/checklist-repasse` |
| 3 | PR de manutenção no repositório do outro grupo; automação documentada | `n8n/`, `docs/fluxo-automacao.md` |
| 4 | Agente de atendimento e relatório de testes | `n8n/`, `docs/testes-agente.md` |
