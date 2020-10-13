// Print 1-255
// print1To255()
// Print all the integers from 1 to 255.
print1To255 = () => {
    for(let i = 1 ; i <= 225; ++i){
        console.log(i)
    }
}
// print1To255()



// Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
printIntsAndSum0To255 = () => {
    let sum = 0
    for(let i = 1 ; i <= 225; ++i){
        console.log(i)
        sum += i
        console.log('Sum: ' + sum)
    }
}
// printIntsAndSum0To255()

// Print Max of Array
// printMaxOfArray(arr)
// Given an array, find and print its largest element.
printMaxOfArray = (arr) => {
    let max = 0;
    for(let i = 0 ; i < arr.length; ++i){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log("Max is: " + max)
}
// printMaxOfArray([1,5,76,84,22,65])

// Return Odds Array 1-255
// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
returnOddsArray1To255 = () => {
    let oddArray = []
    for(let i = 1 ; i <= 225; ++i){
        if(i % 2 ){
            oddArray.push(i)
        }
    }
    return oddArray
}
// console.log(returnOddsArray1To255())



// Return Array Count Greater than Y
// returnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
returnArrayCountGreaterThanY = (arr, y) => {
    let greaterThanY = []
    for(let i = 0 ; i < arr.length; ++i){
        if(arr[i] > y){
            greaterThanY.push(arr[i])
            console.log('Numbers greater than ' + y + ': ' + greaterThanY.length)
        }
    }
    return greaterThanY
}
// console.log(returnArrayCountGreaterThanY([1,5,76,84,22,65], 60))

// Print Max, Min, Average Array Values
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
printMaxMinAverageArrayVals = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let avg = 0;
    for(let i = 0 ; i < arr.length; ++i){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }

        sum += arr[i]
    }
    avg = sum/arr.length
    console.log("Max is: " + max + ", " + "Min is: " + min + ", " + "Average is: " + avg)
}
// printMaxMinAverageArrayVals([1,5,76,84,22,65])

// Swap String for Array Negative Values
// swapStringForArrayNegativeVals(arr ) 
// Given an array of numbers, replace any negative values with the string 'Dojo' .
swapStringForArrayNegativeVals = (arr) => {
    for(let i = 0 ; i < arr.length; ++i){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr
}
// console.log(swapStringForArrayNegativeVals([-1,2,3,-5,4,-8,-6,89,45])) 

// Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.
printOdds1To255 = () => {
    for(let i = 1 ; i <= 225; ++i){
        if(i % 2 ){
           console.log(i)
        }
    }
}
// printOdds1To255()


// Print Array Values
// printArrayVals(arr)
// Iterate through a given array, printing each value.
printArrayVals = (arr) => {
    for(let i = 0 ; i < arr.length; ++i){
        console.log(arr[i])
    }
}
// printArrayVals([1,5,8,6,7,8,95])


// Print Average of Array
// printAverageOfArray(arr)
// Analyze an array’s values and print the average.
printAverageOfArray = (arr) => {
    let sum = 0;
    let avg = 0;
    for(let i = 0 ; i < arr.length; ++i){
        sum += arr[i]
    }
    avg = sum/arr.length
    console.log("Average is: " + avg)
}
// printAverageOfArray([1,5,8,6,7,8,95])

// Square Array Values
// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
squareArrayVals = (arr) => {
    for(let i = 0 ; i < arr.length; ++i){
        arr[i] = arr[i] ** 2
    }
    return arr
}
// console.log(squareArrayVals([2,3,4,5,6,7]))

// Zero Out Array Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
zeroOutArrayNegativeVals = (arr) => {
    for(let i = 0 ; i < arr.length; ++i){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}
// console.log(zeroOutArrayNegativeVals([-1,2,3,-5,4,-8,-6,89,45])) 

// Shift Array Values Left
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
shiftArrayValsLeft = (arr) => {
    let lastIndex = arr[0]
    for(let i = 0 ; i < arr.length; ++i){
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = lastIndex
    return arr
}
// console.log(shiftArrayValsLeft([2,3,4,5,6,7]))

