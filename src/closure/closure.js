/* Practicando Closures */


// Ejemplo 1
function greeting(){
  let userName = 'Alvaro';

  function displayUserName(){
    return `Hello ${userName}`;
  }
  return displayUserName;
}

const g = greeting(); // g almacena la definicion de displayUserName
console.log(g); //[Function: displayUserName]
console.log(g()); //Hello Alvaro



// Ejemplo 2
function makeDivisionBy(n){
  function divisionBy(x){
    return x/n;
  }
  return divisionBy;
}

const divisionBy3 = makeDivisionBy(3);
console.log(divisionBy3(18));
const divisionBy18 = makeDivisionBy(18);
console.log(divisionBy18(54));
