removeDubs = (arr) => {
    let noDubsArr = []

    for (const num of arr) {
        if (!noDubsArr.includes(num)){
            noDubsArr.push(num)
        }
    }
    return noDubsArr
}

// without .includes
contains = (arr, val) => {
    let isFound = false
    for (const num of arr) {
        if(num === val ){
            isFound = true
            break
        }
    }
    return isFound
}
removeDubs2 = (arr) => {
    let noDubsArr = []

    for (const num of arr) {
        if (!contains(noDubsArr,num)){
            noDubsArr.push(num)
        }
    }
    return noDubsArr
}

let arr = [1,1,2,2,5,2,4,5,5,4,8,7,6,3,9,5,2,41,41,25,23,25,24,24]
console.log(removeDubs(arr))
console.log(removeDubs2(arr))
console.log([...new Set(arr)])
console.log(arr.filter((v,i) => arr.indexOf(v) == i))