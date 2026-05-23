const ASSUNTO_GEOMETRIA_PLANA = {
  id: "geometria-plana",
  area: "matematica",
  nome: "Geometria Plana",
  nivel: "basico",
  descricao: "Figuras 2D: áreas, perímetros e teoremas",

  resumoRapido: `Geometria Plana estuda figuras em duas dimensões.

Principais fórmulas:
• Triângulo: Área = (base × altura) / 2
• Retângulo: Área = base × altura
• Quadrado: Área = lado²
• Círculo: Área = π·r² | Perímetro = 2πr
• Trapézio: Área = (B + b) × h / 2

Teorema de Pitágoras (triângulo retângulo):
a² = b² + c²`,

  resumoDetalhado: [
    {
      titulo: "Triângulos",
      conteudo: `Área = (base × altura) / 2

Tipos de triângulo:
• Equilátero: 3 lados iguais, todos os ângulos = 60°
• Isósceles: 2 lados iguais
• Escaleno: todos os lados diferentes

Teorema de Pitágoras: a² = b² + c²
(onde a = hipotenusa, b e c = catetos)`
    },
    {
      titulo: "Quadriláteros",
      conteudo: `• Quadrado: Área = lado² | Perímetro = 4 × lado
• Retângulo: Área = base × altura | Perímetro = 2(b + h)
• Paralelogramo: Área = base × altura
• Trapézio: Área = (B + b) × h / 2
  B = base maior, b = base menor, h = altura`
    },
    {
      titulo: "Círculo",
      conteudo: `Área = π × r²
Comprimento (perímetro) = 2 × π × r

π ≈ 3,14159...

Dica ENEM: geralmente usam π = 3 ou deixam o resultado em termos de π.

Setor circular:
Área = (α / 360°) × π × r²`
    }
  ],

  relacionados: [
    { area: "matematica", id: "trigonometria", nome: "Trigonometria", motivo: "Trigonometria usa triângulos como base" }
  ],

  videoaulas: [
    { titulo: "Geometria Plana — ENEM completo", url: "https://www.youtube.com/results?search_query=geometria+plana+enem+completo" }
  ],

  simulado: [
    {
      pergunta: "Um quadrado tem diagonal de 8 cm. Qual é a sua área?",
      alternativas: ["16 cm²", "32 cm²", "64 cm²", "24 cm²"],
      correta: 1,
      explicacao: "Diagonal do quadrado = lado × √2 → lado = 8/√2 = 4√2. Área = lado² = (4√2)² = 32 cm²."
    },
    {
      pergunta: "Um círculo tem raio de 5 cm. Usando π = 3, sua área é:",
      alternativas: ["15 cm²", "30 cm²", "75 cm²", "150 cm²"],
      correta: 2,
      explicacao: "Área = π × r² = 3 × 25 = 75 cm²."
    },
    {
      pergunta: "Em um triângulo retângulo, os catetos medem 6 e 8 cm. A hipotenusa mede:",
      alternativas: ["10 cm", "12 cm", "14 cm", "√48 cm"],
      correta: 0,
      explicacao: "a² = 6² + 8² = 36 + 64 = 100 → a = 10 cm. (Tripla pitagórica clássica: 3-4-5 × 2)"
    }
  ]
}
