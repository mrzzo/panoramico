// =============================================
// ASSUNTO: Lubrificação Industrial
// Área: Noções de Manutenção Mecânica
// =============================================
// Blocos do resumoDetalhado:
//   { tipo: "titulo",    conteudo: "..." }
//   { tipo: "paragrafo", conteudo: "..." }
//   { tipo: "imagem",    conteudo: "query Google Imagens" }
//   { tipo: "imagem-url", conteudo: "URL direta" }
//   { tipo: "video",     conteudo: "URL embed YouTube" }
//
// flashcards: { pergunta, resposta } — conceituais, separados do simulado
// simulado:   { contexto, pergunta, alternativas, correta, explicacao }
// =============================================

const ASSUNTO_LUBRIFICACAO_INDUSTRIAL = {
  id: "lubrificacao-industrial",
  area: "nocoes_de_manutencao_mecanica",
  nome: "Lubrificação Industrial",
  nivel: "basico",

  descricao: "Conceitos básicos sobre lubrificação industrial, tipos de lubrificantes, propriedades dos óleos e aplicações das graxas.",

  resumoRapido: `Lubrificação industrial é a aplicação controlada de fluidos ou substâncias entre as partes móveis de maquinários para reduzir atrito, desgaste e aquecimento.

Os principais lubrificantes são:
• Óleos lubrificantes
• Graxas lubrificantes

Funções da lubrificação:
1. Reduzir atrito e desgaste (gera limalha)
2. Controlar temperatura
3. Proteger contra corrosão
4. Limpeza e vedação
5. Redução de ruídos

Tipos de óleo:
• Mineral
• Sintético
• Semissintético

Características importantes:
1. Viscosidade
2. Densidade
3. Ponto de fulgor
4. Ponto de combustão
5. Ponto de fluidez
6. Cristalização
7. Ponto de névoa
8. Acidez
9. Alcalinidade
10. Demulsibilidade`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "O que é Lubrificação Industrial?" },
    { tipo: "paragrafo", conteudo: "Lubrificação industrial é a aplicação controlada de fluidos ou substâncias lubrificantes entre partes móveis de máquinas e equipamentos. Seu objetivo é reduzir o atrito, diminuir o desgaste e aumentar a vida útil dos componentes mecânicos." },
    { tipo: "imagem-url", conteudo: "https://gesrepair.com/wp-content/uploads/shutterstock_1846832668.jpg" },

    { tipo: "titulo",    conteudo: "Principais Funções da Lubrificação" },
    { tipo: "paragrafo", conteudo: "1. Reduzir atrito e desgaste (limalha)\n2. Controlar temperatura\n3. Proteger contra corrosão\n4. Limpeza e vedação\n5. Redução de ruídos" },

    { tipo: "titulo",    conteudo: "Tipos de Lubrificantes" },
    { tipo: "paragrafo", conteudo: "Os lubrificantes podem ser classificados em:\n\n• Líquidos: óleos lubrificantes\n• Semissólidos: graxas\n• Sólidos: grafite, dissulfeto de molibdênio e películas lubrificantes" },

    { tipo: "titulo",    conteudo: "Métodos de Aplicação" },
    { tipo: "paragrafo", conteudo: "A lubrificação pode ser feita manualmente ou por sistemas automáticos.\n\n• Manual: aplicação feita diretamente pelo operador\n• Automática: sistemas que distribuem lubrificante continuamente ou em intervalos programados" },

    { tipo: "titulo",    conteudo: "Composição dos Óleos Lubrificantes" },
    { tipo: "paragrafo", conteudo: "• Óleo mineral: derivado do refino do petróleo. Possui menor custo, porém contém mais impurezas e menor estabilidade.\n• Óleo sintético: produzido em laboratório. Possui maior pureza, desempenho e resistência térmica.\n• Óleo semissintético: mistura entre óleo mineral e sintético, oferecendo equilíbrio entre desempenho e custo." },
    { tipo: "imagem-url", conteudo: "https://www.maconresearch.com/hs-fs/hub/399257/file-2081002402.png" },

    { tipo: "titulo",    conteudo: "Características dos Óleos Lubrificantes" },
    { tipo: "paragrafo", conteudo: "1. Viscosidade: resistência do óleo ao escoamento.\n2. Densidade: massa em determinada unidade de volume.\n3. Ponto de fulgor: temperatura em que o óleo libera vapores inflamáveis.\n4. Ponto de combustão: temperatura em que o óleo entra em combustão contínua.\n5. Ponto de fluidez: menor temperatura em que o óleo ainda consegue escoar.\n6. Cristalização: temperatura em que o óleo começa a solidificar.\n7. Ponto de névoa: formação de partículas de óleo suspensas no ar.\n8. Acidez: presença de componentes ácidos no óleo.\n9. Alcalinidade: capacidade de neutralizar ácidos.\n10. Demulsibilidade: capacidade do óleo de se separar da água." },

    { tipo: "titulo",    conteudo: "Graxas Lubrificantes" },
    { tipo: "paragrafo", conteudo: "As graxas lubrificantes são substâncias semissólidas compostas por óleo base, espessantes e aditivos. São utilizadas em locais onde o óleo líquido não permanece adequadamente." },
    { tipo: "imagem-url", conteudo: "https://www.micro-lube.com/wp-content/webp-express/webp-images/uploads/2024/04/Bearing-Lubrication.jpg.webp" },

    { tipo: "titulo",    conteudo: "Tipos de Sabão Metálico" },
    { tipo: "paragrafo", conteudo: "Os espessantes mais utilizados nas graxas são:\n\n• Lítio\n• Cálcio\n• Alumínio\n• Zinco\n• Magnésio" },

    { tipo: "titulo",    conteudo: "Cores das Graxas" },
    { tipo: "paragrafo", conteudo: "A cor da graxa não segue uma padronização universal, variando conforme o fabricante. Porém, algumas cores costumam ser associadas a determinadas aplicações:\n\n• Vermelha: altas temperaturas e alta pressão\n• Azul: maior resistência à água\n• Verde: alta velocidade e resistência à oxidação\n• Branca: indústria alimentícia\n• Amarela: aplicações em temperaturas extremas\n• Preta ou marrom: cargas pesadas" },
  ],

  flashcards: [
    // ── Conceitos básicos ──
    { pergunta: "O que é lubrificação industrial?",                          resposta: "É a aplicação controlada de lubrificantes entre partes móveis para reduzir atrito e desgaste." },
    { pergunta: "Quais são os principais tipos de lubrificantes?",           resposta: "Óleos (líquidos), graxas (semissólidos) e lubrificantes sólidos (grafite, MoS₂)." },
    { pergunta: "Quais são as 5 funções principais da lubrificação?",        resposta: "1. Reduzir atrito/desgaste  2. Controlar temperatura  3. Proteger contra corrosão  4. Limpeza e vedação  5. Redução de ruídos" },

    // ── Tipos de óleo ──
    { pergunta: "Qual a diferença entre óleo mineral e sintético?",          resposta: "O mineral vem do petróleo (menor custo, mais impurezas). O sintético é produzido em laboratório (maior pureza e desempenho)." },
    { pergunta: "O que é óleo semissintético?",                              resposta: "Mistura de óleo mineral com sintético, equilibrando desempenho e custo." },
    { pergunta: "Em que situação o óleo sintético é preferível ao mineral?", resposta: "Quando a máquina opera em temperaturas extremas ou exige maior estabilidade e menor contaminação." },

    // ── Propriedades dos óleos ──
    { pergunta: "O que é viscosidade?",                                      resposta: "A resistência do óleo ao escoamento. Óleo muito viscoso é espesso; pouco viscoso é fluido." },
    { pergunta: "O que é ponto de fulgor?",                                  resposta: "Temperatura em que o óleo libera vapores inflamáveis (ainda não entra em combustão contínua)." },
    { pergunta: "Qual a diferença entre ponto de fulgor e ponto de combustão?", resposta: "Fulgor: libera vapores inflamáveis. Combustão: entra em combustão contínua (temperatura maior)." },
    { pergunta: "O que é ponto de fluidez?",                                 resposta: "A menor temperatura em que o óleo ainda consegue escoar." },
    { pergunta: "O que é demulsibilidade?",                                  resposta: "Capacidade do óleo de se separar da água." },
    { pergunta: "O que é alcalinidade no óleo?",                             resposta: "Capacidade do óleo de neutralizar ácidos formados durante o funcionamento." },
    { pergunta: "O que é acidez no óleo?",                                   resposta: "Presença de componentes ácidos — indica degradação do lubrificante." },
    { pergunta: "O que é cristalização do óleo?",                            resposta: "Temperatura em que o óleo começa a solidificar, perdendo capacidade de escoar." },
    { pergunta: "O que é o ponto de névoa?",                                 resposta: "Temperatura em que se formam partículas de óleo suspensas no ar, reduzindo a transparência." },

    // ── Graxas ──
    { pergunta: "Por que usar graxa em vez de óleo em alguns componentes?",  resposta: "Porque a graxa permanece no local de aplicação onde o óleo líquido escorreria." },
    { pergunta: "De que é composta uma graxa lubrificante?",                 resposta: "Óleo base + espessante (sabão metálico) + aditivos." },
    { pergunta: "Quais são os sabões metálicos mais usados em graxas?",      resposta: "Lítio, cálcio, alumínio, zinco e magnésio." },
    { pergunta: "A cor da graxa define obrigatoriamente sua aplicação?",     resposta: "Não. As cores variam conforme o fabricante e não seguem padrão universal." },
    { pergunta: "Qual cor de graxa é associada à indústria alimentícia?",    resposta: "Branca — por não causar contaminação visual visível." },
    { pergunta: "Qual cor de graxa é usada em cargas pesadas?",              resposta: "Preta ou marrom." },
    { pergunta: "Qual cor de graxa é associada a altas temperaturas e pressão?", resposta: "Vermelha." },

    // ── Aplicação ──
    { pergunta: "Qual a vantagem da lubrificação automática sobre a manual?", resposta: "Garante aplicação contínua e em intervalos programados, reduzindo falhas humanas." },
    { pergunta: "Cite um lubrificante sólido.",                               resposta: "Grafite ou dissulfeto de molibdênio (MoS₂) — usados em condições extremas ou vácuo." },
  ],

  relacionados: [],

  videoaulas: [
    { titulo: "Lubrificação Industrial — conceitos básicos", url: "https://www.youtube.com/results?search_query=lubrificacao+industrial" },
    { titulo: "Óleos e graxas lubrificantes",                url: "https://www.youtube.com/results?search_query=oleos+e+graxas+lubrificantes" }
  ],

  simulado: [
    {
      contexto: "Durante a manutenção de um equipamento industrial, um técnico observou aumento excessivo de temperatura e desgaste entre engrenagens.",
      pergunta: "Qual é a principal função da lubrificação nesse caso?",
      alternativas: ["Aumentar o atrito", "Reduzir o desgaste e controlar a temperatura", "Aumentar a pressão do sistema", "Eliminar a necessidade de manutenção"],
      correta: 1,
      explicacao: "A lubrificação reduz o atrito entre peças móveis, diminuindo desgaste e aquecimento."
    },
    {
      contexto: "Uma indústria precisa de um lubrificante com maior estabilidade térmica e menor quantidade de impurezas.",
      pergunta: "Qual tipo de óleo é mais indicado?",
      alternativas: ["Óleo vegetal", "Óleo mineral", "Óleo sintético", "Graxa sólida"],
      correta: 2,
      explicacao: "Óleos sintéticos possuem maior pureza, estabilidade térmica e desempenho."
    },
    {
      contexto: "Em determinado sistema mecânico, o lubrificante precisa manter capacidade de escoamento mesmo em baixas temperaturas.",
      pergunta: "Qual propriedade deve ser analisada?",
      alternativas: ["Acidez", "Ponto de fluidez", "Densidade", "Cristalização"],
      correta: 1,
      explicacao: "O ponto de fluidez indica a menor temperatura em que o óleo ainda consegue escoar."
    },
    {
      contexto: "Uma fábrica percebeu aumento no consumo de energia elétrica em motores industriais. Após análise, verificou-se que havia falta de lubrificação adequada nos componentes móveis.",
      pergunta: "Qual consequência direta a falta de lubrificação pode causar?",
      alternativas: ["Redução do atrito entre peças", "Diminuição da temperatura", "Aumento do atrito e desgaste", "Melhora da eficiência mecânica"],
      correta: 2,
      explicacao: "Sem lubrificação adequada, o atrito aumenta, causando maior desgaste e aquecimento das peças."
    },
    {
      contexto: "Durante uma inspeção, um técnico identificou presença excessiva de água misturada ao óleo lubrificante de uma máquina industrial.",
      pergunta: "Qual propriedade do óleo está relacionada à capacidade de separação da água?",
      alternativas: ["Viscosidade", "Demulsibilidade", "Acidez", "Densidade"],
      correta: 1,
      explicacao: "Demulsibilidade é a capacidade do óleo de se separar da água."
    },
    {
      contexto: "Um equipamento opera em temperaturas extremamente elevadas e exige maior estabilidade térmica do lubrificante.",
      pergunta: "Qual lubrificante apresenta melhor desempenho nessa condição?",
      alternativas: ["Óleo mineral", "Óleo sintético", "Água desmineralizada", "Graxa comum"],
      correta: 1,
      explicacao: "Óleos sintéticos suportam temperaturas mais elevadas e possuem maior estabilidade térmica."
    },
    {
      contexto: "Um operador percebeu que o óleo de uma máquina estava muito espesso, dificultando sua circulação no sistema.",
      pergunta: "Qual característica do óleo está diretamente relacionada a essa resistência ao escoamento?",
      alternativas: ["Acidez", "Viscosidade", "Demulsibilidade", "Cristalização"],
      correta: 1,
      explicacao: "Viscosidade é a resistência que o óleo apresenta ao escoamento."
    },
    {
      contexto: "Em determinados componentes mecânicos, utiliza-se graxa em vez de óleo lubrificante.",
      pergunta: "Qual é a principal vantagem da graxa nesse tipo de aplicação?",
      alternativas: ["Evaporar rapidamente", "Facilitar corrosão", "Permanecer em locais onde o óleo escorreria", "Eliminar completamente o atrito"],
      correta: 2,
      explicacao: "A graxa é usada em locais onde o óleo líquido não consegue permanecer adequadamente."
    },
    {
      contexto: "Uma indústria alimentícia precisa lubrificar equipamentos sem risco elevado de contaminação visual.",
      pergunta: "Qual cor de graxa é frequentemente associada a esse tipo de aplicação?",
      alternativas: ["Preta", "Vermelha", "Branca", "Marrom"],
      correta: 2,
      explicacao: "Graxas brancas costumam ser associadas a aplicações em indústrias alimentícias."
    },
    {
      contexto: "Durante um treinamento, um professor explicou que determinado óleo começa a liberar vapores inflamáveis antes de entrar em combustão contínua.",
      pergunta: "Esse fenômeno corresponde a qual propriedade?",
      alternativas: ["Ponto de combustão", "Ponto de fluidez", "Ponto de fulgor", "Densidade"],
      correta: 2,
      explicacao: "O ponto de fulgor é a temperatura em que o óleo libera vapores inflamáveis."
    },
    {
      contexto: "Uma máquina industrial opera sob cargas extremamente pesadas e necessita de lubrificação resistente à pressão.",
      pergunta: "Qual tipo de graxa costuma ser associado a aplicações com cargas elevadas?",
      alternativas: ["Branca", "Verde", "Preta ou marrom", "Azul"],
      correta: 2,
      explicacao: "Graxas pretas ou marrons geralmente são associadas a aplicações com cargas pesadas."
    },
    {
      contexto: "Um técnico verificou que determinado óleo possuía alta capacidade de neutralizar compostos ácidos formados durante o funcionamento do motor.",
      pergunta: "Qual característica está relacionada a essa capacidade?",
      alternativas: ["Alcalinidade", "Viscosidade", "Cristalização", "Densidade"],
      correta: 0,
      explicacao: "A alcalinidade representa a capacidade do óleo de neutralizar ácidos."
    },
    {
      contexto: "Uma empresa deseja automatizar o processo de lubrificação de máquinas para garantir aplicação contínua e reduzir falhas humanas.",
      pergunta: "Qual método de aplicação é mais adequado?",
      alternativas: ["Lubrificação manual", "Lubrificação automática", "Lubrificação seca", "Lubrificação por água"],
      correta: 1,
      explicacao: "Sistemas automáticos aplicam lubrificante continuamente ou em intervalos programados."
    },

    // ── Novas questões ──
    {
      contexto: "Um técnico de manutenção precisa selecionar um lubrificante para um sistema que opera com cargas altas e em contato frequente com água.",
      pergunta: "Qual propriedade da graxa é mais importante nesse caso?",
      alternativas: ["Alta viscosidade", "Resistência à água", "Cor branca", "Baixo ponto de fluidez"],
      correta: 1,
      explicacao: "Em ambientes úmidos, a graxa deve ter alta resistência à água para não ser lavada dos componentes. Graxas azuis costumam ser associadas a essa característica."
    },
    {
      contexto: "Durante análise laboratorial de um óleo lubrificante usado, o laudo apontou aumento significativo do índice de acidez em relação ao óleo novo.",
      pergunta: "O que esse resultado indica sobre o estado do lubrificante?",
      alternativas: ["O óleo está em perfeitas condições", "O óleo está degradado e pode corroer peças", "O óleo ficou mais viscoso", "A demulsibilidade aumentou"],
      correta: 1,
      explicacao: "O aumento de acidez indica degradação do óleo. Ácidos formados durante o uso podem corroer peças metálicas, sendo necessária a troca do lubrificante."
    },
    {
      contexto: "Uma planta industrial trabalha 24 horas por dia. Os equipamentos possuem pontos de lubrificação de difícil acesso e que requerem reposição frequente.",
      pergunta: "Qual solução é mais indicada para garantir lubrificação adequada sem parar a produção?",
      alternativas: ["Aumentar o intervalo entre manutenções", "Instalar sistemas de lubrificação automática", "Substituir os equipamentos por novos", "Usar apenas graxa sólida"],
      correta: 1,
      explicacao: "Sistemas automáticos de lubrificação garantem aplicação contínua e programada, sem necessidade de parar a produção ou exposição do operador a locais de difícil acesso."
    },
    {
      contexto: "Um lubrificante sólido à base de grafite é recomendado para determinada aplicação industrial em ambiente de vácuo.",
      pergunta: "Por que lubrificantes sólidos como o grafite são usados em condições extremas como vácuo ou altíssimas temperaturas?",
      alternativas: ["Por terem menor custo que os óleos", "Por não necessitarem de nenhuma aplicação", "Por manterem propriedades lubrificantes onde óleos e graxas se degradariam", "Por serem mais viscosos que os óleos"],
      correta: 2,
      explicacao: "Lubrificantes sólidos como grafite e dissulfeto de molibdênio (MoS₂) mantêm suas propriedades em condições extremas de temperatura, pressão ou vácuo, onde óleos e graxas se evaporariam ou degradariam."
    },
    {
      contexto: "Ao analisar dois óleos lubrificantes com viscosidades diferentes, um técnico percebeu que o óleo A escoa muito mais facilmente que o óleo B na mesma temperatura.",
      pergunta: "Qual afirmação está correta sobre esses óleos?",
      alternativas: ["O óleo A tem maior viscosidade que o B", "O óleo B tem maior viscosidade que o A", "Ambos têm a mesma viscosidade", "A viscosidade não afeta o escoamento"],
      correta: 1,
      explicacao: "Viscosidade é a resistência ao escoamento. Se o óleo B escoa com mais dificuldade, ele apresenta maior viscosidade que o óleo A."
    },
    {
      contexto: "Uma graxa lubrificante vermelha é indicada para determinado equipamento que opera em altas temperaturas e pressões elevadas.",
      pergunta: "Qual espessante (sabão metálico) costuma ser utilizado em graxas para aplicações de alta temperatura?",
      alternativas: ["Cálcio", "Zinco", "Lítio complexo ou alumínio complexo", "Magnésio"],
      correta: 2,
      explicacao: "Graxas para altas temperaturas geralmente utilizam espessantes complexos, como lítio complexo ou alumínio complexo, que oferecem maior resistência térmica."
    },
  ]
}