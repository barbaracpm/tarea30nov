"use strict";

//CLASES Y HERENCIAS. Programación orientada a objetos

class Animal {
  constructor(kind, age, color) {
    this.kind = kind;
    this.age = age;
    this.color = color;
    this.info = `I'm a ${this.kind}, i'm ${this.age} years old and my favorite color is ${this.color}`;
  }

  viewInfo() {
    return this.info;
  }
}

//HERENCIA. Con extends una clase hereda todas las características y métodos de otra clase pero además le añade cosas nuevas.  ej debajo, hereda características y métodos de "animal" y añade un nuevo método (bark).

class Dog extends Animal {
  constructor(kind, age, color, breed) {
    super(kind, age, color);
    this.breed = null;
  }

  static bark() {
    return "guau, guau";
  }

  set setBreed(newName) {
    this.breed = newName;
  }

  get getBreed() {
    return this.breed;
  }
}

//Métodos estáticos. No toman propiedades del objeto por lo que se pueden usar incluso antes de crear el objeto. Se antepano la palabra static al método.
console.log(Dog.bark());


//instanciar la clase. Los objetos se definen con const
const dogItem = new Dog("dog", 5, "red", "doberman");
const monkey = new Animal("monkey", 2, "yellow");
const fish = new Animal("fish", 1, "blue");

console.log(monkey.viewInfo());
console.log(dogItem.viewInfo());
console.log(fish.viewInfo());

//métodos setters y getters. Set= definen o modifican. Get= Obtienen (ej, localStorage)
dogItem.setBreed = "labrador";
console.log(dogItem.getBreed);
