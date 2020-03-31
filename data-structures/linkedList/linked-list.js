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
  toString(){
    let currNode =this.head;
    let string = '';
    while(currNode){
      string += '{' + currNode.data + '} ->';
      console.log(string);
      currNode = currNode.next;
    }
    string += 'null';
    console.log(string)
  }

}
// let list1 = new LinkedList()
// list1.insert(100);
// list1.insert(200);
// list1.insert(300);
// console.log(list1.includes(150));
// list1.toString();

module.exports = LinkedList;


