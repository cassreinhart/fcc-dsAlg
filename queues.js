// a queue is like a line of people, the first to go in is the first to come out

class Queue {
    constructor(collection = []) {
        this.collection = collection
    }

    print = function () {
        console.log(collection)
    }

    enqueue = function(element) {
        collection.push(element)
    }

    dequeue = function() {
        return collection.shift() //removes first element
    }

    front = function () {
        return collection[0]
    }

    size = function(){
        return collection.length
    }
    isEmpty = function() {
        return (collection.length === 0)
    }
}

const q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print() //['a', 'b', 'c']
q.dequeue()
console.log(q.front())//'b'
q.print()//['b', 'c']

//priority queue
//elements with a higher priority are sent to the front of the queue
class PriorityQueue {
    constructor(collection = []) {
        this.collection = collection;
    }

    print = function () {
        console.log(collection)
    }

    enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //check priority
                    collection.splice(i, 0, element)
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
        
    }

    dequeue = function() {
        const value = collection.shift() //removes first element
        return value[0]
    }

    front = function () {
        return collection[0]
    }

    size = function(){
        return collection.length
    }
    isEmpty = function() {
        return (collection.length === 0)
    }
}

const pq = new PriorityQueue()
pq.enqueue(['Beau Carnes', 2])
pq.enqueue(['Quincy Larson', 3])
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.print(); //[['Ewa Mitulska-Wójcik', 1], ['Beau Carnes', 2], ['Briana Swift', 2], ['Quincy Larson', 3]]
pq.dequeue()
pq.front()
pq.print()//[['Beau Carnes', 2], ['Briana Swift', 2], ['Quincy Larson', 3]]