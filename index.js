/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaCorriente } from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const CuentaAhorroLeonardo = new CuentaAhorro(cliente,'9090','001',0);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(CuentaAhorroLeonardo);
CuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(CuentaAhorroLeonardo.verSaldo());
CuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(CuentaAhorroLeonardo.verSaldo());








