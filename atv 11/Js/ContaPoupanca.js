import contaBancaria from './ContaBancaria.js';

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, tipo = 'Poupança', saldo) {
        super(agencia, numero, tipo, saldo);
    }
}
export default contaPoupanca;