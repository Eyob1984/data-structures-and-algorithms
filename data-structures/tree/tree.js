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

    arr.push(root.val);//10

    if(root.left){//12
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

    
    if(root.left){
      leftArr = this.inOrder(root.left)
     
    }
    arr.push(root.val);

    if(root.right){
      rightArr = this.inOrder(root.right)
    }
    arr = [...leftArr, ...arr, ...rightArr];
    return arr;
  }

  postOrder(root = this.root){
  
    if(!this.root) return;

    let arr = [];
    let leftArr = [];
    let rightArr =[];

    
    if(root.left){
      leftArr = this.postOrder(root.left)
    }
    
    if(root.right){
      rightArr = this.postOrder(root.right);
    }
    arr.push(root.val);
    arr = [...leftArr, ...rightArr, ...arr];
     return arr;
  }


 findMaximumValue(root = this.root){
  
    if(!this.root) return;

    let arr = [];
    let leftArr = [];
    let rightArr =[];

    arr.push(root.val);//10

    if(root.left){//12
      leftArr = this.preOrder(root.left)
    }

    if(root.right){
      rightArr = this.preOrder(root.right);
    }
    arr = [...arr, ...leftArr, ...rightArr];
    
    let holder = 0;
    for(let i = 0; i<arr.length; i++){
     
      if(holder <= arr[i]){
      holder = arr[i];
    }

    }
    return holder;
 
  }

}

class BinarySearchTree extends BinaryTree {
  constructor(){
    super();

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

contains(val) {
  let currentNode = this.root;

  while (currentNode) {
      if (currentNode.val > val) currentNode = currentNode.left;
      else if (currentNode.val < val) currentNode = currentNode.right;
      else if (currentNode.val === val) return true;
  }

  return false;
}
}
module.exports = {Node, BinaryTree, BinarySearchTree }