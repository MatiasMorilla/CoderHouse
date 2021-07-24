
const header = document.querySelector(".header"); // obtengo el header
const btn_right = document.querySelector("#btn-right"); // obtengo el bonton derecho
const btn_left = document.querySelector("#btn-left");// obtengo el bonton izquierdo

window.onscroll = function()
{
    let y = window.scrollY;
    if(y >= 1)
    {
        header.classList.add("header--fixed");
    }
    else
    {
        header.classList.remove("header--fixed");
    }
}


crearYcargarSlide();
crearYagregarCards();


btn_right.addEventListener("click", function(){
    next();
})

btn_left.addEventListener("click", function(){
    prev();
})

setInterval(function(){
    next();
}, 5000);

