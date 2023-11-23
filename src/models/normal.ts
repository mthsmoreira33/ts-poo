import { Ingresso } from "./ingresso";

export class Normal extends Ingresso {
    public imprimeValor() {
        console.log(`Ingresso Normal: R$ ${this._valor}`);
    }
}
