# Ponte Idiomas

Site institucional desenvolvido com Next.js App Router.

## Executar localmente

Na pasta `site/`:

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para validar a aplicação antes de publicar:

```bash
npm run lint
npm run build
```

## Páginas e estilos

- `/`: página inicial e formulário de contato.
- `/cursos`: catálogo, filtros, valores e perguntas frequentes.
- `app/layout.tsx`: metadados, cabeçalho e rodapé compartilhados.
- `components/`: navegação, formulário e catálogo interativo.
- `data/cursos.ts`: cursos, preços e perguntas frequentes.

Os estilos migrados da versão estática estão em `app/home.css` e
`app/cursos.css`. Eles ficam dentro de `site/` para que o Turbopack possa
compilá-los sem acessar arquivos fora da raiz do projeto.

## Envio de leads

O formulário envia os dados para `POST /api/lead`. Configure
`N8N_LEAD_WEBHOOK_URL` em `site/.env.local` com a URL do webhook de recebimento
do n8n. Sem essa configuração, a API responde `503` e o formulário informa que
o envio não está disponível. O endereço do webhook é usado somente no servidor.

Para desenvolvimento, a URL `webhook-test` do n8n só recebe requisições enquanto
o Webhook estiver em modo de teste, aguardando um evento. Para manter o fluxo
disponível, ative-o no n8n e use a Production URL (`/webhook/...`) na variável de
ambiente. Reinicie o Next.js após alterar `.env.local`.
