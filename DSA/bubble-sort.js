let bubbleSort = function(arr){

    for(let i = 0; i < arr.length - 1; i++){        //i = Number of passes

        for(let j = 0; j < arr.length - 1 - i; j++){     // Compare neighboring elements

            if(arr[j] > arr[j + 1]){

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }

        }

    }

    return arr;

}

console.log(bubbleSort([5,3,4,1]));