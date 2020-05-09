'use strict'

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

fizzBuzzTree(root = this.root){
  
  if (root.val % 2 === 0){
    root.val = 'fizz';
    console.log('%', this.root.val)
  }
}
}


let list1 = new BinarySearchTree()
list1.add(100);
list1.add(200);
list1.add(300);
list1.add(400);



console.log(list1)
console.log('magicHenok', list1.fizzBuzzTree())