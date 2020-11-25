function combineArrays(arr1, arr2) {
    const arr3 = [];
    for (let i = 0; i < arr1.length;) {
        for (let j = 0; j < arr2.length;) {
            if (arr1[i] < arr2[j]) {
                arr3.push(arr1[i])
                i++
            } else {
                arr3.push(arr2[j])
                j++
            }
        }
    }
    return arr3;
}

console.log(combineArrays([2, 5], [1, 4, 6, 8]));
// this should result in [1, 2, 4, 5, 6, 8]

const merge = (arr1, arr2) => {
    // https://dev.to/mcfrank16/understanding-merge-sort-in-javascript-4cne
    let result = []; // the array to hold results.
    let i = 0;
    let j = 0;

    // as the pseudo-code implies, we have to loop through the 
    // arrays at the same time and it has to be done once.
    // note that if one array completes its iteration, we will
    // have to stop the while loop.

    while (i < arr1.length && j < arr2.length) {
        // compare the elements one at a time.
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    // these other while loops checks if there's some item left
    // in the arrays so that we can push their elements in the result array.
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;


    // // https://repl.it/@Trip4077/TrickyForestgreenBucket#index.js
    // //Create New Array
    // const result = [];
    // //Check if left array and right array is empty
    // while(left.length && right.length) {
    //   //Find lower value
    //     if(left[0] <= right[0]) {
    //     //Add left value
    //     result.push(left.shift());
    //     } else {
    //     //Add right value
    //     result.push(right.shift());
    //     }
    // }
    // //Merge left array
    // while(left.length) result.push(left.shift());
    // //Merge right array
    // while(right.length) result.push(right.shift());
    // //return result array
    // console.log('result:', result);
    // return result;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let arr1 = mergeSort(arr.slice(0, mid))
    let arr2 = mergeSort(arr.slice(mid, arr.length))
    return merge(arr1, arr2);
}

console.log(mergeSort([3, 2, 5, 4, 1]));