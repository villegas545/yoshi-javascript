const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log("El producto: tiene un precio de:");
  }
};

const producto2 = {
  nombre: "Tablet",
  precio: 3000,
  disponilble: true,
  mostrarInfo: function () {
    console.log(
      `El Producto: ${this.nombre} tiene un precio de: $(this.precio) `
    );
  }
};

producto.mostrarInfo();
producto2.mostrarInfo();
