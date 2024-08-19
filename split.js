//in-built js split function

const sentence = "Hello, World!";

let words = sentence.split(",");//splits on comma
console.log(words);

words = sentence.split(" ");//splits on space
console.log(words);

words = sentence.split("o");//splits on o
console.log(words);

words = sentence.split("");//splits on empty string
console.log(words);