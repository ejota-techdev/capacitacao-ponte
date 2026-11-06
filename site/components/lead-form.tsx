"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  nome: string;
  whatsapp: string;
  email: string;
  curso: string;
  idade: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FieldName = keyof FormValues;

const valoresIniciais: FormValues = {
  nome: "",
  whatsapp: "",
  email: "",
  curso: "",
  idade: "",
};

function validarCampo(name: FieldName, value: string) {
  switch (name) {
    case "nome":
      return value.trim().split(/\s+/).length < 2
        ? "Informe nome e sobrenome."
        : "";
    case "whatsapp":
      return value.replace(/\D/g, "").length < 10
        ? "Informe um WhatsApp com DDD."
        : "";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Informe um e-mail válido.";
    case "curso":
      return value ? "" : "Escolha um curso.";
    case "idade":
      return Number(value) >= 7 && Number(value) <= 120
        ? ""
        : "Informe a idade do aluno (a partir de 7 anos).";
  }
}

function validar(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  for (const name of Object.keys(values) as FieldName[]) {
    const error = validarCampo(name, values[name]);
    if (error) errors[name] = error;
  }

  return errors;
}

function formatarWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function LeadForm() {
  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"ok" | "falha" | "">("");
  const [enviando, setEnviando] = useState(false);

  function atualizarCampo(name: keyof FormValues, value: string) {
    const formattedValue = name === "whatsapp" ? formatarWhatsapp(value) : value;
    const nextValues = { ...values, [name]: formattedValue };
    setValues(nextValues);
    if (errors[name]) {
      const error = validarCampo(name, formattedValue);
      setErrors({ ...errors, [name]: error || undefined });
    }
  }

  async function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setStatusType("");

    const nextErrors = validar(values);
    setErrors(nextErrors);
    const firstInvalidField = Object.keys(valoresIniciais).find(
      (field) => nextErrors[field as keyof FormValues],
    );
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setEnviando(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        throw new Error(result.error || "Falha no envio.");
      }

      setValues(valoresIniciais);
      setErrors({});
      setStatusType("ok");
      setStatus(
        "Recebemos seus dados! Enviaremos o link do teste de nivelamento.",
      );
    } catch (error) {
      setStatusType("falha");
      setStatus(
        error instanceof Error && error.message !== "Failed to fetch"
          ? error.message
          : "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.",
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form className="cartao cartao-corpo form-lead" onSubmit={enviarFormulario} noValidate>
      <div className={`campo${errors.nome ? " invalido" : ""}`}>
        <label className="rotulo-form" htmlFor="nome">
          Nome
        </label>
        <input
          className="controle-form"
          type="text"
          id="nome"
          name="nome"
          placeholder="Seu nome completo"
          autoComplete="name"
          required
          value={values.nome}
          aria-invalid={Boolean(errors.nome)}
          aria-describedby="erro-nome"
          onChange={(event) => atualizarCampo("nome", event.target.value)}
          onBlur={() =>
            setErrors({ ...errors, nome: validarCampo("nome", values.nome) || undefined })
          }
        />
        <small className="erro" id="erro-nome" aria-live="polite">
          {errors.nome}
        </small>
      </div>

      <div className={`campo${errors.whatsapp ? " invalido" : ""}`}>
        <label className="rotulo-form" htmlFor="whatsapp">
          WhatsApp
        </label>
        <input
          className="controle-form"
          type="tel"
          id="whatsapp"
          name="whatsapp"
          placeholder="(21) 90000-0000"
          autoComplete="tel"
          inputMode="numeric"
          required
          value={values.whatsapp}
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby="erro-whatsapp"
          onChange={(event) => atualizarCampo("whatsapp", event.target.value)}
          onBlur={() =>
            setErrors({
              ...errors,
              whatsapp: validarCampo("whatsapp", values.whatsapp) || undefined,
            })
          }
        />
        <small className="erro" id="erro-whatsapp" aria-live="polite">
          {errors.whatsapp}
        </small>
      </div>

      <div className={`campo${errors.email ? " invalido" : ""}`}>
        <label className="rotulo-form" htmlFor="email">
          E-mail
        </label>
        <input
          className="controle-form"
          type="email"
          id="email"
          name="email"
          placeholder="voce@email.com"
          autoComplete="email"
          required
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby="erro-email"
          onChange={(event) => atualizarCampo("email", event.target.value)}
          onBlur={() =>
            setErrors({
              ...errors,
              email: validarCampo("email", values.email) || undefined,
            })
          }
        />
        <small className="erro" id="erro-email" aria-live="polite">
          {errors.email}
        </small>
      </div>

      <div className={`campo${errors.curso ? " invalido" : ""}`}>
        <label className="rotulo-form" htmlFor="curso">
          Curso de interesse
        </label>
        <select
          className="seletor-form"
          id="curso"
          name="curso"
          required
          value={values.curso}
          aria-invalid={Boolean(errors.curso)}
          aria-describedby="erro-curso"
          onChange={(event) => atualizarCampo("curso", event.target.value)}
          onBlur={() =>
            setErrors({
              ...errors,
              curso: validarCampo("curso", values.curso) || undefined,
            })
          }
        >
          <option value="">Selecione: inglês, espanhol ou conversação</option>
          <option value="ingles">Inglês</option>
          <option value="espanhol">Espanhol</option>
          <option value="conversacao">Conversação</option>
        </select>
        <small className="erro" id="erro-curso" aria-live="polite">
          {errors.curso}
        </small>
      </div>

      <div className={`campo${errors.idade ? " invalido" : ""}`}>
        <label className="rotulo-form" htmlFor="idade">
          Idade do aluno
        </label>
        <input
          className="controle-form"
          type="number"
          id="idade"
          name="idade"
          placeholder="Ex.: 9"
          min="7"
          max="120"
          required
          value={values.idade}
          aria-invalid={Boolean(errors.idade)}
          aria-describedby="erro-idade"
          onChange={(event) => atualizarCampo("idade", event.target.value)}
          onBlur={() =>
            setErrors({
              ...errors,
              idade: validarCampo("idade", values.idade) || undefined,
            })
          }
        />
        <small className="erro" id="erro-idade" aria-live="polite">
          {errors.idade}
        </small>
      </div>

      <button className="botao botao-primario" type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Quero fazer o teste"}
      </button>
      <p className="texto-suave nota-form">
        Se o aluno for menor de idade, o contato é feito com o responsável.
      </p>
      <p className={`status-form${statusType ? ` ${statusType}` : ""}`} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
