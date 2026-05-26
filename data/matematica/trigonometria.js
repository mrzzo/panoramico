// =============================================
// ASSUNTO: Trigonometria
// Área: Matemática
// =============================================
// Como preencher este arquivo:
//
// id:          identificador único do assunto (sem espaços, use hífen)
// area:        id da área pai (deve bater com o index.js da área)
// nome:        nome exibido na interface
// nivel:       "basico" | "medio" | "avancado"
// descricao:   frase curta exibida nos cards da biblioteca
//
// resumoRapido:
//   Texto corrido exibido na tab "Resumo rápido".
//   Use \n para quebras de linha.
//
// resumoDetalhado: [ ... ]
//   Array de blocos de conteúdo. Cada bloco pode ser:
//
//   { tipo: "titulo",    conteudo: "Texto do título da seção" }
//   { tipo: "paragrafo", conteudo: "Texto explicativo..." }
//   { tipo: "imagem",    conteudo: "query de busca para o Google Imagens" }
//     → o app busca e exibe uma imagem ilustrativa
//   { tipo: "video",     conteudo: "URL do YouTube (embed)" }
//     → embed do vídeo direto no meio do conteúdo
//
// flashcards: [ ... ]
//   Perguntas de revisão conceitual — SEPARADAS do simulado.
//   Formato: { pergunta: "...", resposta: "..." }
//   Cadastre 6–12 cards por assunto. O app sorteia 5 por sessão.
//
// relacionados: [ ... ]
//   Links para outros assuntos do site.
//   Formato: { area: "id_area", id: "id_assunto", nome: "Nome", motivo: "Por que está relacionado" }
//
// videoaulas: [ ... ]
//   Links de videoaulas exibidos no final do resumo detalhado.
//   Formato: { titulo: "...", url: "https://..." }
//
// simulado: [ ... ]
//   Questões no estilo ENEM: contextualização + pergunta + alternativas.
//   Formato:
//   {
//     contexto:      "Texto de contextualização (situação, dado, citação)",
//     pergunta:      "A pergunta em si",
//     alternativas:  ["A", "B", "C", "D"],
//     correta:       índice da alternativa correta (0 = A),
//     explicacao:    "Explicação do gabarito"
//   }
// =============================================

