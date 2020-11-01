def arrs2Map(arr1, arr2):
    obj = {}
    if len(arr1) == len(arr2):
        for i in range(len(arr1)):
            obj[arr1[i]] = arr2[i]
        return obj
    return "The arrays don't have the same length"

print(arrs2Map(["abc", 3, "yo"], [42, "wassup", True]))


def invertHash(obj):
    newObj = {}
    for key in obj:
        newObj[obj[key]] = key
    return newObj

print(invertHash({ "name": "Zaphod", "numHeads": 2 }))


def reverseString(string):
    reversedString = ""
    for i in range(len(string)):
        # print(str[i])
        reversedString = string[i] + reversedString
    return reversedString

print(reverseString('creature'))