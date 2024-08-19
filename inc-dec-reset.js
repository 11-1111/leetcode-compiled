function createCounter(init) {
    let x = init; // Initialize x with the initial value
    return {
        increment: function() {
            x++;
            return x++;
        },
        decrement: function() {
            x--;
            return x;
        },
        reset: function() {
            x = init; // Reset x to the initial value
            return x;
        },
    };
}

console.log(createCounter(10).increment());