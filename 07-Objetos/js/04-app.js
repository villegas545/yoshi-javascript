const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};

//const nombre = producto.nombre;
//console.log(nombre);

// destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
