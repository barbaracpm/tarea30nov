"use strict";

//Métodos de consola

//1. FUNCIONES DE REGISTRO

//log() - Muestra un mensaje, escribe lo que queramos ver. Mensaje de depuración.
let age = 5;
console.log(age);

//clear - Limpia la consola

//error() - Muestra un mensaje con formato de error en la consola del navegador.
console.error("You made a mistake");

//info() - En chrome es igual que console.log(). La mayoría usan log.
console.info("prueba de console.info");

//table() - Toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en la consola,
console.table(["peras", "limones", "calabaza", "batata", "chocolate"]);

//warn()- NO SE USA MUCHO. imprime un mensaje de advertencia
console.warn("This is a warning!");

//dir() en la consola de dev tools despliega una lista interactiva de las propiedades del objeto js especificado (no estándar)
console.dir(["peras", "limones", "calabaza", "batata", "chocolate"]);

//assert() NO RECOMENDADA. Aparece un mensaje de error si la afirmación es falsa. Si es verdadera no aparece nada (NO ESTANDAR)
let mariaAge = 10;
let paulaAge= 8;

console.assert(mariaAge < paulaAge, "María is not younger than Paula");


//2. FUNCIONES DE CONTEO. Se usan para ver cuántas veces se ejecuta algo, con fines de funcionamiento

//count()- Registra nº de veces que se llama a count(). Toma como argumento opcional una etiqueta.
for (let i = 0; i < 10; i++) {
    console.count("nº de veces que hemos llamado al método count");
  }

//countReset() - resetea el contador console.count()
console.countReset("nº de veces que hemos llamado al método count");
console.count("nº de veces que hemos llamado al método count");


//3. FUNCIONES DE AGRUPACIÓN

//group("nombre del grupo");- crea un nuevo grupo en línea en el registro de la consola web. AGRUPA LA INFO DENTRO DE LA CONSOLA, como carpetitas o anidado.
console.group();
console.log("Hello inside a group!");

//groupEnd("nombre del grupo") - Borra un grupo en línea en el registro de la consola web.
console.groupEnd();
console.log("and now outside of a group");

//groupCollapsed("nombre del grupo") - crea un grupo en linea pero contraído, el usuario debe expandirlo para verlo (funciona en la consola web)
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.groupEnd();
//4. FUNCIONES DE TEMPORIZACIÓN. Sirve para conocer el tiempo de ejecución de nuestro código.

//time() - inicia un temporizador
console.time();
for (let i = 0; i < 100000; i++) {
  
}
//timeLog() - Nos dice el tiempo que ha pasado desde que se inició el temporizador
console.timeLog();
//timeEnd() - registra el valor actual de un temporizador
console.timeEnd();

//editar código de consola, se le pueden meter estilos en línea:
console.log("%cMensaje con estilos", "color:white;background:green;padding:20px");