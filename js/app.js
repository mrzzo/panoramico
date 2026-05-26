// =============================================
// PANORÂMICO — App principal
// =============================================

const PREVIEW_LIMIT = 3
const FC_POR_SESSAO = 5
const ULTIMO_ACESSO_KEY = 'panoramico_ultimo'

let registro = {}
let mapaAssuntos = {}

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  registro = construirRegistro()
  mapaAssuntos = construirMapaAssuntos()
  window.addEventListener('hashchange', () => lerHash())
  lerHash()
})

// =============================================
// ROTEADOR DE HASH
// =============================================

function lerHash() {
  const hash = window.location.hash.replace('#', '').trim()
  const partes = hash.split('/')

  if (!hash || hash === 'home') { renderHome(); _mostrarPagina('home'); return }
  if (hash === 'biblioteca')    { renderBiblioteca(); _mostrarPagina('biblioteca'); return }
  if (partes[0] === 'area' && partes[1])             { _irAreaSemHash(partes[1]); return }
  if (partes[0] === 'assunto' && partes[1] && partes[2]) { _irAssuntoSemHash(partes[1], partes[2]); return }
  renderHome(); _mostrarPagina('home')
}

function irHome()       { window.location.hash = 'home' }
function irBiblioteca() { window.location.hash = 'biblioteca' }
function irArea(id)     { window.location.hash = `area/${id}` }
function irAssunto(areaId, assuntoId) { window.location.hash = `assunto/${areaId}/${assuntoId}` }

// =============================================
// CONTROLE DE PÁGINAS
// =============================================

function _mostrarPagina(id, titulo, voltarFn) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'))
  document.getElementById('pag-' + id)?.classList.add('ativa')
  window.scrollTo(0, 0)

  const comTopbar = ['area', 'assunto']
  document.getElementById('topbar-wrap').style.display = comTopbar.includes(id) ? 'flex' : 'none'

  document.querySelectorAll('.hotbar-btn').forEach(b => b.classList.remove('ativo'))
  if (id === 'home')      document.getElementById('hb-home')?.classList.add('ativo')
  if (id === 'biblioteca') document.getElementById('hb-bib')?.classList.add('ativo')

  if (comTopbar.includes(id)) {
    document.getElementById('topbar-titulo').textContent = titulo || ''
  }
  if (voltarFn) document.getElementById('topbar-voltar').onclick = voltarFn
}

// =============================================
// HOME
// =============================================

function renderHome() {
  // saudação por horário
  const h = new Date().getHours()
  let saudacao = '🌙 Boa madrugada'
  if (h >= 5  && h < 12) saudacao = '🌅 Bom dia'
  if (h >= 12 && h < 18) saudacao = '☀️ Boa tarde'
  if (h >= 18 && h < 23) saudacao = '🌆 Boa noite'
  document.getElementById('home-saudacao').textContent = saudacao

  // último acesso
  const ua = getUltimoAcesso()
  const uaEl = document.getElementById('ultimo-acesso-box')
  if (ua) {
    uaEl.innerHTML = `
      <p class="ua-rotulo">📌 Continue de onde parou</p>
      <p class="ua-nome">${ua.assuntoNome}</p>
      <p class="ua-area">${ua.areaNome}</p>
      <p class="ua-cta">Continuar →</p>
    `
    uaEl.onclick = () => irAssunto(ua.areaId, ua.assuntoId)
    uaEl.style.cursor = 'pointer'
  } else {
    uaEl.innerHTML = `
      <p class="ua-rotulo">📌 Último acesso</p>
      <p class="ua-vazia">Você ainda não acessou nenhum assunto.</p>
      <p class="ua-cta" onclick="irBiblioteca()" style="cursor:pointer">Explorar biblioteca →</p>
    `
    uaEl.onclick = null
    uaEl.style.cursor = 'default'
  }
}

function salvarUltimoAcesso(areaId, assuntoId) {
  const area   = registro[areaId]
  const dados  = mapaAssuntos[`${areaId}/${assuntoId}`]
  if (!area || !dados) return
  localStorage.setItem(ULTIMO_ACESSO_KEY, JSON.stringify({
    areaId, assuntoId,
    areaNome: area.nome,
    assuntoNome: dados.nome
  }))
}

