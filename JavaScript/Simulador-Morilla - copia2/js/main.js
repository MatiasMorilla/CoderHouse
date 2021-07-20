const btn_cart = document.querySelector("#btn-cart");
const cart_container = document.querySelector(".cart-container-product");
const cart_items = document.querySelectorAll(".product");
const card = document.querySelectorAll(".card");
const btn_card = document.querySelectorAll(".btn-card");
const btn_cancel = document.querySelectorAll(".btn-cancel");


// agrega u producto al carrito
function addToCart(nombre)
{
    for(let i = 0; i < arrayP.length; i++)
    {
        if(nombre == arrayP[i].nombre)
        {
            let product = document.createElement("div");
            product.className = "product";
            product.innerHTML = 
            `<div class="img-product">
            <img src="`+ arrayP[i].img +`" alt="`+ arrayP[i].nombre +`">
            </div>
            <div class="info-product">
            <h4 class="name">`+ arrayP[i].nombre +`</h4>
            <span class="price">$`+ arrayP[i].precio +`</span>
            </div>
            <div class="cancel-container">
            <button class="btn-cancel" idProducto="`+ arrayP[i].id +`"><i class="far fa-times-circle"></i></button>
            </div>`
            
            cart_container.appendChild(product);
        }
    }
}

function deleteProduct(nombre)
{
    let cart_container = document.querySelector(".cart-container-product");

    for(let i = 0; i < arrayP.length; i++)
    {
        if(nombre == arrayP[i].nombre)
        {
            let cant = cart_container.childNodes;
            cart_container.removeChild(cant[i + 3]);
        }
    }
}

// oculta o hace aparecer el carrito
btn_cart.addEventListener("click", function(){
    cart_container.classList.toggle("cart-hidden");
    
})

// Si se hace click en algun boton de "Agregar" se agrega el producto al carrito, se suma el total de la compra y se enumeran los elementos en el carrtio
btn_card.forEach(function(e){
    e.addEventListener("click", function(){
        let btn_cart = document.querySelector("#btn-cart");
        let cart_items = document.querySelectorAll(".product");

        // AGREGA LOS PRODUCTOS Y SI QUIEREA AGREAGAR MAS DE 7 NO LO DEJA
        if(cart_items.length < 7)
        {
            let p = buscarXid(e.getAttribute("idProducto"));
            addToCart(p.nombre);
        }
        else
        {
            alert("La capacidad maxima es de 7, porfavor elimine algunos prodcutos o realice la compra!");
        }


        cart_items = document.querySelectorAll(".product");
        
        //ENUMERO LOS PRODUCTOS CON EL ATRIBUTO CANT
        if(cart_items.length > 0)
        {
            btn_cart.classList.add("cant");
            btn_cart.setAttribute("cant", cart_items.length);
        }
        
        buscarBtnCancel();

        let price = document.querySelectorAll(".price");
        let total_price = document.querySelector(".total-price");
        let precioTotal = 0;

        // SUMA EL TOTAL DE TODOS LOS PRODUCTOS
        price.forEach(function(e){
            let precioS = e.innerHTML.slice(1, e.innerHTML.length);
            let precio = parseInt(precioS);
            precioTotal += precio;
        })
        total_price.innerHTML ="Total: $" + precioTotal;
    })
})


function buscarBtnCancel()
{
    let btn_cancel = document.querySelectorAll(".btn-cancel");
    let i = 0;

    btn_cancel.forEach(function(e){
        i++;

        e.addEventListener("click", function(){
            let p = buscarXid(e.getAttribute("idProducto"));
            deleteProduct(p.nombre);
            return 0;
        })
    })

}

