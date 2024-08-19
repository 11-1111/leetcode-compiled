// Define some functions
function greet(name) {
    return `Hello, ${name}!`;
}

function square(number) {
    return number * number;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

// Create an array of functions
const functionsArray = [greet, square, toUpperCase];

// Example data
const name = "Alice";
const number = 4;
const str = "hello";

// Using the functions array
console.log(functionsArray[0](name)); // Output: "Hello, Alice!"
console.log(functionsArray[1](number)); // Output: 16
console.log(functionsArray[2](str)); // Output: "HELLO"

// Iterating and applying functions
const results = functionsArray.map(fn => fn(name)); // Apply each function to `name`
console.log(results); // Output: ["Hello, Alice!", "Hello, Alice!", "HELLO"]
