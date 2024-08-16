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