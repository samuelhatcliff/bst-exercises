class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
    }
    let current = this.root
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      }
      if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    const tree = this;
    function insertHelper(current) {
      if (val <= current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return tree;
        } else {
          return insertHelper(current)
        }
      }
      if (val >= current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return tree;
        }
        else {
          return insertHelper(current.right)
        }
      }
    }
    const value = insertHelper(current)
    return value;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let current = this.root
    while (true) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined
        }
      }
      else if (val > current.val) {
        if (current.right) {
          current = current.right
        } else {
          return undefined
        }
      } else if (val === current.val) {
        return current
      } else {
        return undefined
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    let current = this.root
    function findHelper(current) {
      if (!current) return undefined;
      if (val < current.val) return findHelper(current.left);
      if (val > current.val) return findHelper(current.right);
      return current
    }
    return findHelper(current)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.val)
      if (node.right) {
        traverse(node.right);
      }
    }
    if (this.root) {
      traverse(this.root)
    }
    return data
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val)
    }
    if (this.root) {
      traverse(this.root)
    }
    return data
  }



  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}



const root = new Node(6)
const A = new Node(1)
const B = new Node(2)
const C = new Node(3)
const D = new Node(4)
const E = new Node(5)
const G = new Node(7)
const H = new Node(8)
const I = new Node(9)
const J = new Node(10)
const K = new Node(11)
const M = new Node(13)

root.left = C;
root.right = K;
C.left = B;
C.right = E;
K.left = I;
K.right = M;
B.left = A;
E.left = D;
I.left = H;
H.left = G;
I.right = J;

const numberTree = new BinarySearchTree(root)
console.log(numberTree.dfsPostOrder())

module.exports = BinarySearchTree;
