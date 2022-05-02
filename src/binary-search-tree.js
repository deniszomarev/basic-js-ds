const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
    } else {
      checker(data, this.tree);
      function checker(data, node) {
        if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
          } else {
            checker(data, node.right);
          }
        }
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
          } else {
            checker(data, node.left);
          }
        }
      }
    }
  }

  has(data) {
    return hasData(data, this.tree);
    function hasData(data, node) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      if (node.data > data) {
        return hasData(data, node.left);
      } else {
        return hasData(data, node.right);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
