// Rotate Array
// -----------------------------------------------------
// Implement rotateArr(arr, shiftBy) that
// accepts array and offset. Shift arr’s values to the
// right by that amount. ‘Wrap-around’ any values
// that shift off array’s end to the other side, so that
// no data is lost. Operate in-place: given
// ([1,2,3],1), change the array to [3,1,2].

rotateArr = (arr, shiftBy) => {
    let tmp = [...arr]
    for(let i = 0 ; i < arr.length ; ++i){
        if(i + shiftBy > arr.length -1){
            // return to the beginning on the arr by subtract the length -> the value what in the original place
            arr[i + shiftBy - arr.length] = tmp[i] 
        }
         else {
            //  move to the right -> the value what in the original place
            arr[i + shiftBy] = tmp[i]
        }
        
    }
    return arr
}
// console.log(rotateArr([1,2,3,4,5],1))

// Optionally, add these advanced features:
//     a) allow a negative shiftBy (shift left, not right),
//     b) minimize memory usage. With only a few local
//         variables (not an array), handle arrays and
//         shiftBys in the millions,
//     c) minimize how many touches of each element.



// Min Of Sorted-Rotated
// -----------------------------------------------------
// You will be given a numerical array that has first
// been sorted, then rotated by an unknown
// amount. Find and return the minimum value in
// that array.
minOfSortedRotated = (arr) =>{
    let min = arr[0]
    // starting from the second value
    for(let i = 1; i < arr.length; i++) {
        // if any value less than min it will be the new min
        if(min > arr[i]) {
            min = arr[i];
        } 
    } 
    // if not the first value is the min
    return min
}
console.log(minOfSortedRotated([ 3, 4, 5, 1, 2 ]))
console.log(minOfSortedRotated([0,2,3,4,5]))

