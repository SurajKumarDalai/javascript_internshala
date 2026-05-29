let insertionSort = function(arr){

    // Start from index 1 because index 0 is assumed sorted
    for(let i = 1; i < arr.length; i++){

        // Store the current element that we want to insert
        let current = arr[i];

        // Start checking from the element just before current
        let j = i - 1;

        // Move left while:
        // 1. We are inside the array
        // 2. Left element is bigger than current
        while(j >= 0 && arr[j] > current){

            // Shift bigger element one position to the right
            arr[j + 1] = arr[j];

            // Move further left
            j--;

        }

        // Insert current element into its correct position
        arr[j + 1] = current;
    }

    // Return the sorted array
    return arr;
}

console.log(insertionSort([5,3,4,1]));

// example 2

let inSort = function(nums){

    for (let i = 1; i < nums.length; i++){

        let current = nums[i];

        let j = i -1;

        while(j >= 0 && nums[j]> current){

            nums[j+1] = nums[j];

            j--;
        }
        nums[j+1] = current;
    }
    return nums;
}
console.log(inSort([8,5,9,4,1]));