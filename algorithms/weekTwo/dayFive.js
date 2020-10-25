// MostFrequentNumber
// ------------------------------------------------------------------------
// Given an array of interfers containing duplicates,return the majority element in the array if Present.
// Input = [2,8,7,2,2,5,2,3,1,2,2]
// Output = 2

mostFrequentNumber = (arr) => {
    // the element of most frequent
    let mostFrequentNum;
    for (let i = 0; i < arr.length; i++) {
        // starting with 1
        let mostFrequentTimes = 1;
        // frequent in one loop
        let currentFrequent = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                // console.log(arr[i] , arr[j])
                currentFrequent++;
            }
            if (mostFrequentTimes < currentFrequent) {
                mostFrequentTimes = currentFrequent;
                mostFrequentNum = arr[i];
            }
        }
    }
    return mostFrequentNum || "All appears once";
};

// console.log(mostFrequentNumber([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]))
console.log(mostFrequentNumber([2, 8, 7, 5, 3, 1]))

// other try with unique
mostFrequentNumberUnique = (arr) => {
    // the element of most frequent
    let mostFrequentNum;
    let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
    // console.log(unique)
    for (let i = 0; i < unique.length; i++) {
        // starting with 1
        let mostFrequentTimes = 1;
        // frequent in one loop
        let currentFrequent = 0;
        for (let j = 0; j < arr.length; j++) {
            if (unique[i] == arr[j]) {
                // console.log(unique[i] ,arr[j])
                currentFrequent++;
            }
            if (mostFrequentTimes < currentFrequent) {
                mostFrequentTimes = currentFrequent;
                mostFrequentNum = unique[i];
            }
        }
    }
    return mostFrequentNum || "All appears once";
};
console.log(mostFrequentNumberUnique([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]))
console.log(mostFrequentNumberUnique([2, 8, 7, 5, 3, 1]))

// Number of Steps to Reduce a Number to Zero
// // ------------------------------------------------------------------------
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Example
// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

stepsToZero = (num) => {
    let steps = 0;
    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return steps;
};
console.log(stepsToZero(8));
