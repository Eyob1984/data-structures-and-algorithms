'use strict';

class Node{
    constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  } 
}
class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(value){
    try{
    let newNode = new Node(value);
    // this.head = newNode
    newNode.next = this.head;
    this.head = newNode;

    }catch(e){
      console.error('Error at insert method')
    }
  }

  includes(val){
    let curr = this.head;
    while(curr){
      console.log(curr)
      
      if(curr.val === val){
         return true;
      }
      curr = curr.next
    }
    return false;

  }
  toString(){


  }

}

let node1 = new Node(5);
let node2 = new Node(7);
let node3 = new Node(9);

let list1 = new LinkedList()

list1.head = node1;
node1.next = node2;
node2.next = node3;
console.log('list 1', list1);
list1.includes('ABC')