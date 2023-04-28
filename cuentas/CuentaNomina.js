import { cuenta } from "./Cuentas.js";

export class CuentaNomina extends cuenta{
    constructor(cliente,numero,agencia,saldo) {
        super(cliente, numero,agencia,saldo);       
        
    }

    retirarDeCuenta(valor) {
         
        super._retirarDeCuenta(valor,1);
     }
}