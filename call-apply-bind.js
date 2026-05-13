// Write a JavaScript function createGreeting that:

// Takes two parameters: firstName (string) and lastName (string).
// Defines an object person with properties firstName and lastName.
// Defines a function greet within createGreeting that logs a greeting message using this.firstName and this.lastName.
// Uses call, apply, and bind to invoke the greet function with different contexts:
// callGreet: Uses call to invoke greet with the person object as context.
// applyGreet: Uses apply to invoke greet with the person object and an array of arguments.
// bindGreet: Uses bind to create a bound function bindGreet that can be invoked later with the person object.

function createGreeting(firstName, lastName) {

    // Object
    const person = {
        firstName,
        lastName
    };

    // Function
    function greet(city, country) {
        console.log(
            `Hello, I am ${this.firstName} ${this.lastName} from ${city}, ${country}`
        );
    }

    // call()
    console.log("Using call:");
    greet.call(person, "Keonjhar", "India");

    // apply()
    console.log("Using apply:");
    greet.apply(person, ["Bhubaneswar", "India"]);

    // bind()
    console.log("Using bind:");
    const bindGreet = greet.bind(person, "Cuttack", "India");

    bindGreet();
}

// Function Call
createGreeting("Suraj", "Dalai");