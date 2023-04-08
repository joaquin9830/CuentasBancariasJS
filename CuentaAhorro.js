import { cuenta } from "./Cuentas.js";


export class CuentaAhorro extends cuenta{

    constructor(cliente,numero,agencia,saldo) {
        super(cliente, numero,agencia,saldo);       
        
    }
    retirarDeCuenta(valor) {
         
        super._retirarDeCuenta(valor,2);
        
    }
}