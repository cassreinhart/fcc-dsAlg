//stacks are like stacks of books- it is last in, first out method
//in other words, the book that is placed most recently atop the stack will be the first one taken off
// you can use an array as a stack

const reverseWord = (word) => {
    let letters = [];
    let rword = "";
    
    //put letters of word into stack
    for (let i = 0; i < word.length - 1; i++) {
        letters.push(word[i])
    }

    //pop off the stack in reverse order
    for (let i = 0; i < word.length - 1; i++) {
        rword += letters.pop();
    }

    return word === rword ? `${word} is a palindrome.` : `${word} is not a palindrome.`
}


reverseWord('racecar') //racecar is a palindrome.
reverseWord('freeCodeCamp') //freeCodeCamp is not a palindrome.


//create a stack
class Stack {
    constructor(count = 0, storage = {}) {
        this.count = count; //items in a stack
        this.storage = storage;
    }
    

    //adds a value onto the end of the stack
    push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    pop = function() {
        if (this.count === 0) return undefined

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }

    size = function(){
        return this.count;
    }

    //returns the value at the end of the stack
    peek = function(){
        return this.storage[this.count-1]
    }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())