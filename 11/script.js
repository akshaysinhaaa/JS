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

