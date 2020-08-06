#  * Problem Statement: Design a data structure that supports the following two operations: 
#  *  void addWord(word)
#  *  bool search(word)
#  * search(word) can search a literal word or a regular expression string containing only letters a-z or .
#  *  . means it can represent any one letter
#  * 
#  * Hint: know how to implement a Trie.

# danyyoo0315 submission
import re
from collections import defaultdict
class WordDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dictionary = defaultdict(list)

    def addWord(self, word: str) -> None:
        """
        Adds a word into the data structure.
        """
        self.dictionary[len(word)].append(word)

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
        """
        if '.' in word:
            pattern = "^"
            pattern = pattern + word.replace('.', '[a-z]') + "$"
            finder = re.compile(pattern)
            for k in self.dictionary[len(word)]:
                if finder.match(k) != None:
                    return True
            return False
            
        else:
            return word in self.dictionary[len(word)]

# Results: 96.85%
# Runtime: 148 ms
# Memory Usage: 21.2 MB