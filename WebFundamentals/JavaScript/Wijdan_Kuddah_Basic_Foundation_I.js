get1To255 = () => {
    let arr = []
    for(let i =1; i <= 255; i++){
        arr.push(i)
    }
    return arr
}


getEven1000 = () => {
    let sum = 0
    for(let i =1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}

sumOdd5000 = () => {
    let sum = 0
    for(let i =1; i <= 5000; i++){
        if(i % 2 != 0){
            sum += i
        }
    }
    return sum
}

iterateAnArray = (arr) => {
    let sum = 0
    for(let i =0; i < arr.length; i++){

        sum += arr[i]
    }
    return sum
}

findMax = (arr) => {
    let max = arr[0]
    for(let i =0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        
    }
    return max
}

findAverage = (arr) => {
    let sum = 0
    for(let i =0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
}

arrayOdd = () =>{
    let arr = []
    for(let i =1; i <= 50; i++){
        if(i % 2 != 0){
            arr.push(i)
        }
    }
    return arr
}

greaterThanY = (arr,y) => {
    let greater = []
    for(let i =0; i < arr.length; i++){
        if(arr[i] > y){
            greater.push(arr[i])
        }
    }
    return greater.length
}

squares = (arr) =>{
    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i]*2
    }
    return arr
}

negatives = (arr) => {
    for(let i =0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}

maxMinAvg = (arr) => {
    let max  = arr[0]
    let min = arr[0]
    let avg, sum = 0
    for(let i =0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i]
        }
        else if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
    }

    avg = sum / arr.length
    return [max, min, avg]
}

swapValues = (arr) => {
    let tmp = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = tmp
    return arr
}

numToString = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr
}

// console.log(swapValues([1,2]))
// console.log(maxMinAvg([1,5,10,-2]))
// console.log(get1To255())
// console.log(negatives([-1,2,-4]))
// console.log(greaterThanY([1,2,3,5], 2))
// console.log(findAverage([1,2,3,4,5]))
// console.log(findMax([1,2,3,5]))
// console.log(iterateAnArray([1,2,3]))
// console.log(get1To255())
// console.log(getEven1000())
// console.log(sumOdd5000())


