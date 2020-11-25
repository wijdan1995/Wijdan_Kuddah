function insertionSort(arr) {
    for (let i=1 ; i<arr.length ; i++) {
        temp = i;
        for(let j=i-1 ; j>=0 ; j--) {
            if (arr[temp] < arr[j]) {
                [arr[j], arr[temp]] = [arr[temp], arr[j]];
                temp--;
            }
        }
    }
    return arr;
}

console.log(insertionSort([3,2,5,4,1]));

function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        // console.log(arr)
    }
    return arr;
};

console.log(insertionSort2([3,6,2,5,4,1]));