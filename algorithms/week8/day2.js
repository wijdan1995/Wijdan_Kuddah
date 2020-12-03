// Rotate String
// Write a function called rotate that given a string and a positive whole number will rotate characters in the string by that number to the right.
function rotate(str, num) {
    let newStr = "";
    // if num > str.length | num % str.length == the new num
    // console.log(str.slice(str.length-num,str.length))
    // console.log(str.length)
    // console.log(num % str.length)
    if (num > str.length){
        num = num % str.length
    }
    newStr += str.slice(str.length-num,str.length)
    for (let i = 0; i < str.length - num; i++) {
        newStr += str[i]
    }
    return newStr;
}

console.log( rotate("Boris Godunov", 20) );
console.log( rotate("Boris Godunov", 3) );
// should return "novBoris Godu"


//   Is Rotation
//   Write a function called isRotation that given 2 strings will return true if they are rotations of each other
function isRotation(str1, str2) {
    let theyMatch = true;
    let str1Repeted = str1 + str1 // BingoBingo
    if (str1.length !== str2.length){
        theyMatch = false
    // } else if (!str1Repeted.includes(str2)){
    //     theyMatch = false
    // }
    // } else if (str1Repeted.indexOf(str2) == -1){
    //     theyMatch = false
    // }
    } else if (str1Repeted.search(str2) == -1){
        theyMatch = false
    }
    return theyMatch;
}

console.log( isRotation("Bingo", "goBin") );
// should return true
console.log( isRotation("Bingo", "ogniB") );
// should return false

// using rotate function
function isRotation2(str1, str2) {
    let theyMatch = false;
    for (let i = 0; i < str1.length; i++) {
        let element = rotate(str1, i);
        if (element == str2) {
            theyMatch = true
        }
    }
    return theyMatch;
}

console.log( isRotation2("Bingo", "goBin") );
// should return true
console.log( isRotation2("Bingo", "ogniB") );
// should return false
