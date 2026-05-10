1. for Loop

Used when we need full control of index.

let arr = [10, 20, 30];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
Important
arr[i]

means:

👉 value at index i

2. for...of

Easy way to loop through values.

let arr = [10, 20, 30];

for(let value of arr) {
    console.log(value);
}
Gives

✅ Values directly

3. forEach()

Runs function for every array item.

let arr = [10, 20, 30];

arr.forEach((value) => {
    console.log(value);
});
Important

❌ Does not return new array

4. map()

Creates new transformed array.

let nums = [1, 2, 3];

let doubled = nums.map((value) => {
    return value * 2;
});

console.log(doubled);
Output
[2, 4, 6]
Important

✅ Returns new array

5. filter()

Keeps values based on condition.

let nums = [1, 2, 3, 4, 5];

let even = nums.filter((value) => {
    return value % 2 === 0;
});

console.log(even);
Output
[2, 4]
Quick Difference Table
Method	Purpose	Returns New Array
for	Full control	❌
for...of	Easy looping	❌
forEach()	Run code for each item	❌
map()	Transform values	✅
filter()	Select values	✅
Most Important Concepts
Array Length
arr.length

Total number of elements.

Array Index

Indexes start from 0.

let arr = [10,20,30];

arr[0] // 10
arr[1] // 20
arr[2] // 30
80/20 Learning Order
for
for...of
forEach()
map()
filter()

After this learn:

reduce()
find()
some()
every()
Easy Memory Trick
Method	Meaning
for	Control
for...of	Simple
forEach()	Run
map()	Change
filter()	Select