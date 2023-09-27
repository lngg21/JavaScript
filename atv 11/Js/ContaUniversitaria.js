import contaBancaria from './ContaBancaria.js';

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero, tipo = 'Universitária', saldo) {
        super(agencia, numero, tipo, saldo);
    }

    sacar(valor) {
        if(valor > 0 && valor <= 500) {
            this.saldo -= valor;
            console.log(`Saque de R${valor} realizado com sucesso! `);
        }
        else {
            console.log("Saldo insuficiente ou valor de saque inválido");
        }
       }
}
export default contaUniversitaria;