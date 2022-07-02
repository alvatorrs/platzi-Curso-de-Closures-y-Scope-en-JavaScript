/* Global Scope */

// Variables

var a; // declaracion
var b = 'b'; // declaracion y asignacion (inicializacion)
b = 'bb'; // reasignacion
var a = 'a'; // redeclaracion


// Global Scope
var fruit = 'apple'; //globalScope
console.log(fruit); //apple

function bestFruit(){
  console.log(fruit);
}

bestFruit(); 
//apple

// Global Scope
function countries(){
  country = 'México'; //globalScope
  console.log(country);
}

countries(); 
//México

console.log(country); //México
