const ASSUNTO_GENETICA = {
  id: "genetica",
  area: "ciencias_natureza",
  nome: "Genética Mendeliana",
  nivel: "medio",
  descricao: "Leis de Mendel, herança e probabilidade",

  resumoRapido: `Genética estuda a herança das características dos seres vivos.

Conceitos essenciais:
• Gene: trecho de DNA que codifica uma característica
• Alelo: versão alternativa de um gene
• Dominante (D): se manifesta mesmo em dose única
• Recessivo (r): só se manifesta em dose dupla (rr)

Cruzamento Dd × Dd:
• 25% DD | 50% Dd | 25% dd
• 75% fenótipo dominante | 25% fenótipo recessivo`,

  resumoDetalhado: [
    {
      titulo: "1ª Lei de Mendel — Lei da Segregação",
      conteudo: `"Cada característica é determinada por um par de fatores que se separam na formação dos gametas, indo um fator para cada gameta."

Exemplo clássico: cor da ervilha
• Amarela (A) × Verde (a)
• P: AA × aa
• F1: todos Aa (amarelos — A é dominante)
• F2 (Aa × Aa): 3 amarelos : 1 verde`
    },
    {
      titulo: "Quadro de Punnett",
      conteudo: `Ferramenta para calcular as proporções de descendentes.

Cruzamento Aa × Aa:
       A    a
  A | AA  | Aa |
  a | Aa  | aa |

Resultado: 1 AA : 2 Aa : 1 aa
Genótipos: 25% AA, 50% Aa, 25% aa
Fenótipos: 75% dominante, 25% recessivo`
    },
    {
      titulo: "Conceitos importantes",
      conteudo: `• Genótipo: constituição genética (ex: Aa, AA, aa)
• Fenótipo: característica observável (ex: olho azul)
• Homozigoto dominante: AA
• Homozigoto recessivo: aa
• Heterozigoto: Aa (portador do gene recessivo)

Doenças recessivas (só aparecem em aa):
• Albinismo, fibrose cística, fenilcetonúria`
    }
  ],

  relacionados: [
    { area: "ciencias_natureza", id: "celula", nome: "A Célula", motivo: "O DNA — base da genética — fica no núcleo" }
  ],

  videoaulas: [
    { titulo: "Genética Mendeliana — ENEM", url: "https://www.youtube.com/results?search_query=genetica+mendeliana+enem" },
    { titulo: "Quadro de Punnett explicado", url: "https://www.youtube.com/results?search_query=quadro+de+punnett+exercicios" }
  ],

  simulado: [
    {
      pergunta: "Dois indivíduos heterozigotos (Aa × Aa) se reproduzem. Qual a probabilidade de um filho homozigoto recessivo (aa)?",
      alternativas: ["75%", "50%", "25%", "0%"],
      correta: 2,
      explicacao: "No cruzamento Aa × Aa, o quadro de Punnett dá: 1AA, 2Aa, 1aa. Logo, 1/4 = 25% de chance de aa."
    },
    {
      pergunta: "Um alelo recessivo para albinismo só se manifesta quando:",
      alternativas: ["O indivíduo é heterozigoto (Aa)", "O indivíduo é homozigoto recessivo (aa)", "O alelo dominante está presente", "O indivíduo é do sexo feminino"],
      correta: 1,
      explicacao: "Alelos recessivos só se manifestam no fenótipo quando o indivíduo possui dois alelos recessivos (aa), pois o alelo dominante mascara o recessivo."
    }
  ]
}
