type LeadPayload = {
  nome: string;
  whatsapp: string;
  email: string;
  curso: string;
  idade: string;
};

function isLeadPayload(value: unknown): value is LeadPayload {
  if (!value || typeof value !== "object") return false;

  return (
    "nome" in value &&
    typeof value.nome === "string" &&
    "whatsapp" in value &&
    typeof value.whatsapp === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "curso" in value &&
    typeof value.curso === "string" &&
    "idade" in value &&
    typeof value.idade === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Envie um JSON válido." }, { status: 400 });
  }

  if (!isLeadPayload(body)) {
    return Response.json(
      { error: "Preencha os campos obrigatórios corretamente." },
      { status: 400 },
    );
  }

  const lead = {
    nome: body.nome.trim(),
    whatsapp: body.whatsapp.trim(),
    email: body.email.trim(),
    curso: body.curso,
    idade: Number(body.idade),
  };
  const cursoValido = ["ingles", "espanhol", "conversacao"].includes(
    body.curso,
  );
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const idadeValida =
    Number.isInteger(lead.idade) && lead.idade >= 7 && lead.idade <= 120;

  if (
    lead.nome.split(/\s+/).length < 2 ||
    body.whatsapp.replace(/\D/g, "").length < 10 ||
    !emailValido ||
    !cursoValido ||
    !idadeValida
  ) {
    return Response.json(
      { error: "Verifique os dados informados e tente novamente." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { error: "O envio do formulário ainda não está configurado." },
      { status: 503 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });

    if (!webhookResponse.ok) {
      console.error("O webhook de leads respondeu com erro:", webhookResponse.status);
      return Response.json(
        { error: "Não foi possível enviar os dados agora." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Falha ao encaminhar lead ao webhook:", error);
    return Response.json(
      { error: "Não foi possível enviar os dados agora." },
      { status: 502 },
    );
  }
}
