//a set is like an array with only unique items
//es6 has a built in Set class, but it does not contain all these methods we may require

class mySet {
    constructor (collection = []) {
        this.collection = collection;//holds the set
    }

    //checks for presence of element, returns t/f
    has = function(element) {
        return collection.indexOf(element) !== -1
    }

    //return all values in set
    values = function() {
        return collection
    }

    //adds element to the set
    add = function(element) {
        if (!this.has(element)) {
            collection.push(element)
            return true;
        }
        return false;
    }

    //removes element from a set
    remove = function(element) {
        if (this.has(element)) {
            i = collection.indexOf(element)
            collection.splice(i, 1)
        }
    }

    size = function() {
        return collection.length
    }

    //above methods are included in es6 Set class, except 'remove' is 'delete' and size is a property rather than a method (set.size vs set.size())

    //below methods help when working with two different sets

    //returns the union of two sets
    union = function(otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e)
        })
        secondSet.forEach(function(e) {
            unionSet.add(e)
        })
        return unionSet;
    }

    //returns the intersection of two sets as a new set
    intersection = function(otherSet) {
        const intersectionSet = new mySet();
        const firstSet = this.values();

        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e)
            }
        })
        return intersectionSet;
    }

    //returns the difference of two sets as a new set
    difference = function(otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values();

        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    subset = function(otherSet) {
        const firstSet = this.values();

        return firstSet.every(function(value){ //do all the elements pass the test in the provided function?
            return otherSet.has(value)
        })
    }
}

const setA = new mySet()
const setB = new mySet()
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log(setA.subset(setB)) //is set a a subset of set b? //true
console.log(setA.intersection(setB).values()) //['a']
console.log(setA.difference(setB).values()) //['b', 'c', 'd']