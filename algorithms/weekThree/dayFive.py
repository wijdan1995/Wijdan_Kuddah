# Book Index
# ------------------------------------------------------------------------
# Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges. Given [1, 3, 4, 5, 7, 8, 10], return the string "1, 3-5, 7-8, 10".

#string += i if i and i+1 == i+1 
def bookIndex(arr):
    indexes = ""
    for i in range(len(arr)-1):
        # print(i)        
        # print(arr[i] + 1)
        # print(arr[i+1])
        if arr[i] + 1 != arr[i+1]:
            indexes += str(arr[i]) +", " + str(arr[i+1])
        elif i == 0 :
            indexes += str(arr[i])
        elif i == len(arr)-2:
            indexes += str(arr[i+1])
        else:
            indexes += "-"
    return indexes


print(bookIndex([1, 3, 4, 5, 7, 8, 10]))



# Common Suffix
# ------------------------------------------------------------------------
# When given an array of words, returns the largest suffix (word-end) that is common between all words. For example, for input ["ovation", "notation", "action"], return "tion". Given ["nice", "ice", "sic"], return "".

# from the end will see if there are the same

# def commonSuffix(arr):
#     suffix = ""
#     shortestWord = arr[0]
#     for word in arr:
#         if len(word) < len(shortestWord):
#             shortestWord = word
#     print(shortestWord)
#     # for char in shortestWord:
#     #     if word 
# commonSuffix(["ovation", "notation", "action"])

# def longestCommonPrefix( strs):
#     if not strs: return ""
#     for i in range(len(strs[0])):
#         char = strs[0][i]
#         for j in range(1,len(strs)):
#             if i == len(strs[j]) or strs[j][i] != char:
#                 return strs[0][:i]
#     return strs[0]

# print(longestCommonPrefix(["tionova", "tionnota", "tionac"]))

