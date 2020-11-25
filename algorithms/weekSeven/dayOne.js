// Using JavaScript, create a function that uses bubble sort to sort an array in place.
bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        let inOrder = true;
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                inOrder = false;
            }
        }
        if(inOrder) {
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort([3,2,5,4,1]));

// Using JavaScript, create a function that uses selection sort to sort an array in place.
selectionSort = (arr) => {
    for(let i=0; i<arr.length-1; i++) {
        let min
        for(let j=i+1; j<arr.length; j++) {
            min = i
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

console.log(selectionSort([3,2,5,4,1]));