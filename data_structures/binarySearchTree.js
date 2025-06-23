class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        //create a new node, so we can insert it into the tree
        const newNode = new Node(val);

        //in the case that there is no root node
        if(!this.root){
            this.root = newNode;
            return this;
        }
        else {
            //start traversing the tree at root
            let current = this.root;
            while(true){
                if(val >current.val )
            }
        }
    }
}
