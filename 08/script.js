//Arrow Function

//Syntax
const sayHello = () => {
    console.log('Hey');
}

sayHello()

const add = (a, b) => {
    return a+b;
}

console.log(add(3, 5));

//One more way

const addV2 = (a,b) => a+b; //One liner function

console.log(addV2(9,8));


//arguments are not accepted in arrow function instead we use something called as spread operator.

const addNumbers = (...nums) => {
    console.log(nums);
}


//Hoisting (Can't be used in arrow function)

sayHeyThere(); //Defined earlier (it stores in memory)

function sayHeyThere() {
    console.log('Hey There!')
}


//This Keyword
const obj {
    value : 20,
    myFunction : () => {
        
    }
}

