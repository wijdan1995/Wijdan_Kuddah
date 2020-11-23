# stringAnagrams
# ----------------------------------------------------------------------------------------------------
# Given a string, return an array where each element is a string representing a different anagram (a different sequence of the letters in that string). Example: if given "tar", return ["art", "atr", "rat", "rta", "tar", "tra"]. For this challenge, you can use built-in string functions such as split().

def stringAnagrams(string_input, temp="", result=None):
    if result is None:
        result = []
    for letter in string_input:
        print("letter",letter, "string after",string_input.replace(letter, ""),"tmp",temp)
        stringAnagrams(string_input.replace(letter, ""), temp + letter, result)
    if not string_input:
        result.append(temp)
    return result
print(stringAnagrams("tar"))