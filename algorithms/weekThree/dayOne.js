// Arrs2Map
// ----------------------------------------------------------------------------------------------------------------
// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc":
// 42, 3: "wassup", "yo": true}.
arrs2Map = (arr1, arr2) => {
    let obj = {}
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
    return "The arrays don't have the same length"
}
console.log(arrs2Map(["abc", 3, "yo"], [42, "wassup", true]))


// InvertHash
// ----------------------------------------------------------------------------------------------------------------
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
// Example: given {"name": "Zaphod"; "numHeads": 2}, return {"Zaphod": "name"; 2:
// "numHeads"}. You will need to learn and use a JavaScript for ... in h ere!
invertHash = (object) => {
    let newObj = {}
    for (let key in object) {
        // console.log(key)
        // console.log(object[key])
        newObj[object[key]] = key
    }
    return newObj

}
console.log(invertHash({ "name": "Zaphod", "numHeads": 2 }))


// ReverseString
// ----------------------------------------------------------------------------------------------------------------
// Implement a function reverseString(str) that, given a string, will return the string of the same length but
// with characters reversed. Example: given "creature", return "erutaerc". Do not use the built-in
// reverse() function! 

reverseString = (str) => {
    let reversedString = ''

    // // starting from the end
    // for (let i = str.length - 1 ; i >= 0 ; i--) {
    //     // console.log(str[i])
    //     reversedString += str[i]
    // }
    // return reversedString

    // starting from 0
    for (let i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString
    }
    return reversedString
}
console.log(reverseString('creature'))