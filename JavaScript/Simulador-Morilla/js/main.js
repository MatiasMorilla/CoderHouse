const p1 = new Productos(1, "Imperial", 50, 5000, "../images/descarga.png");

// Se compra un producto y se le resta el stock

p1.toString();

let cantidad = parseInt(prompt("Cuantos quiere llevar?"));

p1.restarStockXcantidad(cantidad);

p1.toString();

