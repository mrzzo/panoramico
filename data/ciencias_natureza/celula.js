const ASSUNTO_CELULA = {
  id: "celula",
  area: "ciencias_natureza",
  nome: "A Célula",
  nivel: "basico",
  descricao: "Estrutura e funções da unidade básica da vida",

  resumoRapido: `A célula é a menor unidade estrutural e funcional dos seres vivos.

Dois tipos principais:
• Procariótica: sem núcleo definido (bactérias e arqueas)
• Eucariótica: com núcleo envolvido por membrana (animais, plantas, fungos)

Organelas principais:
• Núcleo: contém o DNA, controla a célula
• Mitocôndria: produz energia (ATP)
• Ribossomo: síntese de proteínas
• Membrana plasmática: controla entrada e saída de substâncias`,

  resumoDetalhado: [
    {
      titulo: "Células procarióticas e eucarióticas",
      conteudo: `Procarióticas (pro = antes, karyon = núcleo):
• Sem núcleo definido — DNA fica livre no citoplasma
• Sem organelas membranosas
• Menores e mais simples
• Exemplos: bactérias e arqueas

Eucarióticas:
• Núcleo com membrana nuclear (carioteca)
• Possuem organelas membranosas
• Maiores e mais complexas
• Exemplos: células animais, vegetais, fungos`
    },
    {
      titulo: "Principais organelas e suas funções",
      conteudo: `• Núcleo: armazena o DNA, controla as atividades celulares
• Mitocôndria: realiza respiração celular, produz ATP (energia)
• Ribossomo: sintetiza proteínas (presente em todas as células)
• Retículo Endoplasmático Rugoso (RER): produção e transporte de proteínas
• Retículo Endoplasmático Liso (REL): síntese de lipídios
• Complexo de Golgi: processa e empacota proteínas para exportação
• Lisossomo: digestão intracelular (só em células animais)
• Cloroplasto: realiza fotossíntese (só em células vegetais)
• Vacúolo: armazenamento; grande em células vegetais`
    },
    {
      titulo: "Membrana plasmática",
      conteudo: `Estrutura: bicamada fosfolipídica com proteínas (Modelo do Mosaico Fluido)

Funções:
• Separar o interior da célula do ambiente externo
• Controlar o transporte de substâncias
• Reconhecimento celular

Tipos de transporte:
• Passivo: sem gasto de energia (difusão, osmose)
• Ativo: com gasto de energia (bomba de sódio e potássio)`
    }
  ],

  relacionados: [
    { area: "ciencias_natureza", id: "genetica", nome: "Genética Mendeliana", motivo: "O DNA fica no núcleo da célula" }
  ],

  videoaulas: [
    { titulo: "Citologia completa — ENEM", url: "https://www.youtube.com/results?search_query=citologia+celula+enem+resumo" }
  ],

  simulado: [
    {
      pergunta: "Qual organela é responsável pela produção de energia (ATP) na célula?",
      alternativas: ["Ribossomo", "Núcleo", "Mitocôndria", "Vacúolo"],
      correta: 2,
      explicacao: "A mitocôndria realiza a respiração celular aeróbica, produzindo ATP — a principal moeda energética da célula."
    },
    {
      pergunta: "Uma célula sem núcleo definido, com DNA livre no citoplasma, é classificada como:",
      alternativas: ["Eucariótica", "Procariótica", "Vegetal", "Animal"],
      correta: 1,
      explicacao: "Células procarióticas não possuem núcleo delimitado por membrana. São características de bactérias e arqueas."
    },
    {
      pergunta: "O cloroplasto é uma organela presente exclusivamente em:",
      alternativas: ["Células animais", "Bactérias", "Células vegetais", "Fungos"],
      correta: 2,
      explicacao: "Os cloroplastos contêm clorofila e realizam a fotossíntese. Estão presentes apenas em células vegetais e algas."
    }
  ]
}
