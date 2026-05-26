// =============================================
// ASSUNTO: Trigonometria
// Área: Matemática
// =============================================
// Como preencher este arquivo:
//
// id:          identificador único do assunto (sem espaços, use hífen)
// area:        id da área pai (deve bater com o index.js da área)
// nome:        nome exibido na interface
// nivel:       "basico" | "medio" | "avancado"
// descricao:   frase curta exibida nos cards da biblioteca
//
// resumoRapido:
//   Texto corrido exibido na tab "Resumo rápido".
//   Use \n para quebras de linha.
//
// resumoDetalhado: [ ... ]
//   Array de blocos de conteúdo. Cada bloco pode ser:
//
//   { tipo: "titulo",    conteudo: "Texto do título da seção" }
//   { tipo: "paragrafo", conteudo: "Texto explicativo..." }
//   { tipo: "imagem",    conteudo: "query de busca para o Google Imagens" }
//     → o app busca e exibe uma imagem ilustrativa
//   { tipo: "video",     conteudo: "URL do YouTube (embed)" }
//     → embed do vídeo direto no meio do conteúdo
//
// flashcards: [ ... ]
//   Perguntas de revisão conceitual — SEPARADAS do simulado.
//   Formato: { pergunta: "...", resposta: "..." }
//   Cadastre 6–12 cards por assunto. O app sorteia 5 por sessão.
//
// relacionados: [ ... ]
//   Links para outros assuntos do site.
//   Formato: { area: "id_area", id: "id_assunto", nome: "Nome", motivo: "Por que está relacionado" }
//
// videoaulas: [ ... ]
//   Links de videoaulas exibidos no final do resumo detalhado.
//   Formato: { titulo: "...", url: "https://..." }
//
// simulado: [ ... ]
//   Questões no estilo ENEM: contextualização + pergunta + alternativas.
//   Formato:
//   {
//     contexto:      "Texto de contextualização (situação, dado, citação)",
//     pergunta:      "A pergunta em si",
//     alternativas:  ["A", "B", "C", "D"],
//     correta:       índice da alternativa correta (0 = A),
//     explicacao:    "Explicação do gabarito"
//   }
// =============================================

