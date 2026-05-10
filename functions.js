function sum(num1, num2){
    //block of code
    return num1 + num2;
}

const result = sum(2, 5); //2 and 5 are called arguments
let result2 = sum(10, 25);

console.log("result", result);
console.log("result", result2);

function name(){

    let greet = "hello";
    console.log(greet);
}

name();

// Write a JavaScript function checkNumber that:

// Takes a single parameter num (a number).
// Uses if-else statements to determine whether the number is positive, negative, or zero, and logs the appropriate message:
// If num is greater than 0, log "The number is positive."
// If num is less than 0, log "The number is negative."
// If num is 0, log "The number is zero."

function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive");
    } else if (num < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }
}

checkNumber(5);  
checkNumber(-3);
checkNumber(0);


// Write a JavaScript function categorizeNumber that:

// Takes a single parameter num (a number).
// Uses a switch-case statement to categorize num as follows:
// If num is 1, log "One".
// If num is 2, log "Two".
// If num is 3, log "Three".
// For any other number, log "Unknown number".

function categorizeNumber(num) {
    
    switch (num) {
        case 1:
           console.log("Output:One"); // code
            break;
            
             case 2:
           console.log("Output:Two"); // code
            break;
            
             case 3:
           console.log("Output:Three"); // code
            break;
        
        default:
            console.log("Output: Unknown number"); // code
    }
    // Use switch-case to categorize the number
}

categorizeNumber(1); // Output: One
categorizeNumber(2); // Output: Two
categorizeNumber(3); // Output: Three
categorizeNumber(5); // Output: Unknown number


// Even or Odd

// Write a function checkEvenOdd(num) that:

// Prints "Even" if number is even

// Prints "Odd" if number is odd

function checkEvenOdd(num){
    if(num%2==-0){
        console.log("nummber is even");
    }else{
        console.log("number is odd");
    }
}

checkEvenOdd(333);

// Check Age
// Write a function checkAge(age) that:
// Prints "Minor" if age is less than 18
// Prints "Adult" otherwise

function checkAge(age){

    if(age<18){
        console.log("Minor");
    }else{
        console.log("Adult");
    }
}

checkAge(16);

// Largest of Two Numbers
// Write a function findLargest(a, b) that:
// Prints which number is greater
// If equal, print "Both numbers are equal"

function findLargest(a, b){
    if(a>b){
        console.log("a is greater");
    }else if(b>a){
        console.log("b is greater");
    }else{
        console.log("Both numbers are equal");
    }
}

findLargest(2, 1);

function test() {
    console.log("Hello");
}

console.log(test());

function test() {
    return 5;
    console.log("hellow");
}

console.log(test());

let x = 5;
let y = x;

y = 10;

console.log(x);