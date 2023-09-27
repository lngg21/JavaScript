import contaBancaria from './ContaBancaria.js';

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Corrente", saldo);
    }

    get cartaoCredito() {
 
        return this.cartaoCredito;

    }

    set cartaoCredito(saldo) {

            this.cartaoCredito = saldo ;

    }
}
export default contaCorrente;