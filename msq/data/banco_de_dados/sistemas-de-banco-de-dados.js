const ASSUNTO_SISTEMAS_DE_BANCO_DE_DADOS = {
  id: "sistemas-de-banco-de-dados",
  area: "banco_de_dados",
  nome: "Sistemas de Banco de Dados",
  nivel: "basico",

  descricao: "Conceitos fundamentais sobre banco de dados, SGBDs, evolução histórica, arquitetura, propriedades ACID e linguagens SQL.",

  resumoRapido: `Banco de Dados é uma coleção de dados relacionados com significado implícito.

Antes dos SGBDs, programas manipulavam arquivos diretamente, replicando lógica de leitura e escrita em vários sistemas.

O SGBD surgiu como middleware, centralizando o acesso aos dados.

Diferenças:
• BD = os dados
• SGBD = software gerenciador
• SBD = conjunto completo (dados + SGBD + aplicações)

Evolução:
• Bancos navegacionais (redes e hierárquicos)
• Modelo relacional (tabelas)
• Bancos NoSQL

Arquitetura de três esquemas:
• Interno
• Conceitual
• Externo

Características:
• abstração de dados
• independência física e lógica
• metadados
• concorrência

ACID:
• Atomicidade
• Consistência
• Isolamento
• Durabilidade

Linguagens:
• DDL → estrutura
• DML → manipulação de dados`,

  resumoDetalhado: [
    {
      tipo: "titulo",
      conteudo: "O que é Banco de Dados?"
    },

    {
      tipo: "paragrafo",
      conteudo: "Banco de Dados é uma coleção organizada de dados relacionados, em que cada dado possui significado implícito e pode ser registrado. Dados sem relação entre si não formam um banco de dados, sendo apenas informações isoladas."
    },

    {
      tipo: "imagem",
      conteudo: "database concept data storage server"
    },

    {
      tipo: "titulo",
      conteudo: "Sistemas de Arquivos"
    },

    {
      tipo: "paragrafo",
      conteudo: "Antes dos SGBDs, os programas manipulavam arquivos diretamente no sistema operacional. Cada aplicação precisava possuir sua própria lógica de leitura, escrita e gerenciamento de dados. Isso gerava duplicação de código, maior dificuldade de manutenção e inconsistência das informações."
    },

    {
      tipo: "titulo",
      conteudo: "SGBD como Middleware"
    },

    {
      tipo: "paragrafo",
      conteudo: "O Sistema Gerenciador de Banco de Dados (SGBD) surgiu como um software intermediário (middleware). Ele centraliza o gerenciamento dos dados, permitindo que os programas apenas solicitem informações, enquanto o SGBD se encarrega de buscar, organizar e devolver os dados corretamente."
    },

    {
      tipo: "paragrafo",
      conteudo: "Middleware é um software que oferece serviços intermediários para aplicações além daqueles já fornecidos pelo sistema operacional."
    },

    {
      tipo: "imagem",
      conteudo: "middleware database architecture"
    },

    {
      tipo: "titulo",
      conteudo: "Diferença entre BD, SGBD e SBD"
    },

    {
      tipo: "paragrafo",
      conteudo: "• BD (Banco de Dados): os dados armazenados.\n• SGBD: software responsável pelo gerenciamento dos dados.\n• SBD (Sistema de Banco de Dados): conjunto completo formado pelo SGBD, aplicações e banco de dados."
    },

    {
      tipo: "titulo",
      conteudo: "Evolução dos Bancos de Dados"
    },

    {
      tipo: "paragrafo",
      conteudo: "Os primeiros bancos de dados eram navegacionais. Neles, o programador precisava navegar fisicamente pelos registros utilizando ponteiros."
    },

    {
      tipo: "paragrafo",
      conteudo: "• IDS (Integrated Data Systems): criado por Charles Bachman, utilizava estruturas em rede.\n• IMS (Information Management System): criado pela IBM, utilizava estruturas hierárquicas em árvore."
    },

    {
      tipo: "imagem",
      conteudo: "hierarchical database vs network database"
    },

    {
      tipo: "titulo",
      conteudo: "Modelo Relacional"
    },

    {
      tipo: "paragrafo",
      conteudo: "Na década de 1970, Edgar Codd propôs o modelo relacional baseado em álgebra relacional. Nesse modelo, os dados passaram a ser representados em tabelas, abstraindo a complexidade física do armazenamento."
    },

    {
      tipo: "paragrafo",
      conteudo: "Com isso, o programador precisa apenas informar o que deseja obter, enquanto o SGBD decide como executar a busca."
    },

    {
      tipo: "imagem",
      conteudo: "relational database tables sql"
    },

    {
      tipo: "titulo",
      conteudo: "Principais SGBDs Relacionais"
    },

    {
      tipo: "paragrafo",
      conteudo: "Os principais SGBDs relacionais incluem Oracle, DB2, SQL Server, MySQL e PostgreSQL."
    },

    {
      tipo: "paragrafo",
      conteudo: "A pilha LAMP foi fundamental para o crescimento da web:\n• Linux\n• Apache\n• MySQL\n• PHP"
    },

    {
      tipo: "titulo",
      conteudo: "Bancos NoSQL"
    },

    {
      tipo: "paragrafo",
      conteudo: "Os bancos NoSQL surgiram para lidar com grandes volumes de dados, informações não estruturadas, alta velocidade e escalabilidade horizontal."
    },

    {
      tipo: "paragrafo",
      conteudo: "A sigla NoSQL significa 'Not Only SQL', indicando que SQL continua importante, mas coexistindo com outros modelos."
    },

    {
      tipo: "imagem",
      conteudo: "nosql database types"
    },

    {
      tipo: "titulo",
      conteudo: "Arquitetura de Três Esquemas"
    },

    {
      tipo: "paragrafo",
      conteudo: "A arquitetura de três esquemas divide o banco em:\n\n• Nível Interno: armazenamento físico.\n• Nível Conceitual: estrutura lógica.\n• Nível Externo: visões dos usuários."
    },

    {
      tipo: "paragrafo",
      conteudo: "Essa arquitetura gera:\n\n• Independência Física: alterações físicas sem afetar programas.\n• Independência Lógica: alterações lógicas sem quebrar aplicações."
    },

    {
      tipo: "imagem",
      conteudo: "three schema architecture database"
    },

    {
      tipo: "titulo",
      conteudo: "Características dos SBDs"
    },

    {
      tipo: "paragrafo",
      conteudo: "• Natureza autocontida com metadados.\n• Abstração de dados.\n• Compartilhamento simultâneo.\n• Controle de concorrência.\n• Segurança.\n• Integridade."
    },

    {
      tipo: "titulo",
      conteudo: "Funcionalidades do SGBD"
    },

    {
      tipo: "paragrafo",
      conteudo: "Os SGBDs oferecem controle de redundância, concorrência, segurança, integridade, backup, recuperação de falhas e compartilhamento de dados."
    },

    {
      tipo: "titulo",
      conteudo: "Propriedades ACID"
    },

    {
      tipo: "paragrafo",
      conteudo: "• Atomicidade: tudo ou nada.\n• Consistência: transações mantêm dados válidos.\n• Isolamento: transações simultâneas não interferem.\n• Durabilidade: dados persistem após falhas."
    },

    {
      tipo: "imagem",
      conteudo: "acid properties database"
    },

    {
      tipo: "titulo",
      conteudo: "Vantagens e Desvantagens"
    },

    {
      tipo: "paragrafo",
      conteudo: "Vantagens:\n• padronização\n• manutenção facilitada\n• redução de desenvolvimento\n• economia de escala\n\nDesvantagens:\n• maior complexidade\n• custo elevado\n• sobrecarga de desempenho"
    },

    {
      tipo: "titulo",
      conteudo: "Quando Não Utilizar SGBD"
    },

    {
      tipo: "paragrafo",
      conteudo: "O uso de SGBD pode não ser ideal em aplicações muito simples, sistemas embarcados, sistemas monousuários pequenos e aplicações de tempo real rígido."
    },

    {
      tipo: "titulo",
      conteudo: "Componentes e Usuários"
    },

    {
      tipo: "paragrafo",
      conteudo: "Componentes:\n• dados\n• hardware\n• software\n• usuários\n\nCamadas:\n• hardware\n• sistema operacional\n• SGBD\n• aplicações\n• usuários finais"
    },

    {
      tipo: "titulo",
      conteudo: "Papéis dos Usuários"
    },

    {
      tipo: "paragrafo",
      conteudo: "• Administrador de Aplicações\n• Administrador de Desenvolvimento\n• Administrador de Dados\n• Administrador de Sistemas\n• DBA (Administrador de Banco de Dados)"
    },

    {
      tipo: "titulo",
      conteudo: "Linguagens do SGBD"
    },

    {
      tipo: "paragrafo",
      conteudo: "• DDL (CREATE, ALTER, DROP): define estrutura.\n• DML (SELECT, INSERT, UPDATE, DELETE): manipula dados."
    }
  ],

  flashcards: [
    {
      pergunta: "O que é um Banco de Dados?",
      resposta: "Uma coleção organizada de dados relacionados com significado implícito."
    },

    {
      pergunta: "Qual a função do SGBD?",
      resposta: "Gerenciar, organizar e controlar o acesso aos dados."
    },

    {
      pergunta: "O que significa middleware?",
      resposta: "Software intermediário que fornece serviços entre aplicações e sistema operacional."
    },

    {
      pergunta: "Qual a diferença entre BD e SGBD?",
      resposta: "BD são os dados; SGBD é o software que os gerencia."
    },

    {
      pergunta: "Quem criou o modelo relacional?",
      resposta: "Edgar Codd."
    },

    {
      pergunta: "O que significa NoSQL?",
      resposta: "Not Only SQL."
    },

    {
      pergunta: "Quais são os níveis da arquitetura de três esquemas?",
      resposta: "Interno, conceitual e externo."
    },

    {
      pergunta: "O que é independência física?",
      resposta: "Capacidade de alterar armazenamento físico sem afetar programas."
    },

    {
      pergunta: "O que significa a letra D em ACID?",
      resposta: "Durabilidade."
    },

    {
      pergunta: "Qual a função da DDL?",
      resposta: "Definir a estrutura do banco de dados."
    }
  ],

  relacionados: [
    {
      area: "banco_de_dados",
      id: "modelagem-conceitual",
      nome: "Modelagem Conceitual",
      motivo: "Base para estruturação lógica dos bancos."
    },

    {
      area: "banco_de_dados",
      id: "postgresql",
      nome: "PostgreSQL",
      motivo: "Exemplo de SGBD relacional."
    }
  ],

  videoaulas: [
    {
      titulo: "Introdução a Sistemas de Banco de Dados",
      url: "https://www.youtube.com/results?search_query=introducao+sistemas+de+banco+de+dados"
    },

    {
      titulo: "Modelo Relacional e SQL",
      url: "https://www.youtube.com/results?search_query=modelo+relacional+sql"
    }
  ],

  simulado: [
    {
      contexto: "Uma empresa utilizava sistemas de arquivos tradicionais em que cada aplicação possuía sua própria lógica de leitura e escrita.",
      pergunta: "Qual problema esse modelo geralmente causava?",
      alternativas: [
        "Maior independência lógica",
        "Duplicação de lógica e inconsistência de dados",
        "Melhor controle de concorrência",
        "Redução da redundância"
      ],
      correta: 1,
      explicacao: "Nos sistemas de arquivos tradicionais, várias aplicações replicavam lógica de manipulação de dados."
    },

    {
      contexto: "Um desenvolvedor deseja alterar a estrutura física do armazenamento sem modificar aplicações existentes.",
      pergunta: "Qual característica do SGBD permite isso?",
      alternativas: [
        "Atomicidade",
        "Durabilidade",
        "Independência Física",
        "DDL"
      ],
      correta: 2,
      explicacao: "A independência física permite alterações físicas sem impactar programas."
    },

    {
      contexto: "Uma organização precisa armazenar enormes volumes de dados não estruturados vindos de redes sociais.",
      pergunta: "Qual tecnologia é mais adequada?",
      alternativas: [
        "Banco hierárquico",
        "NoSQL",
        "Modelo navegacional",
        "Sistema de arquivos"
      ],
      correta: 1,
      explicacao: "NoSQL foi criado para lidar com grandes volumes e dados não estruturados."
    },

    {
      contexto: "Durante uma transação bancária, ocorreu uma falha antes da conclusão total da operação.",
      pergunta: "Qual propriedade ACID garante que a transação será totalmente aplicada ou totalmente cancelada?",
      alternativas: [
        "Consistência",
        "Durabilidade",
        "Isolamento",
        "Atomicidade"
      ],
      correta: 3,
      explicacao: "Atomicidade garante o conceito de tudo ou nada."
    },

    {
      contexto: "Um DBA executou um comando CREATE TABLE.",
      pergunta: "Esse comando pertence a qual linguagem?",
      alternativas: [
        "DML",
        "DDL",
        "DCL",
        "TCL"
      ],
      correta: 1,
      explicacao: "CREATE é um comando DDL."
    },

    {
      contexto: "Um sistema permite que vários usuários alterem registros simultaneamente sem corromper os dados.",
      pergunta: "Qual característica do SGBD está relacionada a isso?",
      alternativas: [
        "Abstração",
        "Concorrência",
        "DDL",
        "Redundância"
      ],
      correta: 1,
      explicacao: "Controle de concorrência permite acesso simultâneo seguro."
    },

    {
      contexto: "Uma empresa deseja diminuir duplicação de informações em diferentes sistemas.",
      pergunta: "Qual funcionalidade do SGBD ajuda nisso?",
      alternativas: [
        "Controle de redundância",
        "Durabilidade",
        "DDL",
        "Abstração física"
      ],
      correta: 0,
      explicacao: "O controle de redundância evita duplicação e inconsistência."
    },

    {
      contexto: "No modelo relacional, os dados são organizados principalmente em:",
      pergunta: "Qual estrutura representa esse modelo?",
      alternativas: [
        "Grafos",
        "Árvores",
        "Tabelas",
        "Ponteiros"
      ],
      correta: 2,
      explicacao: "O modelo relacional representa dados em tabelas."
    },

    {
      contexto: "Um sistema precisa manter os dados salvos mesmo após falha elétrica.",
      pergunta: "Qual propriedade ACID está relacionada?",
      alternativas: [
        "Durabilidade",
        "Isolamento",
        "Consistência",
        "Atomicidade"
      ],
      correta: 0,
      explicacao: "Durabilidade garante persistência após falhas."
    },

    {
      contexto: "Um programador utiliza SELECT para consultar registros.",
      pergunta: "Esse comando pertence a qual categoria?",
      alternativas: [
        "DDL",
        "DML",
        "DCL",
        "TCL"
      ],
      correta: 1,
      explicacao: "SELECT é um comando de manipulação de dados (DML)."
    }
  ]
}