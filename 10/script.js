//Arrays 

const Student = ['Akshay', 'Gauri', 'RK'];
console.log(Student);
console.log(Student.length);

//Access
console.log(Student[1]);

//Mutation
Student[0] = "Akshay Sinha";
console.log(Student[0]);

//Push -> adds in the end
Student.push ('Rudra');
console.log(Student)

//In any language arrays have homogenous values but in js you can use any datatype

const myArray = [1, 'hehe', true, '🧸'];
console.log(myArray);
myArray.push({ name: 'Akshay' });
console.log(myArray);

console.log(myArray.indexOf('hehe'))
console.log(myArray.indexOf('Akshay Sinha')) //Return -1 if it doesn't exist