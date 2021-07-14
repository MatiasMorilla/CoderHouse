let paciente1 = ["Juan", "Perez", 50];
let paciente2 = ["Pepe", "Fernadez", 20];
let paciente3 = ["Matias", "Juarez", 78];
let arrayPacientes = [paciente1, paciente2, paciente3];

function mostrarDatos(paciente)
{
    alert("Nombre: " + paciente[0] + "\n" +
          "Apellido: " + paciente[1] + "\n" +
          "Edad: " + paciente[2]);
}

function buscarYmostrar(nombrePersona)
{
    for(let i = 0; i < arrayPacientes.length; i++)
    {
        if(nombrePersona === arrayPacientes[i][0])
        {
            mostrarDatos(arrayPacientes[i]);
        }
    }
}


let nombrePersona = prompt("Ingrese el nombre del paciente: ");

buscarYmostrar(nombrePersona);
