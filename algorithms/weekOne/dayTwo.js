// Today's Algo challenges (Do not use any built in JS methods):
//  Array: Push Front
function pushFront(arr, val) {
    var newarr = [val]; 
    for(var x = 0 ; x < arr.length ;x++){
        newarr[x+1] = arr[x]
    }
    return newarr
}
// console.log(pushFront([1, 5 , 6,8,6,7], 66))

//  Array: Pop Front, remove and return first val
// function popFront(ar=r) {}
function popFront(arr) {
    var firstVal  = arr[0]
    for(var x = 0 ; x < arr.length ;x++){
        arr[x] = arr[x+1]
    }
    arr.length--
    return  {arr ,firstVal}
}
console.log(popFront([1,5,2,8]))

// //  Array: Insert At, insert at the index
function insertAt(arr, index, val) // ([], 0, 1)
{
    for(var x = arr.length ; x > index; x--){
    // x has extra index place for the new value
    // move the items by one till the index we want
        arr[x] = arr[x-1]
    }
    // add thde value
    arr[index] = val
    return arr
}
// console.log(insertAt([1, 2 , 3, 4], 2, 9))
// //  Array: Remove At
function removeAt(arr, index){
    for(var x = index ; x < arr.length ;x++){
        arr[x] = arr[x+1]
    }
    arr.length--
    return arr
}

// console.log(removeAt([1, 2 , 3, 4],2))
