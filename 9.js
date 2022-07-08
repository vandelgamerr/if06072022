// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida 
// rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” 
// y a continuación le informará el precio del helado sin ningún topping.

var respuesta;

respuesta = prompt('¿Que topping de helado quieres?').toUpperCase();
if(respuesta == "OREO"){
    alert('El topping de oreo cuesta 10 MXN');
}else if(respuesta == "KITKAT"){
    alert('El topping de kitkat cuesta 15 MXN');
}else if(respuesta == "BROWNIE"){
    alert('El topping de brownie cuesta 20 MXN');
}else{
    alert('El helado sin topping cuesta 50 MXN');
}













