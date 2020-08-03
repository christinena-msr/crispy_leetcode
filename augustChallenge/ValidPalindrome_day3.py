# Problem Statement
# Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

# let's reflect on why this is wrong
import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # no problem here, but maybe will include other characters that are not alphanumeric
        pattern = re.compile('\W+')
        # str is not the variable name!! hello!! haha 
        # if you had changed it to s it would have been FINE haha
        newStr = re.sub(pattern, '', str)
        
        # this makes sense syntactically but too many lines
        # single return line!!
        if newStr == newStr[::-1]:
            bool = True
        else:
            bool = False


# really good memory solution:
class Solution:
    def isPalindrome(self, s: str) -> bool:
        n = len(s)
        left, right = 0, n - 1
        
        while left < right:
            while left < right and not s[left].isdigit() and not s[left].isalpha():
                left += 1
            
            while left < right and not s[right].isdigit() and not s[right].isalpha():
                right -= 1
                
            if s[left].lower() != s[right].lower():
                return False
            
            left += 1
            right -= 1
            
        return True

# the "best" memory solution
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # looping forward in string
        l = 0
        # looping backward in string
        r = len(s) - 1

        while l < r:
            # if s[l] is not a letter or number
            if not s[l].isalnum():
                # increment and skip checking r
                l += 1
                continue
            # if s[r] is not a letter or number
            if not s[r].isalnum():
                # decrement and move on to next letter
                r -= 1
                continue
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True
    
# good runtime solution:
import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        s = "".join(re.findall("[a-zA-Z0-9]", s)).lower()
        return s == s[::-1]

# this is what i was going for but couldn't code 
import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = re.sub('[^a-zA-Z0-9]', '', s).lower()
        return new_s  ==  new_s[::-1]

# Results: 97.14% --> but similar to a submission that was at ~99% 
# fast run time, but high memory
# based on the mistake I was stuck on, str is a type not the variable name
# I need to learn better regex
