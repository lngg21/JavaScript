class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }
   
   get saldo() {
    return this.saldo;
   }

   set saldo(Saldo) {

    if (Saldo.length >= 0) {
        this._saldo = novoSaldo;
    }
    else {
        console.log("Saldo insuficiente");
    }
   }

   sacar(valor) {
    if(valor > 0 && valor <= this.saldo) {
        this._saldo -= valor;
        console.log(`Saque de R${valor} realizado com sucesso! `);
    }
    else {
        console.log("Saldo insuficiente ou valor de saque inválido");
    }
   }

   depositar(valor) {
   
    if(valor > 0) {
        this._saldo += valor;
        console.log(`Depósito no valor de R${valor} realizado com sucesso!`);
    }
    else {
        console.log('Valor de Depósito inválido!');
    }
   }

}
export default contaBancaria;