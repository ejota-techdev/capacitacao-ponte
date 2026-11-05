// Dados da página Cursos (cursos.html).
// Para mudar textos, preços ou perguntas, edite só este arquivo.
// O que ainda falta confirmar com o cliente está marcado com [PENDENTE].

// Destino dos botões "Agendar aula experimental" (cards) e "Fazer teste" (chamada final).
// Depende de a seção do formulário na Home ter id="contato" (responsabilidade da dupla).
// Na migração para Next.js, o caminho vira "/#contato".
const DESTINO_TESTE = "index.html#contato";

// Preços usados nos cards e na tabela de valores: mude aqui e os dois se atualizam.
const PRECO_MENSALIDADE = "R$ 390";
const PRECO_CONVERSACAO = "R$ 450";

const DADOS_CURSOS = {
  textoBotao: "Agendar aula experimental",

  // categoria: usada pelo filtro; precisa bater com o data-filtro dos botões em cursos.html.
  // imagem.src: deixe null enquanto não houver foto; o site mostra um placeholder com o alt.
  // Kids e Teens: não usar foto até recolher as autorizações de imagem.
  cursos: [
    {
      nome: "Inglês Kids",
      categoria: "ingles",
      rotulo: "Inglês",
      detalhes: "7 a 11 anos · 2 aulas de 1h15 por semana",
      preco: PRECO_MENSALIDADE,
      imagem: { src: null, alt: "Imagem do curso Inglês Kids" }
    },
    {
      nome: "Inglês Teens",
      categoria: "ingles",
      rotulo: "Inglês",
      detalhes: "12 a 16 anos · 2 aulas de 1h15 por semana",
      preco: PRECO_MENSALIDADE,
      imagem: { src: null, alt: "Imagem do curso Inglês Teens" }
    },
    {
      nome: "Inglês Adultos",
      categoria: "ingles",
      rotulo: "Inglês",
      detalhes: "A partir de 17 anos · 2 aulas de 1h15 por semana",
      preco: PRECO_MENSALIDADE,
      imagem: { src: null, alt: "Imagem do curso Inglês Adultos" }
    },
    {
      nome: "Espanhol",
      categoria: "espanhol",
      rotulo: "Espanhol",
      detalhes: "Adultos · presencial ou online ao vivo · [PENDENTE: carga]",
      preco: PRECO_MENSALIDADE,
      imagem: { src: null, alt: "Imagem do curso Espanhol" }
    },
    {
      nome: "Conversação",
      categoria: "conversacao",
      rotulo: "Conversação",
      detalhes: "Intermediário em diante · 2 aulas de 1h por semana",
      preco: PRECO_CONVERSACAO,
      imagem: { src: null, alt: "Imagem do curso Conversação" }
    }
  ],

  valores: [
    { item: "Mensalidade (inglês ou espanhol)", valor: PRECO_MENSALIDADE },
    { item: "Conversação", valor: PRECO_CONVERSACAO },
    { item: "Matrícula", valor: "R$ 100 (grátis na campanha)" },
    { item: "Material didático", valor: "R$ 280 por semestre" },
    { item: "Desconto para irmãos", valor: "10%" },
    { item: "Pagamento semestral à vista", valor: "8%" }
  ],

  faq: [
    {
      pergunta: "Como funciona o teste de nivelamento?",
      // Texto pedagógico: aguardando aprovação da Fernanda.
      resposta: "Teste online de 30 minutos e uma conversa de 10 minutos com um professor. Quem nunca estudou o idioma começa do básico, sem teste."
    },
    { pergunta: "Qual a idade mínima?", resposta: "[PENDENTE]" },
    { pergunta: "Tem aula online?", resposta: "[PENDENTE]" },
    { pergunta: "Quando começam as aulas de 2027?", resposta: "[PENDENTE]" }
  ]
};
