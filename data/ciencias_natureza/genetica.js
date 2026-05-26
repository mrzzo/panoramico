// =============================================
// ASSUNTO: Genética Mendeliana
// Área: Ciências da Natureza
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

const ASSUNTO_GENETICA = {
  id: "genetica",
  area: "ciencias_natureza",
  nome: "Genética Mendeliana",
  nivel: "medio",
  descricao: "Leis de Mendel, herança e probabilidade",

  resumoRapido: `Genética estuda a herança das características dos seres vivos.

Conceitos essenciais:
• Gene: trecho de DNA que codifica uma característica
• Alelo dominante (D): manifesta-se mesmo em dose única
• Alelo recessivo (r): só aparece em dose dupla (rr)

Cruzamento Aa × Aa:
• 25% AA | 50% Aa | 25% aa
• 75% fenótipo dominante | 25% recessivo`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "1ª Lei de Mendel — Segregação" },
    { tipo: "paragrafo", conteudo: "\"Cada característica é determinada por um par de fatores que se separam na formação dos gametas, indo um fator para cada gameta.\"\n\nExemplo: cor da ervilha\n• P: AA (amarela) × aa (verde)\n• F1: todos Aa → amarelos (A domina)\n• F2 (Aa × Aa): 3 amarelos : 1 verde" },
    { tipo: "imagem",    conteudo: "Mendel pea plant genetics dominant recessive inheritance diagram" },

    { tipo: "titulo",    conteudo: "Quadro de Punnett" },
    { tipo: "paragrafo", conteudo: "Ferramenta para calcular proporções de descendentes.\n\nCruzamento Aa × Aa:\n\n       A    a\n  A | AA  | Aa |\n  a | Aa  | aa |\n\nResultado:\n• 1 AA : 2 Aa : 1 aa\n• 75% fenótipo dominante | 25% recessivo" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/CBezq1fFUEA" },

    { tipo: "titulo",    conteudo: "Conceitos fundamentais" },
    { tipo: "paragrafo", conteudo: "• Genótipo: constituição genética (AA, Aa, aa)\n• Fenótipo: característica observável (cor dos olhos)\n• Homozigoto dominante: AA\n• Homozigoto recessivo: aa\n• Heterozigoto: Aa (portador do gene recessivo)\n\nExemplos de doenças recessivas:\nAlbinismo, fibrose cística, fenilcetonúria" },
    { tipo: "imagem",    conteudo: "genotype phenotype homozygous heterozygous genetics chart" },
  ],

  flashcards: [
    { pergunta: "O que é genótipo?",                                       resposta: "A constituição genética do indivíduo (ex: AA, Aa, aa)." },
    { pergunta: "O que é fenótipo?",                                       resposta: "A característica observável resultante do genótipo (ex: cor dos olhos, tipo sanguíneo)." },
    { pergunta: "O que é um alelo dominante?",                             resposta: "Alelo que se manifesta no fenótipo mesmo em dose única (heterozigoto)." },
    { pergunta: "Quando o alelo recessivo se manifesta?",                   resposta: "Apenas quando o indivíduo é homozigoto recessivo (aa)." },
    { pergunta: "O que é o Quadro de Punnett?",                            resposta: "Diagrama usado para prever as proporções genotípicas e fenotípicas dos descendentes." },
    { pergunta: "Qual a proporção fenotípica de Aa × Aa?",                 resposta: "3 dominantes : 1 recessivo (75% dominante, 25% recessivo)." },
    { pergunta: "O que é um indivíduo heterozigoto?",                      resposta: "Possui dois alelos diferentes para uma característica (ex: Aa). Pode ser portador de doença recessiva." },
    { pergunta: "Cite uma doença de herança recessiva.",                    resposta: "Albinismo, fibrose cística ou fenilcetonúria — só se manifestam em homozigotos recessivos (aa)." },
  ],

  relacionados: [
    { area: "ciencias_natureza", id: "celula", nome: "A Célula", motivo: "O DNA — base da genética — fica no núcleo" }
  ],

  videoaulas: [
    { titulo: "Genética Mendeliana — ENEM", url: "https://www.youtube.com/results?search_query=genetica+mendeliana+enem" }
  ],

  simulado: [
    {
      contexto: "O albinismo é uma condição genética causada pela ausência de melanina, o pigmento que dá cor à pele, cabelos e olhos. É determinada por um gene autossômico recessivo. Dois indivíduos com pigmentação normal, mas portadores do alelo para albinismo (Aa), têm um filho.",
      pergunta: "Qual é a probabilidade de esse filho ser albino?",
      alternativas: ["0%", "25%", "50%", "75%"],
      correta: 1,
      explicacao: "Cruzamento Aa × Aa. Quadro de Punnett: AA (25%), Aa (50%), aa (25%). O filho albino é o homozigoto recessivo aa → probabilidade de 25%."
    },
    {
      contexto: "Em seu experimento clássico com ervilhas, Gregor Mendel cruzou plantas de flores roxas (PP) com plantas de flores brancas (pp). Na geração F1, todas as plantas apresentaram flores roxas. Ao cruzar as plantas F1 entre si, Mendel obteve uma proporção de 3 roxas para 1 branca na geração F2.",
      pergunta: "Qual conclusão esse experimento permitiu a Mendel formular?",
      alternativas: [
        "As características se misturam e somem nas gerações seguintes",
        "Os fatores hereditários se separam na formação dos gametas e um deles é dominante sobre o outro",
        "A cor roxa é mais forte biologicamente que a branca",
        "Plantas F1 são geneticamente idênticas às plantas originais"
      ],
      correta: 1,
      explicacao: "O experimento levou à 1ª Lei de Mendel: os fatores hereditários se segregam na formação dos gametas. O fator roxo (P) é dominante sobre o branco (p), por isso F1 é toda roxa (Pp) mas F2 resgata o branco (pp) em 25%."
    },
  ]
}
