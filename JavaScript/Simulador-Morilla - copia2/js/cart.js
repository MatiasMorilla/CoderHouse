class Cart
{
    constructor()
    {
        this.products = [];
        this.quantity = [];
        this.total = 0;
    }

    existProdutc(producto)
    {
        let pos = -1;

        for(let i = 0; i < this.products.length; i++)
        {
            if(this.products[i].id == producto.id)
            {
                pos = i;
            }
        }

        return pos;
    }

    add(producto)
    {
        let pos = this.existProdutc(producto);

        if(pos != -1)
        {
            this.quantity[pos] ++;
        }
        else
        {
            this.products.push(producto);
            this.quantity.push(1);
        }
    }

    delete(producto)
    {
        let pos = this.existProdutc(producto);

        if(pos != -1)
        {
            if(this.quantity[pos] > 1)
            {
                this.quantity[pos]--;
            }
            else
            {
                this.products.splice(pos, 1);
                this.quantity.splice(pos, 1);
            }
        }
    }

    calculateTotal()
    {
        let total = 0;

        if(this.products.length > 0)
        {
            for(let i = 0; i < this.products.length; i++)
            {
                total += this.products[i].precio * this.quantity[i];
            }
        }

        return total;
    }

    toHTML()
    {
        let divArray = [];

        for(let i = 0; i < this.products.length; i++)
        {
            let div = document.createElement("div");
            div.className = "product"
            div.innerHTML =
            `<div class="img-product">
            <img src="`+ this.products[i].img +`" alt="`+ this.products[i].nombre +`">
            </div>
            <div class="info-product">
            <h4 class="name">`+ this.products[i].nombre +`</h4>
            <span class="price">$`+ this.products[i].precio +`</span>
            </div>
            <div class="cant-product">
            <span class="cant">`+ this.quantity[i] +`</span>
            </div>
            <div class="cancel-container">
            <button class="btn-cancel" idProducto="`+ this.products[i].id +`"><i class="far fa-times-circle"></i></button>
            </div>`

            const id = this.products[i].id;
            div.querySelector(".btn-cancel").addEventListener("click", addDeleteEvent)

            divArray.push(div);
        }

        return divArray;
    }
}

const cart = new Cart();

const btn_cart = document.querySelector("#btn-cart");
const cart_container = document.querySelector(".cart-container-product");
const carrito = document.querySelector(".cart");
const cart_items = document.querySelectorAll(".product");
const card = document.querySelectorAll(".card");
const btn_card = document.querySelectorAll(".btn-card");


const cartToHTML = function(cart)
{
    let divArray = cart.toHTML();
    carrito.innerHTML = "";

    for(const div of divArray)
    {
        carrito.appendChild(div);
    }
}

// oculta o hace aparecer el carrito
btn_cart.addEventListener("click", function(){
    cart_container.classList.toggle("cart-hidden");
    
})

// Si se hace click en algun boton de "Agregar" se agrega el producto al carrito, se suma el total de la compra y se enumeran los elementos en el carrtio
btn_card.forEach(function(e)
{
    e.addEventListener("click", function(){
        let cart_items = document.querySelectorAll(".product");
        let btn_cart = document.querySelector("#btn-cart");
        
        // AGREGA LOS PRODUCTOS Y SI QUIEREA AGREAGAR MAS DE 7 NO LO DEJA
        let p = buscarXid(e.getAttribute("idProducto"));
        cart.add(p);
        cartToHTML(cart);


        //ENUMERO LOS PRODUCTOS CON EL ATRIBUTO CANT
        cart_items = document.querySelectorAll(".product");

        if(cart_items.length > 0)
        {
            btn_cart.classList.add("cant");
            btn_cart.setAttribute("cant", cart_items.length);
        }

        // MODIFICO EL TOTAL DE LA COMPRA
        let total_price = document.querySelector(".total-price");
        total_price.innerHTML ="Total: $" + cart.calculateTotal();

        mostrarMensaje();
    })
})

const mostrarMensaje = function()
{
    let msj = document.querySelector(".mensaje-container");
    msj.classList.add("aparecer");

    setTimeout(function(){
        msj.classList.remove("aparecer")
    }, 1500);
}


// Elimina un producto del carrito y actualiza los datos
const addDeleteEvent = function(e)
{
    let btn = e.target;
    btn.closest(".product").remove();

    let cart_items = document.querySelectorAll(".product");
    let btn_cart = document.querySelector("#btn-cart");

    let p = buscarXid(btn.closest(".btn-cancel").getAttribute("idProducto"));
    cart.delete(p);
    cartToHTML(cart);

    //ENUMERO LOS PRODUCTOS CON EL ATRIBUTO CANT
    cart_items = document.querySelectorAll(".product");

    if(cart_items.length > 0)
    {
        btn_cart.classList.add("cant");
        btn_cart.setAttribute("cant", cart_items.length);
    }
    else
    {
        btn_cart.classList.remove("cant");
    }

    // MODIFICO EL TOTAL DE LA COMPRA
    let total_price = document.querySelector(".total-price");
    total_price.innerHTML ="Total: $" + cart.calculateTotal();    
}




