//Arthur Vinicius


// Lista de produtos e pessoas
let produtos = [];
let pessoas = [];

// Função para cadastrar um novo produto
function cadastrarProduto() {
  const produto = prompt("Digite o nome do produto:");
  produtos.push(produto);
  console.log(`Produto "${produto}" cadastrado com sucesso!`);
}

// Função para cadastrar uma nova pessoa
function cadastrarPessoa() {
  const pessoa = prompt("Digite o nome da pessoa:");
  pessoas.push(pessoa);
  console.log(`Pessoa "${pessoa}" cadastrada com sucesso!`);
}

// Função para sortear um produto
function sortearProduto() {
  if (produtos.length === 0) {
    console.log("Não há produtos cadastrados para realizar o sorteio.");
    return;
    //retornará a função inicial
  }

  const numeroSorteado = Math.floor(Math.random() * pessoas.length); // Usando pessoas.length para sortear uma pessoa.
  //A função Math.floor() retorna o menor número inteiro dentre o número "x".
  //enquanto a função Math.random() retorna um número aleatório no intervalo que seja deterimnado.


  const pessoaSorteada = pessoas[numeroSorteado];
  
  if (produtos.length === 0) {
    console.log("Não há produtos cadastrados para realizar o sorteio.");
    return;
  }

  const numeroSorteadoProduto = Math.floor(Math.random() * produtos.length);
  const produtoSorteado = produtos[numeroSorteadoProduto];

  console.log(`${pessoaSorteada} ganhou o produto: ${produtoSorteado}`);
}

// Menu principal
let opcao;

while (opcao !== "4") {//enquanto a opção for diferente de 4, o código continua rodando
  opcao = prompt('Opções:\n1. Cadastrar Produto\n2. Cadastrar Pessoa\n3. Sortear\n4. Sair\nEscolha uma opção:');

  switch (opcao) {
    case "1":
      cadastrarProduto();
      break;
    case "2":
      cadastrarPessoa();
      break;
    case "3":
      sortearProduto();
      break;
    case "4":
      console.log("Encerrando o sistema.");
      break;
    default:
      console.log("Opção inválida. Escolha uma opção válida.");
  }
}
