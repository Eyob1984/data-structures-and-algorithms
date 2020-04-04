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
  insertBefore(val, newData){
    let node = this.head;
    // console.log('the first head', node)
    if(!node){
      console.log('opps');
    }
      else if(node.data === val){
          // console.log('nodedata', node.data, 'val', val)
          node = new Node(newData, node)
          // console.log('inside else if', node)
          return;
      }
         while (node.next ) {
           if(node.next.data === val){
             let newVal = new Node(newData, node.next)
             console.log('after inst', newVal)
             node.next = newVal;
             console.log('inside while', newVal)
             return
           }
           node = node.next;

         }
    
    // return 'Exception';
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
let list1 = new LinkedList()
list1.insert(100);
list1.insert(200);
list1.insert(300);
list1.append(400)
list1.insert(500)
list1.insertBefore(500, 700)
console.log(list1.includes(150));
list1.toString();

module.exports = LinkedList;


