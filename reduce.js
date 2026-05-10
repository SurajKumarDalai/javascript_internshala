// Implement a function named sumOfSquares that calculates the sum of squares of all elements in an array using reduce method.

// Input : arr = [1,2,3,4]

// Output : 30

// Explaination :

// 1*1 + 2*2 + 3*3 + 4*4 = 30

function sumOfSquares(arr) {
	
    return arr.reduce((acc, value) => acc + value * value, 0);
}

console.log(sumOfSquares([1, 2, 3, 4]));



// Write a JavaScript function sumEvenNumbers(arr) that returns the sum of all even numbers using reduce().

// Input
// [1, 2, 3, 4, 5, 6]
// Output
// 12

function sumEvenNumbers(arr) {

    return arr.reduce((acc, value) => {

        if(value % 2 === 0) {
            return acc + value;
        }

        return acc;

    }, 0);

}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));


// Write a JavaScript function findLargest(arr) that returns the largest number in the array using reduce().

function findLargest(arr) {

    return arr.reduce ( (acc,value) => {

        if (value > acc){
            return value;
        }
        return acc;
    }, 0);

}

console.log(findLargest([4, 9, 2, 15, 6]));

// Write a function countPositive(arr) that counts how many positive numbers are present using reduce().

// Input
// [-2, 5, -1, 8, 0, 3]
// Output
// 3

function countPositive(arr) {

    return arr.reduce( (acc,value) => {

        if (value > 0){
            return acc + 1;
        }
        return acc;
    }, 0);

}

console.log(countPositive([-2, 5, -1, 8, 0, 3]));

// Write a function countWords(words) that counts the total number of characters in all words using reduce().

// Input
// ["hi", "hello", "bye"]
// Output
// 10

function countWords(words) {

return words.reduce( (acc,value) => {
    return value.length + acc;
}, 0);

}

console.log(countWords(["hi", "hello", "bye"]));