function getUltimoAcesso() {
  try { return JSON.parse(localStorage.getItem(ULTIMO_ACESSO_KEY)) } catch { return null }
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
    btn.innerHTML = `<div class="a-ic">${area.icone}</div><div class="a-nm">${area.nome}</div><div class="a-qt">${qtd} assunto${qtd!==1?'s':''}</div>`
    btn.onclick = () => irArea(area.id)
    grid.appendChild(btn)
  })

  const previewEl = document.getElementById('bib-preview')
  previewEl.innerHTML = ''
  const primeira = Object.values(registro)[0]
  renderPreviewArea(previewEl, primeira)
}

function renderPreviewArea(container, area) {
  const h = document.createElement('div')
  h.className = 'preview-header'
  h.innerHTML = `<span class="preview-label">${area.nome}</span><button class="preview-ver-tudo" onclick="irArea('${area.id}')">Ver todos →</button>`
  container.appendChild(h)
  area.assuntos.slice(0, PREVIEW_LIMIT).forEach(a => container.appendChild(criarAssuntoRow(a, area.id)))
  if (area.assuntos.length > PREVIEW_LIMIT) {
    const m = document.createElement('button')
    m.className = 'preview-ver-tudo'
    m.style.cssText = 'display:block;margin-top:4px;font-size:13px;color:var(--t3);'
    m.textContent = `+ ${area.assuntos.length - PREVIEW_LIMIT} assuntos`
    m.onclick = () => irArea(area.id)
    container.appendChild(m)
  }
}

// =============================================
// ÁREA
// =============================================

function _irAreaSemHash(areaId) {
  const area = registro[areaId]
  if (!area) { window.location.hash = 'biblioteca'; return }
  document.getElementById('area-header-ic').textContent = area.icone
  document.getElementById('area-header-nm').textContent = area.nome
  document.getElementById('area-header-qt').textContent = `${area.assuntos.length} assuntos`
  const container = document.getElementById('area-lista')
  container.innerHTML = ''
  area.assuntos.forEach(a => container.appendChild(criarAssuntoRow(a, areaId, true)))
  _mostrarPagina('area', area.nome, () => irBiblioteca())
}

