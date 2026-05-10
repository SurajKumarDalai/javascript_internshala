// Write a function called isAllPositive that checks if all elements in an array are positive numbers Using every method.
// It should return true if all elements are positive; otherwise, it should return false.

// Input : arr = [1,2,3,4]

// Output : true

function isAllPositive(arr) {
	
    return arr.every(value => value>0);

}
console.log(isAllPositive([1, 2, -3, 4]));

// Create a function named findNegative that finds the first negative number in an array using Array find().
// If negative number exists, it should print -1 else print all the elements of the array.

function findNegative(arr) {
	
    return arr.find(value => value < 0);

    if(result !== undefined) {
        return result;
    }

    return arr;

}
const Array = [1, 2, 3, 4, -5];
console.log(findNegative(Array));