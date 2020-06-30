const TreeNode = require('../breadth.js').TreeNode;
const BinaryTree = require('../breadth.js').BinaryTree;

describe('happy path', () => {
    it('prints out a good sized tree', () => {
        let tree = new BinaryTree();

        tree.root = new TreeNode('15');
        tree.root.left = new TreeNode('21');
        tree.root.right = new TreeNode('9');
        tree.root.left.left = new TreeNode('20');
        tree.root.left.right = new TreeNode('10');
        tree.root.right.left = new TreeNode('8');
        tree.root.right.right = new TreeNode('3')

        expect(tree.breadthFirst()).toEqual(['15', '21', '9', '20', '10', '8', '3']);
    });
});