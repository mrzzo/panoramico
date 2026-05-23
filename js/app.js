// =============================================
// PANORÂMICO — App principal
// =============================================

const PREVIEW_LIMIT = 3  // assuntos mostrados na biblioteca antes de "ver tudo"

let registro = {}
let mapaAssuntos = {}

// ---- INIT ----

document.addEventListener('DOMContentLoaded', () => {
  registro = construirRegistro()
  mapaAssuntos = construirMapaAssuntos()
  mostrarPagina('home')
})

// =============================================
// ROTEADOR
// =============================================

function mostrarPagina(id, titulo, voltarFn) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'))
  document.getElementById('pag-' + id)?.classList.add('ativa')
  window.scrollTo(0, 0)

  // navbar vs topbar
  const comNav     = ['home', 'biblioteca']
  const comTopbar  = ['area', 'assunto']

  document.getElementById('navbar').style.display    = comNav.includes(id)    ? 'flex' : 'none'
  document.getElementById('topbar-wrap').style.display = comTopbar.includes(id) ? 'flex' : 'none'

  // highlight nav
  document.querySelectorAll('.nav-pill').forEach(b => b.classList.remove('ativo'))
  document.getElementById('nav-' + id)?.classList.add('ativo')

  // topbar titulo
  if (comTopbar.includes(id)) {
    document.getElementById('topbar-titulo').textContent = titulo || ''
  }

  // voltar
  if (voltarFn) {
    document.getElementById('topbar-voltar').onclick = voltarFn
  }
}

// =============================================
// HOME
// =============================================

function irBiblioteca() {
  renderBiblioteca()
  mostrarPagina('biblioteca')
  document.getElementById('nav-biblioteca').classList.add('ativo')
}

// =============================================
// BIBLIOTECA
// =============================================

function renderBiblioteca() {
  const grid = document.getElementById('bib-areas-grid')
  grid.innerHTML = ''

  Object.values(registro).forEach(area => {
    const qtd = area.assuntos.length
    const btn = document.createElement('button')
    btn.className = 'area-card'
    btn.innerHTML = `
      <div class="a-ic">${area.icone}</div>
      <div class="a-nm">${area.nome}</div>
      <div class="a-qt">${qtd} assunto${qtd !== 1 ? 's' : ''}</div>
    `
    btn.onclick = () => irArea(area.id)
    grid.appendChild(btn)
  })

  // preview: pegar primeiros assuntos de todas as áreas
  const previewEl = document.getElementById('bib-preview')
  previewEl.innerHTML = ''

  // Mostrar preview apenas da primeira área como exemplo
  const primeiraArea = Object.values(registro)[0]
  renderPreviewArea(previewEl, primeiraArea)
}

function renderPreviewArea(container, area) {
  const header = document.createElement('div')
  header.className = 'preview-header'
  header.innerHTML = `
    <span class="preview-label">${area.nome}</span>
    <button class="preview-ver-tudo" onclick="irArea('${area.id}')">Ver todos →</button>
  `
  container.appendChild(header)

  const lista = area.assuntos.slice(0, PREVIEW_LIMIT)
  lista.forEach(a => {
    container.appendChild(criarAssuntoRow(a, area.id))
  })

  if (area.assuntos.length > PREVIEW_LIMIT) {
    const mais = document.createElement('button')
    mais.className = 'preview-ver-tudo'
    mais.style.cssText = 'display:block;margin-top:4px;font-size:13px;color:var(--t3);'
    mais.textContent = `+ ${area.assuntos.length - PREVIEW_LIMIT} assuntos`
    mais.onclick = () => irArea(area.id)
    container.appendChild(mais)
  }
}

// =============================================
// PÁGINA DA ÁREA
// =============================================

function irArea(areaId) {
  const area = registro[areaId]
  if (!area) return

  const container = document.getElementById('area-lista')
  container.innerHTML = ''

  // header
  document.getElementById('area-header-ic').textContent  = area.icone
  document.getElementById('area-header-nm').textContent  = area.nome
  document.getElementById('area-header-qt').textContent  = `${area.assuntos.length} assuntos`

  area.assuntos.forEach(a => {
    container.appendChild(criarAssuntoRow(a, areaId, true))
  })

  mostrarPagina('area', area.nome, () => {
    renderBiblioteca()
    mostrarPagina('biblioteca')
    document.getElementById('nav-biblioteca').classList.add('ativo')
  })
}

