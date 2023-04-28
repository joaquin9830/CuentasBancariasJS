/*Importación de clases*/

import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { sistemaAutenticacion } from './Empleados/SistemaAutenticacion.js';
import { Cliente } from './Cliente.js';


const empleado = new Empleado('Juan Perez', '38950409',10000);
empleado.asignarClave('1234');
const gerente = new Gerente('Pedro Pistolas', '7878789',12000);
gerente.asignarClave('12345');
//const director = new Director('Franco Sola', '898989',15000);
//director.asignarClave('123456');



console.log(sistemaAutenticacion.login(empleado,'1234'));
console.log(sistemaAutenticacion.login(gerente,'12345'));
//console.log(sistemaAutenticacion.login(director,'1234'));



const cliente = new Cliente('Leonardo', '13232323','32132');
cliente.asignarClave('12345')
console.log(sistemaAutenticacion.login(cliente,'12345'));


