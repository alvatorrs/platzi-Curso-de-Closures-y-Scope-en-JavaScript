/* Function Scope */

function saludo(){
  let userName = 'Alvaro'; //functionScope
  console.log(userName); //Alvaro

  if (userName === 'Alvaro') {
    console.log(`Hello ${userName}!!`); //Hello Alvaro!!
  }
}

saludo();
//Alvaro
//Hello Alvaro!!

console.log(userName); //ReferenceError: userName is not defined
