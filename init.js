function map(first,arr, fn) {

    for (let i = 0; i < arr.length; i++) {

first = fn(first, arr[i]);
}
return first;
}





function sum(accum, curr) {return accum + curr * curr;}
let array = [1, 2, 3, 4];
let init = 100;


console.log (map(init,array, sum));
