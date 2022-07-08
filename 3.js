// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var numero;

numero = parseInt(prompt('Por favor introduce un numero'));
if(numero % 2 == 0){
    alert("El numero: "+ numero + " es par");
}else{
    alert("El numero: "+ numero + " es impar");
}