// Running sum of 1D Array

let num = [1,2,3,4];

var runsum = function(num){
    let result = [];
    let sum = 0;

    for (let i=0; i<num.length; i++){
        sum = sum + num[i];
        result.push(sum);
    }
    return result;
}
console.log(runsum(num));

// Count Even Numbers
// [1,2,3,4,5,6]
// Output : 3
// number % 2 === 0

let nums = [1,2,3,4,5,6];

var countEvenNumbers = function(nums){

    let count = 0;
    
    for(let i =0; i<nums.length; i++){

        if (nums[i] % 2 ===0){

            count++;


        }

    }

    return count;

}
console.log(countEvenNumbers(nums));

// Count Positive Numbers
// [-1, 2, -3, 4, 5, -6]
// output: 3
// number > 0

let arr = [-1, 2, -3, 4, 5, -6];

let countPositiveNumbers= function(arr){

    let counts = 0;
    
    for(let i=0; i<arr.length; i++){

        if(arr[i]>0){

            counts++;

        }
    }

    return counts;
}
console.log(countPositiveNumbers(arr));

// Find Largest EVEN Number
// Given an array:
// [3, 8, 12, 5, 7, 10]
// Expected Output:
// 12
// Even number condition:
// num % 2 === 0
// let maxEven = -Infinity;

let eve = [3, 8, 12, 5, 7, 10];

let largeEven = function(eve){

    let maxEven = -Infinity;

    for (let i=0; i<eve.length; i++){

        if(eve[i] % 2 ===0){

            if(eve[i] > maxEven){

                maxEven = eve[i];

            }
        }
    }
    return maxEven;
}
console.log(largeEven(eve));