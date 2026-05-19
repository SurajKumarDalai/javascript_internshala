// Write a JavaScript function demonstrateAsync that:

// Logs "Start" to the console.
// Uses setTimeout() to log "Middle" to the console after 2 seconds.
// Immediately logs "End" to the console after setting the timeout.

function demonstrateAsync() {
    console.log("start");
    
    setTimeout(function() {
        console.log("middle");
    }, 2000);
    console.log("end");
    
    }
    
    demonstrateAsync();// Call demonstrateAsync