// Write a JavaScript function fetchAnyData that:

// Creates three separate functions (fetchData1, fetchData2, fetchData3) that each return a Promise.
// Each function simulates a network request using setTimeout to delay the operation by different durations:
// fetchData1: Rejects after 1 second with a message "Error from fetchData1".
// fetchData2: Resolves after 2 seconds with a message "Data from fetchData2".
// fetchData3: Resolves after 3 seconds with a message "Data from fetchData3".
// Uses Promise.any() to execute all three Promises concurrently.
// Logs the result of the first successfully resolved Promise.
// Catches and logs the error if all Promises are rejected.

function fetchData1() {

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            reject("Error from fetchData1");

        },1000);

    });  // Return a Promise that resolves after 1 second
}

function fetchData2() {
    return new Promise(function(resolve, reject){

        setTimeout(function(){

            resolve("Data from fetchData2");

        },2000);

    }); // Return a Promise that resolves after 2 seconds
}

function fetchData3() {
    return new Promise(function(resolve, reject){

        setTimeout(function(){

            resolve("Data from fetchData3");

        },3000);

    }); // Return a Promise that resolves after 3 seconds
}

function fetchAllData() {
    Promise.any([fetchData1(),fetchData2(),fetchData3()]) // Use Promise.all() to execute all fetchData functions concurrently

    .then(function(result){
        console.log(result);
    })// Handle the resolved results

    .catch(function(error){
        console.log(error);
    });// Handle any rejected Promise
}

fetchAllData();