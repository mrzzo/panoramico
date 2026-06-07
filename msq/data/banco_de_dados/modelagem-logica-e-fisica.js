const ASSUNTO_MODELAGEM_LOGICA_E_FISICA = {
  id: "modelagem-logica-e-fisica",
  area: "banco_de_dados",
  nome: "Modelagem Lógica e Física",
  nivel: "basico",

  descricao: "Conceitos sobre modelo relacional, chaves, normalização, mapeamento conceitual-lógico e implementação física em bancos relacionais.",

  resumoRapido: `O modelo relacional organiza os dados em tabelas compostas por linhas (tuplas) e colunas (atributos).

Toda tabela deve possuir:
• nome único
• colunas únicas
• valores atômicos
• atributos monovalorados

Principais chaves:
• primária
• estrangeira
• candidata
• alternativa
• artificial

Normalização:
• 1FN → valores atômicos
• 2FN → elimina dependência parcial
• 3FN → elimina dependência transitiva

Mapeamentos:
• entidades
• relacionamentos
• atributos multivalorados
• especialização/generalização

Cardinalidades:
• 1:1
• 1:N
• N:N

Aspectos físicos:
• consultas SQL
• transações
• atomicidade`,

  resumoDetalhado: [
    { tipo: "titulo", conteudo: "Modelo Relacional" },
    { tipo: "paragrafo", conteudo: "O modelo relacional representa os dados em relações, conhecidas comercialmente como tabelas. Cada tabela possui linhas chamadas tuplas e colunas chamadas atributos." },
    { tipo: "imagem", conteudo: "relational database table structure" },

    { tipo: "titulo", conteudo: "Características das Tabelas" },
    { tipo: "paragrafo", conteudo: "Toda tabela deve possuir nome único. As colunas também devem possuir nomes únicos dentro da tabela. Os atributos devem ser monovalorados e atômicos, ou seja, armazenam apenas um valor indivisível por célula." },

    { tipo: "titulo", conteudo: "Tipos de Dados" },
    { tipo: "paragrafo", conteudo: "Ao implementar tabelas, é necessário definir tipos de dados como caractere, numérico, data e booleano, além de definir se os campos aceitam NULL ou são obrigatórios." },

    { tipo: "titulo", conteudo: "Chave Primária" },
    { tipo: "paragrafo", conteudo: "A chave primária identifica unicamente cada registro da tabela. Suas propriedades são unicidade, obrigatoriedade e monovaloração." },

    { tipo: "paragrafo", conteudo: "• Chave simples: formada por uma coluna.\n• Chave composta: formada por duas ou mais colunas.\n• Chave candidata: pode servir como chave primária.\n• Chave alternativa: candidata não escolhida.\n• Chave artificial: criada artificialmente pelo sistema." },

    { tipo: "imagem", conteudo: "primary key foreign key database" },

    { tipo: "titulo", conteudo: "Chave Estrangeira" },
    { tipo: "paragrafo", conteudo: "A chave estrangeira estabelece relacionamento entre tabelas. Seus valores devem existir previamente na chave primária da tabela referenciada." },

    { tipo: "paragrafo", conteudo: "O SGBD utiliza restrições para garantir integridade referencial durante inserções, exclusões e alterações." },

    { tipo: "titulo", conteudo: "Normalização" },
    { tipo: "paragrafo", conteudo: "A normalização organiza os dados para reduzir redundâncias, eliminar anomalias e garantir integridade." },

    { tipo: "imagem", conteudo: "database normalization concept" },

    { tipo: "titulo", conteudo: "Primeira Forma Normal (1FN)" },
    { tipo: "paragrafo", conteudo: "Uma tabela está na 1FN quando todos os atributos possuem valores atômicos e não existem atributos compostos ou multivalorados." },

    { tipo: "paragrafo", conteudo: "Para aplicar a 1FN:\n• decompor atributos compostos\n• remover atributos multivalorados\n• criar novas tabelas quando necessário" },

    { tipo: "titulo", conteudo: "Dependência Funcional" },
    { tipo: "paragrafo", conteudo: "Uma dependência funcional ocorre quando um atributo determina outro. Exemplo: CODIGODOCENTE → NOME." },

    { tipo: "paragrafo", conteudo: "Dependência funcional parcial ocorre quando um atributo depende apenas de parte de uma chave composta." },

    { tipo: "titulo", conteudo: "Segunda Forma Normal (2FN)" },
    { tipo: "paragrafo", conteudo: "Uma tabela está na 2FN quando está na 1FN e não possui dependências funcionais parciais." },

    { tipo: "titulo", conteudo: "Terceira Forma Normal (3FN)" },
    { tipo: "paragrafo", conteudo: "Uma tabela está na 3FN quando elimina dependências transitivas, ou seja, atributos não chave não dependem de outros atributos não chave." },

    { tipo: "imagem", conteudo: "1nf 2nf 3nf normalization" },

    { tipo: "titulo", conteudo: "Mapeamento Conceitual-Lógico" },
    { tipo: "paragrafo", conteudo: "O mapeamento conceitual-lógico transforma entidades e relacionamentos do modelo conceitual em estruturas relacionais." },

    { tipo: "paragrafo", conteudo: "As etapas envolvem:\n• entidades\n• relacionamentos\n• atributos multivalorados\n• especialização/generalização" },

    { tipo: "titulo", conteudo: "Mapeamento de Entidades" },
    { tipo: "paragrafo", conteudo: "Entidades fortes tornam-se tabelas comuns. Entidades fracas tornam-se tabelas dependentes contendo chave estrangeira da entidade proprietária." },

    { tipo: "titulo", conteudo: "Mapeamento de Relacionamentos" },
    { tipo: "paragrafo", conteudo: "Relacionamentos são convertidos em chaves estrangeiras ou tabelas associativas, dependendo da cardinalidade." },

    { tipo: "paragrafo", conteudo: "• 1:1 → fusão ou adição de colunas\n• 1:N → chave estrangeira no lado N\n• N:N → criação de tabela associativa" },

    { tipo: "imagem", conteudo: "database cardinality one to many many to many" },

    { tipo: "titulo", conteudo: "Atributos Multivalorados" },
    { tipo: "paragrafo", conteudo: "Atributos multivalorados geralmente são transformados em tabelas próprias relacionadas à entidade principal." },

    { tipo: "titulo", conteudo: "Especialização e Generalização" },
    { tipo: "paragrafo", conteudo: "Hierarquias podem ser representadas usando tabela única, tabela para cada entidade ou tabelas específicas para entidades especializadas." },

    { tipo: "titulo", conteudo: "Aspectos Físicos" },
    { tipo: "paragrafo", conteudo: "O projeto físico define tipos de dados, consultas SQL, índices, restrições e estratégias de armazenamento." },

    { tipo: "paragrafo", conteudo: "Consultas utilizam comandos SQL como SELECT, INSERT, UPDATE e DELETE." },

    { tipo: "titulo", conteudo: "Transações" },
    { tipo: "paragrafo", conteudo: "Transações representam conjuntos de operações executadas como unidade lógica indivisível." },

    { tipo: "paragrafo", conteudo: "A atomicidade garante que todas as operações sejam concluídas com sucesso ou completamente canceladas." },

    { tipo: "imagem", conteudo: "database transaction sql" }
  ],

  flashcards: [
    { pergunta: "Como o modelo relacional representa os dados?", resposta: "Em tabelas compostas por linhas e colunas." },
    { pergunta: "O que são tuplas?", resposta: "São as linhas de uma tabela." },
    { pergunta: "O que são atributos?", resposta: "São as colunas de uma tabela." },
    { pergunta: "Qual a função da chave primária?", resposta: "Identificar unicamente cada registro." },
    { pergunta: "O que é chave composta?", resposta: "Chave formada por duas ou mais colunas." },
    { pergunta: "O que é chave estrangeira?", resposta: "Coluna que referencia a chave primária de outra tabela." },
    { pergunta: "Qual o objetivo da normalização?", resposta: "Reduzir redundâncias e evitar anomalias." },
    { pergunta: "Quando uma tabela está na 1FN?", resposta: "Quando possui apenas valores atômicos." },
    { pergunta: "O que elimina a 2FN?", resposta: "Dependências funcionais parciais." },
    { pergunta: "O que elimina a 3FN?", resposta: "Dependências transitivas." },
    { pergunta: "O que é dependência funcional?", resposta: "Quando um atributo determina outro atributo." },
    { pergunta: "Como relacionamentos N:N são implementados?", resposta: "Por meio de tabelas associativas." }
  ],

  relacionados: [
    {
      area: "banco_de_dados",
      id: "sistemas-de-banco-de-dados",
      nome: "Sistemas de Banco de Dados",
      motivo: "Base conceitual para modelagem relacional."
    },
    {
      area: "banco_de_dados",
      id: "modelagem-conceitual",
      nome: "Modelagem Conceitual",
      motivo: "Etapa anterior ao modelo lógico."
    }
  ],

  videoaulas: [
    {
      titulo: "Modelagem lógica e física de banco de dados",
      url: "https://www.youtube.com/results?search_query=modelagem+logica+e+fisica+banco+de+dados"
    },
    {
      titulo: "Normalização de banco de dados",
      url: "https://www.youtube.com/results?search_query=normalizacao+1fn+2fn+3fn"
    }
  ],

  simulado: [
    {
      contexto: "Uma tabela possui uma coluna TELEFONES contendo vários números separados por vírgula.",
      pergunta: "Qual regra está sendo violada?",
      alternativas: ["2FN", "3FN", "1FN", "Integridade referencial"],
      correta: 2,
      explicacao: "A 1FN exige valores atômicos e monovalorados."
    },

    {
      contexto: "Uma tabela PEDIDO possui chave primária composta por (CODPEDIDO, CODPRODUTO). O atributo NOMEPRODUTO depende apenas de CODPRODUTO.",
      pergunta: "Qual problema existe?",
      alternativas: ["Dependência transitiva", "Dependência parcial", "Violação da atomicidade", "Redundância física"],
      correta: 1,
      explicacao: "O atributo depende apenas de parte da chave composta."
    },

    {
      contexto: "Um sistema utiliza uma tabela intermediária entre ALUNO e DISCIPLINA.",
      pergunta: "Qual cardinalidade está sendo representada?",
      alternativas: ["1:1", "1:N", "N:N", "0:1"],
      correta: 2,
      explicacao: "Relacionamentos N:N exigem tabela associativa."
    },

    {
      contexto: "Uma tabela possui um campo ID_CLIENTE auto incremento.",
      pergunta: "Esse tipo de chave é classificado como:",
      alternativas: ["Natural", "Alternativa", "Artificial", "Composta"],
      correta: 2,
      explicacao: "Chaves artificiais são criadas pelo sistema."
    },

    {
      contexto: "Uma tabela armazena o atributo ENDERECO dividido em rua, número e CEP.",
      pergunta: "Que tipo de atributo era ENDERECO originalmente?",
      alternativas: ["Multivalorado", "Composto", "Artificial", "Opcional"],
      correta: 1,
      explicacao: "Atributos compostos podem ser subdivididos."
    },

    {
      contexto: "Um desenvolvedor removeu redundâncias e dependências transitivas de uma tabela.",
      pergunta: "Em qual forma normal a tabela está?",
      alternativas: ["1FN", "2FN", "3FN", "FNBC"],
      correta: 2,
      explicacao: "A 3FN elimina dependências transitivas."
    },

    {
      contexto: "Uma tabela DEPENDENTE referencia FUNCIONARIO.",
      pergunta: "Qual elemento cria esse relacionamento?",
      alternativas: ["DDL", "Chave candidata", "Chave estrangeira", "Índice"],
      correta: 2,
      explicacao: "Relacionamentos são implementados por chaves estrangeiras."
    },

    {
      contexto: "Um banco precisa garantir que todas as operações de matrícula sejam concluídas juntas.",
      pergunta: "Qual conceito garante isso?",
      alternativas: ["Durabilidade", "Atomicidade", "Cardinalidade", "Normalização"],
      correta: 1,
      explicacao: "Atomicidade garante tudo ou nada."
    },

    {
      contexto: "Uma entidade forte foi convertida para o modelo relacional.",
      pergunta: "Como ela normalmente será implementada?",
      alternativas: ["Como atributo", "Como índice", "Como tabela", "Como trigger"],
      correta: 2,
      explicacao: "Entidades fortes tornam-se tabelas."
    },

    {
      contexto: "Uma empresa deseja armazenar múltiplos telefones por funcionário.",
      pergunta: "Qual a modelagem mais adequada?",
      alternativas: ["Criar vários campos telefone", "Usar atributo composto", "Criar tabela TELEFONE relacionada", "Ignorar normalização"],
      correta: 2,
      explicacao: "Atributos multivalorados devem virar entidades/tabelas."
    }
  ]
}