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
const n = [10, 50, 20, 80, 5];

let min = n[0];

for(let i = 0; i < n.length; i++){

    if(n[i] < min){

        min = n[i];

    }

}

console.log("Minimum:", min);

// Find BOTH Maximum and Minimum
const num = [10, 50, 20, 80, 5];

let maximum = num[0];

let minimum = num[0];

for(let i = 0; i < num.length; i++){

    if(num[i] > maximum){

        maximum = num[i];

    }

    if(num[i] < minimum){

        minimum = num[i];

    }

}

console.log("Maximum:", maximum);
console.log("Minimum:", minimum);