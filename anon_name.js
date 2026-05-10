// Create an anonymous function expression:
// Function name: sayHi
// Takes a parameter name

const sayhi = function(message){
    console.log("hi" + message);
};

sayhi(" Rahul");

// Create a named function expression:
// Variable name: multiply
// Internal function name: mul
// Takes a and b
// Returns multiplication

const multiply = function mul(a, b){
    return a * b;
};
console.log(multiply(3, 4));

// Create a named function expression with recursion:
// Variable name: countDown
// Internal name: count
// Input: n
// Print numbers from n to 1

const countdown = function count(n){
    if (n===0) return;
    console.log(n);
    count(n - 1);
};
countdown(3);