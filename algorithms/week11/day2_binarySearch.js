binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1 ;
    let mid = Math.floor(( start + end ) / 2);
    while ( arr[mid] != val && start <= end) {
        if ( val < arr[mid] ) {
            // to have only left side
            end = mid - 1 ;
        } else {
            // to have only right side
            start = mid + 1 ;
        }
        // get the mid again
        mid = Math.floor(( start + end ) / 2);
    }
    return arr[mid] == val;
}

console.log(binarySearch([1,2,3,4,5,6,70,80,90,100], 70))