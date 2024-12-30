const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400
};

const producto2 = {
  nombre: "Celular",
  precio: 800
};

carrito.push(producto);
carrito.push(producto2);

// Añadir al Inicio del carrito...

const producto3 = {
  nombre: "Teclado",
  precio: 50
};
carrito.unshift(producto3);

console.table(carrito);

/* // Eliminar ultimo elemento de un arreglo...
carrito.pop();

console.table(carrito);

carrito.pop();

console.table(carrito); */

carrito.splice(3, 1);
console.table(carrito);
