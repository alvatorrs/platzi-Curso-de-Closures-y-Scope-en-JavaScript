/* Ejemplo de una alcancia aplicando Closures */


// Sin Closure
function moneyBox1(coins){
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`My money box: $${saveCoins}.-`);
}    

moneyBox1(5); //My money box: $5.-
moneyBox1(5); //My money box: $5.-
/* No se recuerda lo que tiene la variable saveCoins 
 * al volverse a ejecutar moneyBox1() */


// Con Closure
/* Haremos una closure que nos permita acceder al concepto
 * de ambito lexico de una variable y recordar lo que tiene 
 * en las ejecuciones. */
function moneyBox2(){
  let saveCoins = 0;
  function countCoins(coins){
    saveCoins += coins;
    console.log(`My money box: $${saveCoins}.-`);
  }
  return countCoins;
}

const myMoney = moneyBox2();
myMoney(5); //My money box: $5.-
myMoney(5); //My money box: $10.-
myMoney(15); //My money box: $25.-
/* Se recuerda el contexto accediendo a la instancia myMoney
 * de moneyBox2() */
