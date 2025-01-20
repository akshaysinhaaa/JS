//High order function and callbacks

function add (a,b, cb){ //let cb is callback
    let result = a+b;
    cb(result);
}

add(2,4, function (value){ //in parameter of cb we passed a function
    console.log(value);
});

//also, we can make function in a function in high order functions
function add (a,b, cb){ 
    let result = a+b;
    cb(result);

    return () => console.log(result);
}

let resultFunction = add(9, 10, () => {}); //nothing's gonna print as cb has empty function
resultFunction();


//Used In API's