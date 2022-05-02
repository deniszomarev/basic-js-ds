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

  find(data) {
    return findNode(data, this.tree);
    function findNode(data, node) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      if (node.data > data) {
        return findNode(data, node.left);
      } else {
        return findNode(data, node.right);
      }
    }
  }

  remove(data) {
    return removeData(data, this.tree);
    function removeData(data, node) {
      // if (!node) {
      //   return;
      // }
      // if (node.data == data) {
      //   node = null;
      //   return;
      // }
      // if (node.data > data) {
      //   return removeData(data, node);
      // } else {
      //   return removeData(data, node);
      // }
    }
  }

  min() {
    return findMin(this.tree);
    function findMin(node) {
      if (node.left) {
        return findMin(node.left);
      } else {
        return node.data;
      }
    }
  }

  max() {
    return findMax(this.tree);
    function findMax(node) {
      if (node.right) {
        return findMax(node.right);
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
