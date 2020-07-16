# Graph Implementation
The graph represent as an adjacency list, and includes the following methods:



#### Node Class properties:

val - The val stored in the Node
next - A pointer the next Node in the list

#### Graph Class properties

`addNode()`

  * Adds a new node to the graph

  * Takes in the value of that node

  * Returns the added node

`addEdge()`

  * Adds a new edge between two nodes in the graph

  * Include the ability to have a “weight”

  * Takes in the two nodes to be connected by the edge

    *Both nodes should already be in the Graph

`getNode()`

  * Returns all of the nodes in the graph as a collection (set, list, or similar)

`getNeighbors()`

  * Returns a collection of edges connected to the given node

  * Takes in a given node

  * Include the weight of the connection in the returned collection 

`size()`

  * Returns the total number of nodes in the graph

    
## Links

* [PR link for lab-30]() *

    
    
## Testing
  `npm test stack and queues` or `jest --verbose --coverage`

## UML
![UML for lab-30]()