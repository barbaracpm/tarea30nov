//En JavaScript los objetos literales o diccionarios conforman un grupo de datos compuestos por una clave a la que va asociado un valor.

//Declarar un objeto
const alumna = {
    name: 'María',
    age: 31,
    address: {
      street: 'Colegiata',
      number: 9
    }
  };

//Actualizar un objeto
    alumna.name = 'Lucía';
// Muestra en la consola 'Lucía'
    console.log(alumna.name);

//Crear un objeto vacío
const persona = {};
persona.name = 'María';
persona.age = 31;
// Muestra en la consola 31
console.log(persona.age);

//Métodos en los objetos y uso de this
const estudiante = {};
estudiante.name = 'María';
estudiante.sayHello = function() {
  return 'Hola, me llamo ' + this.name;
};
// Muestra en la consola 'Hola, me llamo María'
console.log(estudiante.sayHello());