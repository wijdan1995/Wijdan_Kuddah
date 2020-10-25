sigma = (num) => {
    let sum = 0
    for(let i =1; i <= num; i++){
        sum += i
    }
    return sum
}
// console.log(sigma(5))

factorial = (num) => {
    let factorial = 1
    for(let i =1; i <= num; i++){
        factorial *= i
    }
    return factorial
}
// console.log(factorial(5))

fibonacci = (num) => {

    let num1=0; 
    let num2=1; 
    let sum; 
    // sum of the previous two nums
    for (let i = 1; i < num; ++i)  
    {
        // add the two nums
        // 2 + 3 = 5
        sum=num1+num2; 
        // 2 = 3
        num1=num2; 
        // 3 = 5
        num2=sum;
        //2 3 5
    } 
    return num2; 
}
console.log(fibonacci(3))

secondToLast = (arr) => {
    return arr[arr.length -2] || null
}
// console.log(secondToLast([42, true, 4, "Liam", 7]))

nthToLast = (arr, nth) => {
    return arr[arr.length - nth] || null
}
// console.log(nthToLast([5,2,3,6,4,9,7],3))

secondLargest = (arr) => {
    let ordered
    if(arr.length < 2){
        return null
    } else {
        ordered = arr.sort((a, b) => a - b)
    }
    return ordered[arr.length - 2]

}
// console.log(secondLargest([42,1,4,3.14,7]))

doubleTrouble = (arr) => {
    let newArr =[]
    for(let i =0; i < arr.length; i++){
        // for(let j = 0; j < 2; j++){
            newArr.push(arr[i], arr[i]) 
            // newArr.push(arr[i]) 
        // }
        
    }
    return newArr
}
console.log(doubleTrouble( [4, "Ulysses", 42, false]))


