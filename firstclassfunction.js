// function sayHi() {
//     console.log("Hi");
//   }
  
//   function execute(fn) {
//     fn();
//   }
  
//   execute(sayHi);


//   function sayHello() {
//     return function() {
//       console.log("Hello");
//     };
//   }
  
//   const fn = sayHello();
  
//   fn();

// function outer(fn) {
//     console.log("Outer");
//     fn();
//   }
  
//   function inner() {
//     console.log("Inner");
//   }
  
//   outer(inner());


function greet() {
    return "Hello";
  }
  
  function execute(fn) {
    console.log(fn);
  }
  
  execute(greet);
  execute(greet());