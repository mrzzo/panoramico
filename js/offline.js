// =============================================
// PANORÂMICO — Gerenciador PWA / Offline
// =============================================

const SIMULADO_STORAGE_KEY = 'panoramico_simulado'

// =============================================
// REGISTRO DO SERVICE WORKER
// =============================================

async function registrarSW() {
  if (!('serviceWorker' in navigator)) return
  try {
    await navigator.serviceWorker.register('./sw.js')
    console.log('[PWA] Service Worker registrado')
  } catch (e) {
    console.warn('[PWA] Falha ao registrar SW:', e)
  }
}

// =============================================
// COMUNICAÇÃO COM O SERVICE WORKER
// =============================================

function enviarSW(mensagem) {
  return new Promise((resolve, reject) => {
    if (!navigator.serviceWorker?.controller) { reject('SW não ativo'); return }
    const canal = new MessageChannel()
    canal.port1.onmessage = e => resolve(e.data)
    navigator.serviceWorker.controller.postMessage(mensagem, [canal.port2])
  })
}

// Versão sem esperar resposta (fire-and-forget)
function notificarSW(mensagem) {
  if (navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage(mensagem)
  }
}

// =============================================
// UI DE CONFIGURAÇÃO OFFLINE
// =============================================

async function abrirModalOffline() {
  const modal = document.getElementById('modal-offline')
  if (!modal) return
  modal.style.display = 'flex'
  await carregarStatusOffline()
}

function fecharModalOffline() {
  const modal = document.getElementById('modal-offline')
  if (modal) modal.style.display = 'none'
}

async function carregarStatusOffline() {
  const lista = document.getElementById('offline-lista')
  if (!lista) return

  lista.innerHTML = '<p style="color:var(--t3);font-size:13px;">Verificando cache...</p>'

  let grupos = []
  let status  = {}

  try {
    const [gRes, sRes] = await Promise.all([
      enviarSW({ tipo: 'listar-grupos' }),
      enviarSW({ tipo: 'status-cache' })
    ])
    grupos = gRes.grupos || []
    status = sRes.status || {}
  } catch {
    lista.innerHTML = '<p style="color:var(--t3);font-size:13px;">Ative o site online pelo menos uma vez para configurar o acesso offline.</p>'
    return
  }

  lista.innerHTML = ''

  grupos.forEach(g => {
    const online = status[g.key] || false

    const row = document.createElement('div')
    row.className = 'offline-row'
    row.id = `offline-row-${g.key}`
    row.innerHTML = `
      <div class="offline-info">
        <span class="offline-nm">${g.label}</span>
        <span class="offline-st" id="offline-st-${g.key}">${online ? '✓ disponível offline' : 'apenas online'}</span>
      </div>
      <label class="switch">
        <input type="checkbox" id="sw-${g.key}" ${online ? 'checked' : ''}
          onchange="toggleOffline('${g.key}', this.checked)" />
        <span class="switch-track"></span>
      </label>
    `
    lista.appendChild(row)
  })
}

async function toggleOffline(key, ativar) {
  const st   = document.getElementById(`offline-st-${key}`)
  const chk  = document.getElementById(`sw-${key}`)
  if (st)  st.textContent  = ativar ? '⏳ baixando...' : '⏳ removendo...'
  if (chk) chk.disabled = true

  try {
    const tipo = ativar ? 'cachear-area' : 'remover-area'
    await enviarSW({ tipo, key })
    if (st)  st.textContent = ativar ? '✓ disponível offline' : 'apenas online'
  } catch {
    if (st)  st.textContent = 'erro — tente novamente'
    if (chk) chk.checked = !ativar
  } finally {
    if (chk) chk.disabled = false
  }
}

// =============================================
// PERSISTÊNCIA DO SIMULADO
// =============================================

function salvarSimulado(chave, respostas) {
  try {
    const todos = JSON.parse(localStorage.getItem(SIMULADO_STORAGE_KEY) || '{}')
    todos[chave] = respostas
    localStorage.setItem(SIMULADO_STORAGE_KEY, JSON.stringify(todos))
  } catch {}
}

function carregarSimulado(chave) {
  try {
    const todos = JSON.parse(localStorage.getItem(SIMULADO_STORAGE_KEY) || '{}')
    return todos[chave] || null
  } catch { return null }
}

function limparSimulado(chave) {
  try {
    const todos = JSON.parse(localStorage.getItem(SIMULADO_STORAGE_KEY) || '{}')
    delete todos[chave]
    localStorage.setItem(SIMULADO_STORAGE_KEY, JSON.stringify(todos))
  } catch {}
}

// =============================================
// INIT
// =============================================
registrarSW()
