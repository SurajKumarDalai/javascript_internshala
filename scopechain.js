// Write a JavaScript function showScope that:

// Defines a variable x and sets it to 10
// Defines a function first that:
// Defines a variable y and sets it to 20
// Defines a nested function second that:
// Defines a variable z and sets it to 30
// Logs x, y, and z
// Calls second
// Calls first
// Calls showScope in the global scope

function showScope(){
    let x = 10;

    function first(){
        let y = 20;

        function second(){
            let z = 30;
            console.log (x, y, z);
        }
        second();
    }
    first();
}
showScope();


// Write a JavaScript function scopeExample that:

// Defines a variable a = 5
// Defines a function outer that:
// Defines b = 15
// Defines function inner that:
// Defines c = 25
// Logs a + b + c
// Calls inner
// Calls outer
// Calls scopeExample

function scopeExample(){
    let a = 5;

    function outer(){
        let b = 15;

        function inner(){
            let c = 25;
            console.log (a+b+c);
        }
        inner();
    }
    outer();
}
scopeExample();

// Write a JavaScript function testScope that:

// Defines a variable name = "JS"
// Defines a function parent that:
// Defines version = "ES6"
// Defines function child that:
// Logs name and version
// Calls child
// Calls parent
// Calls testScope

function testScope(){
    const name= "js";

    function parent(){
        const version = "ES6";

        function child(){
            console.log(name , version)
        }
        child();
    }
    parent();
}
testScope();