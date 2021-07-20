

/* // agrega u producto al carrito
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
            <div class="cant-product">
            <span class="cant">`+ 1 +`</span>
            </div>
            <div class="cancel-container">
            <button class="btn-cancel" idProducto="`+ arrayP[i].id +`"><i class="far fa-times-circle"></i></button>
            </div>`
            
            cart_container.appendChild(product);
        }
    }
} */

/* function deleteProduct(nombre)
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
} */



// Si se hace click en algun boton de "Agregar" se agrega el producto al carrito, se suma el total de la compra y se enumeran los elementos en el carrtio


/* function buscarBtnCancel()
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

} */

