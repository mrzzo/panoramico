// =============================================
// ASSUNTO: Contexto histórico da Matemática
// Área: História
// =============================================
// Blocos: titulo | paragrafo | imagem | video
// flashcards: { pergunta, resposta }
// simulado:   { contexto, pergunta, alternativas, correta, explicacao }
// =============================================

const ASSUNTO_MATEMATICA_ANTIGA = {
  id: "matematica-antiga",
  area: "historia",
  nome: "Contexto histórico da Matemática",
  nivel: "basico",
  descricao: "Como a matemática foi desenvolvida ao longo da história",

  resumoRapido: `A matemática surgiu da necessidade prática de contar, medir e construir.

Marcos históricos:
• ~3000 a.C.: Egípcios e babilônios usam aritmética e geometria
• 600 a.C.: Gregos desenvolvem a matemática dedutiva
• 570 a.C.: Pitágoras sistematiza a geometria
• 300 a.C.: Euclides escreve "Os Elementos"
• Séc. XVII: Newton e Leibniz criam o cálculo`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "Matemática no mundo antigo" },
    { tipo: "paragrafo", conteudo: "Os babilônios (2000 a.C.) já conheciam relações trigonométricas e calculavam raízes quadradas. Usavam um sistema numérico de base 60 — que usamos até hoje para medir tempo (60 minutos, 60 segundos) e ângulos (360°).\n\nOs egípcios usavam geometria para recalcular divisões de terra após as cheias do Nilo. O Papiro de Rhind (1650 a.C.) mostra dezenas de problemas matemáticos práticos." },
    { tipo: "imagem",    conteudo: "ancient egyptian mathematics papyrus rhind" },

    { tipo: "titulo",    conteudo: "Os gregos e a matemática abstrata" },
    { tipo: "paragrafo", conteudo: "Os gregos transformaram a matemática de ferramenta prática em ciência baseada em provas lógicas.\n\n• Tales de Mileto (624 a.C.): primeiras demonstrações geométricas\n• Pitágoras (570 a.C.): teorema do triângulo retângulo\n• Euclides (300 a.C.): \"Os Elementos\" — sistematizou toda a geometria\n• Arquimedes (287 a.C.): calculou π com precisão notável" },
    { tipo: "imagem",    conteudo: "ancient greek mathematicians Euclid Pythagoras" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/AaZ_RSt0aP8" },
  ],

  flashcards: [
    { pergunta: "Qual civilização usava base 60, influenciando nossa medição de tempo?", resposta: "Os babilônios. Por isso temos 60 segundos, 60 minutos e 360° em um círculo." },
    { pergunta: "O que é o Papiro de Rhind?",                                            resposta: "Documento egípcio de 1650 a.C. com dezenas de problemas matemáticos práticos." },
    { pergunta: "Quem escreveu 'Os Elementos'?",                                         resposta: "Euclides, por volta de 300 a.C. — obra que sistematizou toda a geometria conhecida." },
    { pergunta: "Qual foi a contribuição de Tales de Mileto?",                           resposta: "Realizou as primeiras demonstrações geométricas — provando resultados com lógica." },
    { pergunta: "O que os gregos mudaram na matemática?",                                resposta: "Transformaram a matemática de ferramenta prática em ciência abstrata baseada em provas." },
  ],

  relacionados: [
    { area: "matematica", id: "trigonometria",   nome: "Trigonometria",   motivo: "Origem histórica da trigonometria" },
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Euclides sistematizou a geometria" }
  ],

  videoaulas: [
    { titulo: "História da Matemática resumida", url: "https://www.youtube.com/results?search_query=historia+da+matematica+resumo" }
  ],

  simulado: [
    {
      contexto: "O sistema de numeração babilônico, desenvolvido por volta de 2000 a.C. na Mesopotâmia, utilizava a base 60 (sistema sexagesimal). Esse sistema influenciou diversas áreas do conhecimento que chegaram até os dias de hoje.",
      pergunta: "Qual herança direta do sistema sexagesimal babilônico ainda está presente no cotidiano moderno?",
      alternativas: [
        "O sistema decimal usado em moedas",
        "A divisão do círculo em 360° e do tempo em 60 minutos",
        "O uso do zero como número independente",
        "A escrita dos algarismos arábicos"
      ],
      correta: 1,
      explicacao: "O sistema sexagesimal (base 60) dos babilônios explica por que dividimos o círculo em 360° (6 × 60), a hora em 60 minutos e o minuto em 60 segundos."
    },
  ]
}
