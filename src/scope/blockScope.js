/* Block Scope */

function fruits(){
  if (true){
    var fruit1 = 'Apple'; //functionScope
    let fruit2 = 'Kiwi'; //blockScope
    const fruit3 = 'Banana'; //blockScope

    console.log(fruit2); //Kiwi
    console.log(fruit3); //Banana
  }
  console.log(fruit1); //Apple
  console.log(fruit2); //ReferenceError: fruit2 is not defined
  console.log(fruit3); //ReferenceError: fruit3 is not defined
}

fruits();
//Kiwi
//Banana
//Apple
//ReferenceError: fruit2 is not defined
