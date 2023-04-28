import { Empleado } from "./Empleado.js";


export class Director extends Empleado {
    constructor(nombre, dni, salario){
        super(nombre, dni, salario);
    }
    verBonificacion(){
        const bono = 10;
        return super._verBonificacion(bono);
    }
}