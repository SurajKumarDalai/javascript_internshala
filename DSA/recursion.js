function countDown(n){

    if(n===0){
        return;
    }
    console.log(n);
    countDown(n - 1);
}
countDown(3);

// Example: Factorial

function factorialNum(m){

    if (m===1){
        return 1;
        }
        
        return m * factorialNum(m -1);
}
console.log(factorialNum(5));

// Print numbers from 1 to n without using loops
function printNumbers(n) {
    if (n === 0) return;

    printNumbers(n - 1);

    console.log(n);
}

printNumbers(5);

// example
function test(n) {
    if (n === 0) return;

    console.log("A", n);

    test(n - 1);

    console.log("B", n);
}

test(3);

// test(3)
// │
// ├─ A 3
// │
// ├─ test(2)
// │   │
// │   ├─ A 2
// │   │
// │   ├─ test(1)
// │   │   │
// │   │   ├─ A 1
// │   │   │
// │   │   ├─ test(0)
// │   │   │   └─ return
// │   │   │
// │   │   └─ B 1
// │   │
// │   └─ B 2
// │
// └─ B 3

// Find Factorial of a Number
function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

// Sum of Numbers from 1 to n

function sumNum(n){

    if (n === 1){
        return 1;
    }
    return n + sumNum(n - 1);
}
console.log(sumNum(5));