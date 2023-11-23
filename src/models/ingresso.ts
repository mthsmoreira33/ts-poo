export abstract class Ingresso {
    protected _valor: number;
    constructor(valor: number) {
        this._valor = valor;
    }

    public imprimeValor() {
        console.log(`${this._valor}`);
    }
}
