/**
 * Problem Statement: Design a data structure that supports the following two operations: 
 *  void addWord(word)
 *  bool search(word)
 * search(word) can search a literal word or a regular expression string containing only letters a-z or .
 *  . means it can represent any one letter
 * 
 * Hint: know how to implement a Trie.
 */


/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = { hasChild: false, children: {} };
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let pointer = this.root;
    for (const letter of word) {
        if (!(letter in pointer.children)) {
            pointer[hasChild] = true;
            word.indexOf(letter) < word.length - 1 ? 
                pointer[letter] = { hasChild: true, children: {} } 
                : 
                pointer[letter] = { hasChild: false, children: {} }
        }
        pointer = pointer[letter].children;
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let pointer = this.root;
    // wild card at beginning
    for (const letter of word) {
        if (letter === ".") {
            // pointer = this.root;
            if (!pointer.hasChild) {
                return false;
            }
            const wild = word.indexOf(letter);
            let sub = word.substring(word.indexOf(letter) + 1, word.length);
        }
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */



// attempt: does not work
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = {};
    this.end = false;
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    len = word.length;
    if (!(len in this.root)) {
        this.root[len] = [];
    }
    this.root[len].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    len = word.length;
    if (!(len in this.root)) {
        return false;
    }
    const options = this.root[len]
    // array of all words with len
    for (let i = 0; i < options.length; i++) {
        let current = this.options[i];
        let isPresent = true;
        for (let j = 0; j < current.length; j++) {
            if (current[j] == word[j] || word[j] == ".") {
                continue
            }  else {
                isPresent = false; 
                break;
            }   
        }
        if (isPresent) {
            return true;
        }
    }
    return isPresent;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */