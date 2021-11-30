//Operador ternario. 
/*Podemos pensar en él como un atajo del if...else más sencillo.

La estructura de un ternario es la siguiente:
Escribimos ? y el código que se va a ejecutar si se cumple la condición.
Escribimos : y el código que se va a ejecutar si NO se cumple la condición

Solo debemos utilizar el operador ternario cuando:
Queremos guardar un valor en una variable o constante.
Solo queremos hacer una operación o sentencia dentro del ? y del :.
Si queremos hacer más cosas utilizaremos el if - else.
Si no queremos hacer nada en el :, es decir el else, no podemos usar un operador ternario.*/

const theme = 'halloween';
const party = theme === 'halloween' ? "disfrázate de bruja" : "no te disfraces de bruja";
console.log(party);