// Matemática > Trigonometria
// Um arquivo por assunto — edite aqui para atualizar o conteúdo

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
    {
      titulo: "O que é Trigonometria?",
      conteudo: `A trigonometria nasceu da necessidade de medir distâncias e ângulos inacessíveis — como a altura de uma montanha ou a distância até uma estrela.

A palavra vem do grego: "trigonon" (triângulo) + "metron" (medida). Hoje é usada em engenharia, física, arquitetura e computação gráfica.`
    },
    {
      titulo: "As três razões fundamentais",
      conteudo: `No triângulo retângulo, para um ângulo θ:

• Seno (sen θ) = cateto oposto ÷ hipotenusa
• Cosseno (cos θ) = cateto adjacente ÷ hipotenusa
• Tangente (tg θ) = cateto oposto ÷ cateto adjacente

Macete SOH-CAH-TOA:
S = O/H | C = A/H | T = O/A`
    },
    {
      titulo: "Tabela de valores notáveis",
      conteudo: `Ângulo | Seno   | Cosseno | Tangente
0°     | 0      | 1       | 0
30°    | 1/2    | √3/2    | √3/3
45°    | √2/2   | √2/2    | 1
60°    | √3/2   | 1/2     | √3
90°    | 1      | 0       | —`
    },
    {
      titulo: "Identidade fundamental",
      conteudo: `A relação mais importante da trigonometria:

sen²θ + cos²θ = 1

Isso vale para qualquer ângulo. Dela derivam outras identidades usadas para simplificar expressões em provas.`
    }
  ],

  relacionados: [
    { area: "matematica", id: "geometria-plana", nome: "Geometria Plana", motivo: "Base para entender triângulos" },
    { area: "historia", id: "matematica-antiga", nome: "Contexto histórico da Matemática", motivo: "Origem da trigonometria" }
  ],

  videoaulas: [
    { titulo: "Trigonometria do zero — ENEM", url: "https://www.youtube.com/results?search_query=trigonometria+enem+resumo" },
    { titulo: "Valores notáveis — macetes", url: "https://www.youtube.com/results?search_query=valores+notaveis+trigonometria" }
  ],

  simulado: [
    {
      pergunta: "Em um triângulo retângulo, o cateto oposto a um ângulo de 30° mede 5 cm. Qual é a hipotenusa?",
      alternativas: ["5 cm", "10 cm", "5√3 cm", "5√2 cm"],
      correta: 1,
      explicacao: "sen(30°) = 1/2. Como sen(30°) = cateto oposto / hipotenusa → 1/2 = 5/h → h = 10 cm."
    },
    {
      pergunta: "Qual é o valor de sen²(45°) + cos²(45°)?",
      alternativas: ["0", "√2", "1", "2"],
      correta: 2,
      explicacao: "Pela identidade fundamental, sen²θ + cos²θ = 1 para qualquer ângulo θ."
    },
    {
      pergunta: "A tangente de 60° é igual a:",
      alternativas: ["1", "√2/2", "√3/3", "√3"],
      correta: 3,
      explicacao: "tg(60°) = sen(60°)/cos(60°) = (√3/2)/(1/2) = √3."
    },
    {
      pergunta: "Se cos(θ) = 3/5, qual é o valor de sen(θ) em um triângulo retângulo?",
      alternativas: ["4/5", "3/4", "5/3", "1/5"],
      correta: 0,
      explicacao: "Pela identidade: sen²θ = 1 - cos²θ = 1 - 9/25 = 16/25. Logo sen(θ) = 4/5."
    }
  ]
}
