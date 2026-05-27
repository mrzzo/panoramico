// =============================================
// ASSUNTO: MySQL
// Área: Banco de Dados
// =============================================

const ASSUNTO_MYSQL = {
  id: "mysql",
  area: "banco_de_dados",
  nome: "MySQL",
  nivel: "basico",

  descricao: "Fundamentos do MySQL, criação de bancos e tabelas, tipos de dados, manipulação de registros e consultas SQL.",

  resumoRapido: `MySQL é um sistema gerenciador de banco de dados relacional muito utilizado em aplicações web e sistemas comerciais.

Principais tópicos:
• CREATE DATABASE
• CREATE TABLE
• INSERT
• UPDATE
• DELETE
• SELECT
• JOIN
• GROUP BY
• UNION

Tipos de dados importantes:
• INT
• VARCHAR
• DATE
• DATETIME
• DECIMAL
• TEXT

Restrições:
• PRIMARY KEY
• FOREIGN KEY
• NOT NULL
• UNIQUE
• CHECK

Consultas:
• WHERE
• LIKE
• ORDER BY
• LIMIT
• INNER JOIN
• LEFT JOIN
• RIGHT JOIN
• UNION`,

  resumoDetalhado: [
    {
      tipo: "titulo",
      conteudo: "O que é MySQL?"
    },
    {
      tipo: "paragrafo",
      conteudo: "MySQL é um Sistema Gerenciador de Banco de Dados Relacional (SGBD) utilizado para armazenar, organizar e manipular dados através da linguagem SQL. É muito utilizado em aplicações web, sistemas empresariais e plataformas online."
    },
    {
      tipo: "imagem",
      conteudo: "mysql database server"
    },

    {
      tipo: "titulo",
      conteudo: "Conectando ao MySQL"
    },
    {
      tipo: "paragrafo",
      conteudo: "A conexão ao MySQL pode ser feita por linha de comando ou interfaces gráficas como o MySQL Workbench. No Workbench, seleciona-se uma conexão em 'MySQL Connections' e insere-se a senha configurada."
    },

    {
      tipo: "titulo",
      conteudo: "Criando Banco de Dados"
    },
    {
      tipo: "paragrafo",
      conteudo: "Para criar um banco de dados usa-se CREATE DATABASE. Depois da criação, utiliza-se USE nomeBanco para selecionar o banco ativo."
    },
    {
      tipo: "imagem",
      conteudo: "create database mysql example"
    },

    {
      tipo: "titulo",
      conteudo: "Criando Tabelas"
    },
    {
      tipo: "paragrafo",
      conteudo: "As tabelas são criadas com CREATE TABLE. Dentro dos parênteses definimos colunas, tipos de dados e restrições."
    },

    {
      tipo: "titulo",
      conteudo: "Tipos de Dados"
    },
    {
      tipo: "paragrafo",
      conteudo: "INT armazena números inteiros.\nVARCHAR(n) armazena textos variáveis.\nTEXT armazena grandes quantidades de texto.\nDATE armazena datas.\nDATETIME armazena data e hora.\nDECIMAL armazena valores decimais exatos.\nFLOAT e DOUBLE armazenam números decimais aproximados."
    },

    {
      tipo: "titulo",
      conteudo: "AUTO_INCREMENT"
    },
    {
      tipo: "paragrafo",
      conteudo: "AUTO_INCREMENT permite gerar automaticamente valores sequenciais para colunas normalmente utilizadas como chave primária."
    },

    {
      tipo: "titulo",
      conteudo: "Constraints"
    },
    {
      tipo: "paragrafo",
      conteudo: "Constraints são regras aplicadas às tabelas.\n\nNOT NULL: impede valores nulos.\nPRIMARY KEY: identifica registros únicos.\nFOREIGN KEY: cria relacionamento entre tabelas.\nUNIQUE: impede duplicidade.\nCHECK: define condições para os valores."
    },

    {
      tipo: "titulo",
      conteudo: "Manipulação de Dados"
    },
    {
      tipo: "paragrafo",
      conteudo: "INSERT INTO adiciona registros.\nUPDATE altera registros.\nDELETE remove registros.\nSELECT consulta informações."
    },

    {
      tipo: "titulo",
      conteudo: "Consultas com WHERE"
    },
    {
      tipo: "paragrafo",
      conteudo: "A cláusula WHERE filtra os dados retornados por uma consulta através de condições específicas."
    },

    {
      tipo: "titulo",
      conteudo: "LIKE e Operador %"
    },
    {
      tipo: "paragrafo",
      conteudo: "LIKE permite buscas textuais.\n% representa qualquer sequência de caracteres.\nExemplo: WHERE nome LIKE 'Ana%'."
    },

    {
      tipo: "titulo",
      conteudo: "ORDER BY e LIMIT"
    },
    {
      tipo: "paragrafo",
      conteudo: "ORDER BY organiza os resultados.\nASC ordena de forma crescente.\nDESC ordena de forma decrescente.\nLIMIT restringe a quantidade de linhas retornadas."
    },

    {
      tipo: "titulo",
      conteudo: "GROUP BY"
    },
    {
      tipo: "paragrafo",
      conteudo: "GROUP BY agrupa registros com valores iguais em determinadas colunas, sendo muito utilizado com funções como SUM, AVG, MAX e MIN."
    },

    {
      tipo: "titulo",
      conteudo: "INNER JOIN"
    },
    {
      tipo: "paragrafo",
      conteudo: "INNER JOIN combina registros de duas tabelas quando existe correspondência entre elas."
    },
    {
      tipo: "imagem",
      conteudo: "sql inner join diagram"
    },

    {
      tipo: "titulo",
      conteudo: "LEFT JOIN e RIGHT JOIN"
    },
    {
      tipo: "paragrafo",
      conteudo: "LEFT JOIN retorna todos os registros da tabela da esquerda.\nRIGHT JOIN retorna todos os registros da tabela da direita.\nQuando não existe correspondência, os campos ficam NULL."
    },

    {
      tipo: "titulo",
      conteudo: "UNION"
    },
    {
      tipo: "paragrafo",
      conteudo: "UNION combina resultados de múltiplas consultas SELECT em um único resultado, removendo duplicatas."
    }
  ],

  flashcards: [
    {
      pergunta: "O que é MySQL?",
      resposta: "É um Sistema Gerenciador de Banco de Dados Relacional utilizado para armazenar e manipular dados usando SQL."
    },
    {
      pergunta: "Qual comando cria um banco de dados?",
      resposta: "CREATE DATABASE."
    },
    {
      pergunta: "Qual comando seleciona um banco para uso?",
      resposta: "USE nomeBanco."
    },
    {
      pergunta: "Qual comando cria tabelas?",
      resposta: "CREATE TABLE."
    },
    {
      pergunta: "Qual tipo de dado armazena textos variáveis?",
      resposta: "VARCHAR(n)."
    },
    {
      pergunta: "Para que serve AUTO_INCREMENT?",
      resposta: "Gerar automaticamente valores sequenciais."
    },
    {
      pergunta: "Qual constraint impede valores duplicados?",
      resposta: "UNIQUE."
    },
    {
      pergunta: "Qual comando adiciona registros?",
      resposta: "INSERT INTO."
    },
    {
      pergunta: "Qual comando altera registros existentes?",
      resposta: "UPDATE."
    },
    {
      pergunta: "Qual comando remove registros?",
      resposta: "DELETE."
    },
    {
      pergunta: "Para que serve WHERE?",
      resposta: "Filtrar registros em consultas SQL."
    },
    {
      pergunta: "Qual operador permite buscas textuais?",
      resposta: "LIKE."
    }
  ],

  relacionados: [
    {
    area: "banco_de_dados",
    id: "postgresql",
    nome: "PostgreSQL",
    motivo: "..."
  },
  {
    area: "banco_de_dados",
    id: "modelagem-logica-e-fisica",
    nome: "Modelagem Lógica e Física",
    motivo: "Aplicação prática dos conceitos de SQL."
  },
  {
    area: "banco_de_dados",
    id: "sistemas-de-banco-de-dados",
    nome: "Sistemas de Banco de Dados",
    motivo: "..."
  },
  ],

  videoaulas: [
    {
      titulo: "Curso básico de MySQL",
      url: "https://www.youtube.com/results?search_query=curso+mysql+basico"
    },
    {
      titulo: "MySQL Workbench tutorial",
      url: "https://www.youtube.com/results?search_query=mysql+workbench+tutorial"
    },
    {
      titulo: "Consultas SQL com JOIN",
      url: "https://www.youtube.com/results?search_query=sql+join+aula"
    }
  ],

  simulado: [
    {
      contexto: "Um desenvolvedor precisa criar um novo banco de dados no MySQL.",
      pergunta: "Qual comando deve ser utilizado?",
      alternativas: [
        "CREATE TABLE",
        "NEW DATABASE",
        "CREATE DATABASE",
        "MAKE DATABASE"
      ],
      correta: 2,
      explicacao: "O comando correto para criar um banco de dados é CREATE DATABASE."
    },

    {
      contexto: "Uma tabela precisa armazenar nomes de usuários com tamanho variável.",
      pergunta: "Qual tipo de dado é mais adequado?",
      alternativas: [
        "INT",
        "VARCHAR",
        "DATE",
        "FLOAT"
      ],
      correta: 1,
      explicacao: "VARCHAR é utilizado para armazenar textos com tamanho variável."
    },

    {
      contexto: "Uma tabela precisa gerar IDs automaticamente.",
      pergunta: "Qual recurso deve ser utilizado?",
      alternativas: [
        "UNIQUE",
        "CHECK",
        "AUTO_INCREMENT",
        "TEXT"
      ],
      correta: 2,
      explicacao: "AUTO_INCREMENT gera valores sequenciais automaticamente."
    },

    {
      contexto: "Um administrador deseja impedir valores duplicados em uma coluna de email.",
      pergunta: "Qual constraint deve ser aplicada?",
      alternativas: [
        "NOT NULL",
        "UNIQUE",
        "DEFAULT",
        "INDEX"
      ],
      correta: 1,
      explicacao: "UNIQUE impede registros duplicados em uma coluna."
    },

    {
      contexto: "Um usuário deseja consultar todos os registros de uma tabela.",
      pergunta: "Qual comando SQL realiza essa operação?",
      alternativas: [
        "SELECT * FROM tabela",
        "SHOW tabela",
        "GET tabela",
        "LIST tabela"
      ],
      correta: 0,
      explicacao: "SELECT * FROM tabela retorna todos os registros."
    },

    {
      contexto: "Uma consulta precisa retornar apenas usuários maiores de 18 anos.",
      pergunta: "Qual cláusula deve ser utilizada?",
      alternativas: [
        "ORDER BY",
        "GROUP BY",
        "WHERE",
        "LIMIT"
      ],
      correta: 2,
      explicacao: "WHERE é usada para filtrar registros."
    },

    {
      contexto: "Uma empresa deseja ordenar produtos pelo preço do maior para o menor.",
      pergunta: "Qual opção deve ser usada no ORDER BY?",
      alternativas: [
        "ASC",
        "DOWN",
        "DESC",
        "REVERSE"
      ],
      correta: 2,
      explicacao: "DESC realiza ordenação decrescente."
    },

    {
      contexto: "Um programador quer retornar apenas os 5 primeiros registros de uma consulta.",
      pergunta: "Qual cláusula deve utilizar?",
      alternativas: [
        "LIMIT",
        "TOP",
        "MAX",
        "FIRST"
      ],
      correta: 0,
      explicacao: "LIMIT restringe a quantidade de linhas retornadas."
    },

    {
      contexto: "Uma consulta precisa combinar dados de clientes e pedidos com correspondência entre tabelas.",
      pergunta: "Qual JOIN é mais apropriado?",
      alternativas: [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL JOIN"
      ],
      correta: 2,
      explicacao: "INNER JOIN retorna apenas registros com correspondência."
    },

    {
      contexto: "Uma empresa deseja unir resultados de duas consultas removendo duplicatas.",
      pergunta: "Qual operador deve ser usado?",
      alternativas: [
        "MERGE",
        "JOIN",
        "UNION",
        "COMBINE"
      ],
      correta: 2,
      explicacao: "UNION combina resultados removendo duplicatas."
    }
  ]
}