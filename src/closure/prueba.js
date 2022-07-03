const nombre = 'Alvaro Torres Sánchez';
const nuevoNombre = nombre.replace(/ /g,'').toUpperCase();
console.log(nuevoNombre);


//Closure 1
function productos() {
    let agregarCarrito = [];

    function mostrarCarrito(producto) {
       agregarCarrito.push(producto);
       console.log(agregarCarrito);
        
    }
    return mostrarCarrito;
}

const carrito = productos();
console.log(carrito('Galleta'));
console.log(carrito('Chocolate'));
console.log(carrito('Papas'));
console.log(carrito('Soda'));




// Closure 2
function mosaico() {
  const figuras = [];

  function pintar(nuevaFigura) {
    figuras.push(nuevaFigura);

    let resultado = '';
    const mainLength = figuras.length * 2;
    
    for (let fila = 0; fila < mainLength; fila++) {

      for(let columna = 0; columna < mainLength; columna++) {
        const valorMax = fila > columna ? fila : columna;
        const valorMin = fila < columna ? fila : columna;

        const valorPosible = mainLength - (valorMax + 1);

        const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
        

        resultado += `${figuras[indexFigura]} `;
      }
      resultado += '\n';
    }
    return resultado;
  }

  return pintar;

}

const m = mosaico();
console.log(m('*'));
console.log(m('o'));
console.log(m('+'));
console.log(m('x'));
