// Example 01

function fetchData() {

    return new Promise(function(resolve){

        setTimeout(function(){

            resolve("Data Loaded");

        }, 2000);

    });

}
async function getdata(){

    const result = await fetchData();
        console.log(result);
}
getdata();

// Example 2 — Error Handling ⭐ IMPORTANT

function fetchData() {

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            reject("Server Error");

        }, 2000);

    });

}
async function getData() {

    try {

        const result = await fetchData();

        console.log(result);

    } catch(error) {

        console.log(error);

    }

}

getData();

// Example 3 — Login System

function loginUser(success) {

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            if(success){

                resolve("Login Successful");

            } else {

                reject("Invalid User");

            }

        }, 2000);

    });

}

async function checkLogin() {

    try {

        const result = await loginUser(true);

        console.log(result);

    } catch(error) {

        console.log(error);

    }

}

checkLogin();