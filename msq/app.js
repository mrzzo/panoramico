const listaAssuntos = document.getElementById('lista-assuntos')
  topo.className = 'card'

  topo.innerHTML = `
    <h2>${dados.nome}</h2>
    <p>${dados.descricao}</p>
  `

  conteudoAssunto.appendChild(topo)

  if (dados.resumoRapido) {

    const resumo = document.createElement('div')
    resumo.className = 'card'

    resumo.innerHTML = `
      <h2>Resumo Rápido</h2>
      <p>${dados.resumoRapido.replace(/
/g, '<br>')}</p>
    `

    conteudoAssunto.appendChild(resumo)
  }

  if (Array.isArray(dados.resumoDetalhado)) {

    dados.resumoDetalhado.forEach(bloco => {

      const card = document.createElement('div')
      card.className = 'card'

      if (bloco.tipo === 'titulo') {
        card.innerHTML = `<h2>${bloco.conteudo}</h2>`
      }

      if (bloco.tipo === 'texto') {
        card.innerHTML = `<p>${bloco.conteudo}</p>`
      }

      if (bloco.tipo === 'lista') {

        const itens = bloco.itens
          .map(item => `<li>${item}</li>`)
          .join('')

        card.innerHTML = `
          <ul class="lista-topicos">
            ${itens}
          </ul>
        `
      }

      conteudoAssunto.appendChild(card)
    })
  }
}
