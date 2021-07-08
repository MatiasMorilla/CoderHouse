let textoIngresado = prompt("Ingrese una palabra o un numero: ");
let flag = 0;

if(parseInt(textoIngresado))
{
    flag = 1;
}


switch(flag)
{
    case 0:
        alert("La palabra que ingreso fue: " + textoIngresado);
        break;
    case 1:
        alert("El numero que ingreso fue: " + textoIngresado);
        break;
    default:
        break;
}