function criarAssuntoRow(assunto, areaId, full = false) {
  const visto = isVisto(`${areaId}/${assunto.id}`)
  const data  = getDataVisto(`${areaId}/${assunto.id}`)

  const row = document.createElement('div')
  row.className = 'assunto-row'
  row.innerHTML = `
    <div class="ar-info">
      <div class="ar-nm">${assunto.nome}</div>
      ${full ? `<div class="ar-desc">${assunto.descricao}</div>` : ''}
    </div>
    <div class="ar-meta">
      <span class="badge badge-${assunto.nivel}">${assunto.nivel}</span>
      ${visto ? `<span class="badge badge-visto">✓</span>` : ''}
      <span class="ar-seta">›</span>
    </div>
  `
  row.onclick = () => irAssunto(areaId, assunto.id)
  return row
}

// =============================================
// PÁGINA DO ASSUNTO
// =============================================

let simuladoState = {}

function irAssunto(areaId, assuntoId) {
  const chave = `${areaId}/${assuntoId}`
  const dados = mapaAssuntos[chave]
  const area  = registro[areaId]
  if (!dados) return

  // header
  document.getElementById('assunto-titulo').textContent = dados.nome
  document.getElementById('assunto-desc').textContent   = dados.descricao
  renderAssuntoMeta(dados)

  // conteúdo das tabs
  renderResumoRapido(dados)
  renderResumoDetalhado(dados)
  renderFlashcards(dados)
  renderSimulado(dados)

  // botão visto
  atualizarBtnVisto(chave)

  // ativar primeira tab
  ativarTab('rapido')

  mostrarPagina('assunto', dados.nome, () => irArea(areaId))
  document.getElementById('topbar-area-nome').textContent = area?.nome || ''
}

function renderAssuntoMeta(dados) {
  const visto = isVisto(`${dados.area}/${dados.id}`)
  const data  = getDataVisto(`${dados.area}/${dados.id}`)
  const el = document.getElementById('assunto-meta')
  el.innerHTML = `
    <span class="badge badge-${dados.nivel}">${dados.nivel}</span>
    ${visto ? `<span class="badge badge-visto">✓ visto em ${data}</span>` : ''}
  `
}

// ---- RESUMO RÁPIDO ----
function renderResumoRapido(dados) {
  document.getElementById('tab-rapido').innerHTML =
    `<div class="resumo-rapido-box">${dados.resumoRapido.trim()}</div>`
}

// ---- RESUMO DETALHADO ----
function renderResumoDetalhado(dados) {
  const el = document.getElementById('tab-detalhado')
  el.innerHTML = ''

  dados.resumoDetalhado.forEach(s => {
    const div = document.createElement('div')
    div.className = 'secao-det'
    div.innerHTML = `
      <h3 class="secao-det-titulo">${s.titulo}</h3>
      <div class="secao-det-corpo">${s.conteudo}</div>
    `
    el.appendChild(div)
  })

  if (dados.relacionados?.length) {
    const lbl = document.createElement('p')
    lbl.className = 'secao-rotulo'
    lbl.textContent = 'Assuntos relacionados'
    el.appendChild(lbl)

    dados.relacionados.forEach(r => {
      const item = document.createElement('div')
      item.className = 'rel-item'
      item.innerHTML = `
        <div>
          <div class="rel-nm">↗ ${r.nome}</div>
          <div class="rel-why">${r.motivo}</div>
        </div>
      `
      item.onclick = () => irAssunto(r.area, r.id)
      el.appendChild(item)
    })
  }

  if (dados.videoaulas?.length) {
    const lbl = document.createElement('p')
    lbl.className = 'secao-rotulo'
    lbl.textContent = 'Videoaulas'
    el.appendChild(lbl)

    dados.videoaulas.forEach(v => {
      const a = document.createElement('a')
      a.className = 'video-item'
      a.href = v.url
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.innerHTML = `<span class="video-play">▶</span><span class="video-nm">${v.titulo}</span>`
      el.appendChild(a)
    })
  }
}

// ---- FLASHCARDS ----
function renderFlashcards(dados) {
  const el = document.getElementById('tab-flashcards')
  if (!dados.simulado?.length) {
    el.innerHTML = '<p style="color:var(--t3);text-align:center;padding:40px 0;">Sem flashcards ainda.</p>'
    return
  }
  el.innerHTML = '<p class="fc-hint">Toque no card para revelar a resposta</p>'
  dados.simulado.forEach(q => {
    const wrap = document.createElement('div')
    wrap.className = 'fc-wrap'
    const card = document.createElement('div')
    card.className = 'fc'
    card.innerHTML = `
      <div class="fc-f">${q.pergunta}</div>
      <div class="fc-v">${q.explicacao}</div>
    `
    card.onclick = () => card.classList.toggle('virado')
    wrap.appendChild(card)
    el.appendChild(wrap)
  })
}

