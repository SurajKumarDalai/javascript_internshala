// 1. Create a Simple Promise ⭐

// Create a promise that:

// resolves with "Success"
// then prints the result using .then()

const myPromise = new Promise (function(resolve){
    resolve("success");
});

myPromise.then(function(result){
    console.log (result);
});

// 2. Promise Reject Example ⭐

// Create a promise that:

// rejects with "Something went wrong"
// handle error using .catch()

const myPromise = new Promise(function (resolve,reject){
    reject("Something went wrong");
});
myPromise.catch(function(error){
    console.log(error);
});

// 3. Promise with setTimeout ⭐ IMPORTANT

// Create a promise that:

// waits 2 seconds using setTimeout()
// resolves "Data Loaded"

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("Data Loaded");
    },2000);
});
myPromise.then(function(success){
    console.log (success);
});

// 4. Success or Failure Promise ⭐
// Create a variable:
// let isLoggedIn = true;
// If:
// true → resolve "Login Successful"
// false → reject "Login Failed"
// Use:
// .then()
// .catch()

const myPromise = new Promise (function(resolve,reject){
    let isLoggedIn = true;
    if(isLoggedIn){
        resolve("Login Successful");
    }else{
        reject("Login Failed");
    }
});
myPromise.then(function(success){
    console.log(success);
})
.catch(function(error){
    console.log(error);
});

// 5. Delayed Welcome Message ⭐
// Create a promise that:
// waits 3 seconds
// resolves "Welcome Suraj"
// Print result using .then().

const myPromise = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve("Welcome Suraj");
    },3000);
});
myPromise.then(function(success){
    console.log(success);
});

// Write a JavaScript function simplePromiseDemo that:

// Returns a Promise.
// Logs "Promise is pending..." immediately when the function is called.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// After the delay, resolves the Promise with a success message "Promise fulfilled: Data received!" if the operation is successful.
// After the delay, rejects the Promise with an error message "Promise rejected: Error occurred!" if the operation fails.

function simplePromiseDemo(success) {

    return new Promise (function(resolve, reject){
        console.log("Promise is pending...");

        setTimeout(function(){
            if(success){
                resolve("Promise fulfilled: Data received!");
            }else{
                reject("Promise rejected: Error occurred!");
            }
        },2000);
    });
}
simplePromiseDemo(true)
.then(function(success){
    console.log(success);
})
.catch(function(error){
    console.log(error);
});


