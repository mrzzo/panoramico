const ASSUNTO_POSTGRESQL = {
  id: "postgresql",
  area: "banco_de_dados",
  nome: "PostgreSQL",
  nivel: "basico",

  descricao: "Conceitos fundamentais do PostgreSQL, SQL, criação de tabelas, manipulação de dados, transações, consultas e operações relacionais.",

  resumoRapido: `PostgreSQL é um SGBD relacional open source conhecido por robustez, confiabilidade e compatibilidade com SQL.

Principais características:
• Arquitetura cliente-servidor
• Compatível com ANSI SQL
• Multiusuário
• Suporte a transações ACID
• Alta escalabilidade

Ferramentas:
• pgAdmin 4 (interface gráfica)
• PSQL (linha de comando)
• DBeaver

Principais comandos SQL:
• CREATE
• ALTER
• DROP
• INSERT
• UPDATE
• DELETE
• SELECT

Principais restrições:
1. PRIMARY KEY
2. FOREIGN KEY
3. NOT NULL
4. UNIQUE

Tipos de dados comuns:
• INTEGER
• SERIAL
• VARCHAR
• DATE
• TIME
• NUMERIC

Transações:
• BEGIN
• COMMIT
• ROLLBACK
• SAVEPOINT

Consultas:
• WHERE
• ORDER BY
• GROUP BY
• HAVING
• JOIN
• UNION`,

  resumoDetalhado: [
    { tipo: "titulo", conteudo: "O que é PostgreSQL?" },
    { tipo: "paragrafo", conteudo: "PostgreSQL é um sistema gerenciador de banco de dados relacional (SGBD) de código aberto, conhecido pela robustez, confiabilidade e conformidade com padrões SQL." },
    { tipo: "imagem", conteudo: "PostgreSQL logo database server" },

    { tipo: "titulo", conteudo: "Arquitetura Cliente-Servidor" },
    { tipo: "paragrafo", conteudo: "O PostgreSQL funciona em arquitetura cliente-servidor. O servidor gerencia arquivos, conexões e execução de comandos SQL, enquanto os clientes enviam consultas e comandos." },

    { tipo: "titulo", conteudo: "Ferramentas do PostgreSQL" },
    { tipo: "paragrafo", conteudo: "O pgAdmin 4 é uma interface gráfica para administração visual do banco. Já o PSQL é uma interface de terminal usada para executar comandos SQL diretamente." },
    { tipo: "imagem", conteudo: "pgAdmin 4 interface PostgreSQL" },

    { tipo: "titulo", conteudo: "História da SQL" },
    { tipo: "paragrafo", conteudo: "A SQL surgiu na IBM na década de 1970 com o nome SEQUEL. Posteriormente foi padronizada pelo ANSI, tornando-se ANSI-SQL." },

    { tipo: "titulo", conteudo: "Criação de Banco de Dados" },
    { tipo: "paragrafo", conteudo: "O comando CREATE DATABASE cria bancos de dados. Já DROP DATABASE remove databases existentes. Todo banco possui automaticamente o schema public." },

    { tipo: "titulo", conteudo: "Schemas" },
    { tipo: "paragrafo", conteudo: "Schemas organizam objetos dentro do banco. É possível criar schemas personalizados usando CREATE SCHEMA." },

    { tipo: "titulo", conteudo: "Criação de Tabelas" },
    { tipo: "paragrafo", conteudo: "As tabelas são criadas usando CREATE TABLE, definindo colunas, tipos de dados e restrições." },

    { tipo: "titulo", conteudo: "Principais Restrições" },
    { tipo: "paragrafo", conteudo: "PRIMARY KEY identifica unicamente registros. FOREIGN KEY cria relacionamentos entre tabelas. NOT NULL torna campos obrigatórios. UNIQUE impede valores repetidos." },

    { tipo: "titulo", conteudo: "Tipos de Dados" },
    { tipo: "paragrafo", conteudo: "Os principais tipos são INTEGER, SERIAL, VARCHAR, CHAR, DATE, TIME, NUMERIC, REAL, DOUBLE e MONEY." },

    { tipo: "titulo", conteudo: "ALTER TABLE e DROP TABLE" },
    { tipo: "paragrafo", conteudo: "ALTER TABLE modifica estruturas existentes, adicionando ou removendo colunas. DROP TABLE remove tabelas e seus dados." },

    { tipo: "titulo", conteudo: "CRUD no PostgreSQL" },
    { tipo: "paragrafo", conteudo: "CRUD representa as operações básicas: INSERT para inserir, SELECT para consultar, UPDATE para atualizar e DELETE para remover dados." },

    { tipo: "titulo", conteudo: "Transações" },
    { tipo: "paragrafo", conteudo: "Transações garantem integridade dos dados. Utilizam BEGIN, COMMIT e ROLLBACK para confirmar ou desfazer operações." },
    { tipo: "imagem", conteudo: "database transaction commit rollback diagram" },

    { tipo: "titulo", conteudo: "Propriedades ACID" },
    { tipo: "paragrafo", conteudo: "As propriedades ACID são: Atomicidade, Consistência, Isolamento e Durabilidade." },

    { tipo: "titulo", conteudo: "MVCC" },
    { tipo: "paragrafo", conteudo: "O PostgreSQL utiliza MVCC (Controle de Concorrência Multi Versão), permitindo múltiplas transações simultâneas sem bloqueios excessivos." },

    { tipo: "titulo", conteudo: "Consultas com SELECT" },
    { tipo: "paragrafo", conteudo: "SELECT é usado para recuperar dados. Pode ser combinado com WHERE, ORDER BY, GROUP BY e HAVING." },

    { tipo: "titulo", conteudo: "ORDER BY e WHERE" },
    { tipo: "paragrafo", conteudo: "WHERE filtra registros. ORDER BY organiza os resultados em ordem crescente (ASC) ou decrescente (DESC)." },

    { tipo: "titulo", conteudo: "Operadores SQL" },
    { tipo: "paragrafo", conteudo: "LIKE realiza buscas textuais. IN compara listas de valores. BETWEEN verifica intervalos. IS NULL testa valores nulos." },

    { tipo: "titulo", conteudo: "Funções de Agregação" },
    { tipo: "paragrafo", conteudo: "COUNT, AVG, MIN e MAX são funções utilizadas para gerar resumos e estatísticas dos dados." },

    { tipo: "titulo", conteudo: "Views" },
    { tipo: "paragrafo", conteudo: "Views são consultas salvas no banco usando CREATE VIEW, facilitando reutilização e simplificando queries complexas." },

    { tipo: "titulo", conteudo: "JOINs" },
    { tipo: "paragrafo", conteudo: "JOINs combinam dados de múltiplas tabelas. Os principais são INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL OUTER JOIN." },
    { tipo: "imagem", conteudo: "SQL joins venn diagram" },

    { tipo: "titulo", conteudo: "Subqueries" },
    { tipo: "paragrafo", conteudo: "Subqueries podem ser aninhadas ou correlatas. EXISTS e NOT EXISTS verificam existência de registros." },

    { tipo: "titulo", conteudo: "Operadores de Conjunto" },
    { tipo: "paragrafo", conteudo: "UNION combina resultados, INTERSECT retorna interseções e EXCEPT retorna diferenças entre consultas." }
  ],

  flashcards: [
    {
      pergunta: "O que é PostgreSQL?",
      resposta: "É um sistema gerenciador de banco de dados relacional open source baseado em SQL."
    },
    {
      pergunta: "Qual comando cria um banco de dados?",
      resposta: "CREATE DATABASE."
    },
    {
      pergunta: "Qual comando remove uma tabela?",
      resposta: "DROP TABLE."
    },
    {
      pergunta: "Qual a função da PRIMARY KEY?",
      resposta: "Identificar unicamente cada registro da tabela."
    },
    {
      pergunta: "Qual restrição impede valores repetidos?",
      resposta: "UNIQUE."
    },
    {
      pergunta: "Qual comando é usado para inserir dados?",
      resposta: "INSERT INTO."
    },
    {
      pergunta: "Qual comando desfaz uma transação?",
      resposta: "ROLLBACK."
    },
    {
      pergunta: "O que significa ACID?",
      resposta: "Atomicidade, Consistência, Isolamento e Durabilidade."
    },
    {
      pergunta: "Qual JOIN retorna apenas registros correspondentes entre tabelas?",
      resposta: "INNER JOIN."
    },
    {
      pergunta: "Qual operador é usado para buscas textuais?",
      resposta: "LIKE."
    },
    {
      pergunta: "Qual cláusula filtra grupos criados pelo GROUP BY?",
      resposta: "HAVING."
    },
    {
      pergunta: "O que faz o comando ORDER BY?",
      resposta: "Ordena os resultados de uma consulta."
    }
  ],

  videoaulas: [
    {
      titulo: "Curso PostgreSQL Básico",
      url: "https://www.youtube.com/results?search_query=curso+postgresql+basico"
    },
    {
      titulo: "Aprenda SQL e PostgreSQL",
      url: "https://www.youtube.com/results?search_query=sql+postgresql"
    },
    {
      titulo: "JOINs em SQL",
      url: "https://www.youtube.com/results?search_query=joins+sql+postgresql"
    }
  ],

  simulado: [
    {
      contexto: "Um desenvolvedor precisa criar um banco de dados no PostgreSQL.",
      pergunta: "Qual comando SQL deve ser utilizado?",
      alternativas: [
        "CREATE TABLE",
        "CREATE DATABASE",
        "NEW DATABASE",
        "ADD DATABASE"
      ],
      correta: 1,
      explicacao: "CREATE DATABASE é o comando usado para criar um banco de dados."
    },
    {
      contexto: "Uma tabela precisa identificar unicamente cada registro.",
      pergunta: "Qual restrição deve ser utilizada?",
      alternativas: [
        "FOREIGN KEY",
        "UNIQUE",
        "PRIMARY KEY",
        "CHECK"
      ],
      correta: 2,
      explicacao: "PRIMARY KEY identifica de forma única cada linha da tabela."
    },
    {
      contexto: "Um sistema precisa impedir valores repetidos em uma coluna de e-mail.",
      pergunta: "Qual restrição é mais adequada?",
      alternativas: [
        "UNIQUE",
        "NOT NULL",
        "PRIMARY KEY",
        "DEFAULT"
      ],
      correta: 0,
      explicacao: "UNIQUE impede valores duplicados."
    },
    {
      contexto: "Um programador deseja inserir dados em uma tabela.",
      pergunta: "Qual comando SQL deve usar?",
      alternativas: [
        "UPDATE",
        "INSERT INTO",
        "ADD DATA",
        "CREATE ROW"
      ],
      correta: 1,
      explicacao: "INSERT INTO é usado para inserir registros."
    },
    {
      contexto: "Uma transação apresentou erro durante execução.",
      pergunta: "Qual comando desfaz as alterações realizadas?",
      alternativas: [
        "COMMIT",
        "SAVEPOINT",
        "ROLLBACK",
        "UNDO"
      ],
      correta: 2,
      explicacao: "ROLLBACK cancela as operações da transação."
    },
    {
      contexto: "Um usuário deseja visualizar apenas registros com correspondência entre duas tabelas.",
      pergunta: "Qual JOIN deve utilizar?",
      alternativas: [
        "LEFT JOIN",
        "FULL JOIN",
        "RIGHT JOIN",
        "INNER JOIN"
      ],
      correta: 3,
      explicacao: "INNER JOIN retorna apenas registros com correspondência."
    },
    {
      contexto: "Uma consulta precisa ordenar nomes em ordem alfabética.",
      pergunta: "Qual cláusula SQL é usada?",
      alternativas: [
        "GROUP BY",
        "WHERE",
        "ORDER BY",
        "HAVING"
      ],
      correta: 2,
      explicacao: "ORDER BY é responsável pela ordenação dos resultados."
    },
    {
      contexto: "Um administrador deseja salvar uma consulta complexa para reutilização.",
      pergunta: "Qual recurso deve utilizar?",
      alternativas: [
        "INDEX",
        "VIEW",
        "TRIGGER",
        "SEQUENCE"
      ],
      correta: 1,
      explicacao: "Views armazenam consultas reutilizáveis."
    },
    {
      contexto: "Uma consulta precisa buscar nomes que começam com 'Mar'.",
      pergunta: "Qual operador deve ser utilizado?",
      alternativas: [
        "BETWEEN",
        "IN",
        "LIKE",
        "EXISTS"
      ],
      correta: 2,
      explicacao: "LIKE é usado para buscas textuais com padrões."
    },
    {
      contexto: "Um sistema precisa garantir que uma transação seja executada completamente ou não seja executada.",
      pergunta: "Qual propriedade ACID representa isso?",
      alternativas: [
        "Durabilidade",
        "Isolamento",
        "Consistência",
        "Atomicidade"
      ],
      correta: 3,
      explicacao: "Atomicidade garante tudo ou nada em uma transação."
    },
    {
      contexto: "Uma consulta precisa agrupar dados para calcular médias.",
      pergunta: "Qual cláusula SQL deve ser usada?",
      alternativas: [
        "ORDER BY",
        "GROUP BY",
        "WHERE",
        "DISTINCT"
      ],
      correta: 1,
      explicacao: "GROUP BY agrupa registros para uso com funções de agregação."
    },
    {
      contexto: "Uma tabela possui um campo SERIAL.",
      pergunta: "Qual característica esse tipo possui?",
      alternativas: [
        "Texto variável",
        "Data automática",
        "Inteiro auto incremento",
        "Valor monetário"
      ],
      correta: 2,
      explicacao: "SERIAL é um inteiro sequencial automático."
    }
  ]
}