let binarySearch = function(arr, target){

    let left = 0;    //Start of array.

    let right = arr.length - 1;    //End of array

    while(left <= right){

        let mid = Math.floor((left + right) / 2);   //Find middle index

        if(arr[mid] === target){      //If equal: FOUND

            return mid;

        }

        else if(arr[mid] < target){

            left = mid + 1;      //If target bigger: Search RIGHT half

        }

        else{

            right = mid - 1;      //If target smaller: Search LEFT half

        }

    }

    return -1;     // Target value was NOT found

}

console.log(binarySearch([10,20,30,40,50], 50));

// Find Target Using Binary Search

let findtarget = function(num, target){

    let left = 0;

    let right = num.length - 1;

    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        if(num[mid] === target){

            return mid;

        }

        else if(num[mid] > target){

            right = mid - 1;

        }

        else{

            left = mid + 1;

        }

    }

    return -1;

}

console.log(findtarget([10,20,30,40,50,60,70], 50));