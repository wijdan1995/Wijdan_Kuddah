// Binary Search
// ------------------------------------------------------------
// Given a sorted array and a value, return whether
// that value is present in the array. Do not
// sequentially iterate the entire array. Instead,
// ‘divide and conquer’, taking advantage of the fact
// that the array is sorted. // [0,1,2,3,4,5,6,7,8,9]
function BinarySearch(arr, num) {
    var mid = Math.floor(arr.length/2);
    var start = 0, end = arr.length-1;
    
    while (start <= end ) {
        if ( num == arr[mid])
            return `${num} is found in index ${mid}`;

        else if ( num > arr[mid]) {
            start = mid+1;
            mid = start+Math.floor((end-start)/2);
        }
        else if ( num < arr[mid]) {
            end = mid-1;
            mid = end-Math.floor((end-start)/2);
        }
    }
    return `The value ${num} not found`;
}
console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9], 7));

// Pairs to Sum
// ------------------------------------------------------------
// How do you find all pairs of an integer array whose sum is equal to a given number?
function PairsToSum(arr, sum) {
    var pairsArr = [];
    for (var i=0 ; i<arr.length ; i++)
        for(var j=i+1 ; j<arr.length ; j++)
            if (arr[i] + arr[j] == sum)
                pairsArr.push([arr[i], arr[j]]);

    return pairsArr;
}
console.log(PairsToSum([3,5,2,3,6,4,1,7,0,8], 8));