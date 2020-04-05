'use strict';

class Node{
    constructor(data){
      this.data = data;
      this.next = null;
      this.prev = null;
  } 
}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insert(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(data){
    let node = this.head;
    while(node){
      if(node.data === data){
        return true;
      }
      node = node.next;
    }
    return false;
  }
  append(data) {
    let newNode = new Node(data);
    let current;
    if (this.head === null){
      this.head = newNode;
    }else{
      current = this.head;
      while (current.next){
        current = current.next
      }
      current.next = newNode;
    }
  }
  insertBefore(newData, val){
    let prevCurrNode = null;
    let currNode = this.head;

    if(currNode && currNode.data === val){
     let newNode = new Node(newData);
     newNode.next = this.head;
     this.head = newNode;
     return;
    }
    while(currNode){
        if (currNode.data === val){
            let newNode = new Node(newData)
            prevCurrNode.next = newNode;
            newNode.next = currNode;
            return;
        }
        prevCurrNode = currNode;
        currNode = currNode.next
    }
    return false;
  }
  insertAfter(newData, val){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === val){
        let newNode = new Node(newData);
        let newVal = newNode.next
        currentNode.next = newNode;
        newNode.next = newVal;
        return
      }
      currentNode = currentNode.next;
    }
  }
  toString(){
    let currNode =this.head;
    let string = '';
    while(currNode){
      string += '{' + currNode.data + '} -> ';
      currNode = currNode.next;
    }
    string += 'null';
    console.log(string)
  }

}
module.exports = LinkedList;


