const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};

producto.disponible = false;

delete producto.precio;

console.log(producto);
