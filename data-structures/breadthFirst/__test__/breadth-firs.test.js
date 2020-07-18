const Graph = require('../breadth-first.js')

describe('our graph works?', () => {
    it('can add a node to the graph and can give me all the nodes', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        let nodes = graph.getNodes();

        expect(nodes.length).toBe(4);
        expect(nodes).toEqual(['A', 'B', 'C', 'D']);
    });
    it('return a collection of nodes in the order they were visited.', () => {

        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        let breadth = graph.breadthFirst();

        expect(breadth).toBe(['A', 'B', 'C', 'D'])

    })
    
});