// Question 1 — Delayed Welcome Message ⭐

// Create a function welcomeUser that:

// returns a Promise
// waits 2 seconds
// resolves:
// "Welcome Suraj"

// Then create an async function that:

// uses await
// prints result using console.log()

function welcomeUser(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve("Welcome Suraj");

        },2000);
    });
}
async function getData(){

    const result = await welcomeUser();
    console.log (result);
}
getData();

// Question 4 — File Download ⭐

// Create a function downloadFile that:

// waits 2 seconds
// if internet available
// resolve "File Downloaded"
// else
// reject "Download Failed"

function downloadFile(available){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            if(available){

                resolve("File Downloaded");

            }else{

                reject("Download Failed");
            }
            
        },2000);

    });
    
}
async function getfile(){

    try{

        const result = await downloadFile(true)
        console.log(result);
    }catch(error){
        console.log (error);
    }
}

getfile();