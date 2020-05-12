'use strict';

const fizzBuzz = require('../fizz-buzz-tree.js')
const Node = fizzBuzz.Node;
const fizzBuzzFunction = fizzBuzz.fizzBuzzTree;

describe('Happy cases', () => {
  it('can successfully instantiate an empty tree', () => {
      let tree = new Node()
      expect(tree).toBeDefined(); 
    expect(tree.root).tobe(null)
  })
})