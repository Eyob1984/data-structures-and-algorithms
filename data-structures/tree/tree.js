'use strict';

class Node {
  constructor (val){
    this.val = val,
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder(){

  }

  inOrder(node){
    this.inOrder(node.left);
    console.log('inorder', node.data);
    this.inOrder(node.right);
  }

  postOrder(){}
}

class BinarySearchTree {
  constructor(){
    this.root = null;

  }

  add(val){
    let newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
    }
    else{
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode){

    if(newNode.val < node.val){

      if(node.left === null){
      node.left = newNode;
      }
      else{
        this.insertNode(node.left, newNode);
      }
    }
    else{
      if(node.right === null){
        node.right = newNode;
        }
        else{
          this.insertNode(node.right, newNode);
        }

    }
  }



  contains(val){
    let newNode = new Node(val);
    if(newNode.val === null){
      return false;
    }else{
      return true;
    }
  }
}

let list1 = new BinarySearchTree();
list1.add(50);
list1.add(40);
list1.add(60);
list1.add(65);
list1.add(35)
list1.contains()

console.log('Booleon', list1.contains())
console.log('list', list1)

module.exports = {Node, BinaryTree, BinarySearchTree }