//Functions

function sayHello() {
    console.log('Akshay')
}

sayHello()


// argument
function add(a, b){
    console.log(a+b);
}

add(5, 10)//parameters
add(9, 7)
add(8, 11)

function multiply(a, b){
    return a*b;
}

let a = multiply(10, 9);
console.log('The multiplication is' , a);

//make a function that takes any number of argument

function addNumbers(){
    let ans = 0
    for(let i = 0; i < arguments.length; i = i+1){
        ans = ans + arguments[i]
    }
    return ans
}

let results = addNumbers(1,2,3,4,5)
console.log(results)
