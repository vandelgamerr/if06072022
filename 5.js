// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
// No considerar el caso en que ambos números son iguales.

var numero1;
var numero2;

numero1 = parseInt(prompt('Por favor introduce un numero 1'));
numero2 = parseInt(prompt('Por favor introduce un numero 2'));
if(numero1 > numero2){
    alert(numero1);
}else if(numero2 > numero1){
    alert(numero2);
}