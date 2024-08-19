function map(arr, fn) {
    // Create a new array to hold the transformed elements
    const newArray = [];

    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the transformation function to the element and index, and push the result to the new array
        newArray.push(fn(arr[i], i));
    }

    // Return the new array
    return newArray;
}

// Example 1
let arr1 = [1, 2, 3];
let plusOne = function(n) { return n + 1; };
console.log(map(arr1, plusOne)); // Output: [2, 3, 4]

// Example 2
let arr2 = [1, 2, 3];
let plusI = function(n, i) { return n + i; };
console.log(map(arr2, plusI)); // Output: [1, 3, 5]

// Example 3
let arr3 = [10, 20, 30];
let constant = function() { return 42; };
console.log(map(arr3, constant)); // Output: [42, 42, 42]
