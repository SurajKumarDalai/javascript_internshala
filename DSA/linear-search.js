let numbers =[10,20,30,40];

let linearSearch = function(numbers, target){

    for(let i=0; i<numbers.length; i++){

        if(numbers[i] === target){

            return i;
        }
    }

    return -1;
}
console.log(linearSearch(numbers,30));

// Count Occurrences of Target

let num = [1,2,3,2,4,2,5];

let linearCount = function(number, target){

    let count = 0;

    for(let i=0; i<num.length; i++){

        if(num[i] === target){

            count++;
        }
    }
    return count;
}
console.log(linearCount(num,2));

// Find Smallest ODD Number
// [8, 3, 11, 2, 5, 7]
// Return: smallest ODD number
// Output: 3

// Create function:smallestOdd()
// Odd condition: number % 2 !== 0
// let minOdd = Infinity;

let oddnum = [8, 3, 11, 2, 5, 7];

let smallestOdd = function(number, target){

    let minOdd = Infinity;

    for(let i=0; i<oddnum.length; i++){

        if(oddnum[i] % 2 !== 0){

            if(oddnum[i] < minOdd){

                minOdd = oddnum[i]
            }
        }
    
    }
    return minOdd;
}
console.log(smallestOdd(oddnum));