// Lista os leads gravados na planilha, consultando o Fluxo 2 do n8n.
// A lista tem dados pessoais (inclusive de menores), por isso a rota
// só funciona em desenvolvimento e fica desligada no site publicado.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return Response.json({ error: "Rota indisponível." }, { status: 404 });
  }

  const webhookUrl = process.env.N8N_LEADS_WEBHOOK_URL;
  const token = process.env.N8N_TOKEN;
  if (!webhookUrl || !token) {
    return Response.json(
      { error: "A listagem de leads ainda não está configurada." },
      { status: 503 },
    );
  }

  try {
    const resposta = await fetch(webhookUrl, {
      headers: { "x-api-token": token },
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!resposta.ok) {
      console.error("O webhook de listagem respondeu com erro:", resposta.status);
      return Response.json(
        { error: "Não foi possível listar os leads agora." },
        { status: 502 },
      );
    }

    const leads = await resposta.json();
    return Response.json(leads);
  } catch {
    console.error("Falha ao consultar o webhook de listagem.");
    return Response.json(
      { error: "Não foi possível listar os leads agora." },
      { status: 502 },
    );
  }
}