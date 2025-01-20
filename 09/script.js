//High order function and callbacks

function add (a,b, cb){ //let cb is callback
    let result = a+b;
    cb(result);
}

add(2,4, function (value){ //in parameter of cb we passed a function
    console.log(value);
});