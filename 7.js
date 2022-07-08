// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
// Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

var dia;
dia = prompt('Ingresa un dia de la semana').toUpperCase();
if(dia == "LUNES"){
    alert("Es Lunes");
}else if(dia=="VIERNES"){
    alert("Es viernes");
}else if(dia == "SABADO" || dia == "DOMINGO"){
    alert("Fin de semana");
}else{
    alert("Ninguno de los anteriores");
}