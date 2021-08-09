class Cart
{
    constructor()
    {
        this.productos = [];
        this.cantidad = [];
        this.total = 0;
    }

    existeProducto(producto)
    {
        let pos = -1;

        for(let i = 0; i < this.productos.length; i++)
        {
            if(producto.nombre == this.productos[i].nombre)
            {
                pos = i;
            }
        }

        return pos;
    }

    agregar(producto)
    {
        let pos = this.existeProducto(producto);

        if(pos != -1)
        {
            this.cantidad[pos]++;
        }
        else
        {
            this.productos.push(producto);
            this.cantidad.push(1);
        }
    }

    eliminar(producto)
    {
        let pos = this.existeProducto(producto);

        if(pos != -1)
        {
            if(this.cantidad[pos] > 1)
            {
                this.cantidad[pos]--;
            }
            else
            {
                this.productos[pos].splice(pos, 1);
                this.cantidad[pos].splice(pos, 1);
            }
        }
    }

    calcularTotal()
    {
        let total = 0;

        if(this.productos.length > 0)
        {
            for(let i = 0; i < this.productos.length; i++)
            {
                total += this.productos[i].precio * this.cantidad[i];
            }
        }

        return total;
    }
}


const btn_cart = document.querySelector("#btn-cart");
const cart_container = document.querySelector(".cart-container-product");

// oculta o hace aparecer el carrito
btn_cart.addEventListener("click", function(){
    cart_container.classList.toggle("cart-hidden");
    
})