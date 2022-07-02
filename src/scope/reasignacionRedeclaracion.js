/* Reasignacion y redeclaracion */


// var: Declaracion y asignacon
var firstName; // Undefined
firstName = 'Alvaro';
console.log(firstName); //Alvaro

// var: Inicializacion y reasignacion 
var nickname = 'Alva_torrs';
nickname = 'Al3gatsu';
console.log(nickname); //Al3gatsu

// var: Redeclaracion
var lastName = 'Torres';
var lastName = 'Ramsabat';
console.log(lastName); //Ramsabat

// let: Inicializacion y reasignacion
let fruit = 'Apple';
fruit = 'Watermelon';
console.log(fruit); //Watermelon

// let: Redeclaracion
//let fruit = 'Pinaple'; //Cannot redeclare block-scoped variable

// const: Inicializacion
const animal = 'Dog';
//animal = 'Cat';
console.log(animal); //TypeError: Assignment to constant variable

// const: Redeclaracion
//const animal = 'Snake'; //Cannot redeclare block-scoped variable


// const: arreglos
const animes = ['Gintama', 'Ore monogatari'];
animes.push('One Piece');
console.log(animes); //[ 'Gintama', 'Ore monogatari', 'One Piece' ]
animes.pop();
console.log(animes); //[ 'Gintama', 'Ore monogatari' ]

