import type { Metadata } from "next";
import Link from "next/link";
import CourseCatalog from "@/components/course-catalog";
import { faq, valores } from "@/data/cursos";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Cursos de inglês e espanhol da Ponte Idiomas para crianças, adolescentes e adultos, e aulas de conversação. Turmas de até 8 alunos e duas aulas por semana.",
};

export default function CursosPage() {
  return (
    <main>
      <CourseCatalog />

      <section className="valores" aria-labelledby="titulo-valores">
        <h2 id="titulo-valores">Valores e descontos</h2>
        <p>Os descontos não acumulam.</p>
        <table aria-labelledby="titulo-valores">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {valores.map((linha) => (
              <tr key={linha.item}>
                <th scope="row">{linha.item}</th>
                <td>{linha.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="faq" aria-labelledby="titulo-faq">
        <h2 id="titulo-faq">Perguntas frequentes</h2>
        <div className="faq__lista">
          {faq.map((item, index) => (
            <details className="faq__item" key={item.pergunta} open={index === 0}>
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="chamada-final" aria-labelledby="titulo-chamada">
        <h2 id="titulo-chamada">
          Não sabe por onde começar? Faça o teste de nivelamento.
        </h2>
        <Link className="botao" href="/#contato">
          Fazer teste
        </Link>
      </section>
    </main>
  );
}
