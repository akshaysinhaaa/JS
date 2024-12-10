//Data Types

//Numbers
let num1 = 10.32;
let num2 = 12;

console.log(num1 + num2);

//Strings
const firstName = "Akshay";
const lastName = "Sinha";

console.log(firstName + " " + lastName);

//Booleans
// true -> 1 and false -> 0
 let isLoggedIn = true
 console.log(isLoggedIn)
 console.log(isLoggedIn + 10) //11 on console that verifies as true = 1 and fals = 0

 //Null
let lastLoginDate = null;
lastLoginDate = 10; //can be updated later , it takes space
console.log(lastLoginDate)

//Undefined
//It does not take sapce it is not existant

let randomString = undefined;
console.log(randomString)

//Objects (Key value pairs)
const persons = {
    fullName: 'Jane Doe',
    gender : 'male',
    age : 23,
    school : 'Bennett',
    lastLoginDate : null,
}

console.log(persons)
console.log(persons.gender)