// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m"
  }
};

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
