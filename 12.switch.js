//Switch
/*Switch es un tipo de condicional, en el cual:
JavaScript obtiene el valor de la variable o constante que pongamos dentro del primer paréntesis. 
En el ejemplo switch (todayDate), que en este caso es 'Viernes'.A continuación JavaScript compara este valor con
cada uno de los valores de los case. Primero con Lunes, después con Martes...Cuando el valor comparado todayDate, 
coincida con uno de los valores case, en el ejemplo case 'Viernes' se ejecutarán las líneas de código que hay 
desde el case hasta el siguiente break, en el ejemplo se ejecutará la línea console.log('Cumpleaños de Paco');
Si ninguno de los valores del valor comparado todayDate coincide con un valor de case, JavaScript ejecutará la acción por defecto, es decir el código que está a continuación de default.

Algunas consideraciones:
JavaScript compara los case en el orden en el que estén escritos.
JavaScript solo ejecuta el primer case que coincida. Si escribimos más de un case que coincida, 
solo se ejecutará el primero.Entre un case y el siguiente break; puede haber una línea o las líneas de código que 
queramos.La opción default equivale al último else de un if...else.
La opción default no es obligatoria.Al igual que un operador ternario, un switch es un tipo específico de 
condicional. Todo operador ternario y todo switch se puede reescribir como la combinación de varios if...else.*/

const todayDate = 'Viernes';

switch (todayDate) {
  case 'Lunes':
    console.log('Hoy me tomo un café con Maricarmen');
    break;
  case 'Martes':
    console.log('Bajar al perro');
    break;
  case 'Miércoles':
    console.log('Vamos al cine a ver una peli');
    break;
  case 'Jueves':
    console.log('Juernesss');
    break;
  case 'Viernes':
    console.log('Cumpleaños de Paco');
    break;
  case 'Sábado':
    console.log('Comida con los suegros');
    break;
  default:
    console.log('Dormir hasta las 12');
}