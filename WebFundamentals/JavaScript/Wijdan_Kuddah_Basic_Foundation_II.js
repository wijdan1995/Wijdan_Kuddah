biggieSize = (arr) =>{
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr
}
// console.log(biggieSize([-1,3,5,-5]))

printLowReturnHigh = (arr) => {
    let max  = arr[0]
    let min = arr[0]
    for(let i =0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i]
        }
        else if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log(`Min: ${min}`)
    return max
}
// console.log(printLowReturnHigh([1,2,3,4,5,6]))

printOneReturnAnother = (arr) => {
    let odd
    for(let i =1; i < arr.length; i++){
        console.log(arr[i])
    }
    for(let i =0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            odd = arr[i]
            break
        }
        
    }
    return odd
}
// console.log(printOneReturnAnother([4,2,5,8,7]))

doubleVision = (arr) =>{
    let newArr =[]
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i]*2) 
    }
    return newArr
}
// console.log(doubleVision([1,2,3,45]))

countPos = (arr) => {
    let pos = []
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0){
            pos.push(arr[i])
        }
    }
    arr[arr.length -1] = pos.length
    return arr
}
// console.log(countPos([-1,1,1,1]))

evensAndOdds = (arr) => {
    let evenCount = 0
    let oddCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            oddCount++
            if (oddCount == 3) {
                console.log("That's odd!")
                oddCount = 0
            }
            
        } else if (arr[i] % 2 == 0) {
            evenCount++
            if (evenCount == 3) {
                console.log("Even more so!")
                evenCount = 0
            }
        }
    }
}
// evensAndOdds([1,3,5,7,9,2,4,6,5,5,5])

incrementTheSeconds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i]+=1
        }
    }
    return arr
}
// console.log(incrementTheSeconds([1,1,1,1,1,1]))

previousLengths = (arr) => {
    for(let i = arr.length -1 ; i >= 1; i--){
        arr[i] = arr[i-1].length
    }
    return arr
}
// console.log(previousLengths(["hello", "dojo", "awesome"]))

addSeven = (arr) => {
    let newArr =[]
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i]+7) 
    }
    return newArr
}
// console.log(addSeven([1,2,3]))

reverseArray = (arr) => {
    // to swap /2 -1 to stop at mid of our arr
    for(let i =0; i <= Math.floor((arr.length - 1) / 2); i++){
        //first to last
        [arr[i], arr[arr.length -1 - i]] = [arr[arr.length -1 - i], arr[i]]
    }
    return arr
}
// console.log(reverseArray([1,2,3,4,5]))

outlookNegative = (arr) => {
    let newArr = []
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i]*-1) 
        } else {
            newArr.push(arr[i]) 
        } 
    }
    return newArr
}
// console.log(outlookNegative([1,-3,5]))

alwaysHungry = (arr) => {
    let hungry = true
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'food'){
            hungry = false
            console.log('yummy')
        }
    }

    if(hungry){
        console.log("I'm hungry")
    }
}
// alwaysHungry([1,2,4,'food','food'])


swapTowardTheCenter = (arr) => {
    for(let i =0; i <= Math.floor((arr.length - 1) / 2); i++){
        //first to last / third to third-to-last
        if(i % 2 == 0){
            [arr[i], arr[arr.length -1 - i]] = [arr[arr.length -1 - i], arr[i]]
        }
        
    }
    return arr
}
// console.log(swapTowardTheCenter([1,2,3,4,5,6]))
// console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]))

scaleTheArray = (arr,scale) => {
    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i] * scale
    }
    return arr
}
// console.log(scaleTheArray([1,2,3], 3))