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

const container = document.getElementById('p');

const p1 = new Productos(1, "Imperial", 50, 5000, "images/mateImperial.png");
const p2 = new Productos(2, "Camionero", 80, 1000, "images/camioneroMarron.png");
const p3 = new Productos(3, "Torpedo Marron", 70, 1500, "images/torpedoMarron.png");
const p4 = new Productos(4, "Torpedo Negro", 10, 2000, "images/torpedoNegro.png");
const p5 = new Productos(5, "Matera Negra", 15, 952, "images/materaNegra.png");
const p6 = new Productos(6, "Matera Marron Claro", 20, 1250, "images/materaMarronC.png");
const p7 = new Productos(7, "Matera Marron Oscuro", 10, 1250, "images/materaMarronO.png");
const p9 = new Productos(9, "Stanley Verde", 15, 12000, "images/termoVerde.png");
const p11 = new Productos(11, "Termo Gris", 50, 2000, "images/termoGris.png");
const p12 = new Productos(12, "Termo Gris con Pico", 50, 2200, "images/termoPico.png");
const p13 = new Productos(13, "Yerbera Negra", 40, 800, "images/yerbaNegra.png");
const p14 = new Productos(14, "Yerbera Marron", 50, 800, "images/YerbaMarron.png");
const p15 = new Productos(15, "Yerbera Azul", 60, 800, "images/YerbaAzul.png");
const p16 = new Productos(16, "Set Matero Marro", 60, 5500, "images/setMatero1.png");
const p17 = new Productos(17, "Set Matero Negro", 60, 5500, "images/setMatero4.png");
const p18 = new Productos(18, "Set Matero Verde", 60, 5500, "images/setMatero3.png");
const arrayP = [p1, p2, p3, p4, p5, p6 , p7, p9, p11, p12, p13, p14, p15, p16, p17, p18];


function crearYagregarCards()
{
    // Recorro el array de productos para agregarlos al DOM
    for(let i = 0; i < arrayP.length; i++)
    {
        // Creo el un elemento div para almacenar el producto
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "";

        // Inserto el HTML que quiero que tenga mi producto
        arrayP[i].innerHTML = 
        `<h3 class="title">`+ arrayP[i].nombre +`</h3>
        <img src="`+ arrayP[i].img +`" alt="Imagen Mate" class="img-card">
        <div class="footer-card">
            <button class="btn btn-card" idProducto="`+ arrayP[i].id +`" >Agregar</button>
            <span class="price-card">$`+ arrayP[i].precio +`</span>
        </div>`;

        // Le agrego ese HTML a la tarjeta y despues lo agrego al container
        card.innerHTML = arrayP[i].innerHTML;
        container.appendChild(card);
    }
}

function crearYcargarSlide()
{
    let slider = document.querySelector(".slider");

    for(let i = 0; i < arrayP.length; i++)
    {
        let slide = document.createElement("div");
        slide.className = "slider-item";

        arrayP[i].innerHTML =`<img src="`+ arrayP[i].img +`" alt="`+ arrayP[i].nombre +`" class="slider-img">`;    
        slide.innerHTML = arrayP[i].innerHTML;
        
        slider.appendChild(slide);
    }
}

function buscarXid(id)
{
    let product = null;
    for(let i = 0; i < arrayP.length; i++)
    {
        if(id == arrayP[i].id)
        {
            product = arrayP[i];
        }
    }
    return product;
}

crearYcargarSlide();
crearYagregarCards();