function criarAssuntoRow(assunto, areaId, full = false) {
  const visto = isVisto(`${areaId}/${assunto.id}`)
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
    </div>`
  row.onclick = () => irAssunto(areaId, assunto.id)
  return row
}

// =============================================
// ASSUNTO
// =============================================

let simuladoState = {}

function _irAssuntoSemHash(areaId, assuntoId) {
  const chave = `${areaId}/${assuntoId}`
  const dados = mapaAssuntos[chave]
  const area  = registro[areaId]
  if (!dados) { window.location.hash = `area/${areaId}`; return }

  salvarUltimoAcesso(areaId, assuntoId)

  document.getElementById('assunto-titulo').textContent = dados.nome
  document.getElementById('assunto-desc').textContent   = dados.descricao
  document.getElementById('topbar-area-nm').textContent = area?.nome || ''
  renderAssuntoMeta(dados)
  renderResumoRapido(dados)
  renderResumoDetalhado(dados)
  renderFlashcards(dados)
  renderSimulado(dados)
  atualizarBtnVisto(chave)
  ativarTab('rapido')
  _mostrarPagina('assunto', dados.nome, () => irArea(areaId))
}

function renderAssuntoMeta(dados) {
  const visto = isVisto(`${dados.area}/${dados.id}`)
  const data  = getDataVisto(`${dados.area}/${dados.id}`)
  document.getElementById('assunto-meta').innerHTML = `
    <span class="badge badge-${dados.nivel}">${dados.nivel}</span>
    ${visto ? `<span class="badge badge-visto">✓ visto em ${data}</span>` : ''}`
}

// ---- RESUMO RÁPIDO ----
function renderResumoRapido(dados) {
  document.getElementById('tab-rapido').innerHTML =
    `<div class="resumo-rapido-box">${dados.resumoRapido.trim()}</div>`
}

// ---- RESUMO DETALHADO (blocos) ----
function renderResumoDetalhado(dados) {
  const el = document.getElementById('tab-detalhado')
  el.innerHTML = ''

  dados.resumoDetalhado.forEach(bloco => {
    const div = document.createElement('div')

    if (bloco.tipo === 'titulo') {
      div.className = 'bloco-titulo'
      div.textContent = bloco.conteudo

    } else if (bloco.tipo === 'paragrafo') {
      div.className = 'bloco-paragrafo'
      div.textContent = bloco.conteudo

    } else if (bloco.tipo === 'imagem') {
      div.className = 'bloco-imagem'
      div.innerHTML = `<span class="img-loading">🖼️ Carregando imagem...</span>`
      buscarImagem(bloco.conteudo, div)

    } else if (bloco.tipo === 'video') {
      div.className = 'bloco-video'
      div.innerHTML = `<iframe src="${bloco.conteudo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
    }

    el.appendChild(div)
  })

  // relacionados
  if (dados.relacionados?.length) {
    const lbl = document.createElement('p')
    lbl.className = 'secao-rotulo'
    lbl.textContent = 'Assuntos relacionados'
    el.appendChild(lbl)
    dados.relacionados.forEach(r => {
      const item = document.createElement('div')
      item.className = 'rel-item'
      item.innerHTML = `<div><div class="rel-nm">↗ ${r.nome}</div><div class="rel-why">${r.motivo}</div></div>`
      item.onclick = () => irAssunto(r.area, r.id)
      el.appendChild(item)
    })
  }

  // videoaulas
  if (dados.videoaulas?.length) {
    const lbl = document.createElement('p')
    lbl.className = 'secao-rotulo'
    lbl.textContent = 'Videoaulas'
    el.appendChild(lbl)
    dados.videoaulas.forEach(v => {
      const a = document.createElement('a')
      a.className = 'video-item'
      a.href = v.url; a.target = '_blank'; a.rel = 'noopener noreferrer'
      a.innerHTML = `<span class="video-play">▶</span><span class="video-nm">${v.titulo}</span>`
      el.appendChild(a)
    })
  }
}

