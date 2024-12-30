const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};

//const nombre = producto.nombre;
//console.log(nombre);

// destructuring
const { disponible } = producto;

console.log(disponible);

// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...tercero] = numeros;

console.log(tercero);
