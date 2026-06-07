const ASSUNTO_MODELAGEM_CONCEITUAL = {
  id: "modelagem-conceitual",
  area: "banco_de_dados",
  nome: "Modelagem Conceitual",
  nivel: "basico",

  descricao: "Conceitos sobre levantamento de requisitos, DER, entidades, relacionamentos, cardinalidades e modelagem entidade-relacionamento.",

  resumoRapido: `Projeto de banco de dados envolve:
• levantamento de requisitos
• projeto conceitual
• projeto lógico
• projeto físico

DER utiliza:
• entidades
• relacionamentos
• atributos

Projeto conceitual:
• alto nível
• sem preocupação física
• foco nas regras do negócio

Cardinalidade:
• mínima → 0 ou 1
• máxima → 1 ou N

Conceitos importantes:
• autorrelacionamento
• relacionamento ternário
• entidade associativa
• especialização/generalização
• atributos opcionais
• atributos multivalorados
• atributos compostos

Relacionamentos N:N podem virar entidades associativas.

Atributos redundantes devem ser evitados.

DER é construído incrementalmente.`,

  resumoDetalhado: [
    { tipo: "titulo", conteudo: "Projeto de Banco de Dados" },
    { tipo: "paragrafo", conteudo: "Projetar um banco de dados envolve levantamento de requisitos, projeto conceitual, projeto lógico e projeto físico. O objetivo é representar corretamente as regras e necessidades do negócio." },
    { tipo: "imagem", conteudo: "database project phases diagram" },

    { tipo: "titulo", conteudo: "Levantamento de Requisitos" },
    { tipo: "paragrafo", conteudo: "Durante o levantamento de requisitos, o profissional entrevista usuários para entender processos, identificar entidades, relacionamentos e necessidades relacionadas aos dados." },

    { tipo: "titulo", conteudo: "Projeto Conceitual" },
    { tipo: "paragrafo", conteudo: "O projeto conceitual cria um modelo de alto nível utilizando DER (Diagrama Entidade-Relacionamento), sem preocupação com armazenamento físico." },

    { tipo: "paragrafo", conteudo: "O DER possui três elementos principais:\n• Entidades\n• Relacionamentos\n• Atributos" },

    { tipo: "imagem", conteudo: "entity relationship diagram example" },

    { tipo: "titulo", conteudo: "Entidades" },
    { tipo: "paragrafo", conteudo: "Entidades representam objetos do mundo real sobre os quais desejamos armazenar informações, como CLIENTE, CURSO ou FUNCIONARIO." },

    { tipo: "titulo", conteudo: "Relacionamentos" },
    { tipo: "paragrafo", conteudo: "Relacionamentos representam associações entre entidades, mostrando como os objetos interagem dentro do sistema." },

    { tipo: "titulo", conteudo: "Atributos" },
    { tipo: "paragrafo", conteudo: "Atributos são características associadas às entidades ou relacionamentos, como nome, CPF ou data." },

    { tipo: "titulo", conteudo: "Atributo Identificador" },
    { tipo: "paragrafo", conteudo: "O atributo identificador distingue cada ocorrência da entidade de forma única." },

    { tipo: "titulo", conteudo: "Notações do DER" },
    { tipo: "paragrafo", conteudo: "As principais notações utilizadas são:\n• Peter Chen\n• UML (Diagrama de Classes)" },

    { tipo: "imagem", conteudo: "peter chen er diagram vs uml" },

    { tipo: "titulo", conteudo: "Projeto Lógico" },
    { tipo: "paragrafo", conteudo: "O projeto lógico transforma o modelo conceitual em estruturas compatíveis com o SGBD escolhido, normalmente utilizando tabelas relacionais." },

    { tipo: "titulo", conteudo: "Projeto Físico" },
    { tipo: "paragrafo", conteudo: "O projeto físico define detalhes de implementação como tipos de dados, tamanhos de colunas, chaves e restrições." },

    { tipo: "imagem", conteudo: "sql create table database schema" },

    { tipo: "titulo", conteudo: "Autorrelacionamento" },
    { tipo: "paragrafo", conteudo: "O autorrelacionamento ocorre quando uma entidade se relaciona consigo mesma, como disciplinas que possuem pré-requisitos." },

    { tipo: "titulo", conteudo: "Cardinalidade" },
    { tipo: "paragrafo", conteudo: "A cardinalidade define quantas ocorrências de uma entidade podem se relacionar com outra.\n\n• mínima → 0 ou 1\n• máxima → 1 ou N" },

    { tipo: "imagem", conteudo: "database cardinality one to many many to many" },

    { tipo: "titulo", conteudo: "Relacionamento Ternário" },
    { tipo: "paragrafo", conteudo: "Relacionamentos ternários conectam três entidades diferentes dentro de um único relacionamento." },

    { tipo: "titulo", conteudo: "Cardinalidade em Atributos" },
    { tipo: "paragrafo", conteudo: "Atributos também podem possuir cardinalidade. Um atributo opcional pode ter cardinalidade mínima 0." },

    { tipo: "titulo", conteudo: "Especialização e Generalização" },
    { tipo: "paragrafo", conteudo: "Generalização representa entidades mais genéricas, enquanto especialização representa subtipos mais específicos." },

    { tipo: "imagem", conteudo: "specialization generalization database diagram" },

    { tipo: "titulo", conteudo: "Entidade Associativa" },
    { tipo: "paragrafo", conteudo: "Entidades associativas resolvem relacionamentos muitos-para-muitos (N:N), transformando-os em duas relações 1:N." },

    { tipo: "titulo", conteudo: "Restrições de Integridade" },
    { tipo: "paragrafo", conteudo: "Restrições de integridade são regras que garantem consistência dos dados. Algumas são representadas diretamente no DER e outras são descritas semanticamente." },

    { tipo: "titulo", conteudo: "Entidade Isolada" },
    { tipo: "paragrafo", conteudo: "Uma entidade isolada não possui relacionamento com outras entidades dentro do modelo." },

    { tipo: "titulo", conteudo: "Manutenção de Histórico" },
    { tipo: "paragrafo", conteudo: "Em alguns cenários, é necessário armazenar histórico de movimentações, como alterações de departamento de um funcionário." },

    { tipo: "titulo", conteudo: "Estratégia Descendente" },
    { tipo: "paragrafo", conteudo: "A modelagem costuma ocorrer de forma incremental:\n• modelo inicial\n• modelo detalhado\n• validação com usuários" },

    { tipo: "titulo", conteudo: "Modelagem de Atributos" },
    { tipo: "paragrafo", conteudo: "Um atributo pode virar entidade quando possui características próprias, múltiplos valores ou necessidade de reutilização." },

    { tipo: "titulo", conteudo: "Atributos Opcionais" },
    { tipo: "paragrafo", conteudo: "Muitos atributos opcionais podem indicar a necessidade de especialização de entidades." },

    { tipo: "titulo", conteudo: "Atributos Multivalorados" },
    { tipo: "paragrafo", conteudo: "Atributos multivalorados armazenam vários valores para uma mesma entidade e normalmente devem ser modelados como entidades separadas." },

    { tipo: "titulo", conteudo: "Atributos Redundantes e Compostos" },
    { tipo: "paragrafo", conteudo: "Atributos redundantes podem ser calculados a partir de outros dados e devem ser evitados. Já atributos compostos podem ser subdivididos em partes menores." }
  ],

  flashcards: [
    { pergunta: "Quais são as fases principais de um projeto de banco de dados?", resposta: "Levantamento de requisitos, projeto conceitual, lógico e físico." },
    { pergunta: "O que é DER?", resposta: "Diagrama Entidade-Relacionamento usado na modelagem conceitual." },
    { pergunta: "Quais são os três elementos principais do DER?", resposta: "Entidades, relacionamentos e atributos." },
    { pergunta: "O que é uma entidade?", resposta: "Objeto do mundo real sobre o qual armazenamos informações." },
    { pergunta: "O que representa um relacionamento?", resposta: "A associação entre entidades." },
    { pergunta: "O que é cardinalidade?", resposta: "Quantidade de ocorrências que podem participar de um relacionamento." },
    { pergunta: "O que é autorrelacionamento?", resposta: "Relacionamento entre ocorrências da mesma entidade." },
    { pergunta: "Qual a função da entidade associativa?", resposta: "Resolver relacionamentos muitos-para-muitos." },
    { pergunta: "O que é especialização?", resposta: "Processo de criar entidades mais específicas a partir de uma entidade genérica." },
    { pergunta: "O que é um atributo multivalorado?", resposta: "Atributo que pode armazenar vários valores para uma mesma entidade." }
  ],

  relacionados: [
    {
      area: "banco_de_dados",
      id: "sistemas-de-banco-de-dados",
      nome: "Sistemas de Banco de Dados",
      motivo: "Base conceitual para modelagem."
    },

    {
      area: "banco_de_dados",
      id: "modelagem-logica-e-fisica",
      nome: "Modelagem Lógica e Física",
      motivo: "Continuação da modelagem conceitual."
    }
  ],

  videoaulas: [
    {
      titulo: "Modelagem Conceitual e DER",
      url: "https://www.youtube.com/results?search_query=modelagem+conceitual+der"
    },

    {
      titulo: "Cardinalidade e Relacionamentos",
      url: "https://www.youtube.com/results?search_query=cardinalidade+relacionamentos+banco+de+dados"
    }
  ],

  simulado: [
    {
      contexto: "Um analista está entrevistando usuários para entender os processos da empresa antes de criar o banco de dados.",
      pergunta: "Em qual etapa isso ocorre?",
      alternativas: [
        "Projeto físico",
        "Projeto lógico",
        "Levantamento de requisitos",
        "Normalização"
      ],
      correta: 2,
      explicacao: "O levantamento de requisitos busca entender o negócio e identificar necessidades de dados."
    },

    {
      contexto: "Um modelo foi criado utilizando entidades, relacionamentos e atributos sem preocupação com implementação física.",
      pergunta: "Esse modelo corresponde a:",
      alternativas: [
        "Projeto físico",
        "Projeto conceitual",
        "Projeto orientado a objetos",
        "Projeto operacional"
      ],
      correta: 1,
      explicacao: "O projeto conceitual representa os dados em alto nível."
    },

    {
      contexto: "Uma disciplina depende de outra disciplina como pré-requisito.",
      pergunta: "Qual conceito de modelagem representa isso?",
      alternativas: [
        "Relacionamento ternário",
        "Entidade associativa",
        "Autorrelacionamento",
        "Especialização"
      ],
      correta: 2,
      explicacao: "A entidade DISCIPLINA relaciona-se consigo mesma."
    },

    {
      contexto: "Um relacionamento conecta ALUNO, DOCENTE e PROJETO simultaneamente.",
      pergunta: "Qual tipo de relacionamento é esse?",
      alternativas: [
        "Binário",
        "Ternário",
        "Recursivo",
        "Especializado"
      ],
      correta: 1,
      explicacao: "Relacionamentos ternários envolvem três entidades."
    },

    {
      contexto: "Uma entidade possui um atributo endereço dividido em rua, CEP e cidade.",
      pergunta: "Esse atributo é classificado como:",
      alternativas: [
        "Opcional",
        "Multivalorado",
        "Composto",
        "Redundante"
      ],
      correta: 2,
      explicacao: "Atributos compostos podem ser subdivididos."
    },

    {
      contexto: "Um funcionário pode possuir vários telefones cadastrados.",
      pergunta: "O atributo telefone é:",
      alternativas: [
        "Atômico",
        "Monovalorado",
        "Multivalorado",
        "Redundante"
      ],
      correta: 2,
      explicacao: "Pode armazenar múltiplos valores."
    },

    {
      contexto: "Uma modelagem N:N foi transformada em uma nova entidade intermediária.",
      pergunta: "Essa nova entidade é chamada de:",
      alternativas: [
        "Entidade forte",
        "Entidade associativa",
        "Entidade composta",
        "Entidade isolada"
      ],
      correta: 1,
      explicacao: "Entidades associativas resolvem relacionamentos muitos-para-muitos."
    },

    {
      contexto: "O banco armazena movimentações históricas de docentes entre departamentos.",
      pergunta: "Qual o principal objetivo dessa modelagem?",
      alternativas: [
        "Evitar cardinalidade",
        "Reduzir tabelas",
        "Manter histórico",
        "Eliminar entidades"
      ],
      correta: 2,
      explicacao: "O modelo foi ajustado para registrar histórico temporal."
    },

    {
      contexto: "Uma entidade não possui relacionamento com nenhuma outra.",
      pergunta: "Como ela é chamada?",
      alternativas: [
        "Entidade associativa",
        "Entidade especializada",
        "Entidade isolada",
        "Entidade derivada"
      ],
      correta: 2,
      explicacao: "Entidades isoladas não possuem relacionamentos."
    },

    {
      contexto: "Uma empresa decidiu criar subclasses ADVOGADO e ODONTOLOGO derivadas de FUNCIONARIO.",
      pergunta: "Qual conceito foi utilizado?",
      alternativas: [
        "Generalização/especialização",
        "Normalização",
        "Cardinalidade",
        "Autorrelacionamento"
      ],
      correta: 0,
      explicacao: "Especialização cria entidades mais específicas."
    }
  ]
}