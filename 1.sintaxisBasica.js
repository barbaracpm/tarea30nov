"use strict"

//Sintaxis Básica

//Comentario de una línea
/*Comentario de varias
líneas*/

//Declaración de variables
let name = "Bárbara";

//reasignar valor de una variable
name = "María";

//Declaración de constantes
const birthday ="21 de enero";

//Antes de 2015 no existían "let" ni "const". Se usaba var tanto para variables como para constantes. Las constantes se indicaban usando mayúsuculas.
var favoriteAnimal = "león";
var EYES_COLOR = "verde";

//Todos los nombres de variables se escriben en camelCase 
let favoriteColor = "azul";

//Concatenar variables
const introduction = `Hola, me llamo ${name} y mi color favorito es el ${favoriteColor}. Mi cumpleaños es el ${birthday}.Mi animal favorito es el ${favoriteAnimal} y mis ojos son de color ${EYES_COLOR}`;

console.log(introduction); 
/* ¡Hola, me llamo María y mi color favorito es el azul. Mi cumpleaños es el 21 de enero.Mi animal favorito es el león y mis ojos son de color 
verde*/

