// 1. Delayed Login System ⭐

// Create a function loginUser that:

// returns a Promise
// waits 2 seconds
// if isUser = true
// resolve "Login Successful"
// else
// reject "Invalid User"

function loginUser(isUser){

    return new Promise (function(resolve,reject){
    
        setTimeout(function(){

        if(isUser === true){
    
            resolve("Login Successful");
    
        }else{
    
            reject("Invalid User");
    
        }
    
    },2000);
});

}

loginUser(true)
    .then(function(success){
        console.log(success);
    })
    .catch(function(error){
        console.log(error);
    });





