const productos = [{nombre: "nombre1", precio: 1500},
            {nombre: "nombre2", precio: 1600},
            {nombre: "nombre3", precio: 1700},
            {nombre: "nombre4", precio: 1800},
            {nombre: "nombre4", precio: 1800},];

$(document).ready(function(){

    for(const producto of productos)
    {
        $(".contenedor").append(`<div class="producto">
                            <h2>${producto.nombre}</h2>
                            <b>${producto.precio}</b>
                        </div>`);
    }
})

