const listaAssuntos = document.getElementById('lista-assuntos')
    <h2>${dados.nome}</h2>
    <p>${dados.descricao}</p>
  `

  conteudoAssunto.appendChild(card)

  // resumo rápido
  if (dados.resumoRapido) {

    const resumo = document.createElement('div')
    resumo.className = 'card'

    resumo.innerHTML = `
      <h2>Resumo Rápido</h2>
      <p>${dados.resumoRapido.replaceAll('\n', '<br>')}</p>
    `

    conteudoAssunto.appendChild(resumo)
  }

  // resumo detalhado
  if (Array.isArray(dados.resumoDetalhado)) {

    dados.resumoDetalhado.forEach(bloco => {

      const secao = document.createElement('div')
      secao.className = 'card'

      if (bloco.tipo === 'titulo') {
        secao.innerHTML = `<h2>${bloco.conteudo}</h2>`
      }

      if (bloco.tipo === 'texto') {
        secao.innerHTML = `<p>${bloco.conteudo}</p>`
      }

      if (bloco.tipo === 'lista') {

        const itens = bloco.itens
          .map(item => `<li>${item}</li>`)
          .join('')

        secao.innerHTML = `
          <ul class="lista-topicos">
            ${itens}
          </ul>
        `
      }

      conteudoAssunto.appendChild(secao)
    })
  }
}
