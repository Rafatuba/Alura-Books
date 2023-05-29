const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenaPorPreco);

function ordenaPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirLivrosNaTela(livrosOrdenados);
}

// ------ Exemplos Sort()

// let numeros = [2, 10, 20, 15, 32, 25]
// let ordem = numeros.sort((a, b) => {
//   return a - b
// })
// console.log(ordem)

// let nome = "Maria"
// let ordemAlfabetica = nome.toLowerCase().split("").sort().join("")
// console.log(ordemAlfabetica)

//X------------------X-----------------------X
