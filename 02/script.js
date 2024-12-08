// Preffered way of using variables is camelCase
var age = 20;

var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

// var -> Global Scope
//means if else ke andar var declared hai to bhi globally accessible ho jayega
if(true){
    var name = "Akshay Sinha";
}

console.log(name);

//let is local
let Age = 20;

Age = "Akshay";

console.log(Age);

if (true) {
    let a = 1;
}

//console.log(a); //threw error

// let came in new js versions, use let because bugs are less than var

//const -> local
//const once assigned cannot be changed

const subject = "Maths";

// subject = "Science"; //threw error

console.log(subject);