const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet ", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 }
];

const nuevoArray = carrito.map(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
});

const nuevoArray2 = carrito.forEach(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