// ---- SIMULADO ----
function renderSimulado(dados) {
  const el = document.getElementById('tab-simulado')
  el.innerHTML = ''

  if (!dados.simulado?.length) {
    el.innerHTML = '<p style="color:var(--t3);text-align:center;padding:40px 0;">Sem simulado ainda.</p>'
    return
  }

  // estado isolado por assunto
  simuladoState = {
    dados,
    respostas: new Array(dados.simulado.length).fill(null)
  }

  // botão refazer
  const acoes = document.createElement('div')
  acoes.className = 'simulado-acoes'
  acoes.innerHTML = `<button class="btn-refazer" onclick="reiniciarSimulado()">↺ Refazer simulado</button>`
  el.appendChild(acoes)

  // questões
  dados.simulado.forEach((q, qi) => {
    const box = document.createElement('div')
    box.className = 'questao-box'
    box.id = `q-${qi}`

    const letras = ['A','B','C','D','E']
    const alts = q.alternativas.map((alt, ai) =>
      `<button class="alt-btn" id="alt-${qi}-${ai}" onclick="responder(${qi},${ai})">${letras[ai]}) ${alt}</button>`
    ).join('')

    box.innerHTML = `
      <p class="q-num">Questão ${qi + 1} de ${dados.simulado.length}</p>
      <p class="q-txt">${q.pergunta}</p>
      <div class="q-alts">${alts}</div>
      <div class="q-exp" id="exp-${qi}">💡 ${q.explicacao}</div>
    `
    el.appendChild(box)
  })

  // resultado
  const res = document.createElement('div')
  res.className = 'resultado-box'
  res.id = 'resultado'
  res.innerHTML = `
    <div class="res-nota" id="res-nota"></div>
    <p class="res-txt" id="res-txt"></p>
    <button class="btn-refazer" style="margin-top:16px" onclick="reiniciarSimulado()">↺ Tentar novamente</button>
  `
  el.appendChild(res)
}

function responder(qi, ai) {
  if (simuladoState.respostas[qi] !== null) return
  simuladoState.respostas[qi] = ai

  const q = simuladoState.dados.simulado[qi]
  simuladoState.dados.simulado[qi].alternativas.forEach((_, i) => {
    const btn = document.getElementById(`alt-${qi}-${i}`)
    btn.disabled = true
    if (i === q.correta) btn.classList.add('correta')
    else if (i === ai)   btn.classList.add('errada')
  })
  document.getElementById(`exp-${qi}`).classList.add('vis')

  const total     = simuladoState.respostas.length
  const respostas = simuladoState.respostas
  if (respostas.every(r => r !== null)) {
    const acertos = respostas.filter((r, i) => r === simuladoState.dados.simulado[i].correta).length
    const pct = Math.round(acertos / total * 100)
    document.getElementById('res-nota').textContent = `${pct}%`
    document.getElementById('res-txt').textContent  = `${acertos} de ${total} corretas`
    document.getElementById('resultado').classList.add('vis')
  }
}

function reiniciarSimulado() {
  if (!simuladoState.dados) return
  renderSimulado(simuladoState.dados)
}

// ---- BOTÃO MARCAR VISTO ----
function atualizarBtnVisto(chave) {
  const btn  = document.getElementById('btn-visto')
  const data = getDataVisto(chave)
  if (isVisto(chave)) {
    btn.textContent = `✓ Visto em ${data}`
    btn.className = 'btn-visto ja-visto'
    btn.onclick = null
  } else {
    btn.textContent = '✓ Marcar como visto'
    btn.className = 'btn-visto'
    btn.onclick = () => {
      marcarVisto(chave)
      atualizarBtnVisto(chave)
      // atualizar meta
      const partes = chave.split('/')
      const dados = mapaAssuntos[chave]
      if (dados) renderAssuntoMeta(dados)
    }
  }
}

// ---- TABS ----
function ativarTab(nome) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('ativo'))
  document.querySelectorAll('.tab-painel').forEach(p => p.classList.remove('ativo'))
  document.getElementById(`tab-btn-${nome}`)?.classList.add('ativo')
  document.getElementById(`tab-${nome}`)?.classList.add('ativo')
}
