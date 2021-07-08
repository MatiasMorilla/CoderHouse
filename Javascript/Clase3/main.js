let numeroIngresado = prompt("Ingrese un numero: ");


if(numeroIngresado > 0 && parseInt(numeroIngresado))
{
    let table = "Table del numero: " + numeroIngresado + "\n";

    for(let i = 0; i <= 10; i++)
    {
        table += numeroIngresado + " x " + i +  " = " + numeroIngresado*i +"\n";
    }

    alert(table);
}
else
{
    alert("Debe ingresar un numero!!");
}