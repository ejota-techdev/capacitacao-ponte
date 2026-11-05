// Monta os cards, a tabela de valores e o FAQ da página Cursos
// a partir de DADOS_CURSOS (js/dados-cursos.js, carregado antes deste arquivo).

const listaCursos = document.querySelector("#lista-cursos");
const corpoTabelaValores = document.querySelector("#tabela-valores tbody");
const listaFaq = document.querySelector("#lista-faq");
const botaoChamadaFinal = document.querySelector("#botao-chamada-final");

function montarImagem(curso) {
  if (curso.imagem.src) {
    return `<img class="card-curso__imagem" src="${curso.imagem.src}" alt="${curso.imagem.alt}">`;
  }
  // Sem foto ainda: placeholder que o leitor de tela lê como imagem, com o mesmo texto alternativo.
  return `<div class="card-curso__imagem card-curso__imagem--placeholder" role="img" aria-label="${curso.imagem.alt}">[ imagem ]</div>`;
}

function montarCard(curso) {
  return `
    <li data-categoria="${curso.categoria}">
      <article class="card-curso">
        ${montarImagem(curso)}
        <p class="card-curso__categoria">${curso.rotulo}</p>
        <h2 class="card-curso__nome">${curso.nome}</h2>
        <p class="card-curso__detalhes">${curso.detalhes}</p>
        <p class="card-curso__preco">${curso.preco}/mês</p>
        <a class="card-curso__botao" href="${DESTINO_TESTE}" aria-label="${DADOS_CURSOS.textoBotao}: ${curso.nome}">${DADOS_CURSOS.textoBotao}</a>
      </article>
    </li>`;
}

function montarLinhaValor(linha) {
  return `<tr><th scope="row">${linha.item}</th><td>${linha.valor}</td></tr>`;
}

// A primeira pergunta começa aberta, como no wireframe.
function montarPergunta(pergunta, indice) {
  return `
    <details class="faq__item"${indice === 0 ? " open" : ""}>
      <summary>${pergunta.pergunta}</summary>
      <p>${pergunta.resposta}</p>
    </details>`;
}

listaCursos.innerHTML = DADOS_CURSOS.cursos.map(montarCard).join("");
corpoTabelaValores.innerHTML = DADOS_CURSOS.valores.map(montarLinhaValor).join("");
listaFaq.innerHTML = DADOS_CURSOS.faq.map(montarPergunta).join("");

// O HTML já traz o mesmo link como reserva para quando o JavaScript estiver desligado.
botaoChamadaFinal.href = DESTINO_TESTE;

// Filtro: esconde os cards que não são da categoria escolhida e marca o botão ativo.
const botoesFiltro = document.querySelectorAll(".filtro");
const resultadoFiltro = document.querySelector("#resultado-filtro");

function filtrarCursos(filtro) {
  let visiveis = 0;

  listaCursos.querySelectorAll("li").forEach(function (item) {
    const mostrar = filtro === "todos" || item.dataset.categoria === filtro;
    item.hidden = !mostrar;
    if (mostrar) {
      visiveis++;
    }
  });

  botoesFiltro.forEach(function (botao) {
    botao.setAttribute("aria-pressed", String(botao.dataset.filtro === filtro));
  });

  resultadoFiltro.textContent = visiveis === 1 ? "1 curso encontrado." : `${visiveis} cursos encontrados.`;
}

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    filtrarCursos(botao.dataset.filtro);
  });
});
