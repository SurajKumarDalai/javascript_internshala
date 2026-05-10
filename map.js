let arr = [1, 2, 3, 4, 5];

let result = arr.map((value) => {
    return value * value ;
});

console.log (result);
console.log(arr);

// Given an array names, create a new array nameLengths using the map method where each element in nameLengths is the length 
// of the corresponding string in names.

// Input: names = ['Alice', 'Bob', 'Charlie', 'David']
// Output: [5, 3, 7, 5]

let names = ['Alice', 'Bob', 'Charlie', 'David'];

const nameLengths = names.map((value) => {
    return value.length;
});
console.log (nameLengths);


