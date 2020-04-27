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

enqeue(animal){
  let newNode = new Node(animal);

  if(this.front && this.rear === null){
    this.front = newNode;
    this.rear = newNode;
    return;
  }
  this.rear.next = newNode;
  this.rear = newNode;
  }

dequeue(pref) {
  
}

}

