const btn_cart = document.querySelector("#btn-cart");
const cart_container = document.querySelector(".cart-container-product");
const cart_items = document.querySelectorAll(".product");
const card = document.querySelectorAll(".card");
const btn_card = document.querySelectorAll(".btn-card");



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
            <button class="btn-cancel"><i class="far fa-times-circle"></i></button>
            </div>`
            
            cart_container.appendChild(product);
        }
    }
}


btn_cart.addEventListener("click", function(){
    cart_container.classList.toggle("cart-hidden");
    
})


btn_card.forEach(function(e){
    e.addEventListener("click", function(){
        let btn_cart = document.querySelector("#btn-cart");
        let cart_items = document.querySelectorAll(".product");

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
        let price = document.querySelectorAll(".price");
        let total_price = document.querySelector(".total-price");

        if(cart_items.length > 0)
        {
            btn_cart.classList.add("cant");
            btn_cart.setAttribute("cant", cart_items.length);
        }

        price.forEach(function(e){
            let precioS = e.innerHTML.slice(1, e.innerHTML.length);
            let precio = parseInt(precioS);
            let precioTotal = 0;
            precioTotal += precio; // no suma

            total_price.innerHTML ="Total: $" + precioTotal;
        })
    })
})
