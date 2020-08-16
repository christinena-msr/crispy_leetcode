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

    pathSum(sum) {
        let current = this.root;
        // return the sum of the line
        const getSum = function(node, currentSum) {
            // line sum is not equal to sum, is leaf
            if (node === null) {
                return 0;
            }
            let currentVal = currentSum + node.value; 
            let isSum = currentVal === sum ? 1 : 0;
            return isSum + getSum(node.left, currentVal) + getSum(node.right, currentVal);
        }
        const traverseTree = function(node) {
            if(!node) {
                return 0;
            } 
            return getSum(node, 0) + traverseTree(node.left) + traverseTree(node.right);
        }
        return traverseTree(current);
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