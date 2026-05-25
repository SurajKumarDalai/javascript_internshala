// Find Maximum Number
const numbers = [10, 50, 20, 80, 30];

let max = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > max){

        max = numbers[i];

    }

}

console.log("Maximum:", max);

// Find Minimum Number
const numbers = [10, 50, 20, 80, 5];

let min = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] < min){

        min = numbers[i];

    }

}

console.log("Minimum:", min);

// Find BOTH Maximum and Minimum
const numbers = [10, 50, 20, 80, 5];

let max = numbers[0];

let min = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > max){

        max = numbers[i];

    }

    if(numbers[i] < min){

        min = numbers[i];

    }

}

console.log("Maximum:", max);

console.log("Minimum:", min);