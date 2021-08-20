$(document).ready(function()
{
    $(".btn-buy").click(function(e){
        e.preventDefault();
    
        if(cart.calcularTotal() == 0){
            alert("Debes tener algun producto");
        }
    })
})