# Fluxos do n8n

Exporte cada fluxo pelo menu **…** → **Download** e salve aqui com o mesmo nome do workflow no n8n.

| Arquivo | O que faz | Gatilho | Se falhar |
|---|---|---|---|
| `Leads - gravar.json` | Recebe o lead do formulário, valida nome e e-mail e grava uma linha na planilha. Responde 200 (ok) ou 400 (dados inválidos). | Webhook POST `leads` | Conferir se o workflow está publicado e se a credencial do Google está conectada. |
| `Leads - listar.json` | Lê todas as linhas da planilha e devolve em JSON. | Webhook GET `leads-lista`, com Header Auth (`x-api-token`) | 403: token diferente do `N8N_TOKEN` do site. 404: workflow não publicado. Planilha vazia: o fluxo pode não chegar à resposta. |

## Depois de importar um fluxo

1. Crie as credenciais no seu n8n (elas não vão no JSON): **Google Sheets OAuth2 API** e, para a listagem, **Header Auth** com o nome `x-api-token`.
2. Abra o nó do Google Sheets e selecione de novo a planilha e a aba.
3. Publique o workflow.

## Antes do commit

Abra o arquivo e confira que não há token, senha ou URL de webhook escritos nos nós.
As credenciais ficam só no n8n.