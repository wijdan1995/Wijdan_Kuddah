// Deduplicate String
// Write a function called dedupe that given a string will return a new string that contains only the first instance of each letter.
function dedupe(str) {
    let newStr = "";
    for (let letter of str) {
        // console.log(letter)
        if (!newStr.includes(letter)){
            newStr += letter
        }
    }
    return newStr;
}

console.log(dedupe("Snap, crackle and pop!"));
// should return something like "Snap, crkledo!"