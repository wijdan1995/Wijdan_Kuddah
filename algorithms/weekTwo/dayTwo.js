// Second-Largest
// -------------------------------------------------------
// Return the second-largest element of an array
secondLargest = (arr) => {
    let ordered
    if(arr.length < 2){
        return null
    } else {
        ordered = arr.sort((a, b) => a - b)
    }
    return ordered[arr.length - 2]

}
// console.log(secondLargest([2,5,4,6,7,9,10]))

// Nth-Largest
// -------------------------------------------------------
// Given an array, return the Nth-largest element:
// there should be (N - 1) elements that are larger.
nthLargest = (arr, nth) => {
    let ordered
    if(arr.length < nth){
        return null
    } else {
        ordered = arr.sort((a, b) => a - b)
    }
    return ordered[arr.length - nth]

}
// console.log(nthLargest([6,2,1,5,4,3],3))

// Shuffle
// -------------------------------------------------------
// Recreate the shuffle()built into JavaScript, to
// efficiently shuffle a given array’s values. Do you
// need to return anything from your function?
shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //get random index from my array and swap between them 
        // Math.floor(Math.random() * (max - min + 1)) + min;
        const randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
        // console.log("randomIndex: " +randomIndex)
        // console.log("i: " + i)
        // console.log(arr)

    }
    console.log(arr)
}
shuffle([1,2,3,4,5,6])

