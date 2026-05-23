const ASSUNTO_MATEMATICA_ANTIGA = {
  id: "matematica-antiga",
  area: "historia",
  nome: "Contexto histórico da Matemática",
  nivel: "basico",
  descricao: "Como a matemática foi desenvolvida ao longo da história",

  resumoRapido: `A matemática surgiu da necessidade prática de contar, medir e construir.

Marcos históricos:
• 3000 a.C.: Egípcios e babilônios usam aritmética e geometria
• 600 a.C.: Gregos desenvolvem a matemática dedutiva
• 570 a.C.: Pitágoras sistematiza a geometria
• 300 a.C.: Euclides escreve "Os Elementos"
• Séc. XVII: Newton e Leibniz criam o cálculo`,

  resumoDetalhado: [
    {
      titulo: "Matemática no mundo antigo",
      conteudo: `Os babilônios (2000 a.C.) já conheciam relações trigonométricas e calculavam raízes quadradas. Usavam um sistema numérico de base 60 — que usamos até hoje para medir tempo e ângulos.

Os egípcios usavam geometria para recalcular as divisões de terra após as cheias do Nilo. O Papiro de Rhind (1650 a.C.) mostra dezenas de problemas matemáticos práticos.`
    },
    {
      titulo: "Os gregos e a matemática abstrata",
      conteudo: `Os gregos transformaram a matemática de ferramenta prática em ciência abstrata baseada em provas lógicas.

• Tales de Mileto (624 a.C.): primeiras demonstrações geométricas
• Pitágoras (570 a.C.): teorema do triângulo retângulo, números como essência do universo
• Euclides (300 a.C.): sistematizou toda a geometria em "Os Elementos" — usado por 2000 anos
• Arquimedes (287 a.C.): calculou π com precisão notável para a época`
    }
  ],

  relacionados: [
    { area: "matematica", id: "trigonometria", nome: "Trigonometria", motivo: "Origem histórica da trigonometria" },
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Euclides sistematizou a geometria" }
  ],

  videoaulas: [
    { titulo: "História da Matemática resumida", url: "https://www.youtube.com/results?search_query=historia+da+matematica+resumo" }
  ],

  simulado: [
    {
      pergunta: "Qual civilização antiga usava um sistema numérico de base 60, que influencia nossa medição de tempo até hoje?",
      alternativas: ["Egípcios", "Gregos", "Babilônios", "Romanos"],
      correta: 2,
      explicacao: "Os babilônios usavam base 60 (sistema sexagesimal). Por isso temos 60 segundos no minuto, 60 minutos na hora e 360° em um círculo."
    },
    {
      pergunta: "Quem sistematizou toda a geometria conhecida na obra 'Os Elementos', usada por mais de 2000 anos?",
      alternativas: ["Pitágoras", "Arquimedes", "Tales", "Euclides"],
      correta: 3,
      explicacao: "'Os Elementos', de Euclides (300 a.C.), organiza toda a geometria em axiomas, postulados e teoremas. É um dos livros mais influentes da história."
    }
  ]
}
