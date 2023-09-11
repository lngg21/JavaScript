// Saldo inicial da conta
let saldo = 1000;

// Array para armazenar o histórico de transações
const historicoTransacoes = [];

// Função para exibir o menu e coletar ação do usuário
function exibirMenu() {
  console.log("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:");
  console.log("1. Depositar");
  console.log("2. Sacar");
  console.log("3. Ver Saldo");
  console.log("4. Ver Histórico de Transações");
  console.log("5. Sair");

  const escolha = parseInt(prompt("Digite o número da opção desejada:"));

  executarAcao(escolha);
}

// Função para executar ação com base na escolha do usuário
function executarAcao(escolha) {
  switch (escolha) {
    case 1:
      depositar();
      break;
    case 2:
      sacar();
      break;
    case 3:
      verSaldo();
      break;
    case 4:
      verHistoricoTransacoes();
      break;
    case 5:
      console.log("Obrigado por usar nosso sistema. Adeus!");
      return; // Sai do programa
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }

  // Exibe o menu novamente após a ação
  exibirMenu();
}

// Função para realizar um depósito
function depositar() {
  const valor = parseFloat(prompt("Digite o valor a ser depositado:"));

  if (isNaN(valor) || valor <= 0) {
    console.log("Valor inválido. O depósito não foi realizado.");
    return;
  }

  saldo += valor;
  const transacao = { tipo: "Depósito", valor, data: new Date() };
  historicoTransacoes.push(transacao);
  console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${saldo}`);
}

// Função para realizar um saque
function sacar() {
  const valor = parseFloat(prompt("Digite o valor a ser sacado:"));

  if (isNaN(valor) || valor <= 0 || valor > saldo) {
    console.log("Valor inválido ou saldo insuficiente. O saque não foi realizado.");
    return;
  }

  saldo -= valor;
  const transacao = { tipo: "Saque", valor, data: new Date() };
  historicoTransacoes.push(transacao);
  console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${saldo}`);
}

// Função para ver o saldo atual
function verSaldo() {
  console.log(`Saldo atual: ${saldo}`);
}

// Função para ver o histórico de transações
function verHistoricoTransacoes() {
  console.log("Histórico de Transações:");
  historicoTransacoes.forEach((transacao, index) => {
    console.log(`${index + 1}. Tipo: ${transacao.tipo}, Valor: ${transacao.valor}, Data: ${transacao.data}`);
  });
}

// Inicializa o programa exibindo o menu
exibirMenu();
