//Logical Operators
//AND (All conditons must be true &&)

const age = 18;
const gender = 'male';

if(age>=18  && gender == 'male'){
    console.log('You are an adult male')
}

//OR (|| atleast one condition must be true)
if(age>=19 || gender=='male'){
    console.log('You adult boy')
}

//NOT
const number = 5;

if(number % 2 != 0){
    console.log('Odd')
}