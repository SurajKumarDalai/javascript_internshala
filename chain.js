// example 01:-

let arr = [1, 2, 3, 4, 5];

let result = arr
    .filter(value => value % 2 !== 0)
    .map(value => value * 2)
    .reduce((acc, value) => acc + value, 0);

console.log(result);

// example 02:-

let names = ["suraj", "raj", "rahul", "aman"];

let resultnames = names
    .filter(value => value.length > 4)
    .map(value => value.toUpperCase())
    .reduce((acc, value) => acc + value.length, 0);

console.log(resultnames);


// Given an array numbers, filter out even numbers, square each remaining number, 
// and then calculate the sum of all squared numbers using map, filter, and reduce methods.

// Input: arr = [1, 2, 3, 4, 5, 6]

// Output: 56
// Explaination:2^2 + 4^2 + 6^2  = 56

function sumOfSquaredEvens(numbers) {
    
    return numbers.filter(value => value % 2 === 0)
    .map(value => value * value)
    .reduce((acc, value) => acc + value, 0);
    
    }
    
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(sumOfSquaredEvens(numbers));