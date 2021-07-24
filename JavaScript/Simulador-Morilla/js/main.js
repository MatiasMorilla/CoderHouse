const p1 = new Productos(1, "Imperial", 50, 5000, "images/mateImperial.png", "mate imperial negro");
const p2 = new Productos(2, "Camionero", 80, 1000, "images/camioneroMarron.png", "mate camionero marron");
const p3 = new Productos(3, "Torpedo Marron", 70, 1500, "images/torpedoMarron.png", "mate torpedo marron");
const p4 = new Productos(4, "Torpedo Negro", 10, 2000, "images/torpedoNegro.png", "mate torpedo negro");
const p5 = new Productos(5, "Matera Negra", 15, 952, "images/materaNegra.png", "matera negra");
const arrayProductos = [p1, p2, p3, p4, p5];

const bucarProductoXNombre = function(nombre)
{
    let productoEncontrado = null;

    for(const producto of arrayProductos)
    {
        if(producto.nombre == nombre)
        {
            productoEncontrado = producto;
        }
    }
    
    return productoEncontrado;
}

const mostrarProductos = function()
{
    let mensaje = "";

    for(let i = 0; i < arrayProductos.length; i++)
    {
        mensaje += "Nombre: " + arrayProductos[i].nombre + "/ Precio: "+ arrayProductos[i].precio + "\n";
    }

    alert(mensaje);
}


mostrarProductos();

let nombreProducto = prompt("Ingrese el nombre del producto");
let cantidad = parseInt(prompt("Ingrese la cantidad que quiere llevar"));
let producto = bucarProductoXNombre(nombreProducto);

if(producto != null)
{
    if(cantidad <= producto.stock)
    {
        alert("Valor de la compra: " + producto.precio * cantidad);
    }
    else
    {
        alert("No tenemos demasiado stock :( \n Stock disponible: " + producto.stock);
    }
}
else
{
    alert("El producto no existe!");
}
