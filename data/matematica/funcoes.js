const ASSUNTO_FUNCOES = {
  id: "funcoes",
  area: "matematica",
  nome: "Funções",
  nivel: "medio",
  descricao: "Funções do 1º e 2º grau, domínio e imagem",

  resumoRapido: `Uma função relaciona cada elemento de um conjunto A a exatamente um elemento de um conjunto B.

Função do 1º grau (linear): f(x) = ax + b
• Gráfico: reta | a > 0 crescente, a < 0 decrescente

Função do 2º grau (quadrática): f(x) = ax² + bx + c
• Gráfico: parábola | a > 0 abre pra cima, a < 0 abre pra baixo
• Vértice: x = -b/2a | Δ = b² - 4ac`,

  resumoDetalhado: [
    {
      titulo: "Conceito de função",
      conteudo: `Uma função f: A → B associa cada elemento x ∈ A a um único y ∈ B.

• Domínio: conjunto dos valores de entrada (x)
• Contradomínio: conjunto de possíveis saídas
• Imagem: conjunto dos valores realmente assumidos por f(x)

Exemplo: f(x) = 2x + 1
f(3) = 2(3) + 1 = 7`
    },
    {
      titulo: "Função do 1º grau",
      conteudo: `f(x) = ax + b, com a ≠ 0

• a = coeficiente angular (inclinação da reta)
• b = coeficiente linear (onde a reta corta o eixo y)

Para encontrar a raiz (zero da função): ax + b = 0 → x = -b/a`
    },
    {
      titulo: "Função do 2º grau",
      conteudo: `f(x) = ax² + bx + c, com a ≠ 0

Discriminante: Δ = b² - 4ac
• Δ > 0 → dois zeros reais distintos
• Δ = 0 → um zero real (raiz dupla)
• Δ < 0 → nenhum zero real

Fórmula de Bhaskara: x = (-b ± √Δ) / 2a
Vértice (ponto de máximo ou mínimo): xv = -b/2a`
    }
  ],

  relacionados: [
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Funções aparecem em problemas geométricos" }
  ],

  videoaulas: [
    { titulo: "Funções 1º e 2º grau — ENEM", url: "https://www.youtube.com/results?search_query=funcoes+1+2+grau+enem" }
  ],

  simulado: [
    {
      pergunta: "A função f(x) = 2x - 4 se anula quando x é igual a:",
      alternativas: ["1", "2", "4", "-2"],
      correta: 1,
      explicacao: "2x - 4 = 0 → 2x = 4 → x = 2."
    },
    {
      pergunta: "O vértice da parábola f(x) = x² - 4x + 3 tem coordenada x igual a:",
      alternativas: ["1", "2", "3", "-2"],
      correta: 1,
      explicacao: "xv = -b/2a = -(-4)/(2×1) = 4/2 = 2."
    },
    {
      pergunta: "Uma função f(x) = ax + b tem a = -2 e b = 6. Essa função é:",
      alternativas: ["Crescente", "Decrescente", "Constante", "Não é função"],
      correta: 1,
      explicacao: "Como a = -2 < 0, a reta é decrescente."
    }
  ]
}
