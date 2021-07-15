class Productos
{
    constructor(id, nombre, stock, precio, img)
    {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.img = img;
    }

    restarStock()
    {
        this.stock--;
    }

    restarStockXcantidad(cantidad)
    {
        this.stock -= cantidad;
    }

    toString()
    {
        alert("Nombre: " + p1.nombre + "\n" +
              "Precio: " + p1.precio + "\n" +
              "Stock: " + p1.stock);
    }
}