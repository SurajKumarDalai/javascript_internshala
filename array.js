let fruit1 = "orange";
let fruit2 = "mango";
let fruit3 = "apple";

// Array literal
const fruits =["orange", "mango", "apple"];

fruits[0] = "lemon";

console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits.length);

//concat() methhod  -->CON-CAT = CONNECT ARRAYS


// example 01
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4]

// ex 02
// Multiple Arrays
let a = [1];
let b = [2];
let c = [3];

let result = a.concat(b, c);

console.log(result); // [1,2,3]

// ex 03
// Add Values Directly
let arr = [1, 2];

let result = arr.concat(3, 4);

console.log(result); // [1,2,3,4]

// ex 04
let boys = ["Rahul", "Aman"];
let girls = ["Neha", "Riya"];

let students = boys.concat(girls);

console.log(students);
// ["Rahul","Aman","Neha","Riya"]



// flat() METHOD
// flat() is used to convert nested arrays into a single (flat) array
// remove brackets inside array

let arr = [1, 2, [3, 4]];

let result = arr.flat();

console.log(result); // [1, 2, 3, 4]  It removes one level of nesting

// Nested More Than Once
let arr = [1, [2, [3, 4]]];

console.log(arr.flat()); // [1, 2, [3, 4]] ❌ still nested

console.log(arr.flat(2)); // [1, 2, 3, 4] ✅ flat(2) = remove 2 levels

// Infinity = flatten completely
let arr = [1, [2, [3, [4]]]];

console.log(arr.flat(Infinity)); // [1, 2, 3, 4]



// indexOf() METHOD
// indexOf() is used to find the position (index) of an element in an array.

let arr = [1, 2, 2, 3];

console.log(arr.indexOf(2)); // 1

