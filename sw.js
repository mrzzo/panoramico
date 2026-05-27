// =============================================
// PANORÂMICO — Service Worker
// Versão do cache: incrementar ao atualizar arquivos
// =============================================

const CACHE_VERSION = 'v1'
const CACHE_SHELL   = `panoramico-shell-${CACHE_VERSION}`
const CACHE_CONTENT = `panoramico-content-${CACHE_VERSION}`

// Arquivos da "shell" — sempre cacheados (estrutura do site)
const SHELL_FILES = [
  './',
  './index.html',
  './css/estilo.css',
  './js/app.js',
  './js/progresso.js',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png',
  // Google Fonts
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap',
]

// Arquivos de conteúdo — cacheados por escolha do usuário
// Cada entrada é { key, label, files[] }
// O sw.js lê isso para saber o que cachear por área
const CONTENT_GROUPS = [
  {
    key: 'matematica',
    label: 'Matemática',
    files: [
      './data/matematica/index.js',
      './data/matematica/trigonometria.js',
      './data/matematica/geometria-plana.js',
      './data/matematica/funcoes.js',
    ]
  },
  {
    key: 'ciencias_natureza',
    label: 'Ciências da Natureza',
    files: [
      './data/ciencias_natureza/index.js',
      './data/ciencias_natureza/celula.js',
      './data/ciencias_natureza/genetica.js',
    ]
  },
  {
    key: 'historia',
    label: 'História',
    files: [
      './data/historia/index.js',
      './data/historia/matematica-antiga.js',
      './data/historia/revolucao-francesa.js',
    ]
  },
  {
    key: 'historia',
    label: 'História',
    files: [
      './data/historia/index.js',
      './data/historia/matematica-antiga.js',
      './data/historia/revolucao-francesa.js',
    ]
  },
  {
    key: 'historia',
    label: 'História',
    files: [
      './data/historia/index.js',
      './data/historia/matematica-antiga.js',
      './data/historia/revolucao-francesa.js',
    ]
  },
  {
    key: 'nocoes_de_manutencao_mecanica',
    label: 'Noções de Manutenção Mecânica',
    files: [
      './data/nocoes_de_manutencao_mecanica/index.js',
      './data/nocoes_de_manutencao_mecanica/lubrificacao-industrial.js',
    ]
  },
  // ── ADICIONE NOVAS ÁREAS AQUI ──
  // {
  //   key: 'nome_da_area',
  //   label: 'Nome da Área',
  //   files: [
  //     './data/nome_da_area/index.js',
  //     './data/nome_da_area/assunto.js',
  //   ]
  // },
]

// Sempre cacheados (registro central)
const ALWAYS_CACHED = [
  './data/registro.js',
]

// =============================================
// INSTALL — cache da shell
// =============================================
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_SHELL).then(cache => {
      return cache.addAll(SHELL_FILES.concat(ALWAYS_CACHED))
    }).then(() => self.skipWaiting())
  )
})

// =============================================
// ACTIVATE — limpar caches antigos
// =============================================
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_SHELL && k !== CACHE_CONTENT)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  )
})

// =============================================
// FETCH — cache-first para assets, network-first para dados
// =============================================
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // Ignora requisições que não são GET ou são de outras origens (ex: Unsplash)
  if (event.request.method !== 'GET') return
  if (url.origin !== location.origin && !url.hostname.includes('fonts.g')) return

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached
      return fetch(event.request).then(response => {
        // Cacheia automaticamente arquivos de dados se a resposta for ok
        if (response.ok && url.pathname.startsWith('/data/')) {
          const clone = response.clone()
          caches.open(CACHE_CONTENT).then(cache => cache.put(event.request, clone))
        }
        return response
      }).catch(() => {
        // Offline e sem cache — retorna página principal como fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html')
        }
      })
    })
  )
})

// =============================================
// MESSAGE — recebe comandos do app
// =============================================
self.addEventListener('message', async event => {
  const { tipo, key } = event.data || {}

  // Cachear área específica
  if (tipo === 'cachear-area') {
    const grupo = CONTENT_GROUPS.find(g => g.key === key)
    if (!grupo) return
    const cache = await caches.open(CACHE_CONTENT)
    await cache.addAll(grupo.files)
    event.source.postMessage({ tipo: 'area-cacheada', key })
  }

  // Remover área do cache
  if (tipo === 'remover-area') {
    const grupo = CONTENT_GROUPS.find(g => g.key === key)
    if (!grupo) return
    const cache = await caches.open(CACHE_CONTENT)
    await Promise.all(grupo.files.map(f => cache.delete(f)))
    event.source.postMessage({ tipo: 'area-removida', key })
  }

  // Listar quais arquivos estão cacheados
  if (tipo === 'status-cache') {
    const cache   = await caches.open(CACHE_CONTENT)
    const cached  = await cache.keys()
    const urls    = cached.map(r => r.url)
    const status  = {}
    for (const g of CONTENT_GROUPS) {
      status[g.key] = g.files.every(f => urls.some(u => u.endsWith(f.replace('./', '/'))))
    }
    event.source.postMessage({ tipo: 'status-cache', status })
  }

  // Retornar grupos disponíveis (para a UI de configuração)
  if (tipo === 'listar-grupos') {
    event.source.postMessage({ tipo: 'grupos', grupos: CONTENT_GROUPS.map(g => ({ key: g.key, label: g.label })) })
  }
})
