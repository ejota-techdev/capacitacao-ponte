export type Curso = {
  nome: string;
  categoria: "ingles" | "espanhol" | "conversacao";
  rotulo: string;
  detalhes: string;
  preco: string;
  imagem: {
    src: string | null;
    alt: string;
  };
};

export const textoBotaoCurso = "Agendar aula experimental";

export const cursos: Curso[] = [
  {
    nome: "Inglês Kids",
    categoria: "ingles",
    rotulo: "Inglês",
    detalhes: "7 a 11 anos · 2 aulas de 1h15 por semana",
    preco: "R$ 390",
    imagem: { src: null, alt: "Imagem do curso Inglês Kids" },
  },
  {
    nome: "Inglês Teens",
    categoria: "ingles",
    rotulo: "Inglês",
    detalhes: "12 a 16 anos · 2 aulas de 1h15 por semana",
    preco: "R$ 390",
    imagem: { src: null, alt: "Imagem do curso Inglês Teens" },
  },
  {
    nome: "Inglês Adultos",
    categoria: "ingles",
    rotulo: "Inglês",
    detalhes: "A partir de 17 anos · 2 aulas de 1h15 por semana",
    preco: "R$ 390",
    imagem: { src: null, alt: "Imagem do curso Inglês Adultos" },
  },
  {
    nome: "Espanhol",
    categoria: "espanhol",
    rotulo: "Espanhol",
    detalhes: "Adultos · presencial ou online ao vivo · [PENDENTE: carga]",
    preco: "R$ 390",
    imagem: { src: null, alt: "Imagem do curso Espanhol" },
  },
  {
    nome: "Conversação",
    categoria: "conversacao",
    rotulo: "Conversação",
    detalhes: "Intermediário em diante · 2 aulas de 1h por semana",
    preco: "R$ 450",
    imagem: { src: null, alt: "Imagem do curso Conversação" },
  },
];

export const valores = [
  { item: "Mensalidade (inglês ou espanhol)", valor: "R$ 390" },
  { item: "Conversação", valor: "R$ 450" },
  { item: "Matrícula", valor: "R$ 100 (grátis na campanha)" },
  { item: "Material didático", valor: "R$ 280 por semestre" },
  { item: "Desconto para irmãos", valor: "10%" },
  { item: "Pagamento semestral à vista", valor: "8%" },
];

export const faq = [
  {
    pergunta: "Como funciona o teste de nivelamento?",
    resposta:
      "Teste online de 30 minutos e uma conversa de 10 minutos com um professor. Quem nunca estudou o idioma começa do básico, sem teste.",
  },
  { pergunta: "Qual a idade mínima?", resposta: "[PENDENTE]" },
  { pergunta: "Tem aula online?", resposta: "[PENDENTE]" },
  { pergunta: "Quando começam as aulas de 2027?", resposta: "[PENDENTE]" },
];
