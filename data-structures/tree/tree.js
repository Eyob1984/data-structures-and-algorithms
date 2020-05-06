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

  preOrder(root = this.root){
  
    if(!this.root) return;

    let arr = [];
    let leftArr = [];
    let rightArr =[];

    arr.push(root.val);

    if(root.left){
      leftArr = this.preOrder(root.left)
    }

    if(root.right){
      rightArr = this.preOrder(root.right);
    }
    arr = [...arr, ...leftArr, ...rightArr];
    return arr;
  }

  inOrder(root = this.root){
  
    if(!this.root) return;

    let arr = [];
    let leftArr = [];
    let rightArr =[];

    arr.push(root.val);

    if(root.left){
      leftArr = this.preOrder(root.left)
    }

    if(root.right){
      rightArr = this.preOrder(root.right);
    }
    arr = [...leftArr, ...arr, ...rightArr];
    console.log(arr)
    return arr;
  }

  postOrder(root = this.root){
  
    if(!this.root) return;

    let arr = [];
    let leftArr = [];
    let rightArr =[];

    arr.push(root.val);

    if(root.left){
      leftArr = this.preOrder(root.left)
    }

    if(root.right){
      rightArr = this.preOrder(root.right);
    }
    arr = [...leftArr, ...rightArr, ...arr];
    return arr;
  }
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
    if(newNode.val !== val )
    
    elseif (newNode.val !== val)

    else (newNode.val === val)
      return true;
    
  }
}

module.exports = {Node, BinaryTree, BinarySearchTree }