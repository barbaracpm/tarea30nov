/**En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, boolean , undefined y symbol. También hay null, que aparentemente es primitivo, pero de hecho es un caso especial para cada Object: y cualquier tipo estructurado se deriva de null por la Cadena de prototipos.**/

//String (entre comillas)
let name = "Bárbara";

//Number(sin comillas)
let score = 5;

//BigInt se crea agregando n al final del literal entero o llamando a la función BigInt que crea bigints desde cadenas, números, etc.
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // lo mismo que 10n

//Boolean (true/false). Los booleanos son tipos de datos de JavaScript que guardan información del tipo verdadero o falso. Solo pueden tener los valores true o false. 
const filled = false; // Este booleano es falso.
const solved = true; // Este booleano es verdadero.

/*Truthy y Falsy
En Javascript un valor verdadero o Truthy es un valor que se considera verdadero aunque su tipo no sea boolean. Todos los valores son verdaderos a no ser que estén en la lista de los definidos como "Falsy".
Los valores Falsy son aquellos que aun no siendo de tipo booleano, al evaluarse en un contexto booleano, se comportan como los booleanos de valor falso.
Los valores falsy son:
false
null
undefined
0
NaN
''
""
*/

//Undefined. Es el valor que tiene por defecto una variable que ha sido declarada pero a la que no se ha dado ningún valor.
let favoriteFood;
console.log(favoriteFood); //undefined;

//null es un tipo de dato en JavaScript que representa un objeto nulo. Normalmente se utiliza de forma intencionada, para indicar que esa variable debería contener un objeto (siendo posible que se rellene más tarde, por ejemplo con los datos que nos envíe el servidor, o con los datos de un formulario).
let userData = null;