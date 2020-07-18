class Node {
  constructor(val) {
      this.val = val;
      this.connections = [];
      this.root = null;
  }
}

class Graph {
  constructor() {}

  addNode(val) {
      if (!this.nodes) this.nodes = [];

      let node = new Node(val);
      this.nodes.push(node);
  }
  getNodes() {
    let vals = [];

    for (let i = 0; i < this.nodes.length; i++) {
        vals.push(this.nodes[i].val);
    }

    return vals.length ? vals : null;
  }

  breadthFirst(data){
    let collection = [this.root]

    while(collection.length){
      let node = collection.shift()

      if(node === data ){
        return node;
      } else{
        collection.push(...node.nodes)
      }
    }
    return false;
  }
  

}

module.exports = Graph;