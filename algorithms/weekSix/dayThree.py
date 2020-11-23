# Binary String Expansion
# ---------------------------------------------------------------------------------
# You will be given a string containing characters ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ characters can be substituted. Write a recursive function that returns an array of all valid strings that have ‘?’ characters expanded into ‘0’ or ‘1’.
# Ex.: binStrExpand("1?0?") should return ["1000","1001","1100","1101"]. For this challenge, you can use string functions such as slice(), etc., but be frugal with their use, as they are expensive.
import random
def binStrExpand(input_str, temp_str = '', index = 0, return_list = []):
    print(input_str.find('?'))
    if input_str.find('?') != -1:
        index = input_str.find('?')
        temp_str = input_str
        listTemp = list(temp_str)
        listTemp[index] = random.choice(['0','1'])
        temp_str = "".join(listTemp)
        if temp_str.find('?') != -1:
            return binStrExpand(temp_str)
        return_list.append(temp_str)
        print(return_list)

binStrExpand('?1010?0??')
# ['0101010],[1101010]