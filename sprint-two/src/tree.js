var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];// fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value)); //[1,2,3]
};

treeMethods.contains = function(target) {
  var result = false;
  var helper = function(obj) {
    if (obj.value === target) {
      result = true;
    }
    var childs = obj.children;
    for (var i = 0; i < childs.length; i++) {
      helper(childs[i]);
    }
  };
  helper(this);
  return result;
};

var t = new Tree(1);
t.addChild(5);
console.log(t.contains(5));



/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

*/