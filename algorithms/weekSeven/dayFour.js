function partition(arr) {
    let partitionIndex = 0;
    let partitionValue = arr[0];
    // console.log("before",arr)
    for (let index = 1; index < arr.length; index++) {
        if(partitionValue > arr[index]){
            [arr[index], arr[partitionIndex]] = [arr[partitionIndex] , arr[index]]
            partitionIndex++
        } 
        // else if (arr[index] > arr[index + 1]){
        //     [arr[index], arr[index + 1]] = [arr[index + 1] , arr[index]]
        //     console.log("after 2",arr)
        // }
    }
    console.log("last",arr)
    return partitionIndex;
}

console.log(partition([2,4,1,0,5,7,3]));
// this should rearrange the array to something like [1, 0, 2, 4, 5, 7, 3] and return the new index of 2

// function partition2(arr) {
//     let pv = arr[0];
//     let [left, right] =[0, arr.length-1]
//     while(left < right){
//         while(arr[left] < pv){
//             left++
//         }
//         while(arr[right] > pv){
//             right--
//         }
//         [arr[left], arr[right]] = [arr[right] , arr[left]]

//     }
//     console.log(arr)
//     return left;
// }

// console.log(partition2([2,4,1,0,5,7,3]));


function quickSort(arr) {
    // your code here
    return arr;
}

// console.log(quickSort([3,2,5,4,1]));