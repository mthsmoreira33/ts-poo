import { Ingresso, Normal, Camarote, Vip } from "./models/database";

const valorOriginal: number = 40;
const ingressoNormal: Ingresso = new Normal(valorOriginal);
const ingressoCamarote: Ingresso = new Camarote(valorOriginal);
const ingressoVip: Ingresso = new Vip(valorOriginal);

ingressoNormal.imprimeValor();
ingressoCamarote.imprimeValor();
ingressoVip.imprimeValor();
