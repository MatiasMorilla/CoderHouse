// Pide un nombre y un apellido y luego calcula la edad.
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let ano = parseInt(prompt("Ingrese su año de nacimiento"));

let edad = 2021 - ano;
let texto = "Hola, " + nombre + " " + apellido + ", tu edad es " + edad
alert(texto);
console.log(texto);

// Pide dos numeros y los suma
alert("Vamos a sumar!");
let numero1 = parseInt(prompt("Dame el primer numero: "));
let numero2 = parseInt(prompt("Dame el segundo numero: "));
let texto2 = "La suma de los numeros es: " + (numero1 + numero2)
alert(texto2);
console.log(texto2);