import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("Marcia", 11122233344);
const cliente2 = new Cliente("Alice", 11122233355);

const contaCorrenteMarcia = new ContaCorrente(1001, cliente1);

contaCorrenteMarcia.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;

contaCorrenteMarcia.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
