import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso {
    imprimeValor(): void {
        console.log(`Ingresso Camarote: R$ ${this._valor + 50}`);
    }
}
