// Balance Point
// Given an array of numbers return true if there exists some point where the values on the left add up to equal the values on the right.
balancePoint = (arr) => {
    let index = 0
    while (index < arr.length ) {
        let lSum = 0
        let rSum = 0
        for (let i = 0; i <= index; i++) {
            lSum += arr[i];
        }
        for (let j = index+1; j < arr.length; j++) {
            // console.log("j",j)
            rSum += arr[j];
        }
        console.log(lSum , rSum)
        if (lSum === rSum) {
            return true
        } else {
            index++
        }
    }
    return false

}
// given [3, 2, 1, 5, 3, -2] return true
// 3 + 2 + 1 = 5 + 3 - 2
console.log(balancePoint([3, 2, 1, 5, 3, -2])) 
// Balance Index
// Given an array of numbers return the index where the values on the left add up to equal the values on the right or -1 if there is no such point.
balanceIndex = (arr) => {
    
}
console.log(balanceIndex([3, 2, 1, 5, 2, -2]))
// given [3, 2, 1, 5, 2, -2] return 2
// 3 + 2 = 5 + 2 - 2