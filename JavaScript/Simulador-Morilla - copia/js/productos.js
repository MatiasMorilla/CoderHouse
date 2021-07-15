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
}