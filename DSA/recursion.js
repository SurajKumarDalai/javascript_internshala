function countDown(n){

    if(n===0){
        return;
    }
    console.log(n);
    countDown(n - 1);
}
countDown(3);

// Example: Factorial

function factorialNum(m){

    if (m===1){
        return 1;
        }
        
        return m * factorialNum(m -1);
}
console.log(factorialNum(5));