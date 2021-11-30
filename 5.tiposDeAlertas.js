//Tipos de alertas

//1. Crear un mensaje de alerta con alert()
alert("mensaje de alerta");

//2. Crear un mensaje de confirmación con confirm()
//Además de mostrar un mensaje emergente nos permite aceptar o denegar dicho mensaje.
confirm("¿Te gustan los helados?");


//3. La función prompt() nos permite enviar un mensaje emergente con una caja de texto de modo que el usuario puede ingresar un valor dentro de ella. En caso de presionar «aceptar» el valor de establecerá, en caso de presionar «cancelar» en valor quedará vacío.
let myname = prompt("¿Cómo te llamas?");
console.log(myname);