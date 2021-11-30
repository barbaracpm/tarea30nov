"use strict";

//IF SOLO PREGUNTA 1 VEZ Y EJECUTA. While pregunta una y otra vez
//Sentencia while (bucle infinito, no está determinado, no le decimos número de vueltas). Mientras una condición se cumpla se ejecuta el bloque de código
let acc = 0;

while (acc < 4) {
  acc++;
  console.log("hello");
  //se consolea hello 4 veces
}

//DO WHILE. 1º ejecutamos y después comprueba la condición. Mientras se siga cumpliendo la condición seguimos ejecutando.
let number = 0;

do {
  console.log(number);
  number++;
} while (number < 6);
//se consolea desde el 0 al 5

//BREAK. Termina la sentencia anterior
let acc2 = 0;

while (acc2 < 100) {
  acc2++;
  console.log("buenos días");

  if (acc2 === 4) {
    break;
  }

  //se consolea 4 veces "buenos días"
}

//FOR es un bucle determinado. Le decimos nº de vueltas.
//1º se declara, después se pone la condición y la tercera es la iteración
// i no existe por fuera del bucle
//continue (parecido a break, se salta esa condición y continua el bucle)
for (let i = 0; i < 20; i++) {
  if (i == 12) {
    continue;
  }

  console.log(i);
}

//FOR of
let animales = ["gato", "perro", "dinosaurio"];

for (const animal of animales) {
  console.log(animal);
}

//For in
//en la variable animal guarda la posición del indice
for (const animal in animales) {
  console.log(animal);
  console.log(animales[0]);
  console.log(animales[animal]);
}


