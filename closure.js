//Allows functions to access variables in the parent scope
//The function can access the variable count
//State persistence between function calls ie it maintains the updated value of count on each call

function createCounter(n){
    let count=n;
    return function(){  
        let x=count;
    count++;
    return x;
    }
};

const counter = createCounter(10);
console.log(counter());
console.log(counter()); 
console.log(counter());
console.log(counter());


// 10,11,12,13,14