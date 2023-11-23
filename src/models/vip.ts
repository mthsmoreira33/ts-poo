import { Ingresso } from "./ingresso";

export class Vip extends Ingresso {
    constructor(private valor: number) {
        super(valor);
        this._valor = valor;
    }

    public imprimeValor() {
        console.log(`Ingresso VIP: R$ ${this._valor + 20}`);
    }
}
