// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var numero;

numero = parseInt(prompt('Por favor introduce un numero'));
if(numero  == 1000){
    alert("Ganaste un premio");
}else{
    alert(numero + " Sigue participando");
}