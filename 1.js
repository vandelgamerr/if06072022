// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, 
// en caso de contestar no, responder: “No te creo”.

var respuesta;

respuesta = prompt('¿Eres bellisimo/a? Si/No').toUpperCase();
if(respuesta == "SI"){
    alert("Ciertamente");
}else{
    alert("No te creo");
}
