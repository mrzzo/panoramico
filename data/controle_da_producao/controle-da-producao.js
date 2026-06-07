// =============================================
// ASSUNTO: Controle da Produção
// Área: Controle da Produção
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

const ASSUNTO_CONTROLE_DA_PRODUCAO = {
  id: "controle-da-producao",
  area: "controle_da_producao",
  nome: "Controle da Produção",
  nivel: "basico",

  descricao: "Estoque, cronoanálise, balanceamento de linha, sequenciamento e indicadores de performance.",

  resumoRapido: `Controle da Produção é o conjunto de práticas que planejam, monitoram e otimizam os processos produtivos de uma empresa.

Principais temas:
• Estoque: armazenamento de insumos e produtos para atender à demanda
• Cronoanálise: medição e análise do tempo de execução das operações
• Balanceamento de linha: distribuição estratégica de tarefas entre postos
• Sequenciamento: definição da ordem exata das tarefas de produção
• Indicadores: métricas que medem eficiência, qualidade e entrega

Fórmula do TAKT Time:
TAKT = Tempo de produção disponível ÷ Demanda do cliente

OBS: Insumo = Matéria-Prima + Materiais Indiretos`,

  resumoDetalhado: [

    // ── ESTOQUE ──
    { tipo: "titulo",    conteudo: "Estoque" },
    { tipo: "paragrafo", conteudo: "Estoque é o conjunto de mercadorias, insumos ou produtos que uma empresa armazena para atender à demanda, seja para venda futura ou para uso em processos internos." },
    { tipo: "imagem",    conteudo: "industrial warehouse inventory stock management" },

    { tipo: "titulo",    conteudo: "Tipos de Estoque" },
    { tipo: "paragrafo", conteudo: "• Matéria-prima: material necessário para produção\n• Produtos em processo: produtos semi-acabados\n• Produtos acabados: produtos finalizados\n• Materiais indiretos: materiais usados que não estão ligados diretamente ao processo\n• Ciclo: quantidade necessária para atender a demanda regular\n• Antecipação/Sazonal: estoque para um período específico\n• Trânsito: mercadorias despachadas, mas que ainda não chegaram ao cliente\n\nOBS: Insumo = Matéria-Prima + Materiais Indiretos" },

    // ── CRONOANÁLISE ──
    { tipo: "titulo",    conteudo: "Cronoanálise de Produção" },
    { tipo: "paragrafo", conteudo: "Metodologia que mede e analisa o tempo de execução de cada operação produtiva, com o objetivo de estabelecer um tempo padrão confiável." },

    { tipo: "titulo",    conteudo: "Etapas da Cronoanálise" },
    { tipo: "paragrafo", conteudo: "1. Divisão da operação em elementos menores\n2. Cronometragem de cada elemento\n3. Avaliação de ritmo do operador\n4. Adição de tolerâncias (fadiga, necessidades pessoais)\n5. Cálculo do tempo padrão" },

    { tipo: "titulo",    conteudo: "Objetivos da Cronoanálise" },
    { tipo: "paragrafo", conteudo: "• Redução de custo\n• Balanceamento de linha: distribuição de tarefas de forma estratégica\n• Orçamento preciso\n• Melhoria contínua" },

    // ── BALANCEAMENTO ──
    { tipo: "titulo",    conteudo: "Balanceamento de Linha de Produção" },
    { tipo: "paragrafo", conteudo: "É a distribuição estratégica de tarefas entre os postos de trabalho, garantindo que nenhum posto fique sobrecarregado ou ocioso. O objetivo é aproximar o tempo de cada posto ao TAKT Time." },
    { tipo: "imagem",    conteudo: "production line balancing assembly manufacturing" },

    { tipo: "titulo",    conteudo: "Técnicas de Balanceamento" },
    { tipo: "paragrafo", conteudo: "• Cálculo do TAKT Time: ritmo necessário de produção\n  Fórmula: TAKT = Tempo disponível ÷ Demanda do cliente\n\n• Diagrama de precedência: mapeia a ordem lógica das tarefas\n• Estudo de tempo: mapeia e cronometra cada tarefa\n• Agrupamento de tarefas: combina atividades consecutivas\n• Melhoria de métodos: simplifica operações\n• Polivalência de operadores: treinar colaboradores para múltiplas funções" },

    // ── SEQUENCIAMENTO ──
    { tipo: "titulo",    conteudo: "Sequenciamento" },
    { tipo: "paragrafo", conteudo: "Define a ordem exata em que as tarefas serão executadas na linha de produção. A escolha do método afeta diretamente prazos, custos e satisfação do cliente." },

    { tipo: "titulo",    conteudo: "Métodos de Sequenciamento" },
    { tipo: "paragrafo", conteudo: "• FIFO (First In, First Out): a ordem de chegada determina a prioridade\n• Data de entrega (Due Date): prioriza pedidos com prazos mais apertados\n• Menor tempo de processamento (SPT): foca em despachar tarefas rápidas primeiro\n• Tempo de SETUP: organiza a produção para minimizar paradas entre produtos diferentes" },

    // ── INDICADORES ──
    { tipo: "titulo",    conteudo: "Indicadores de Performance" },
    { tipo: "paragrafo", conteudo: "Métricas usadas para monitorar e melhorar o desempenho produtivo." },

    { tipo: "titulo",    conteudo: "Principais Indicadores" },
    { tipo: "paragrafo", conteudo: "• OEE (Overall Equipment Effectiveness): mede eficiência e disponibilidade dos equipamentos\n• Produtividade homem/hora: mede a produção por colaborador\n• Tempo de ciclo: tempo total de produção (do início ao fim)\n• Capacidade produtiva: quantidade que pode ser produzida em determinado período\n• SETUP Time: tempo gasto para preparar ou trocar ferramentas da máquina\n• Taxa de refugo: percentual de produtos rejeitados que não podem ser consertados\n• Índice de retrabalho: quantidade de ajustes para o produto atender os padrões\n• Desperdício de materiais: quantidade de matéria-prima perdida no processo\n• OTIF (On Time In Full): eficácia nas entregas (no prazo e completo)\n• Lead Time: tempo total desde o pedido até a entrega final ao cliente" },
    { tipo: "imagem",    conteudo: "OEE overall equipment effectiveness manufacturing KPI dashboard" },

  ],

  flashcards: [
    // ── Estoque ──
    { pergunta: "O que é estoque?",                                             resposta: "Conjunto de mercadorias, insumos ou produtos armazenados para atender à demanda futura ou ao processo interno." },
    { pergunta: "Qual a diferença entre matéria-prima e materiais indiretos?",  resposta: "Matéria-prima está ligada diretamente ao produto. Materiais indiretos são usados no processo, mas não compõem o produto final." },
    { pergunta: "O que é insumo?",                                              resposta: "Insumo = Matéria-prima + Materiais indiretos." },
    { pergunta: "O que é estoque de antecipação ou sazonal?",                   resposta: "Estoque formado para atender a um período específico de alta demanda." },
    { pergunta: "O que é estoque em trânsito?",                                 resposta: "Mercadorias que foram despachadas, mas ainda não chegaram ao destino (cliente ou filial)." },
    { pergunta: "O que são produtos em processo no estoque?",                   resposta: "Produtos semi-acabados que ainda estão em alguma etapa da produção." },

    // ── Cronoanálise ──
    { pergunta: "O que é cronoanálise de produção?",                            resposta: "Metodologia que mede e analisa o tempo de execução das operações para estabelecer um tempo padrão." },
    { pergunta: "Quais são as etapas da cronoanálise?",                         resposta: "1. Divisão da operação  2. Cronometragem  3. Avaliação de ritmo  4. Adição de tolerâncias  5. Cálculo do tempo padrão" },
    { pergunta: "Para que serve o tempo padrão obtido na cronoanálise?",        resposta: "Para reduzir custos, balancear a linha, fazer orçamentos precisos e promover melhoria contínua." },

    // ── Balanceamento ──
    { pergunta: "O que é balanceamento de linha de produção?",                  resposta: "Distribuição estratégica de tarefas entre postos de trabalho para evitar sobrecarga ou ociosidade." },
    { pergunta: "O que é TAKT Time?",                                           resposta: "Ritmo necessário de produção para atender a demanda. Fórmula: TAKT = Tempo disponível ÷ Demanda do cliente." },
    { pergunta: "O que é diagrama de precedência?",                             resposta: "Mapa que mostra a ordem lógica das tarefas — quais devem ser feitas antes das outras." },
    { pergunta: "O que é polivalência de operadores?",                          resposta: "Treinar colaboradores para executar múltiplas funções, aumentando a flexibilidade da linha." },

    // ── Sequenciamento ──
    { pergunta: "O que é sequenciamento na produção?",                          resposta: "Definição da ordem exata em que as tarefas serão executadas." },
    { pergunta: "O que é o método FIFO?",                                       resposta: "First In, First Out — o primeiro pedido a chegar é o primeiro a ser processado." },
    { pergunta: "Quando usar o método Due Date (data de entrega)?",             resposta: "Quando o critério principal é cumprir prazos — prioriza pedidos com entrega mais próxima." },
    { pergunta: "O que é o método SPT?",                                        resposta: "Shortest Processing Time — prioriza as tarefas com menor tempo de processamento para aumentar o fluxo." },
    { pergunta: "Para que serve o sequenciamento por tempo de SETUP?",          resposta: "Para organizar a produção de forma a minimizar as paradas entre produtos diferentes." },

    // ── Indicadores ──
    { pergunta: "O que mede o OEE?",                                            resposta: "Overall Equipment Effectiveness — mede a eficiência global dos equipamentos (disponibilidade, desempenho e qualidade)." },
    { pergunta: "O que é Lead Time?",                                           resposta: "Tempo total desde o pedido do cliente até a entrega final." },
    { pergunta: "O que é OTIF?",                                                resposta: "On Time In Full — mede se as entregas foram feitas no prazo e com o pedido completo." },
    { pergunta: "O que é taxa de refugo?",                                      resposta: "Percentual de produtos rejeitados que não podem ser consertados e são descartados." },
    { pergunta: "Qual a diferença entre refugo e retrabalho?",                  resposta: "Refugo: produto descartado, sem conserto. Retrabalho: produto que precisa de ajustes para atingir o padrão." },
    { pergunta: "O que é SETUP Time?",                                          resposta: "Tempo gasto para preparar ou trocar ferramentas e configurações da máquina entre produções." },
    { pergunta: "O que é tempo de ciclo?",                                      resposta: "Tempo total de produção de um item, do início ao fim do processo." },
    { pergunta: "O que é capacidade produtiva?",                                resposta: "Quantidade máxima que pode ser produzida em um determinado período de tempo." },
  ],

  relacionados: [],

  videoaulas: [
    { titulo: "Controle da Produção — conceitos básicos", url: "https://www.youtube.com/results?search_query=controle+da+producao+industrial" },
    { titulo: "TAKT Time e balanceamento de linha",        url: "https://www.youtube.com/results?search_query=takt+time+balanceamento+linha+producao" },
    { titulo: "OEE — Overall Equipment Effectiveness",    url: "https://www.youtube.com/results?search_query=OEE+overall+equipment+effectiveness" },
  ],

  simulado: [
    {
      contexto: "Uma empresa de manufatura armazena chapas de aço que serão transformadas em peças durante o processo produtivo. Esse material ainda não passou por nenhuma etapa de fabricação.",
      pergunta: "Como esse tipo de estoque é classificado?",
      alternativas: ["Produtos acabados", "Produtos em processo", "Matéria-prima", "Estoque de trânsito"],
      correta: 2,
      explicacao: "Matéria-prima é o material necessário para produção que ainda não passou por nenhuma transformação no processo."
    },
    {
      contexto: "Uma fábrica de calçados verificou que parte de seus produtos já passou pela etapa de costura, mas ainda falta a aplicação da sola e o acabamento final.",
      pergunta: "Esses produtos são classificados em qual tipo de estoque?",
      alternativas: ["Matéria-prima", "Produtos em processo", "Produtos acabados", "Materiais indiretos"],
      correta: 1,
      explicacao: "Produtos em processo são itens semi-acabados que ainda estão em alguma etapa intermediária da produção."
    },
    {
      contexto: "Uma indústria utiliza luvas, capacetes e materiais de limpeza em seu processo produtivo. Esses itens não fazem parte do produto final, mas são necessários para o funcionamento da operação.",
      pergunta: "Como esses itens são classificados dentro do conceito de estoque?",
      alternativas: ["Matéria-prima", "Produtos em processo", "Produtos acabados", "Materiais indiretos"],
      correta: 3,
      explicacao: "Materiais indiretos são usados no processo produtivo, mas não estão ligados diretamente ao produto final."
    },
    {
      contexto: "Uma loja de roupas aumenta seu estoque de casacos em março, antecipando a chegada do inverno em junho, período em que a demanda por esse produto aumenta significativamente.",
      pergunta: "Qual tipo de estoque essa prática representa?",
      alternativas: ["Estoque de ciclo", "Estoque em trânsito", "Estoque de antecipação ou sazonal", "Estoque de matéria-prima"],
      correta: 2,
      explicacao: "Estoque de antecipação ou sazonal é formado para atender a um período específico de alta demanda, como datas comemorativas ou mudanças de estação."
    },
    {
      contexto: "Um fornecedor de São Paulo despachou um pedido para uma empresa em Manaus. A mercadoria foi enviada, mas ainda está em transporte e não chegou ao destino.",
      pergunta: "Esse estoque é classificado como:",
      alternativas: ["Estoque de ciclo", "Estoque em trânsito", "Estoque de antecipação", "Estoque de produtos acabados"],
      correta: 1,
      explicacao: "Estoque em trânsito são mercadorias que já foram despachadas pelo fornecedor, mas ainda não chegaram ao cliente ou destino final."
    },
    {
      contexto: "Um analista de produção explica que insumo é um conceito amplo utilizado no controle de estoque industrial.",
      pergunta: "De acordo com esse conceito, insumo corresponde a:",
      alternativas: ["Apenas à matéria-prima utilizada na produção", "Apenas aos materiais indiretos", "À soma de matéria-prima com materiais indiretos", "Somente aos produtos acabados"],
      correta: 2,
      explicacao: "Insumo = Matéria-Prima + Materiais Indiretos. É o conjunto de todos os recursos consumidos no processo produtivo."
    },
    {
      contexto: "Um engenheiro de produção precisa medir e registrar o tempo exato que um operador leva para realizar cada etapa de uma operação, com o objetivo de estabelecer um tempo padrão de trabalho.",
      pergunta: "Qual metodologia está sendo aplicada?",
      alternativas: ["Balanceamento de linha", "Cronoanálise de produção", "Sequenciamento FIFO", "Diagrama de precedência"],
      correta: 1,
      explicacao: "A cronoanálise é a metodologia que mede e analisa o tempo de execução das operações para estabelecer um tempo padrão confiável."
    },
    {
      contexto: "Durante a implantação de uma nova linha de produção, a equipe identificou que algumas tarefas só podem ser iniciadas após a conclusão de outras. Para visualizar essa dependência, foi elaborado um mapa das relações entre as atividades.",
      pergunta: "Qual ferramenta do balanceamento de linha representa essa situação?",
      alternativas: ["Estudo de tempo", "Polivalência de operadores", "Diagrama de precedência", "Método SPT"],
      correta: 2,
      explicacao: "O diagrama de precedência mapeia a ordem lógica das tarefas, indicando quais atividades devem ser concluídas antes que outras possam começar."
    },
    {
      contexto: "Uma fábrica percebeu que quando um operador falta, determinada etapa da linha para completamente porque nenhum outro trabalhador sabe executar aquela função.",
      pergunta: "Qual técnica de balanceamento resolveria esse problema?",
      alternativas: ["Cálculo do TAKT Time", "Polivalência de operadores", "Método FIFO", "Agrupamento de tarefas"],
      correta: 1,
      explicacao: "A polivalência de operadores consiste em treinar colaboradores para executar múltiplas funções, garantindo flexibilidade e continuidade da produção."
    },
    {
      contexto: "Uma empresa recebeu três pedidos ao mesmo tempo. O gestor de produção decide processá-los na mesma ordem em que foram recebidos, sem considerar prazo ou complexidade.",
      pergunta: "Qual método de sequenciamento está sendo utilizado?",
      alternativas: ["Due Date", "SPT", "FIFO", "SETUP Time"],
      correta: 2,
      explicacao: "FIFO (First In, First Out) é o método em que a ordem de chegada determina a prioridade de processamento."
    },
    {
      contexto: "Um gestor de produção precisa decidir qual pedido processar primeiro. Ele opta por priorizar o pedido com menor prazo de entrega, pois o cliente estipulou uma data limite muito próxima.",
      pergunta: "Qual método de sequenciamento está sendo aplicado?",
      alternativas: ["FIFO", "SPT", "SETUP Time", "Due Date"],
      correta: 3,
      explicacao: "Due Date (data de entrega) prioriza os pedidos com prazos mais apertados, garantindo que entregas urgentes sejam feitas a tempo."
    },
    {
      contexto: "Uma indústria registrou que parte dos produtos fabricados no mês foi completamente descartada por não atender aos padrões de qualidade, sem possibilidade de recuperação.",
      pergunta: "Qual indicador de performance mede esse tipo de perda?",
      alternativas: ["Índice de retrabalho", "OTIF", "Taxa de refugo", "Lead Time"],
      correta: 2,
      explicacao: "Taxa de refugo é o percentual de produtos rejeitados que não podem ser consertados e precisam ser descartados."
    },
    {
      contexto: "Uma empresa de e-commerce monitora mensalmente quantos pedidos foram entregues completos e dentro do prazo acordado com o cliente.",
      pergunta: "Qual indicador de performance está sendo monitorado?",
      alternativas: ["OEE", "Lead Time", "Taxa de refugo", "OTIF"],
      correta: 3,
      explicacao: "OTIF (On Time In Full) mede a eficácia das entregas, verificando se foram realizadas no prazo e com o pedido completo."
    },
    {
      contexto: "Um gerente industrial deseja saber quanto tempo decorre desde o momento em que um cliente faz um pedido até o momento em que o produto é entregue.",
      pergunta: "Qual indicador representa esse tempo total?",
      alternativas: ["Tempo de ciclo", "SETUP Time", "Lead Time", "TAKT Time"],
      correta: 2,
      explicacao: "Lead Time é o tempo total desde o pedido do cliente até a entrega final, incluindo todas as etapas: produção, embalagem e transporte."
    },
    {
      contexto: "Uma fábrica identificou que alguns produtos precisavam retornar à linha de produção para correções de defeitos antes de serem aprovados para venda.",
      pergunta: "Qual indicador mensura esse tipo de ocorrência?",
      alternativas: ["Taxa de refugo", "Índice de retrabalho", "Desperdício de materiais", "OTIF"],
      correta: 1,
      explicacao: "O índice de retrabalho mede a quantidade de produtos que precisaram de ajustes para atender aos padrões de qualidade, diferente do refugo, que é descartado."
    },
    // Cole essas questões dentro do array simulado: [ ... ] do arquivo controle-da-producao.js

    {
      contexto: "Uma indústria têxtil armazena bobinas de tecido que chegam do fornecedor e ficam guardadas até serem utilizadas na confecção das peças.",
      pergunta: "Esse tipo de estoque é denominado:",
      alternativas: ["Estoque de produtos acabados", "Estoque de matéria-prima", "Estoque em trânsito", "Estoque de ciclo"],
      correta: 1,
      explicacao: "Matéria-prima é o material necessário para produção, armazenado antes de entrar no processo de fabricação."
    },

    {
      contexto: "Uma montadora de automóveis mantém um volume fixo de peças em estoque para garantir a continuidade diária da produção sem interrupções.",
      pergunta: "Esse volume regular mantido para atender a demanda cotidiana é chamado de:",
      alternativas: ["Estoque sazonal", "Estoque em trânsito", "Estoque de ciclo", "Estoque de produtos em processo"],
      correta: 2,
      explicacao: "Estoque de ciclo é a quantidade necessária para atender a demanda regular da operação, garantindo continuidade sem excessos."
    },

    {
      contexto: "Durante um treinamento sobre cronoanálise, o instrutor explica que após cronometrar a operação é necessário considerar pausas para fadiga e necessidades pessoais do operador antes de definir o tempo padrão.",
      pergunta: "Essa etapa da cronoanálise é chamada de:",
      alternativas: ["Avaliação de ritmo", "Divisão da operação", "Adição de tolerâncias", "Cronometragem"],
      correta: 2,
      explicacao: "A adição de tolerâncias considera fatores humanos como fadiga e necessidades pessoais, ajustando o tempo cronometrado para chegar ao tempo padrão real."
    },

    {
      contexto: "Um supervisor percebeu que o operador estava trabalhando em ritmo mais lento que o normal durante a cronometragem, o que poderia distorcer o tempo padrão calculado.",
      pergunta: "Qual etapa da cronoanálise trata essa situação?",
      alternativas: ["Divisão da operação", "Adição de tolerâncias", "Cálculo do tempo padrão", "Avaliação de ritmo"],
      correta: 3,
      explicacao: "A avaliação de ritmo analisa se o operador está trabalhando acima ou abaixo do ritmo normal, corrigindo o tempo medido antes de calcular o padrão."
    },

    {
      contexto: "Uma linha de produção foi reorganizada para que operações que poderiam ser realizadas simultaneamente em postos diferentes fossem agrupadas em uma única estação de trabalho.",
      pergunta: "Qual técnica de balanceamento foi aplicada?",
      alternativas: ["Polivalência de operadores", "Diagrama de precedência", "Agrupamento de tarefas", "Estudo de tempo"],
      correta: 2,
      explicacao: "O agrupamento de tarefas combina atividades consecutivas ou compatíveis em um mesmo posto, reduzindo o número de estações e melhorando o fluxo."
    },

    {
      contexto: "Uma empresa de produção em série busca simplificar os movimentos realizados pelos operadores em cada posto, eliminando etapas desnecessárias do processo.",
      pergunta: "Qual técnica de balanceamento está sendo aplicada?",
      alternativas: ["Cálculo do TAKT Time", "Melhoria de métodos", "FIFO", "Estoque sazonal"],
      correta: 1,
      explicacao: "A melhoria de métodos consiste em simplificar e otimizar as operações, eliminando desperdícios de movimento e tempo dentro de cada posto de trabalho."
    },

    {
      contexto: "Uma fábrica de peças automotivas alterna a produção entre diferentes modelos de componentes. Cada troca de modelo exige ajustes nas máquinas antes de reiniciar a produção.",
      pergunta: "O tempo gasto nesses ajustes entre produções diferentes é denominado:",
      alternativas: ["Lead Time", "Tempo de ciclo", "SETUP Time", "TAKT Time"],
      correta: 2,
      explicacao: "SETUP Time é o tempo gasto para preparar ou reconfigurar a máquina entre a produção de produtos diferentes."
    },

    {
      contexto: "Um gerente de produção quer organizar a ordem dos pedidos de forma a reduzir ao máximo o tempo parado entre trocas de ferramentas e configurações de máquina.",
      pergunta: "Qual método de sequenciamento é mais adequado para esse objetivo?",
      alternativas: ["FIFO", "Due Date", "SPT", "Sequenciamento por tempo de SETUP"],
      correta: 3,
      explicacao: "O sequenciamento por tempo de SETUP organiza a produção agrupando pedidos similares para minimizar as paradas entre produtos diferentes."
    },

    {
      contexto: "Uma empresa prioriza pedidos com menor tempo de processamento para liberar rapidamente a fila de produção e aumentar o número de pedidos entregues por dia.",
      pergunta: "Qual método de sequenciamento está sendo aplicado?",
      alternativas: ["FIFO", "Due Date", "SPT", "SETUP Time"],
      correta: 2,
      explicacao: "SPT (Shortest Processing Time) prioriza as tarefas com menor tempo de execução, maximizando o fluxo e o número de pedidos concluídos."
    },

    {
      contexto: "Uma indústria registrou perda significativa de matéria-prima durante o processo de corte de peças metálicas, onde sobras e aparas não aproveitáveis foram descartadas.",
      pergunta: "Qual indicador de performance mensura esse tipo de perda?",
      alternativas: ["Taxa de refugo", "Índice de retrabalho", "Desperdício de materiais", "OTIF"],
      correta: 2,
      explicacao: "Desperdício de materiais mede a quantidade de matéria-prima perdida durante o processo produtivo sem gerar valor ao produto final."
    },

    {
      contexto: "O setor de manutenção de uma indústria monitora quanto tempo cada equipamento fica disponível para produção, quantas peças produz por hora e qual percentual de peças aprovadas gera.",
      pergunta: "Esses três fatores combinados formam qual indicador?",
      alternativas: ["OTIF", "Lead Time", "OEE", "TAKT Time"],
      correta: 2,
      explicacao: "OEE (Overall Equipment Effectiveness) combina disponibilidade, desempenho e qualidade para medir a eficiência global dos equipamentos."
    },

    {
      contexto: "Uma empresa mede a quantidade de produtos fabricados por cada colaborador durante uma jornada de trabalho de 8 horas.",
      pergunta: "Qual indicador de performance está sendo calculado?",
      alternativas: ["OEE", "Lead Time", "Produtividade homem/hora", "Tempo de ciclo"],
      correta: 2,
      explicacao: "Produtividade homem/hora mede a quantidade de produção gerada por colaborador em determinado período de trabalho."
    },

    {
      contexto: "Um gestor analisa o tempo que uma peça leva desde que entra na primeira etapa da linha de produção até sair como produto acabado, sem considerar o tempo de espera pelo pedido.",
      pergunta: "Qual indicador representa esse tempo?",
      alternativas: ["Lead Time", "TAKT Time", "SETUP Time", "Tempo de ciclo"],
      correta: 3,
      explicacao: "Tempo de ciclo é o tempo total de produção de um item do início ao fim do processo produtivo, diferente do Lead Time que inclui também o tempo desde o pedido do cliente."
    },
  ]
}