console.log(hello);                                   
var hello = 'world';                                 
// var hello
// console.log(hello); logs undefined                               
// var hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // logs magnet
}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); // we didn't call this function
}
console.log(brendan); // super cool

var food = 'chicken';
console.log(food); // logs chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // logs half-chicken
    var food = 'gone';
}

mean(); // won't be hoisted so it will cz error
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

console.log(genre); // logs undefined          
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // logs rock
    var genre = "r&b";
    console.log(genre); // logs r&b
}
console.log(genre); // logs disco

dojo = "san jose";
console.log(dojo); // logs san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // logs seattle
    var dojo = "burbank";
    console.log(dojo); // logs burbank
}
console.log(dojo); // logs san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // we can't assign const so it will cz error
    }
    return dojo;
}


transform-origin: top center;
