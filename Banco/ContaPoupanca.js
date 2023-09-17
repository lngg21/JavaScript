import contaBancaria from './ContaBancaria.js';

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, tipo = 'conta poupanca', saldo) {
        super(agencia, numero, tipo, saldo);
    }
}
export default contaPoupanca;