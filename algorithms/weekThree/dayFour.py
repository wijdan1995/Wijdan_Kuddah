# Is Palindrome
# --------------------------------------------------------------------------------
# Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back. Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
def isPalindrome(string):
    start = 0
    end = len(string) - 1
    while start < end :
        if string[start] != string[end]:
            return False
        else:
            start += 1
            end -= 1
    return True
print(isPalindrome("racecar"))
print(isPalindrome("a x a"))
print(isPalindrome("Dud"))


# Longest Palindrome
# --------------------------------------------------------------------------------
# For this challenge, we will look not only at the entire string, but also substrings within it. For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much", return "n". Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): given "My favorite racecar erupted!", return "e racecar e". 
def longestPalindrome(string):
    result = ''

    for i in range(len(string)):
        for j in range(0, i):
            print(i,j)
            substring = string[j:i + 1]
            print(substring , substring[::-1])
            # if the substring == the reversed substring
            if substring == substring[::-1]:
                print("---here---"*20)
                if len(substring) > len(result):
                    result = substring
    if result:       
        return result
    else:
        return False
print(longestPalindrome("My favorite racecar erupted!"))