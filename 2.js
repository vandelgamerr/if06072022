// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número
// es divisible entre 2” o “x núm

var numero;

numero = parseInt(prompt('Por favor introduce un numero'));
if(numero % 2 == 0){
    alert("El numero: "+ numero + " es divisible entre 2");
}else{
    alert("El numero: "+ numero + " NO es divisible entre 2");
}