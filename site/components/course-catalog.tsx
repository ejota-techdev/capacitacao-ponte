"use client";

import Link from "next/link";
import { useState } from "react";
import { cursos, textoBotaoCurso } from "@/data/cursos";

const filtros = [
  { value: "todos", label: "Todos" },
  { value: "ingles", label: "Inglês" },
  { value: "espanhol", label: "Espanhol" },
  { value: "conversacao", label: "Conversação" },
] as const;

export default function CourseCatalog() {
  const [filtroAtivo, setFiltroAtivo] =
    useState<(typeof filtros)[number]["value"]>("todos");
  const cursosVisiveis = cursos.filter(
    (curso) => filtroAtivo === "todos" || curso.categoria === filtroAtivo,
  );

  return (
    <>
      <section className="cursos-topo" aria-labelledby="titulo-pagina">
        <nav className="breadcrumb" aria-label="Você está em">
          <ol>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/cursos" aria-current="page">
                Cursos
              </Link>
            </li>
          </ol>
        </nav>

        <h1 id="titulo-pagina">Nossos cursos</h1>
        <p className="cursos-topo__subtitulo">
          Turmas de até 8 alunos e duas aulas por semana. Encontre o curso pela
          idade e pelo objetivo.
        </p>
        <div
          className="filtros"
          role="group"
          aria-label="Filtrar cursos por idioma"
        >
          {filtros.map((filtro) => (
            <button
              className="filtro"
              type="button"
              key={filtro.value}
              aria-pressed={filtroAtivo === filtro.value}
              onClick={() => setFiltroAtivo(filtro.value)}
            >
              {filtro.label}
            </button>
          ))}
        </div>
        <p className="visualmente-oculto" aria-live="polite">
          {cursosVisiveis.length === 1
            ? "1 curso encontrado."
            : `${cursosVisiveis.length} cursos encontrados.`}
        </p>
      </section>

      <section className="cursos-lista" aria-label="Lista de cursos">
        <ul className="cards-cursos">
          {cursosVisiveis.map((curso) => (
            <li key={curso.nome}>
              <article className="card-curso">
                {curso.imagem.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="card-curso__imagem"
                    src={curso.imagem.src}
                    alt={curso.imagem.alt}
                  />
                ) : (
                  <div
                    className="card-curso__imagem card-curso__imagem--placeholder"
                    role="img"
                    aria-label={curso.imagem.alt}
                  >
                    [ imagem ]
                  </div>
                )}
                <p className="card-curso__categoria">{curso.rotulo}</p>
                <h2 className="card-curso__nome">{curso.nome}</h2>
                <p className="card-curso__detalhes">{curso.detalhes}</p>
                <p className="card-curso__preco">{curso.preco}/mês</p>
                <Link
                  className="card-curso__botao"
                  href="/#contato"
                  aria-label={`${textoBotaoCurso}: ${curso.nome}`}
                >
                  {textoBotaoCurso}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
