// =============================================
// ASSUNTO: Funções
// Área: Matemática
// =============================================
// Blocos do resumoDetalhado:
//   { tipo: "titulo",    conteudo: "..." }
//   { tipo: "paragrafo", conteudo: "..." }
//   { tipo: "imagem",    conteudo: "query Google Imagens" }
//   { tipo: "video",     conteudo: "URL embed YouTube" }
//
// flashcards: { pergunta, resposta } — conceituais, separados do simulado
// simulado:   { contexto, pergunta, alternativas, correta, explicacao }
// =============================================

const ASSUNTO_FUNCOES = {
  id: "funcoes",
  area: "matematica",
  nome: "Funções",
  nivel: "medio",
  descricao: "Funções do 1º e 2º grau, domínio e imagem",

  resumoRapido: `Uma função relaciona cada elemento de um conjunto A a exatamente um elemento de B.

Função do 1º grau: f(x) = ax + b
• Gráfico: reta | a > 0 crescente, a < 0 decrescente

Função do 2º grau: f(x) = ax² + bx + c
• Gráfico: parábola
• Vértice: x = -b/2a
• Δ = b² - 4ac (discriminante)`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "Conceito de função" },
    { tipo: "paragrafo", conteudo: "Uma função f: A → B associa cada elemento x ∈ A a um único y ∈ B.\n\n• Domínio: conjunto dos valores de entrada (x)\n• Contradomínio: conjunto de possíveis saídas\n• Imagem: valores realmente assumidos por f(x)" },

    { tipo: "titulo",    conteudo: "Função do 1º grau" },
    { tipo: "paragrafo", conteudo: "f(x) = ax + b, com a ≠ 0\n\n• a = coeficiente angular (inclinação)\n• b = coeficiente linear (onde corta o eixo y)\n• a > 0 → função crescente\n• a < 0 → função decrescente\n\nZero da função: ax + b = 0 → x = -b/a" },
    { tipo: "imagem",    conteudo: "linear function graph y=ax+b slope intercept" },

    { tipo: "titulo",    conteudo: "Função do 2º grau" },
    { tipo: "paragrafo", conteudo: "f(x) = ax² + bx + c, com a ≠ 0\n\nDiscriminante: Δ = b² - 4ac\n• Δ > 0 → dois zeros reais distintos\n• Δ = 0 → um zero real (raiz dupla)\n• Δ < 0 → nenhum zero real\n\nBhaskara: x = (-b ± √Δ) / 2a\nVértice: xv = -b/2a" },
    { tipo: "imagem",    conteudo: "parabola quadratic function graph vertex roots" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/6LMhMwnOGkU" },
  ],

  flashcards: [
    { pergunta: "O que é o domínio de uma função?",                     resposta: "O conjunto de todos os valores de entrada (x) para os quais a função está definida." },
    { pergunta: "O que é a imagem de uma função?",                      resposta: "O conjunto de todos os valores de saída (y) realmente assumidos pela função." },
    { pergunta: "O que indica o coeficiente angular 'a' na f(x) = ax + b?", resposta: "A inclinação da reta. a > 0: crescente; a < 0: decrescente." },
    { pergunta: "O que é o discriminante Δ?",                           resposta: "Δ = b² - 4ac. Determina o número de raízes reais da função do 2º grau." },
    { pergunta: "Como achar o vértice da parábola?",                    resposta: "xv = -b / 2a. O vértice é o ponto de máximo (a < 0) ou mínimo (a > 0)." },
    { pergunta: "O que é a fórmula de Bhaskara?",                       resposta: "x = (-b ± √Δ) / 2a — usada para encontrar as raízes da função do 2º grau." },
    { pergunta: "Quando Δ < 0, quantas raízes reais a função tem?",     resposta: "Nenhuma raiz real. A parábola não corta o eixo x." },
  ],

  relacionados: [
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Funções aparecem em problemas geométricos" }
  ],

  videoaulas: [
    { titulo: "Funções 1º e 2º grau — ENEM", url: "https://www.youtube.com/results?search_query=funcoes+1+2+grau+enem" }
  ],

  simulado: [
    {
      contexto: "Uma empresa de táxi cobra R$ 5,00 de bandeirada mais R$ 2,00 por quilômetro rodado. Um passageiro deseja saber antecipadamente quanto pagará pela corrida.",
      pergunta: "Qual função representa o valor total V em reais em função da distância d em quilômetros percorrida?",
      alternativas: ["V(d) = 2d", "V(d) = 5d + 2", "V(d) = 2d + 5", "V(d) = 5 + d"],
      correta: 2,
      explicacao: "O valor fixo (bandeirada) é 5, e o variável é 2 por km. Logo: V(d) = 2d + 5. Isso é uma função do 1º grau com a = 2 e b = 5."
    },
    {
      contexto: "Um objeto é lançado verticalmente e sua altura h (em metros) em função do tempo t (em segundos) é dada por h(t) = -5t² + 20t. O objeto atinge a altura máxima no vértice da parábola.",
      pergunta: "Em quantos segundos o objeto atinge a altura máxima?",
      alternativas: ["1 s", "2 s", "4 s", "5 s"],
      correta: 1,
      explicacao: "Vértice: t = -b/2a = -20 / (2 × -5) = -20 / -10 = 2 s. O objeto atinge a altura máxima em 2 segundos."
    },
  ]
}
