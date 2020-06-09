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

OddBinary(root = this.root){
let arr = [];
let arr1 = [];
let arr2 = [];
if(!root){
  return 0;
}
if(root % 2 !== 0){
  arr.push(root.val);
  console.log('arr', arr)
}
else{
  return false;
}

if(root.left){
arr1.push(this.OddBinary(root.left))
console.log('arr1-left', arr1)
}
if(root.right){
arr2 = this.OddBinary(root.right)
console.log('arr2-right', arr2)
}

arr = [...arr, ...arr1, ...arr2];
console.log('arrODD', arr)

}

}
module.exports = {Node, BinaryTree, BinarySearchTree }