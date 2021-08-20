let section_buy = $(".section-buy");
section_buy.css("display", "none");

$(".btn-cancelar-compra").click(function()
{
    section_buy.css("display", "none");
});

$(".btn-buy").click(function()
{
    if(cart.calcularTotal() > 0)
    {
        section_buy.css("display", "block");
        $(".cart-container-product").addClass("cart-hidden");
        $("html, body").animate(
        {
            scrollTop: $("#header")
        });

        $(".total-compra").html(`Total: $${cart.calcularTotal()}`);

        $(".input-box input").change(function()
        {
            //completar las validaciones
        });


    } 
});

