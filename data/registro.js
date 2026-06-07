// =============================================
// PANORÂMICO — Registro central de áreas
// Adicione novas áreas e assuntos aqui.
// O objeto é montado após todos os scripts de
// dados serem carregados pelo HTML.
// =============================================

function construirRegistro() {
  return {
    matematica: MATEMATICA,
    ciencias_natureza: CIENCIAS_NATUREZA,
    historia: HISTORIA,
    nocoes_de_manutencao_mecanica: NOCOES_DE_MANUTENCAO_MECANICA,
    banco_de_dados: BANCO_DE_DADOS,
    controle_da_producao: CONTROLE_DA_PRODUCAO,
  }
}

// Mapa de assuntos: "areaId/assuntoId" → objeto do assunto
function construirMapaAssuntos() {
  const mapa = {}
  mapa["matematica/trigonometria"] = ASSUNTO_TRIGONOMETRIA
  mapa["matematica/geometria-plana"] = ASSUNTO_GEOMETRIA_PLANA
  mapa["matematica/funcoes"] = ASSUNTO_FUNCOES
  mapa["ciencias_natureza/celula"] = ASSUNTO_CELULA
  mapa["ciencias_natureza/genetica"] = ASSUNTO_GENETICA
  mapa["historia/matematica-antiga"] = ASSUNTO_MATEMATICA_ANTIGA
  mapa["historia/revolucao-francesa"] = ASSUNTO_REVOLUCAO_FRANCESA
  mapa["nocoes_de_manutencao_mecanica/lubrificacao-industrial"] = ASSUNTO_LUBRIFICACAO_INDUSTRIAL
  mapa["banco_de_dados/sistemas-de-banco-de-dados"] = ASSUNTO_SISTEMAS_DE_BANCO_DE_DADOS
  mapa["banco_de_dados/modelagem-conceitual"] = ASSUNTO_MODELAGEM_CONCEITUAL
  mapa["banco_de_dados/modelagem-logica-e-fisica"] = ASSUNTO_MODELAGEM_LOGICA_E_FISICA
  mapa["banco_de_dados/postgresql"] = ASSUNTO_POSTGRESQL
  mapa["banco_de_dados/mysql"] = ASSUNTO_MYSQL
  mapa["controle_da_producao/controle-da-producao"] = ASSUNTO_CONTROLE_DA_PRODUCAO

  return mapa
}
//Noções de Manutenção Mecânica
//Lubrifiação Industrial
//Controle da Produção
//controle_da_producao controle-da-producao ASSUNTO_CONTROLE_DA_PRODUCAO

// banco_de_dados BANCO_DE_DADOS
// ASSUNTO_SISTEMAS_DE_BANCO_DE_DADOS sistemas-de-banco-de-dados
// ASSUNTO_MODELAGEM_CONCEITUAL modelagem-conceitual
// ASSUNTO_MODELAGEM_LOGICA_E_FISICA modelagem-logica-e-fisica
// ASSUNTO_POSTGRESQL postgresql
// ASSUNTO_MYSQL mysql

