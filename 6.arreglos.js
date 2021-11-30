/*Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.
Un array puede contener cualquier tipo de dato (string, number, boolean, object incluso otros arrays). 
De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.
Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una 
determinada posición del array o modificarlo. Un dato importante a tener en cuenta es que el índice de los arrays 
empieza por el número 0, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así 
sucesivamente.*/

//Declarar array lleno 
let animals = ["vaca", "cerdo", "oveja"];


//Declarar un array vacío
let friends = [];


//Añadir elementos a un array vacío
friends[0] = 'Bárbara'; // Añadimos un elemento en el índice 0, la primera posición del array
friends[1] = 'María'; // Añadimos un elemento en el índice 1, la segunda posición del array

//Modificar los elementos
const arr = ['plátano', 'manzana', 'pera']; // Creamos un array con tres elementos
arr[1] = 'limón'; // Sobrescribimos el valor que hay en la segunda posición del array
// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']


//MÉTODOS DE ARRAY
let frutas = ["pera", "plátano", "melón", "chocolate"];

//Métodos transformadores
//pop(); elimina el último elemento del array original y el nuevo se queda solo con el ultimo elemento en string.
//slice(); hace una copia del array (popfrutas modifica el original si no hacemos copia)
const frutas2 = frutas.slice();
const popfrutas = frutas2.pop();
console.log(popfrutas);
//chocolate
console.log(frutas2);
//["pera", "plátano", "melón"]

//shift(); hace lo mismo que pop pero con el primer elemento
const frutas3 = frutas.slice();
const shiftFrutas = frutas3.shift();
console.log(shiftFrutas);
//pera
console.log(frutas3);
//["plátano", "melón", "chocolate"]

//push(); agrega un elemento al final del array. Se modifica el array original y en pushedfrutas nos dice el nº de elementos que tiene el array modificado
const frutas4 = frutas.slice();
const pushedfrutas = frutas4.push("uvas pasas", "bananas");
console.log(frutas4);
console.log(pushedfrutas);

//reverse(); invierte el orden de los elementos de un array
const frutas5 = frutas.slice();
frutas5.reverse();
console.log(frutas5);

//unshift(como push pero añade los elementos al ppio)
const frutas6 = frutas.slice();
frutas6.unshift("boniatos", "patatas");
console.log(frutas6);

//sort() ordena los elementos de un array localmente y lo devuelve ordenado (por defecto alfabéticamente o numéricamente, pero no sirve para ordenar nºs porque se fija en la primera cifra(pone el 50 antes que el 7))
const frutas7 = frutas.slice();
frutas7.sort();
console.log(frutas7);

//splice(posicion inicio, numero elementos a eliminar, "elemento a añadir" ); elimina elementos de un array.También se pueden añadir en su lugar otros elementos. También se pueden usar nºs negativos para empezar por el final.
const frutas8 = frutas.slice();
frutas8.splice(1, 2, "fresas", "arandanos");
//elimina plátano y melón y añade freses y árandanos.
//muestra array modificado [pera, fresas, arandanos, chocolate]
console.log(frutas8);

//Métodos accesores. NO MODIFICAN EL ARRAY ORIGINAL

//join(","). Devuelve un string separado por comas o por lo que haya en el paréntesis. Parecido a toString pero nos permite elegir el separador que queramos.
const frutas9 = frutas.join(", ");
console.log(frutas9);

//slice(); devuelve una parte del array en un nuevo array. Fin no incluido.
const frutas10 = frutas.slice(1, 2);
//Devuelve "Platano" (posición uno) Parecido a substring();
console.log(frutas10);

//otros métodos de array que son iguales que los de cadenas (toString(); indexOf(); lastIndexOf(); includes();)

//Métodos de repetición
//filter(); Es un bucle, recibe como parámetro una función. Crea un nuevo array con los elementos que cumplan una condición.
const frutas11 = frutas.filter((fruta) => fruta.length > 4);
console.log(frutas11);

//forEach es un bucle
frutas.forEach((fruta) => console.log(fruta + " es mi fruta favorita"));