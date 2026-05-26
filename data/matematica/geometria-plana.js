// =============================================
// ASSUNTO: Geometria Plana
// Área: Matemática
// =============================================
// Como preencher este arquivo:
//
// id:          identificador único do assunto
// area:        id da área pai
// nome:        nome exibido na interface
// nivel:       "basico" | "medio" | "avancado"
// descricao:   frase curta para os cards
//
// resumoDetalhado: blocos de conteúdo em ordem:
//   { tipo: "titulo",    conteudo: "..." }   → título de seção
//   { tipo: "paragrafo", conteudo: "..." }   → texto explicativo
//   { tipo: "imagem",    conteudo: "query" } → imagem do Google Imagens
//   { tipo: "video",     conteudo: "url" }   → embed YouTube no meio do conteúdo
//
// flashcards: perguntas conceituais (separadas do simulado)
//   { pergunta: "...", resposta: "..." }
//
// simulado: questões estilo ENEM
//   { contexto: "...", pergunta: "...", alternativas: [...], correta: N, explicacao: "..." }
// =============================================

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
    { tipo: "titulo",    conteudo: "Triângulos" },
    { tipo: "paragrafo", conteudo: "Área = (base × altura) / 2\n\nTipos:\n• Equilátero: 3 lados iguais, todos os ângulos = 60°\n• Isósceles: 2 lados iguais\n• Escaleno: todos os lados diferentes\n\nTeorema de Pitágoras: a² = b² + c²\n(onde a = hipotenusa, b e c = catetos)" },
    { tipo: "imagem",    conteudo: "types of triangles geometry diagram" },

    { tipo: "titulo",    conteudo: "Quadriláteros" },
    { tipo: "paragrafo", conteudo: "• Quadrado: Área = lado² | Perímetro = 4 × lado\n• Retângulo: Área = base × altura | Perímetro = 2(b + h)\n• Paralelogramo: Área = base × altura\n• Trapézio: Área = (B + b) × h / 2\n  B = base maior, b = base menor, h = altura" },
    { tipo: "imagem",    conteudo: "quadrilaterals area formulas diagram square rectangle trapezoid" },

    { tipo: "titulo",    conteudo: "Círculo" },
    { tipo: "paragrafo", conteudo: "Área = π × r²\nComprimento = 2 × π × r\n\nπ ≈ 3,14159...\n\nDica ENEM: geralmente usam π = 3 ou deixam o resultado em termos de π." },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/9xzLFGBCQv8" },
  ],

  flashcards: [
    { pergunta: "Qual é a fórmula da área do triângulo?",            resposta: "Área = (base × altura) / 2" },
    { pergunta: "Qual é a fórmula da área do círculo?",              resposta: "Área = π × r²" },
    { pergunta: "O que diz o Teorema de Pitágoras?",                 resposta: "Em todo triângulo retângulo: a² = b² + c², onde a é a hipotenusa e b, c são os catetos." },
    { pergunta: "Qual é a fórmula do perímetro do círculo?",         resposta: "P = 2 × π × r" },
    { pergunta: "Como calcular a área de um trapézio?",              resposta: "Área = (Base maior + base menor) × altura / 2" },
    { pergunta: "Qual a diferença entre área e perímetro?",          resposta: "Área é a superfície interna da figura. Perímetro é a soma de todos os lados (contorno)." },
    { pergunta: "Quais são os tipos de triângulo quanto aos lados?", resposta: "Equilátero (3 lados iguais), Isósceles (2 iguais), Escaleno (todos diferentes)." },
    { pergunta: "Qual é a tripla pitagórica mais famosa?",           resposta: "3, 4 e 5 — pois 3² + 4² = 5² (9 + 16 = 25)." },
  ],

  relacionados: [
    { area: "matematica", id: "trigonometria", nome: "Trigonometria", motivo: "Trigonometria usa triângulos como base" }
  ],

  videoaulas: [
    { titulo: "Geometria Plana — ENEM completo", url: "https://www.youtube.com/results?search_query=geometria+plana+enem+completo" }
  ],

  simulado: [
    {
      contexto: "Uma construtora precisa assentar piso em um cômodo retangular de 6 metros de comprimento por 4 metros de largura. No centro do cômodo há uma coluna circular com 1 metro de raio que não receberá piso. Considere π = 3.",
      pergunta: "Qual é a área efetiva de piso a ser assentado?",
      alternativas: ["21 m²", "24 m²", "20 m²", "18 m²"],
      correta: 0,
      explicacao: "Área do retângulo = 6 × 4 = 24 m². Área do círculo = π × r² = 3 × 1² = 3 m². Área efetiva = 24 - 3 = 21 m²."
    },
    {
      contexto: "Em uma obra, um pedreiro precisa verificar se um canto de parede está em ângulo reto. Ele mede 3 metros em uma direção e 4 metros na outra. Se a diagonal medir exatamente 5 metros, o ângulo é reto.",
      pergunta: "Com base no Teorema de Pitágoras, a diagonal de 5 metros confirma o ângulo reto porque:",
      alternativas: ["3 + 4 = 5 + 2", "3² + 4² = 5²", "3 × 4 = 5 × 2 + 2", "3² × 4² = 5²"],
      correta: 1,
      explicacao: "3² + 4² = 9 + 16 = 25 = 5². Isso confirma que o triângulo formado é retângulo, garantindo o ângulo de 90°."
    },
  ]
}
