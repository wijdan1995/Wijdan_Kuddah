// Find maximum product of two integers in an array
// ---------------------------------------------------------------------------------
// Given an array of integers, find maximum product of two integers in an array
// input = [4,7,2,9,5]
// output = 63 (7*9)
// input =[5,-4,2,6,-8]
// output = 32 (-8*-4)

function maxProduct(arr) {
    var max = arr[0] * arr[1];
    var a = arr[0];
    var b = arr[1];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] > max) {
                max = arr[i] * arr[j];
                a = arr[i];
                b = arr[j];
            }
        }
    }

    // console.log(a, " * ", b, " = ", max);
    console.log(` ${max} (${a} * ${b})`);
    return max;
}

// maxProduct([5,6,2,1,2,2]);

// Move all zeros present in an array to the end
// ---------------------------------------------------------------------------------
// Given an array of intefers, move all zeros present in the array to the end.  The solution should maintain the relative order of items in the array.

// input = [6,0,8,2,3,4,0,4,0,1]
// output = [6,8,2,3,4,4,1,0,0,0]

function moveZeros(arr) {

    for (var i = arr.length -1 ; i > 0; i--) {
        if (arr[i] == 0) {
            for (var j = i + 1; j < arr.length; j++) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
        
    }
    return arr
}

//                         i j
console.log(moveZeros([1,0,2,0,0,0,9,8,0,6,0]))

// arr = [1, 2, 3, 4, 5]

// arr[1+1] = arr[1] // 3 = 2

// console.log(arr) //[ 1, 2, 2, 4, 5 ]                                                                                                                                         