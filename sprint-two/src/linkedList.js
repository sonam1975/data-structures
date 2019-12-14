var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = {};

  list.addToTail = function(value) {
    // New node that needed to add to tail
    var nodes = Node(value);

    // If it is first node, assign nodes to head and tail
    if (this.head === null & this.tail === null) {
      this.head = nodes;
      this.tail = nodes;
    } else {
      //  Add nodes to the current node reference (next property) and add it to new tail
      this.tail.next = nodes;
      this.tail = nodes;
    }


  };

  list.removeHead = function() {
    var formerHead = this.head.value;
    this.head = this.head.next;
    return formerHead;

  };

  list.contains = function(target) {
    var value = this.head.value;
    var nextNode = this.head.next;
    if (value === target) {
      return true;
    }
    while (nextNode !== null) {
      value = nextNode.value;
      nextNode = nextNode.next;
      if (value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
