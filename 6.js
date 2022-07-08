// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
// Considerar el caso en que 2 números sean iguales.

var numero1;
var numero2;
var numero3;

numero1 = parseInt(prompt('Por favor introduce un numero 1'));
numero2 = parseInt(prompt('Por favor introduce un numero 2'));
numero3 = parseInt(prompt('Por favor introduce un numero 3'));

if(numero1 > numero2 && numero2 > numero3){
    alert('El numero mayor es: ' + numero1);
}else if(numero1 > numero3 && numero3 > numero2){
    alert('El numero mayor es: ' + numero1);
}else if(numero1 == numero2 && numero2 == numero3){
    alert('El numero mayor es: ' + numero1);
}else if(numero2 > numero1 && numero1 > numero3){
    alert('El numero mayor es: ' + numero2);
}else if(numero2 > numero3 && numero3 > numero1){
    alert('El numero mayor es: ' + numero2);
}else if(numero3 > numero1 && numero1 > numero2){
    alert('El numero mayor es: ' + numero3);
}else if(numero3 > numero2 && numero2 > numero1){
    alert('El numero mayor es: ' + numero3);
}