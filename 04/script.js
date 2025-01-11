//Condition Statements

const age = 1;

if (age >= 18){
    console.log('you can vote');
} else if(age == 0){
    console.log('you are a new born, drink milk and chill no need to vote')
}
else{
    console.log('no you cant vote')
}

//Ternary operator (same thing but way easier that huge lines of code)
//we write condition (? is for if) and then print (: for else statement) and then print statement

age >=18 ? console.log('you are adult') : console.log('minor');

//one more way 

let result = age>=18 ? 'you are Adult' : 'Minor';
console.log(result)

//Switch operations
const option = 1;

switch(option){
    case 1: console.log('English');
    break;
    case 2: console.log('Hindi');
    break;
    case 3: console.log('German');
    break;              //If I will not use break it will execute the remaing cases below it as well.
}