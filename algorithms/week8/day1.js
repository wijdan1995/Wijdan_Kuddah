// Given a string that contains a mix of characters and whitespace, return an array containing each word. Avoid using built-in methods like .split.
function strToWordArr(str) {
    const words = [];
    let word = ""
    for (let i = 0; i <= str.length; i++) {
        
        if (str[i] === " " || i === str.length) {
            words.push(word)
            word = ""
        } else {
            word += str[i]
        }
        

    }
    return words;
}

console.log(strToWordArr("Hello world and good morning!"));
// should return ["Hello", "world", "and", "good", "morining!"]


// Given a string that contains a mix of characters and whitespace, return a new string that reverses the order of the words. Avoid using built-in methods like .split or .join.
function reverseWords(str) {
    let reversed = "";
    const words = strToWordArr(str)
    for (let j = words.length-1; j >= 0; j--) {
        // console.log(words[j]);
        reversed += words[j]
        if (j !== 0 ){
            reversed += " "
        }
    }
    return reversed;
}

console.log(reverseWords("Hello world and good morning!"));
// should return "morning! good and world Hello";