//Una función es un bloque de código que definimos una vez y lo reutilizamos las veces que queramos; un conjunto de instrucciones a las que podemos pasar diferentes datos para que nos devuelva resultados distintos.


function makeMeCoffee(coffeeName) {
    return `Aquí tiene su ${coffeeName}, que lo disfrute`;
  }

  console.log(makeMeCoffee("capuccino"));
  console.log(makeMeCoffee("café con leche"));

  //Función sin parámetros
function hi() {
  return "Hola";
}

//Función con parámetros
function sum(a, b) {
  return a + b;
}

console.log(hi());
//Muestra en la consola la palabra 'Hola'

console.log(sum(1, 4));
//Muestra en la consola un 5

//FUNCIONES FLECHA
//Las arrow functions ("funciones flecha") de ES6 son una forma simplificada para declarar funciones anónimas. La sintaxis básica es la siguiente:

const add = (a, b) => {
  return a + b;
};

// y la ejecutamos usando la variable a la que la hemos asignado:
add(2, 3); // devuelve 5;

//Función arrow sin llave y return implícito
const getWaitingTime = (minutes) => `Please, wait ${minutes} minutes`;
console.log(getWaitingTime(4));
// devuelve "Please, wait 4 minutes"
