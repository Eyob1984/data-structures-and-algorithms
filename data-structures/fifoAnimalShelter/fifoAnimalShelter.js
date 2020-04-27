'use strict';

class Animal {
  constructor (name, species) {

  }

  speak(){
    return this.name + 'makes a sound';
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name, 'dog');
  }

  speak() {
    return this.name + 'Barks'
  }
}

class Cat extends Animal {
  constructor (name) {
    super(name, 'cat');
  }

  speak() {
    return this.name + 'meow'
  }
}

module.exports = { Dog, Cat}