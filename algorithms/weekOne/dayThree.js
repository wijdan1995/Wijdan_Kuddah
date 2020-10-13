// Reverse Array
// -----------------------------------------------------
// Given a numerical array, reverse the order of the
// values. The reversed array should have the same
// length, with existing elements moved to other
// indices so that the order of elements is reversed.
// [1,2,3,4,5] -> [5,4,3,2,1]
reverseArray = (arr) => {
    let reversedArr = []
    for(let i = arr.length - 1; i >= 0; --i){
        reversedArr.push(arr[i])
    }
    return reversedArr
}

// console.log(reverseArray([1,2,3,4,5]))

// Remove Negatives
// -----------------------------------------------------
// Implement a function removeNegatives() that
// accepts an array and removes any values that
// are less than zero.
// Second-level challenge: don’t use nested loops.
// [5,-2,4,-2,-2] -> [5,4]
removeNegatives = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] >= 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(removeNegatives([5,-2,4,-2,-2,0]))

// Skyline Heights
// -----------------------------------------------------
// You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
// represent three buildings: first is actually below street level, second is seven stories high, and third is
// three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
// array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7].
// any positive number greater than any number later
skylineHeights = (arr) => {
    let newArr = []
    let i = 0
    while(newArr[0] === undefined){
        if(arr[i] > 0 ){
            newArr.push(arr[i])
        }
        ++i
    }
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] > newArr[newArr.length - 1]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(skylineHeights([1,-1,7,3,4,9,5,10,8]))