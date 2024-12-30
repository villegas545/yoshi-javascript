"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};

Object.seal(producto);

producto.disponible = false;
//producto.imagen = "imangen.jpg";
//delete producto.precio; */

console.log(producto);

console.log(Object.isSealed(producto));
