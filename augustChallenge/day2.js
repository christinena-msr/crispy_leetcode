/**
Problem Statement: 

    Design a HashSet without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    add(value): Insert a value into the HashSet. 
    contains(value) : Return whether the value exists in the HashSet or not.
    remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set = {};
};

/* 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set[key] ? this.set[key]++ : this.set[key] = 1;
};

/*
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(this.set[key]) {
        delete this.set[key];
    };
};

/*
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (this.set[key]) {
        return true;
    } 
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

/**
 * Results: 85.27% percentile
 * Thoughts: second submission with better contains method was much faster than the map technique I had before.
 * Other Stats: 
        Runtime: 180 ms
        Memory: 45.3 MB (feels like a lot of memory)
 * Thought Process:
    I initially used an array and a for loop. bad idea for multiple additions
    Used delete keyword learned from a HackerRank problem (progress!)
    The contains method with a direct lookup conditional instead of a map method really cut down the runtime.
    In hindsight that was a terrible idea especially for a hashset.
    But I learned that it's kind of hard to compare a key that is string value to an input of a key value that is a number.
    Object.keys(obj) returns an array of key values in the form of strings. 
 */