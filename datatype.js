// Data Types
// │
// ├── Primitive
// │   ├── Number - 
            //Used for numbers (integer + decimal)
            // Includes positive, negative, decimals
            // No separate int/float in JS        
// │   ├── String
            // Used for text
            // Written inside quotes
            //  Can use " " or ' '
// │   ├── Boolean 
            // Used for true or false
            // Mostly used in conditions (if, while)
// │   ├── Undefined
            // A variable that is declared but not given a value
            // JavaScript gives this automatically
// │   ├── Null
            // Represents nothing / empty value (intentional)
            // You set it yourself
            // Means “no value on purpose”
// │   ├── BigInt
            // Used for very large numbers
            // Ends with n
            // Rarely used by beginners
// │   └── Symbol
            // Used for unique values
            // Mostly for advanced use
            // Not needed right now — just know it exists
// │
// └── Non-Primitive
//     ├── Object
            // Stores data in key : value pairs
            // Most important non-primitive type
            // Used everywhere
//     ├── Array
            // Stores multiple values in a list
            // ✔️ Index based (starts from 0)
            // ✔️ Technically an object
//     └── Function
            // A block of reusable code
            // ✔️ Functions are also objects in JS


// Primitive Datatypes

// Number
let a = 10;

// String

let x = "internshala";

// Boolean

let y = false;

// null

let z = null;

//  undefined

let age;

// BigInt

let salary = BigInt(12345678999999);

// Symbol

let value = Symbol("123");


// Non-Primitive Datatypes

// Object

const user = {name: "Suraj", age: 23};

const fruits = {"mango", "apple", "guava"};

// typeof

console.log(typeof(a));

let person = {
    name: "Suraj",
    age: 21
  };