const ASSUNTO_LUBRIFICACAO_INDUSTRIAL = {
  id: "lubrificacao-industrial",
  area: "nocoes_de_manutencao_mecanica",
  nome: "Lubrificação Industrial",
  nivel: "basico",

  descricao:
    "Conceitos básicos sobre lubrificação industrial, tipos de lubrificantes, propriedades dos óleos e aplicações das graxas.",

  resumoRapido: `Lubrificação industrial é a aplicação controlada de fluidos ou substancias ente as partes móveis de maquinários para reduzir atrito, desgaste e aquecimento.

Os principais lubrificantes são:
• Óleos lubrificantes
• Graxas lubrificantes

Funções da lubrificação:
1. reduzir atrito e desgaste (limalha)
2. controlar temperatura
3. proteger contra corrosão
4. limpeza e vedação
5. redução de ruídos

Tipos de óleo:
• mineral
• sintético
• semissintético

Características importantes:
1. viscosidade
2. densidade
3. ponto de fulgor
4. ponto de combustão
5. ponto de fluidez
6. cristalização
7. ponto de névoa
8. acidez
9. alcalinidade
10. demulsibilidade`,

  resumoDetalhado: [
    {
      tipo: "titulo",
      conteudo: "O que é Lubrificação Industrial?"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "Lubrificação industrial é a aplicação controlada de fluidos ou substâncias lubrificantes entre partes móveis de máquinas e equipamentos. Seu objetivo é reduzir o atrito, diminuir o desgaste e aumentar a vida útil dos componentes mecânicos."
    },

    { 
      tipo: "imagem-url", conteudo: "https://gesrepair.com/wp-content/uploads/shutterstock_1846832668.jpg" 
    },

    {
      tipo: "titulo",
      conteudo: "Principais Funções da Lubrificação"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "1. reduzir atrito e desgaste (limalha)\n2. controlar temperatura\n3. proteger contra corrosão\n4. limpeza e vedação\n5. redução de ruídos"
    },

    {
      tipo: "titulo",
      conteudo: "Tipos de Lubrificantes"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "Os lubrificantes podem ser classificados em:\n\n• Líquidos: óleos lubrificantes\n• Semissólidos: graxas\n• Sólidos: grafite, dissulfeto de molibdênio e películas lubrificantes"
    },

    {
      tipo: "titulo",
      conteudo: "Métodos de Aplicação"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "A lubrificação pode ser feita manualmente ou por sistemas automáticos.\n\n• Manual: aplicação feita diretamente pelo operador\n• Automática: sistemas que distribuem lubrificante continuamente ou em intervalos programados"
    },

    {
      tipo: "titulo",
      conteudo: "Composição dos Óleos Lubrificantes"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "• Óleo mineral: derivado do refino do petróleo. Possui menor custo, porém contém mais impurezas e menor estabilidade.\n• Óleo sintético: produzido em laboratório. Possui maior pureza, desempenho e resistência térmica.\n• Óleo semissintético: mistura entre óleo mineral e sintético, oferecendo equilíbrio entre desempenho e custo."
    },

    { tipo: "imagem-url", conteudo: "https://www.maconresearch.com/hs-fs/hub/399257/file-2081002402.png" },

    {
      tipo: "titulo",
      conteudo: "Características dos Óleos Lubrificantes"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "1. Viscosidade: resistência do óleo ao escoamento.\n2. Densidade: massa em determinada unidade de volume.\n3. Ponto de fulgor: temperatura em que o óleo libera vapores inflamáveis.\n4. Ponto de combustão: temperatura em que o óleo entra em combustão contínua.\n5. Ponto de fluidez: menor temperatura em que o óleo ainda consegue escoar.\n6. Cristalização: temperatura em que o óleo começa a solidificar.\n7. Ponto de névoa: formação de partículas de óleo suspensas no ar.\n8. Acidez: presença de componentes ácidos no óleo.\n9. Alcalinidade: capacidade de neutralizar ácidos.\n10. Demulsibilidade: capacidade do óleo de se separar da água."
    },

    {
      tipo: "titulo",
      conteudo: "Graxas Lubrificantes"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "As graxas lubrificantes são substâncias semissólidas compostas por óleo base, espessantes e aditivos. São utilizadas em locais onde o óleo líquido não permanece adequadamente."
    },

    { tipo: "imagem-url", conteudo: "https://www.micro-lube.com/wp-content/webp-express/webp-images/uploads/2024/04/Bearing-Lubrication.jpg.webp" },

    {
      tipo: "titulo",
      conteudo: "Tipos de Sabão Metálico"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "Os espessantes mais utilizados nas graxas são:\n\n• lítio\n• cálcio\n• alumínio\n• zinco\n• magnésio"
    },

    {
      tipo: "titulo",
      conteudo: "Cores das Graxas"
    },

    {
      tipo: "paragrafo",
      conteudo:
        "A cor da graxa não segue uma padronização universal, variando conforme o fabricante. Porém, algumas cores costumam ser associadas a determinadas aplicações:\n\n• Vermelha: altas temperaturas e alta pressão\n• Azul: maior resistência à água\n• Verde: alta velocidade e resistência à oxidação\n• Branca: indústria alimentícia\n• Amarela: aplicações em temperaturas extremas\n• Preta ou marrom: cargas pesadas"
    }
  ],

  flashcards: [
    {
      pergunta: "O que é lubrificação industrial?",
      resposta:
        "É a aplicação controlada de lubrificantes entre partes móveis para reduzir atrito e desgaste."
    },

    {
      pergunta: "Quais são os principais tipos de lubrificantes?",
      resposta:
        "Óleos, graxas e lubrificantes sólidos."
    },

    {
      pergunta: "Qual a função da viscosidade?",
      resposta:
        "Indicar a resistência do óleo ao escoamento."
    },

    {
      pergunta: "O que é ponto de fulgor?",
      resposta:
        "Temperatura em que o óleo libera vapores inflamáveis."
    },

    {
      pergunta: "O que é ponto de combustão?",
      resposta:
        "Temperatura em que o óleo entra em combustão contínua."
    },

    {
      pergunta: "Qual a diferença entre óleo mineral e sintético?",
      resposta:
        "O mineral vem do petróleo; o sintético é produzido em laboratório e possui maior desempenho."
    },

    {
      pergunta: "O que é demulsibilidade?",
      resposta:
        "Capacidade do óleo de se separar da água."
    },

    {
      pergunta: "Para que servem as graxas?",
      resposta:
        "Lubrificar locais onde óleos líquidos não permanecem adequadamente."
    },

    {
      pergunta: "Quais são exemplos de sabões metálicos usados em graxas?",
      resposta:
        "Lítio, cálcio, alumínio e magnésio."
    },

    {
      pergunta: "A cor da graxa define obrigatoriamente sua aplicação?",
      resposta:
        "Não. As cores variam conforme o fabricante e não seguem padrão universal."
    }
  ],

  /*relacionados: [
    {
      area: "nocoes_de_manutencao_mecanica",
      id: "rolamentos",
      nome: "Rolamentos",
      motivo:
        "Rolamentos dependem diretamente da lubrificação adequada."
    },

    {
      area: "nocoes_de_manutencao_mecanica",
      id: "corrosao",
      nome: "Corrosão",
      motivo:
        "Lubrificantes ajudam na proteção contra corrosão."
    }
  ],*/

  videoaulas: [
    {
      titulo: "Lubrificação Industrial — conceitos básicos",
      url:
        "https://www.youtube.com/results?search_query=lubrificacao+industrial"
    },

    {
      titulo: "Óleos e graxas lubrificantes",
      url:
        "https://www.youtube.com/results?search_query=oleos+e+graxas+lubrificantes"
    }
  ],

  simulado: [
    {
      contexto:
        "Durante a manutenção de um equipamento industrial, um técnico observou aumento excessivo de temperatura e desgaste entre engrenagens.",

      pergunta:
        "Qual é a principal função da lubrificação nesse caso?",

      alternativas: [
        "Aumentar o atrito",
        "Reduzir o desgaste e controlar a temperatura",
        "Aumentar a pressão do sistema",
        "Eliminar a necessidade de manutenção"
      ],

      correta: 1,

      explicacao:
        "A lubrificação reduz o atrito entre peças móveis, diminuindo desgaste e aquecimento."
    },

    {
      contexto:
        "Uma indústria precisa de um lubrificante com maior estabilidade térmica e menor quantidade de impurezas.",

      pergunta:
        "Qual tipo de óleo é mais indicado?",

      alternativas: [
        "Óleo vegetal",
        "Óleo mineral",
        "Óleo sintético",
        "Graxa sólida"
      ],

      correta: 2,

      explicacao:
        "Óleos sintéticos possuem maior pureza, estabilidade térmica e desempenho."
    },

    {
      contexto:
        "Em determinado sistema mecânico, o lubrificante precisa manter capacidade de escoamento mesmo em baixas temperaturas.",

      pergunta:
        "Qual propriedade deve ser analisada?",

      alternativas: [
        "Acidez",
        "Ponto de fluidez",
        "Densidade",
        "Cristalização"
      ],

      correta: 1,

      explicacao:
        "O ponto de fluidez indica a menor temperatura em que o óleo ainda consegue escoar."
    },
    {
  contexto:
    "Uma fábrica percebeu aumento no consumo de energia elétrica em motores industriais. Após análise, verificou-se que havia falta de lubrificação adequada nos componentes móveis.",

  pergunta:
    "Qual consequência direta a falta de lubrificação pode causar?",

  alternativas: [
    "Redução do atrito entre peças",
    "Diminuição da temperatura",
    "Aumento do atrito e desgaste",
    "Melhora da eficiência mecânica"
  ],

  correta: 2,

  explicacao:
    "Sem lubrificação adequada, o atrito aumenta, causando maior desgaste e aquecimento das peças."
},

{
  contexto:
    "Durante uma inspeção, um técnico identificou presença excessiva de água misturada ao óleo lubrificante de uma máquina industrial.",

  pergunta:
    "Qual propriedade do óleo está relacionada à capacidade de separação da água?",

  alternativas: [
    "Viscosidade",
    "Demulsibilidade",
    "Acidez",
    "Densidade"
  ],

  correta: 1,

  explicacao:
    "Demulsibilidade é a capacidade do óleo de se separar da água."
},

{
  contexto:
    "Um equipamento opera em temperaturas extremamente elevadas e exige maior estabilidade térmica do lubrificante.",

  pergunta:
    "Qual lubrificante apresenta melhor desempenho nessa condição?",

  alternativas: [
    "Óleo mineral",
    "Óleo sintético",
    "Água desmineralizada",
    "Graxa comum"
  ],

  correta: 1,

  explicacao:
    "Óleos sintéticos suportam temperaturas mais elevadas e possuem maior estabilidade térmica."
},

{
  contexto:
    "Um operador percebeu que o óleo de uma máquina estava muito espesso, dificultando sua circulação no sistema.",

  pergunta:
    "Qual característica do óleo está diretamente relacionada a essa resistência ao escoamento?",

  alternativas: [
    "Acidez",
    "Viscosidade",
    "Demulsibilidade",
    "Cristalização"
  ],

  correta: 1,

  explicacao:
    "Viscosidade é a resistência que o óleo apresenta ao escoamento."
},

{
  contexto:
    "Em determinados componentes mecânicos, utiliza-se graxa em vez de óleo lubrificante.",

  pergunta:
    "Qual é a principal vantagem da graxa nesse tipo de aplicação?",

  alternativas: [
    "Evaporar rapidamente",
    "Facilitar corrosão",
    "Permanecer em locais onde o óleo escorreria",
    "Eliminar completamente o atrito"
  ],

  correta: 2,

  explicacao:
    "A graxa é usada em locais onde o óleo líquido não consegue permanecer adequadamente."
},

{
  contexto:
    "Uma indústria alimentícia precisa lubrificar equipamentos sem risco elevado de contaminação visual.",

  pergunta:
    "Qual cor de graxa é frequentemente associada a esse tipo de aplicação?",

  alternativas: [
    "Preta",
    "Vermelha",
    "Branca",
    "Marrom"
  ],

  correta: 2,

  explicacao:
    "Graxas brancas costumam ser associadas a aplicações em indústrias alimentícias."
},

{
  contexto:
    "Durante um treinamento, um professor explicou que determinado óleo começa a liberar vapores inflamáveis antes de entrar em combustão contínua.",

  pergunta:
    "Esse fenômeno corresponde a qual propriedade?",

  alternativas: [
    "Ponto de combustão",
    "Ponto de fluidez",
    "Ponto de fulgor",
    "Densidade"
  ],

  correta: 2,

  explicacao:
    "O ponto de fulgor é a temperatura em que o óleo libera vapores inflamáveis."
},

{
  contexto:
    "Uma máquina industrial opera sob cargas extremamente pesadas e necessita de lubrificação resistente à pressão.",

  pergunta:
    "Qual tipo de graxa costuma ser associado a aplicações com cargas elevadas?",

  alternativas: [
    "Branca",
    "Verde",
    "Preta ou marrom",
    "Azul"
  ],

  correta: 2,

  explicacao:
    "Graxas pretas ou marrons geralmente são associadas a aplicações com cargas pesadas."
},

{
  contexto:
    "Um técnico verificou que determinado óleo possuía alta capacidade de neutralizar compostos ácidos formados durante o funcionamento do motor.",

  pergunta:
    "Qual característica está relacionada a essa capacidade?",

  alternativas: [
    "Alcalinidade",
    "Viscosidade",
    "Cristalização",
    "Densidade"
  ],

  correta: 0,

  explicacao:
    "A alcalinidade representa a capacidade do óleo de neutralizar ácidos."
},

{
  contexto:
    "Uma empresa deseja automatizar o processo de lubrificação de máquinas para garantir aplicação contínua e reduzir falhas humanas.",

  pergunta:
    "Qual método de aplicação é mais adequado?",

  alternativas: [
    "Lubrificação manual",
    "Lubrificação automática",
    "Lubrificação seca",
    "Lubrificação por água"
  ],

  correta: 1,

  explicacao:
    "Sistemas automáticos aplicam lubrificante continuamente ou em intervalos programados."
}
  ]
}