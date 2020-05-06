'use strict';


const trees = require('../tree.js');
const Node = trees.Node;
const BT = trees.BinaryTree;
const BST = trees.BinarySearchTree;

describe('Binary Tree tests', () => {
    it('can successfully instantiate an empty tree', () => {
        let tree = new BT();

        expect(tree).toBeDefined();
        expect(tree.root).toBe(null);
    });

    it('can successfully instantiate a tree and add a root node', () => {
        let tree = new BT();
        let newNode = new Node(100);
        tree.root = newNode;

        expect(tree).toBeDefined();
        expect(tree.root).toBeDefined();
        expect(tree.root.val).toBe(100);
    });

    it('can successfully add a left and right child to the root', () => {
        let tree = new BT();
        let newNode = new Node(100);
        tree.root = newNode;

        let leftChild = new Node(200);
        let rightChild = new Node(300);

        tree.root.left = leftChild;
        tree.root.right = rightChild;

        expect(tree).toBeDefined();
        expect(tree.root).toBeDefined();
        expect(tree.root.val).toBe(100);

        expect(tree.root.left).toBeDefined();
        expect(tree.root.left.val).toBe(200);

        expect(tree.root.right).toBeDefined();
        expect(tree.root.right.val).toBe(300);
    });

    it('can successfully do a preOrder traversal', () => {
        let tree = new BT();

        tree.root = new Node('A');
        tree.root.left = new Node('B');
        tree.root.left.left = new Node('D');
        tree.root.left.right = new Node('E');
        tree.root.right = new Node('C');
        tree.root.right.right = new Node('F');

        let traversalResults = tree.preOrder();
        expect(traversalResults).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });

    it('can successfully do a inOrder traversal', () => {
        let tree = new BT();

        tree.root = new Node('A');
        tree.root.left = new Node('B');
        tree.root.left.left = new Node('D');
        tree.root.left.right = new Node('E');
        tree.root.right = new Node('C');
        tree.root.right.right = new Node('F');


        let traversalResults = tree.inOrder();
        expect(traversalResults).toEqual(['D', 'B', 'E', 'A', 'C', 'F']);
    });

    it('can successfully do a postOrder traversal', () => {
        let tree = new BT();

        tree.root = new Node('A');
        tree.root.left = new Node('B');
        tree.root.left.left = new Node('D');
        tree.root.left.right = new Node('E');
        tree.root.right = new Node('C');
        tree.root.right.right = new Node('F');
 

        let traversalResults = tree.postOrder();
        expect(traversalResults).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
    });
});

describe('Binary Search Tree tests', () => {
    it('can correctly add a node to the tree', () => {
        let tree = new BST();

        tree.root = new Node(15);
        tree.root.left = new Node(8);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(12);
        tree.root.right = new Node(20);
        tree.root.right.right = new Node(22);


        tree.add(6);
        tree.add(14);
        tree.add(19);
        tree.add(16);

        let traversalResults = tree.preOrder();
        expect(traversalResults).toEqual([15, 8, 4, 6, 12, 14, 20, 19, 16, 22]);
    });

    it('can correctly return true/false if BST contains value', () => {
        let tree = new BST();

        tree.root = new Node(15);
        tree.root.left = new Node(8);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(12);
        tree.root.right = new Node(20);
        tree.root.right.right = new Node(22);


        expect(tree.contains(4)).toBe(true);
        expect(tree.contains(17)).toBe(false);
    });
});

