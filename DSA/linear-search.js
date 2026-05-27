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