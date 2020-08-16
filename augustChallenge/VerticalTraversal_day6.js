class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insertArray(arr) {
        let n = arr.length;
        this.root = insert(arr, root, 0, n);
    }

    verticalTraversal() {
        // find left bound 
        let current = this.root;
        const leftBound = findLeftBound(this.root);
        console.log(leftBound);
        const depth = findDepth(this.root, 0);
        console.log(depth);
        const result = [];
        const traverse = function(node, x, y) {
            if (result[x - leftBound]) {
                result[x - leftBound].push(node.value);
            } else {
                result[x-leftBound] = [node.value];
            }
            if (node.left !== null) {
                traverse(node.left, x - 1, y - 1);
            }
            if (node.right !== null) {
                traverse(node.right, x + 1, y + 1);
            }
        }
        traverse(current, 0, 0);
        return result;
    }
}

const insert = function(arr, node, i , n) {
    if ( i < n) {
        if (arr[i] !== null) {
            let temp = new TreeNode(arr[i]);
            node = temp;
            node.left = insert(arr, node.left, 2 * i + 1, n);
            node.right = insert(arr, node.right, 2 * i + 2, n);
        }
    }
    return node;
}

const findLeftBound = function(node) {
    let bound = 0;
    if (!node) {
        return 0;
    }
    while(node.left) {
        if (node.left !== null) bound--;
        node = node.left;
    }
    return bound;
}

const findDepth = function(node, depth) {
    // 
    let currentDepth = depth;
    if (!node) {
        return currentDepth;
    }
    currentDepth--;
    console.log(currentDepth);
    return findDepth(node.left, currentDepth) + findDepth(node.right, currentDepth);
}

const tree = new Tree();
tree.insertArray([3,9,20,null,null,15,7]);
console.log(tree);
console.log(tree.verticalTraversal());