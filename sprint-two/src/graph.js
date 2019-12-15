

// Instantiate a new graph
var Graph = function() {
  //this = Object.create(Graph.prototype) = {};
  this.storage = {};

  //return this
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (this.storage[key] !== undefined) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deleteConnectionKeys = Object.keys(this.storage[node]);
  delete this.storage[node];
  for (var i = 0; i < deleteConnectionKeys.length; i++) {
    var key = deleteConnectionKeys[i];
    delete this.storage[key][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode][toNode] === fromNode && this.storage[toNode][fromNode] === toNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = fromNode;
  this.storage[toNode][fromNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.storage[fromNode][toNode] === fromNode) {
    delete this.storage[fromNode][toNode];

  }
  if (this.storage[toNode][fromNode] === toNode) {
    delete this.storage[toNode][fromNode];
  }
};




// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.storage);
  for (var i = 0; i < nodes.length; i++) {
    cb(parseInt(nodes[i]));
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


