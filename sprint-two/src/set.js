var Set = function() {
  var set = Object.create(setPrototype); //{_storage : null}
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = 1;
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item] === undefined) {
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
