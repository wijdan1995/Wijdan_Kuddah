// Intersect Sorted Arrays
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two.
// Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].

function intersect(arr1, arr2) {
    // const result = [];
    // const result = arr1.filter(num => arr2.includes(num))
    let i = 0
    let j = 0
    let len1 = arr1.length
    let len2 = arr2.length
    const result = [];
    while (i < len1 && j < len2) {
        if(arr1[i] < arr2[j]){
            i++
        } else if (arr2[j] < arr1[i]){
            j++
        } else {
            result.push(arr2[j])
            i++
            j++
        }
    }
    return result;
}

console.log(intersect([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
// this should return [2, 2, 7]



// Union Sorted Arrays
// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union.
// Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
function union(arr1, arr2) {
    let i = 0
    let j = 0
    let len1 = arr1.length
    let len2 = arr2.length
    const result = [];
    while (i < len1 && j < len2) {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else if (arr2[j] < arr1[i]){
            result.push(arr2[j])
            j++
        } else {
            result.push(arr2[j])
            i++
            j++
        }
    }
    // if there is any remainder
    while (i < len1) {
        result.push(arr1[i])
        i++
    }
    while (j < len2) {
        result.push(arr2[j])
        j++
    }
    return result;
}

console.log(union([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
// this should return [1, 2, 2, 2, 6, 6, 7]