const ASSUNTO_TRIGONOMETRIA = {
  id: "trigonometria",
  area: "matematica",
  nome: "Trigonometria",
  nivel: "medio",
  descricao: "Relações entre ângulos e lados de triângulos",

  resumoRapido: `Trigonometria estuda as relações entre ângulos e lados de triângulos. As três razões fundamentais são seno, cosseno e tangente.

No triângulo retângulo, para um ângulo θ:
• sen(θ) = cateto oposto ÷ hipotenusa
• cos(θ) = cateto adjacente ÷ hipotenusa
• tg(θ) = cateto oposto ÷ cateto adjacente

Valores mais cobrados no ENEM:
• sen(30°) = 0,5 | cos(30°) = √3/2
• sen(45°) = cos(45°) = √2/2
• sen(60°) = √3/2 | cos(60°) = 0,5
• sen(90°) = 1 | cos(90°) = 0`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "O que é Trigonometria?" },
    { tipo: "paragrafo", conteudo: "A trigonometria nasceu da necessidade de medir distâncias e ângulos inacessíveis — como a altura de uma montanha ou a distância até uma estrela. A palavra vem do grego: \"trigonon\" (triângulo) + \"metron\" (medida). Hoje é usada em engenharia, física, arquitetura e computação gráfica." },
    { tipo: "imagem",    conteudo: "right triangle trigonometry diagram labeled sides" },

    { tipo: "titulo",    conteudo: "As três razões fundamentais" },
    { tipo: "paragrafo", conteudo: "No triângulo retângulo, para um ângulo θ:\n\n• Seno (sen θ) = cateto oposto ÷ hipotenusa\n• Cosseno (cos θ) = cateto adjacente ÷ hipotenusa\n• Tangente (tg θ) = cateto oposto ÷ cateto adjacente\n\nMacete SOH-CAH-TOA:\nS = O/H | C = A/H | T = O/A" },

    { tipo: "titulo",    conteudo: "Tabela de valores notáveis" },
    { tipo: "paragrafo", conteudo: "Ângulo | Seno   | Cosseno | Tangente\n0°     | 0      | 1       | 0\n30°    | 1/2    | √3/2    | √3/3\n45°    | √2/2   | √2/2    | 1\n60°    | √3/2   | 1/2     | √3\n90°    | 1      | 0       | —" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/T9lt6MZKLck" },

    { tipo: "titulo",    conteudo: "Identidade fundamental" },
    { tipo: "paragrafo", conteudo: "A relação mais importante da trigonometria:\n\nsen²θ + cos²θ = 1\n\nIsso vale para qualquer ângulo. Dela derivam outras identidades usadas para simplificar expressões em provas." },
  ],

  flashcards: [
    { pergunta: "O que é o seno de um ângulo?",                      resposta: "Razão entre o cateto oposto e a hipotenusa no triângulo retângulo." },
    { pergunta: "O que é o cosseno de um ângulo?",                   resposta: "Razão entre o cateto adjacente e a hipotenusa no triângulo retângulo." },
    { pergunta: "O que é a tangente de um ângulo?",                  resposta: "Razão entre o cateto oposto e o cateto adjacente." },
    { pergunta: "Qual o macete SOH-CAH-TOA?",                        resposta: "Seno = Oposto/Hipotenusa | Cosseno = Adjacente/Hipotenusa | Tangente = Oposto/Adjacente" },
    { pergunta: "Qual a identidade trigonométrica fundamental?",      resposta: "sen²θ + cos²θ = 1" },
    { pergunta: "Quanto vale sen(30°)?",                             resposta: "1/2 = 0,5" },
    { pergunta: "Quanto vale cos(60°)?",                             resposta: "1/2 = 0,5" },
    { pergunta: "Quanto vale tg(45°)?",                              resposta: "1" },
    { pergunta: "Quanto vale sen(90°)?",                             resposta: "1" },
    { pergunta: "Para que serve a trigonometria na prática?",         resposta: "Medir distâncias e ângulos inacessíveis, usado em engenharia, física, arquitetura e computação gráfica." },
  ],

  relacionados: [
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Base para entender triângulos" },
    { area: "historia",   id: "matematica-antiga", nome: "Contexto histórico da Matemática", motivo: "Origem da trigonometria" }
  ],

  videoaulas: [
    { titulo: "Trigonometria do zero — ENEM", url: "https://www.youtube.com/results?search_query=trigonometria+enem+resumo" },
    { titulo: "Valores notáveis — macetes",   url: "https://www.youtube.com/results?search_query=valores+notaveis+trigonometria" }
  ],

  simulado: [
    {
      contexto: "Na construção de uma rampa de acessibilidade, um engenheiro precisa garantir que o ângulo de inclinação seja de 30° em relação ao solo. O comprimento da rampa (hipotenusa) foi medido em 4 metros.",
      pergunta: "Qual é a altura que a rampa atinge em relação ao solo?",
      alternativas: ["1 m", "2 m", "2√3 m", "4√3 m"],
      correta: 1,
      explicacao: "sen(30°) = altura / hipotenusa → 1/2 = altura / 4 → altura = 2 m."
    },
    {
      contexto: "Durante uma aula de física, a professora afirma que o movimento de uma onda sonora pode ser descrito por uma função trigonométrica. Ela escreve no quadro a identidade fundamental da trigonometria.",
      pergunta: "Qual das alternativas representa corretamente essa identidade, válida para qualquer ângulo θ?",
      alternativas: ["sen(θ) + cos(θ) = 1", "sen²(θ) + cos²(θ) = 1", "sen²(θ) - cos²(θ) = 1", "sen(θ) × cos(θ) = 1"],
      correta: 1,
      explicacao: "A identidade fundamental é sen²θ + cos²θ = 1, que decorre diretamente do Teorema de Pitágoras aplicado ao triângulo retângulo unitário."
    },
    {
      contexto: "Um topógrafo posicionado a 50 metros de distância horizontal de uma árvore mede um ângulo de elevação de 60° até o topo da árvore.",
      pergunta: "Considerando tg(60°) = √3 ≈ 1,73, qual é a altura aproximada da árvore?",
      alternativas: ["50 m", "86,5 m", "28,9 m", "100 m"],
      correta: 1,
      explicacao: "tg(60°) = altura / distância → √3 = altura / 50 → altura = 50√3 ≈ 50 × 1,73 = 86,5 m."
    },
  ]
}
