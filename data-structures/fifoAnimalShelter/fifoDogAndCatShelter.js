'use strict';

const Animal = require('./fifoAnimalShelter.js');

class Node {
  constructor(val, next){
    this.val = val;
    this.next = this.next;
  }
}


class DogAndCatShelter {
  constructor (){
  this.front = null;
  this.rear = null;
}

enqueue(animal){
  let newNode = new Node(animal);

  if(!this.front && !this.rear){
    this.front = newNode;
    this.rear = newNode;
    return;
  }
  this.rear.next = newNode;
  this.rear = newNode;
  }

dequeue(pref) {

  if(!pref === 'dog' && !pref === 'cat'){
    return null;

    let currentNode = this.front;
    let prevNode = null;
    let foundAnimal = null;

    while(currentNode){
      let animal = currentNode.val;

      if(animal.species === pref){
        if(!prevNode){
          let dequeueNode = currentNode;
          this.front = currentNode.next;
          dequeueNode.next = null;
          return dequeueNode;
        }

        prevNode.next = currentNode.next;

        if(!currentNode.next)
          this.rear =prevNode;
        currentNode.next = null;
        return currentNode;

      }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    return null;

  }
  return null;
}
  
toString(){
let currentNode = this.front;
let str = '';

while(currentNode){
  str += '{ name ' + currentNode.val.name +  ', species' + currentNode.val.species + '} - > ';

  currentNode = currentNode.next;
}

str += 'null';
return str;

}

toStringFrontRear
(){
  let frontStr = 'null';
  let rearStr = 'null';

  if(this.front)

    frontStr = '{ name ' + this.front.val.name +  ', species' + this.front.val.species + '} - > ';

    if(this.rear)
      rearStr = '{ name ' + this.rear.val.name +  ', species' + this.rear.val.species + '} - > ';

      let str = 'front' + frontStr + 'rear' + rearStr;

}

}

let shelter = new DogAndCatShelter();

console.log(shelter.toStringFrontRear());

let fido = new Animal.Dog('fido');
shelter.enqueue(fido);

console.log(shelter.toStringFrontRear())
console.log(shelter.toString());
