// =============================================
// ASSUNTO: A Célula
// Área: Ciências da Natureza
// =============================================
// Blocos do resumoDetalhado:
//   { tipo: "titulo",    conteudo: "..." }
//   { tipo: "paragrafo", conteudo: "..." }
//   { tipo: "imagem",    conteudo: "query Google Imagens" }
//   { tipo: "video",     conteudo: "URL embed YouTube" }
//
// flashcards: { pergunta, resposta } — conceituais, separados do simulado
// simulado:   { contexto, pergunta, alternativas, correta, explicacao }
// =============================================

const ASSUNTO_CELULA = {
  id: "celula",
  area: "ciencias_natureza",
  nome: "A Célula",
  nivel: "basico",
  descricao: "Estrutura e funções da unidade básica da vida",

  resumoRapido: `A célula é a menor unidade estrutural e funcional dos seres vivos.

Dois tipos principais:
• Procariótica: sem núcleo definido (bactérias)
• Eucariótica: com núcleo membranoso (animais, plantas, fungos)

Organelas principais:
• Núcleo: contém o DNA, controla a célula
• Mitocôndria: produz energia (ATP)
• Ribossomo: síntese de proteínas
• Membrana plasmática: controla entrada/saída`,

  resumoDetalhado: [
    { tipo: "titulo",    conteudo: "Procariótica vs Eucariótica" },
    { tipo: "paragrafo", conteudo: "Procarióticas (pro = antes, karyon = núcleo):\n• Sem núcleo definido — DNA livre no citoplasma\n• Sem organelas membranosas\n• Menores e mais simples\n• Exemplos: bactérias e arqueas\n\nEucarióticas:\n• Núcleo com membrana (carioteca)\n• Possuem organelas membranosas\n• Maiores e mais complexas\n• Exemplos: células animais, vegetais, fungos" },
    { tipo: "imagem",    conteudo: "prokaryotic vs eukaryotic cell comparison diagram" },

    { tipo: "titulo",    conteudo: "Principais organelas e funções" },
    { tipo: "paragrafo", conteudo: "• Núcleo: armazena o DNA, controla a célula\n• Mitocôndria: respiração celular → produz ATP\n• Ribossomo: síntese de proteínas\n• Retículo Endoplasmático Rugoso: produção de proteínas\n• Retículo Endoplasmático Liso: síntese de lipídios\n• Complexo de Golgi: processa e empacota proteínas\n• Lisossomo: digestão intracelular (só animais)\n• Cloroplasto: fotossíntese (só vegetais)\n• Vacúolo: armazenamento" },
    { tipo: "video",     conteudo: "https://www.youtube.com/embed/8IlzKri08kk" },

    { tipo: "titulo",    conteudo: "Membrana plasmática" },
    { tipo: "paragrafo", conteudo: "Estrutura: bicamada fosfolipídica com proteínas (Modelo do Mosaico Fluido)\n\nFunções:\n• Separar o interior da célula do ambiente\n• Controlar transporte de substâncias\n• Reconhecimento celular\n\nTransporte passivo: sem energia (difusão, osmose)\nTransporte ativo: com energia (bomba de sódio e potássio)" },
    { tipo: "imagem",    conteudo: "cell membrane phospholipid bilayer fluid mosaic model" },
  ],

  flashcards: [
    { pergunta: "Qual é a função da mitocôndria?",                         resposta: "Realizar a respiração celular e produzir ATP (energia para a célula)." },
    { pergunta: "Qual é a diferença entre célula procariótica e eucariótica?", resposta: "Procariótica não tem núcleo definido (DNA livre). Eucariótica tem núcleo com membrana." },
    { pergunta: "Qual organela realiza a síntese de proteínas?",            resposta: "O ribossomo." },
    { pergunta: "O que é o Complexo de Golgi?",                            resposta: "Organela que processa, empacota e distribui proteínas produzidas pelo retículo." },
    { pergunta: "Qual organela realiza a fotossíntese?",                    resposta: "O cloroplasto — presente apenas em células vegetais e algas." },
    { pergunta: "O que é transporte ativo?",                               resposta: "Transporte de substâncias contra o gradiente de concentração, com gasto de energia (ATP)." },
    { pergunta: "Onde fica o DNA nas células eucarióticas?",               resposta: "Dentro do núcleo, envolvido pela carioteca (membrana nuclear)." },
    { pergunta: "Para que servem os lisossomos?",                          resposta: "Digestão intracelular — destroem substâncias e organelas desgastadas." },
  ],

  relacionados: [
    { area: "ciencias_natureza", id: "genetica", nome: "Genética Mendeliana", motivo: "O DNA fica no núcleo da célula" }
  ],

  videoaulas: [
    { titulo: "Citologia completa — ENEM", url: "https://www.youtube.com/results?search_query=citologia+celula+enem+resumo" }
  ],

  simulado: [
    {
      contexto: "Em 2020, durante a pandemia de COVID-19, muito se discutiu sobre a diferença entre vírus e bactérias. Os vírus não possuem células próprias — eles invadem células do hospedeiro para se reproduzir. Já as bactérias são organismos unicelulares com organização celular própria.",
      pergunta: "Com base na organização celular, as bactérias são classificadas como organismos procarióticos porque:",
      alternativas: ["Possuem núcleo com membrana e várias organelas", "Não possuem núcleo definido, com DNA livre no citoplasma", "São acelulares e dependem de hospedeiro", "Possuem mitocôndrias e cloroplastos"],
      correta: 1,
      explicacao: "Bactérias são procarióticas: não possuem núcleo delimitado por membrana. Seu DNA fica livre no citoplasma. Isso as diferencia das células eucarióticas (animais, plantas, fungos)."
    },
    {
      contexto: "Um pesquisador analisa ao microscópio eletrônico uma célula desconhecida e observa: presença de núcleo com membrana, mitocôndrias, retículo endoplasmático e ausência de cloroplastos e parede celular.",
      pergunta: "Essas características indicam que a célula analisada é provavelmente:",
      alternativas: ["Uma bactéria", "Uma célula vegetal", "Uma célula animal", "Uma arquea"],
      correta: 2,
      explicacao: "Núcleo com membrana → eucariótica. Ausência de cloroplasto e parede celular → não é vegetal. Presença de mitocôndrias → célula animal eucariótica."
    },
  ]
}
