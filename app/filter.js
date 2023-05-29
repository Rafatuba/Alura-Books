const botoesCategorias = document.querySelectorAll(".btn");
botoesCategorias.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let filtro =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  exibirLivrosNaTela(filtro);

  if (categoria == "disponivel") {
    const valorTotal = calculaValorTotalDeLivrosDisponiveis(filtro)
    console.log(valorTotal);
    exibirValorTotalDosLivrosDisponiveis(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `;
}

// Exemplo Filter()
// let idades = [15, 24, 17, 35, 16, 42, 57]

// let deMaior = idades.filter(idade => {
//   return idade >= 18
// })

// console.log(deMaior);
// console.log(idades);
