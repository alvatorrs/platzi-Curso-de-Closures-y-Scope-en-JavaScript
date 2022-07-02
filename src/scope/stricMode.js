/* Stric Mode o Modo estricto */

'use strict'; 
//El modo estricto se aplica a un script completo o a funciones individuales.

pi = 3.1416;
console.log(pi); //ReferenceError: pi is not defined


function myfunction(){
  'use strict'
  return saludo = 'Hola, mundo';
}

console.log(myfunction()); //ReferenceError: saludo is not defined
