import Link from "next/link";
import LeadForm from "@/components/lead-form";

const audiences = [
  {
    imageAlt: "Foto de turma infantil (com autorização)",
    label: "PARA SEUS FILHOS",
    title: "Kids (7 a 11) e Teens (12 a 16)",
    description:
      "Turmas pequenas, aulas dinâmicas e relatório de evolução para os pais ao fim de cada nível.",
    link: "Ver cursos para crianças e adolescentes",
  },
  {
    imageAlt: "Foto de turma adulta",
    label: "PARA VOCÊ",
    title: "Adultos, Conversação e Espanhol",
    description:
      "Horários para quem trabalha e espanhol também online ao vivo. Conversação para destravar a fala.",
    link: "Ver cursos para adultos",
  },
];

const steps = [
  {
    title: "1. Teste de nivelamento",
    description:
      "Online, 30 minutos, mais uma conversa rápida com um professor. Quem nunca estudou começa do básico.",
  },
  {
    title: "2. Aula experimental",
    description: "Gratuita, na turma indicada para o seu nível.",
  },
  {
    title: "3. Matrícula",
    description: "Escolha o horário e garanta a sua vaga na turma.",
  },
];

const reasons = [
  {
    title: "Até 8 alunos por turma",
    description: "Todo mundo fala em todas as aulas.",
  },
  {
    title: "Professores com experiência no exterior",
    description: "Sotaques e situações reais do idioma.",
  },
  {
    title: "Aulas de conversação",
    description: "Para quem entende, mas trava na hora de falar.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container-hero">
          <div className="container-hero-text">
            <p className="texto-suave">Inglês e espanhol na Tijuca</p>
            <h1>Fale outro idioma com confiança, em turmas de até 8 alunos</h1>
            <p>
              Professores com experiência no exterior, aulas de conversação e
              acompanhamento de perto, para crianças, adolescentes e adultos.
            </p>
            <div className="botoes">
              <Link href="/#contato" className="botao botao-primario">
                Fazer teste de nivelamento
              </Link>
              <Link href="/#contato" className="botao botao-secundario">
                Agendar aula experimental
              </Link>
            </div>
          </div>

          <div className="container-hero-img">
            <div
              className="placeholder-img"
              role="img"
              aria-label="Foto de aula (só alunos com autorização de imagem)"
            >
              [ imagem ] Foto de aula (só alunos com autorização de imagem)
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="text-para-quem">
          <h2>Um curso para cada momento</h2>
          <p>
            A Ponte atende famílias e adultos que precisam do idioma no
            trabalho.
          </p>
        </div>

        <div className="container-para-quem">
          {audiences.map((audience) => (
            <article
              className="cartao container-para-quem-item"
              key={audience.title}
            >
              <div
                className="placeholder-img cartao-imagem"
                role="img"
                aria-label={audience.imageAlt}
              >
                [ imagem ] {audience.imageAlt}
              </div>
              <div className="cartao-corpo">
                <h6 className="texto-suave">{audience.label}</h6>
                <h4 className="titulo-cartao">{audience.title}</h4>
                <p className="texto-cartao">{audience.description}</p>
                <Link className="link-cartao" href="/cursos">
                  {audience.link} &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao-cinza">
        <div className="text-para-quem">
          <h2>Como começar</h2>
        </div>
        <div className="container-passos">
          {steps.map((step) => (
            <article className="cartao" key={step.title}>
              <div className="cartao-corpo">
                <h4 className="titulo-cartao">{step.title}</h4>
                <p className="texto-cartao">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="text-para-quem">
          <h2>Por que a Ponte</h2>
        </div>
        <div className="container-passos">
          {reasons.map((reason) => (
            <article className="cartao" key={reason.title}>
              <div className="cartao-corpo">
                <h4 className="titulo-cartao">{reason.title}</h4>
                <p className="texto-cartao">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="secao" id="contato">
        <div className="text-para-quem">
          <h2>Fale com a Ponte</h2>
          <p>Deixe seus dados e enviamos o link do teste de nivelamento.</p>
        </div>

        <div className="container-contato">
          <LeadForm />
          <div className="info-contato">
            <div>
              <h6 className="texto-suave">Endereço</h6>
              <p>Rua Conde de Bonfim, Tijuca · Rio de Janeiro</p>
            </div>
            <div>
              <h6 className="texto-suave">Secretaria</h6>
              <p>Seg a sex, 9h às 20h · Sáb, 9h às 13h</p>
            </div>
            <div>
              <h6 className="texto-suave">Contato</h6>
              <p>WhatsApp · @ponte.idiomas</p>
            </div>
            <div
              className="placeholder-img mapa"
              role="img"
              aria-label="Mapa (Google Maps)"
            >
              [ imagem ] Mapa (Google Maps)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
