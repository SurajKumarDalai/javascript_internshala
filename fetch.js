// Write a JavaScript function fetchData that:

// Returns a Promise.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// Resolves the Promise with a success message "Data fetched successfully!" if the simulated request is successful.
// Rejects the Promise with an error message "Error fetching data!" if the simulated request fails.
// Additionally, create a function processData that:

// Calls the fetchData function.
// Uses .then() to handle the successful resolution of the Promise and logs the success message to the console.
// Uses .catch() to handle the rejection of the Promise and logs the error message to the console.

function fetchData(success) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if(success) {

                resolve("Data fetched successfully!");

            } else {

                reject("Error fetching data!");

            }

        }, 2000);

    });

}

function processData(success) {

    fetchData(success)

    .then(function(result) {

        console.log(result);

    })

    .catch(function(error) {

        console.log(error);

    });

}

processData(true);

processData(false);