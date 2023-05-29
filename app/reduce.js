function calculaValorTotalDeLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}




// -----------Exemplo Reduce
// const preco = [10,20,50]
// const precoTotal = preco.reduce((acumulador, atual) => acumulador + atual)
// console.log(precoTotal)