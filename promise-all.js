// example
const promise1 = new Promise(function(resolve){

    setTimeout(function(){

        resolve("First Data");

    }, 1000);

});

const promise2 = new Promise(function(resolve){

    setTimeout(function(){

        resolve("Second Data");

    }, 2000);

});

Promise.all([promise1, promise2])

.then(function(result){

    console.log(result);

});

// Write a JavaScript function fetchAllData that:

// Creates three separate functions (fetchData1, fetchData2, fetchData3) that each return a Promise.
// Each function simulates a network request using setTimeout to delay the operation by different durations:
// fetchData1: Resolves after 1 second with a message "Data from fetchData1".
// fetchData2: Resolves after 2 seconds with a message "Data from fetchData2".
// fetchData3: Resolves after 3 seconds with a message "Data from fetchData3".
// Uses Promise.all() to execute all three Promises concurrently.
// Logs the results if all Promises are resolved.
// Catches and logs the error if any Promise is rejected.
// Expected Output:

// ["Data from fetchData1", "Data from fetchData2", "Data from fetchData3"]

function fetchData1() {

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            resolve("Data from fetchData1");

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
    Promise.all([fetchData1(),fetchData2(),fetchData3()]) // Use Promise.all() to execute all fetchData functions concurrently

    .then(function(result){
        console.log(result);
    })// Handle the resolved results

    .catch(function(error){
        console.log(error);
    });// Handle any rejected Promise
}

fetchAllData();


// Online Shopping Order System

// Write a JavaScript function placeOrder that:

// returns a Promise
// waits 2 seconds using setTimeout()
// if isOrderPlaced = true
// resolve "Order Placed Successfully"
// else
// reject "Order Failed"

// Create another function processOrder that:
// calls placeOrder
// uses:
// .then()
// .catch()
// logs output to console

function placeOrder(isOrderPlaced){
    
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            
            if(isOrderPlaced === true){
            
                resolve("Order Placed Successfully");
                }else{

                    reject("Order Failed");

                }

        },2000);

    });

};

function processOrder(){

    placeOrder(true)

    .then(function(result){
        console.log(result);
    })

    .catch(function(error){
        console.log(error);
    });
};

processOrder();

