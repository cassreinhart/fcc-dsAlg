//a tree is a data structure that when visualized, looks like a tree in nature
// all data points are called nodes
//the top of the tree is called a root node, which branches out into additional nodes
//leaf nodes do not have children
//parents are roots for their own subtree

//binary trees can have 0-2 branches for every node 
//and are ordered: each subtree is <= the parent node and each right subtree is >= the parent node
//this allows us to make much faster searches by eliminating have of all nodes with each traversal
//a binary search tree is 

//this class represents each node
class Node {
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node){ //recursive function
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left); //continue searching (where recursion comes in)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return
                    } else {
                        return searchTree(node.right)
                    }
                } else {
                    return null; //data must be equal
                }
            };
            return searchTree(node)
        }
    }
    findMin() {
        let current = this.root; //start at root

        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }
    findMax() {
        let current = this.root;

        while(current.right !== null) {
            current = current.right;
        }
        return current.data
    }
    find (data) {
        let current = this.root;

        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            if(data === null) {
                return null
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;

        while(current) {
            if (data === current.data) {
                return true
            }
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            // current = data < current.data ? current.left : current.right
        }
        return false;
    }
    remove (data) {
        const removeNode = function (node, data) { //pass in node to start at and the data we are trying to remove
            if (node === null) { //is the tree empty?
                return null
            }
            if (data == node.data) { //if we found the data in the tree we have options
                //node has no children
                if (node.left === null && node.right === null) {
                    return null
                }
                //node has no left child
                if (node.left === null) {
                    return node.right
                }
                //node has no right child
                if (node.right === null) {
                    return node.left
                }
                //node has two children, we need to find the new node to make the tree balanced
                let tempNode = node.right; //first go to right subnode
                while(tempNode.left !== null) { //then find the leftmost subnode
                    tempNode = tempNode.left
                }
                node.data = tempNode.data; //set the leftmost subnode to replace the node which had two children
                node.right = removeNode(node.right, tempNode.data) // set the node to the right of the node to be whatever is returned from the function
                return node;
            } else if (data < node.data) { //continue searching in the left subtree
                node.left = removeNode(node.left, data)
                return node
            } else { //continue searching in the right subtree
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data) //assign root to whatever is returned from the function here
        //we pass in the root node, because you always start at the root and the data we are hoping to remove
    }
}

const bst = new BST();


bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(4)
console.log(bst.findMin()) //1
console.log(bst.findMax()) //7
bst.remove(7)
console.log(bst.findMax()) //6
console.log(bst.isPresent(4)) //false