// =============================================
// PANORÂMICO — Rastreamento de progresso
// Usa localStorage para persistir dados
// =============================================

const STORAGE_KEY = "panoramico_progresso"

function getProgresso() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  } catch {
    return {}
  }
}

function marcarVisto(id) {
  const p = getProgresso()
  p[id] = { visto: true, data: new Date().toLocaleDateString("pt-BR") }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}

function isVisto(id) {
  return !!getProgresso()[id]?.visto
}

function getDataVisto(id) {
  return getProgresso()[id]?.data || null
}

function totalVisto() {
  return Object.keys(getProgresso()).length
}
