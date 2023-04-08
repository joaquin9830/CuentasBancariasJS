import { Cliente } from "./Cliente.js";
import { cuenta } from "./Cuentas.js";

export class CuentaCorriente extends cuenta{
   
    static cantidadCuentas = 0;

    

    constructor(cliente,numero,agencia) {
        super(cliente, numero,agencia,0);       
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
         
       super._retirarDeCuenta(valor,5);
    }


  
}