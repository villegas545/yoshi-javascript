"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};

Object.freeze(producto);

/* ropducto.disponible = false;
producto.imagen = "imangen.jpg";
delete producto.precio; */

console.log(producto);

console.log(Object.isFrozen(producto));
