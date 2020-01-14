var firstName = "Chris"
var states = 50
var vegetables = ["Squash. Potatos, Onions, Lettuce, Cabbage"]
var total = 5 + 4
var userAge = 20
var name = "Bob"
var names = [
    {personname: "John", age: 23},
    {personname: "Will", age: 20},
    {personname: "Bob", age: 33},
    {personname: "Lot", age: 19},
    {personname: "Mary", age: 43},
]
function sayHello (x = "Hello World") {
    return console.log(x);
}
alert("Hellow World");
function checkAge (age){
    if(age < 21){
        alert("Sorry" + " " + names[i].personname + " " + "you aren't old enough to view this pade.");     
    }
    else {alert(
        `welcome to the party ${names[i].personname}!` 
    )}
    // for (var i = 0; i < vegetables.length; i++) {
    //     console.log(vegetables[i]);
    // }
    // for (var i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // } 
}
for (i = 0; i < names.length; i++){
    checkAge(names[i].age)
}
function getLength (){
    if (length = even) {
        alert("The world is nice and even")
    }
    else {
        alert("The world is an odd place")
    }

}



sayHello()

