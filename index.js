const { BinarySearchTree } = require("./data-structures/BinarySearchTree");
const { traverse } = require("./utils");

/**
 * GIVEN THE FOLLOWING BINARY SEARCH TREE
 *           9
 *      4          20
 *   1     6    15    170
 *
 */

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

const bfsSearch = tree.breathFirstSearch();
const [dfsInOrder, dfsPreOrder, dfsPostOrder] = [
  // 1, 4, 6, 9, 15, 20, 170
  tree.DFSInOrder(),
  // 9, 4, 1, 6, 20, 15, 170
  tree.DFSPreOrder(),
  // 1, 6, 4, 15, 170, 20, 9
  tree.DFSPostOrder(),
];

console.log("BFS Search", bfsSearch);
console.log("DFS InOrder", dfsInOrder);
console.log("DFS PreOrder", dfsPreOrder);
console.log("DFS PostOrder", dfsPostOrder);
