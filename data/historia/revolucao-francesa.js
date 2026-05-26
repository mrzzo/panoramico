// =============================================
// ASSUNTO: Revolução Francesa
// Área: História
// =============================================
// Blocos: titulo | paragrafo | imagem | video
// flashcards: { pergunta, resposta }
// simulado:   { contexto, pergunta, alternativas, correta, explicacao }
// =============================================

const ASSUNTO_REVOLUCAO_FRANCESA = {
  id: "revolucao-francesa",
  area: "historia",
  nome: "Revolução Francesa",
  nivel: "medio",
  descricao: "Causas, fases e consequências da Revolução de 1789",

  resumoRapido: `A Revolução Francesa (1789–1799) foi um dos maiores eventos da história moderna.

Causas:
• Crise financeira da monarquia
• Desigualdade entre os três estados
• Influência do Iluminismo

Fases:
1. Monarquia Constitucional (1789–1792)
2. Convenção / Terror (1792–1795)
3. Diretório (1795–1799)

Legado: "Liberdade, Igualdade, Fraternidade"`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "O Antigo Regime e as causas" },
    { tipo: "paragrafo", conteudo: "A França era dividida em três estados:\n• 1º Estado: clero (isento de impostos)\n• 2º Estado: nobreza (isenta de impostos)\n• 3º Estado: 97% da população — pagavam todos os impostos\n\nA crise financeira após guerras e colheitas ruins criou uma explosão social. O Iluminismo forneceu as ideias: razão, direitos naturais, soberania popular." },
    { tipo: "imagem",    conteudo: "French Revolution three estates social structure Ancien Regime" },

    { tipo: "titulo",    conteudo: "Os eventos de 1789" },
    { tipo: "paragrafo", conteudo: "• Maio 1789: Convocação dos Estados Gerais por Luís XVI\n• Junho 1789: Terceiro Estado forma a Assembleia Nacional\n• 14 de julho 1789: Queda da Bastilha\n• Agosto 1789: Declaração dos Direitos do Homem e do Cidadão\n• Outubro 1789: Marcha das mulheres a Versalhes" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/5fJl_ZX91l0" },

    { tipo: "titulo",    conteudo: "O Terror e o fim da Revolução" },
    { tipo: "paragrafo", conteudo: "1792–1795 — Fase mais radical:\n• Proclamação da República\n• Execução de Luís XVI (1793)\n• Robespierre lidera o Comitê de Salvação Pública\n• Guilhotina executa mais de 17.000 pessoas\n• Queda de Robespierre (Termidor, 1794)\n\n1799 — Golpe de 18 Brumário:\nNapoleão Bonaparte encerra a Revolução e torna-se Cônsul." },
    { tipo: "imagem",    conteudo: "Storming of the Bastille 1789 French Revolution painting" },
  ],

  flashcards: [
    { pergunta: "O que simbolizava a Bastilha?",                          resposta: "O poder absoluto da monarquia — era uma prisão estatal símbolo do absolutismo." },
    { pergunta: "Quais eram os três estados do Antigo Regime?",           resposta: "1º Estado: clero | 2º Estado: nobreza | 3º Estado: todos os outros (97% da população)." },
    { pergunta: "Qual foi o papel do Iluminismo na Revolução?",           resposta: "Forneceu as ideias de razão, direitos naturais e soberania popular que inspiraram os revolucionários." },
    { pergunta: "O que foi o período do Terror?",                         resposta: "Fase radical liderada por Robespierre (1793–1794) com execuções em massa pela guilhotina." },
    { pergunta: "Quem encerrou a Revolução Francesa?",                    resposta: "Napoleão Bonaparte, com o golpe de 18 Brumário em 1799." },
    { pergunta: "O que é a Declaração dos Direitos do Homem (1789)?",     resposta: "Documento que proclamou liberdade, igualdade e direitos naturais — base dos direitos humanos modernos." },
  ],

  relacionados: [],

  videoaulas: [
    { titulo: "Revolução Francesa — ENEM", url: "https://www.youtube.com/results?search_query=revolucao+francesa+enem+resumo" }
  ],

  simulado: [
    {
      contexto: "\"Todos os homens nascem e permanecem livres e iguais em direitos. As distinções sociais só podem ser fundadas na utilidade comum.\" — Declaração dos Direitos do Homem e do Cidadão, 1789.",
      pergunta: "Esse documento, elaborado durante a Revolução Francesa, reflete principalmente os ideais de qual corrente filosófica do século XVIII?",
      alternativas: ["Mercantilismo", "Absolutismo monárquico", "Iluminismo", "Positivismo"],
      correta: 2,
      explicacao: "A Declaração reflete o Iluminismo, que pregava a razão, os direitos naturais e a igualdade entre os homens. Filósofos como Locke, Rousseau e Voltaire influenciaram diretamente os revolucionários."
    },
    {
      contexto: "A Revolução Francesa dividiu a sociedade em fases distintas. Entre 1793 e 1794, o Comitê de Salvação Pública, liderado por Maximilien Robespierre, executou milhares de pessoas suspeitas de traição à República. Esse período ficou conhecido como o 'Terror'.",
      pergunta: "O período do Terror revela uma contradição central da Revolução Francesa porque:",
      alternativas: [
        "Restaurou os privilégios da nobreza e do clero",
        "Um movimento que pregava liberdade e igualdade passou a suprimir violentamente os direitos individuais",
        "Napoleão assumiu o poder durante o Terror",
        "A guilhotina foi criada pelos revolucionários para punir os pobres"
      ],
      correta: 1,
      explicacao: "O Terror é uma das contradições da Revolução: um movimento que prometia Liberdade, Igualdade e Fraternidade passou a executar sumariamente suspeitos, mostrando como revoluções podem descambar para o autoritarismo."
    },
  ]
}
