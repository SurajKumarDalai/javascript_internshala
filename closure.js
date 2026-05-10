// Write a JavaScript function createCounter that:

// Returns a new function counter.
// The counter function, when called, increments an internal count variable by 1 and logs the current count.
// The count variable should be private and only accessible through the counter function.
// Additionally, create another function createAdder that:

// Takes a number x as an argument.
// Returns a new function that takes another number y and returns the sum of x and y.

function createCounter() {
    let count = 0;
  
    return function counter() {
      count++;
      console.log(count);
    };
  }
  
  function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  const counter = createCounter();

counter();
counter();
counter();

const add5 = createAdder(5);
console.log(add5(3)); 
console.log(add5(10));

// Write a JavaScript function createMultiplier that:

// Takes a number x as argument
// Returns a new function
// The returned function takes another number y
// The returned function multiplies x * y
// x should be remembered using closure

function createMultiplier(x){

        return function(y){
            return x * y;
        };
    }


const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(4)); // 12

// Write a JavaScript function createLogger that:

// Takes a string message
// Returns a new function
// The returned function logs the message
// The message should be remembered using closure

function createLogger(message){
    
    return function(){
        console.log (message);
    };
}


const logHello = createLogger("Hello");
logHello();

const logBye = createLogger("Bye");
logBye();


// Write a JavaScript function createPower that:

// Takes a number base
// Returns a new function
// The returned function takes exponent
// Returns base raised to the power of exponent
// base must be remembered using closure

function createPower(base){

    return function(exponent){
        return base ** exponent;
    };
}

const square = createPower(2);
console.log(square(3)); // 8

const cube = createPower(3);
console.log(cube(2)); // 9

function outer() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter1 = outer();
  const counter2 = outer();
  
  counter1();
  counter1();
  counter2();
  counter1();
  counter2();