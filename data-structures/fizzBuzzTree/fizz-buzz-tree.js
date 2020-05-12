'use strict';

class Node {
  constructor (val){
    this.val = val,
    this.right = null;
    this.left = null;
  }
}

const fizzBuzzTree = (root) => {

  let string = '';

  if(root.val % 3 === 0 ){
    string += 'Fizz';
  }
  if(root.val % 5 === 0){
    string += 'Buzz';
  }
  
  let newRoot = new Node (string ? string : `${root.val}`);

  if (root.left)
    newRoot.left = fizzBuzzTree(root.left);
  if(root.right)
    newRoot.right = fizzBuzzTree(root.right)
  
  return newRoot;
};

module.exports = {fizzBuzzTree, Node};


