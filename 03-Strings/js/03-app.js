// Veamos como concatenar o unir 2 textos o variables:
const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

//console.log(producto.concat('En Descuento')); // Concactenar un string
//console.log(producto.concat(precio)); // Concactenar una variable

console.log(producto + " Con un precio de: " + precio);

console.log("El producto " + producto + "tiene un precio de " + precio);
console.log("El producto ", producto, "tiene un precio de ", precio);

console.log(`El producto ${producto} tien un precio de ${precio}`);