// busca imagem via Wikimedia Commons (sem API key, CORS-free)
async function buscarImagem(query, container) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&format=json&origin=*&gsrlimit=3`
    const res  = await fetch(url)
    const data = await res.json()
    const pages = Object.values(data?.query?.pages || {})
    const img   = pages.find(p => p.imageinfo?.[0]?.mime?.startsWith('image/jpeg') || p.imageinfo?.[0]?.mime?.startsWith('image/png'))
    if (img) {
      const src = img.imageinfo[0].url
      container.innerHTML = `<img src="${src}" alt="${query}" loading="lazy" />`
    } else {
      container.innerHTML = `<span class="img-loading" style="color:var(--t3);font-size:12px;">Imagem não encontrada</span>`
    }
  } catch {
    container.innerHTML = `<span class="img-loading" style="color:var(--t3);font-size:12px;">Imagem não disponível</span>`
  }
}

// ---- FLASHCARDS (campo separado, sorteio) ----
function renderFlashcards(dados) {
  const el = document.getElementById('tab-flashcards')
  const cards = dados.flashcards

  if (!cards?.length) {
    el.innerHTML = '<p style="color:var(--t3);text-align:center;padding:40px 0;">Sem flashcards ainda.</p>'
    return
  }

  // sorteia até FC_POR_SESSAO cards
  const sorteados = [...cards].sort(() => Math.random() - .5).slice(0, FC_POR_SESSAO)

  el.innerHTML = `
    <p class="fc-hint">Toque no card para revelar a resposta</p>
    <p class="fc-progress">${sorteados.length} de ${cards.length} cards sorteados</p>
  `

  sorteados.forEach(q => {
    const wrap = document.createElement('div')
    wrap.className = 'fc-wrap'
    const card = document.createElement('div')
    card.className = 'fc'
    card.innerHTML = `<div class="fc-f">${q.pergunta}</div><div class="fc-v">${q.resposta}</div>`
    card.onclick = () => card.classList.toggle('virado')
    wrap.appendChild(card)
    el.appendChild(wrap)
  })

  // botão sortear novamente
  const btn = document.createElement('button')
  btn.className = 'btn-refazer'
  btn.style.cssText = 'display:block;margin:16px auto 0;'
  btn.textContent = '🔀 Sortear novos cards'
  btn.onclick = () => renderFlashcards(dados)
  el.appendChild(btn)
}

// ---- SIMULADO (estilo ENEM com contexto) ----
function renderSimulado(dados) {
  const el = document.getElementById('tab-simulado')
  el.innerHTML = ''
  if (!dados.simulado?.length) {
    el.innerHTML = '<p style="color:var(--t3);text-align:center;padding:40px 0;">Sem simulado ainda.</p>'
    return
  }
  simuladoState = { dados, respostas: new Array(dados.simulado.length).fill(null) }

  const acoes = document.createElement('div')
  acoes.className = 'simulado-acoes'
  acoes.innerHTML = `<button class="btn-refazer" onclick="reiniciarSimulado()">↺ Refazer simulado</button>`
  el.appendChild(acoes)

  const letras = ['A','B','C','D','E']
  dados.simulado.forEach((q, qi) => {
    const box = document.createElement('div')
    box.className = 'questao-box'
    box.id = `q-${qi}`
    const alts = q.alternativas.map((alt, ai) =>
      `<button class="alt-btn" id="alt-${qi}-${ai}" onclick="responder(${qi},${ai})">${letras[ai]}) ${alt}</button>`
    ).join('')
    box.innerHTML = `
      <p class="q-num">Questão ${qi+1} de ${dados.simulado.length}</p>
      ${q.contexto ? `<span class="q-contexto">${q.contexto}</span>` : ''}
      <span class="q-txt">${q.pergunta}</span>
      <div class="q-alts">${alts}</div>
      <div class="q-exp" id="exp-${qi}">💡 ${q.explicacao}</div>`
    el.appendChild(box)
  })

  const res = document.createElement('div')
  res.className = 'resultado-box'; res.id = 'resultado'
  res.innerHTML = `
    <div class="res-nota" id="res-nota"></div>
    <p class="res-txt" id="res-txt"></p>
    <button class="btn-refazer" style="margin-top:16px" onclick="reiniciarSimulado()">↺ Tentar novamente</button>`
  el.appendChild(res)
}

function responder(qi, ai) {
  if (simuladoState.respostas[qi] !== null) return
  simuladoState.respostas[qi] = ai
  const q = simuladoState.dados.simulado[qi]
  q.alternativas.forEach((_, i) => {
    const btn = document.getElementById(`alt-${qi}-${i}`)
    btn.disabled = true
    if (i === q.correta) btn.classList.add('correta')
    else if (i === ai)   btn.classList.add('errada')
  })
  document.getElementById(`exp-${qi}`).classList.add('vis')
  const rs = simuladoState.respostas
  if (rs.every(r => r !== null)) {
    const acertos = rs.filter((r,i) => r === simuladoState.dados.simulado[i].correta).length
    const pct = Math.round(acertos / rs.length * 100)
    document.getElementById('res-nota').textContent = `${pct}%`
    document.getElementById('res-txt').textContent  = `${acertos} de ${rs.length} corretas`
    document.getElementById('resultado').classList.add('vis')
  }
}

function reiniciarSimulado() {
  if (simuladoState.dados) renderSimulado(simuladoState.dados)
}

// ---- BOTÃO MARCAR VISTO ----
function atualizarBtnVisto(chave) {
  const btn  = document.getElementById('btn-visto')
  const data = getDataVisto(chave)
  if (isVisto(chave)) {
    btn.textContent = `✓ Visto em ${data}`
    btn.className = 'btn-visto ja-visto'; btn.onclick = null
  } else {
    btn.textContent = '✓ Marcar como visto'
    btn.className = 'btn-visto'
    btn.onclick = () => {
      marcarVisto(chave)
      atualizarBtnVisto(chave)
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
