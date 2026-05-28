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