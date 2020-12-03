// The Quick Brown Fox
// Given a 2-dimensional array of words, return an array of every combination containing a word from each sub-array. The arrays can be of any length.
function allCombinations(words, n = 0, combinations = [], current = []) {
    if (n === words.length) {
        combinations.push(current)
    }
    else words[n].forEach(item => allCombinations(words, n + 1, combinations, [...current, item]))
    // 
    return combinations;
}

const words = [["quick", "lazy"],
["brown", "red", "grey"],
["fox", "dog"]];

// console.log(allCombinations(words));
  // should return ["quick brown fox", "quick brown dog", "quick red fox", "quick red dog", "quick grey fox", "quick grey dog", "lazy brown fox", "lazy brown dog", "lazy red fox", "lazy red dog", "lazy grey fox", "lazy grey dog"]
let result = allCombinations(words)
function combsTostring(multiList){
    let allCombs =[]
    for (let arr of multiList) {
        allCombs.push(arr.join(" "))
    }
    return allCombs
}

console.log(combsTostring(result))