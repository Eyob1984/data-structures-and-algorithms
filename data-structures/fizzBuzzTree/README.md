# Binary Search TreeImplementation
The challenge was to create three classes, Node, Stack and Queue. 

#### Node Class properties:

val - The val stored in the Node
right - A pointer the indicate to right 
left - A pointer the indicate to left

#### BinaryTree Class properties

`preOrder()`

  * A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order.

`inOrder()`

  *A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order.

`postOrder()`

  *  A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order


#### Binary Search Tree Class properties

`add()`

  *A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree

`insertNode()`

  * A function that takes in a value as a parameter and then checks the value. If the value is greater it push it to left of the tree and if the value is lessthan it push it to right side of the tree.


`fizzBuzzTree()` which takes a tree as an argument. It determine whether or not the value of each node is divisible by 3, 5 or both. 

  * If the value is divisible by 3, replace the value with “Fizz”

  * If the value is divisible by 5, replace the value with “Buzz”

  * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
  
  * If the value is not divisible by 3 or 5, simply turn the number into a String.




    
## Links

* [PR link for lab-11]() *

    
    
## Testing
  `npm test stack and queues` or `jest --verbose --coverage`

## UML
![UML for lab-11]()