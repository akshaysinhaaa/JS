//Advanced Array

const myArr = ['akshay', 'piyush', 'hello'];
console.log(myArr);

//forEach
//-> what it does is it passes your function as an argument

function Hello(n){
    console.log(n);
}

myArr.forEach(Hello) //Like a for loop

//or may be pass the whole function
myArr.forEach((val) => console.log(val + ' sinha'));


//.map function
myArr.map((val) => console.log(val));

//Difference between .map and .forEach
// Let say I wanna double the elements in the array and store them in an different array
//I can only do that with .map

const numbers = [2,4,6,8,10];

function double (n) {
    return n*2;
}

let newArr = numbers.map(double);

console.log(newArr)

