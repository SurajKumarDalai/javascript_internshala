// 1. Print Array Elements
const numbers = [10,20,30,40];

for(let i = 0; i < numbers.length; i++){

    console.log(numbers[i]);

}

// 2. Find Sum of Array ⭐ IMPORTANT
const num = [1,2,3,4,5];

let sum = 0;

for(let i = 0; i < num.length; i++){

    sum = sum + num[i];

}

console.log(sum);

// 3. Find Largest Number ⭐⭐⭐⭐⭐
const numbers = [10,50,20,80,30];

let largest = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > largest){

        largest = numbers[i];

    }

}

console.log(largest);

// 4. Print Even Numbers ⭐
const numbers = [1,2,3,4,5,6];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 === 0){

        console.log(numbers[i]);

    }

}

// 5. Double Array Elements ⭐
const numbers = [1,2,3];

for(let i = 0; i < numbers.length; i++){

    numbers[i] = numbers[i] * 2;

}

console.log(numbers);

// 6. Add Elements Using push() ⭐
const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);

// 7. Remove Last Element Using pop() ⭐
const numbers = [1,2,3];

numbers.pop();

console.log(numbers);

// 8. Reverse Array Using Loop ⭐ IMPORTANT
const numbers = [1,2,3,4];

for(let i = numbers.length - 1; i >= 0; i--){

    console.log(numbers[i]);

}
Output
4
3
2
1
9. Count Array Elements ⭐
const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);

// 10. Linear Search ⭐⭐⭐⭐⭐
const numbers = [10,20,30,40];

let target = 30;

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] === target){

        console.log("Found");

    }

}