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
  }
}

// Mapa de assuntos: "areaId/assuntoId" → objeto do assunto
function construirMapaAssuntos() {
  const mapa = {}
  mapa["matematica/trigonometria"]          = ASSUNTO_TRIGONOMETRIA
  mapa["matematica/geometria-plana"]        = ASSUNTO_GEOMETRIA_PLANA
  mapa["matematica/funcoes"]                = ASSUNTO_FUNCOES
  mapa["ciencias_natureza/celula"]          = ASSUNTO_CELULA
  mapa["ciencias_natureza/genetica"]        = ASSUNTO_GENETICA
  mapa["historia/matematica-antiga"]        = ASSUNTO_MATEMATICA_ANTIGA
  mapa["historia/revolucao-francesa"]       = ASSUNTO_REVOLUCAO_FRANCESA
  return mapa
}
