// Write a JavaScript function createCounter that:

// Initializes a property count to 0 within an object counterObj.
// Defines a function increment within createCounter that:
// Increments this.count by 1.
// Logs the current value of this.count.
// Returns the increment arrow function.

function createCounter() {

    // Object
    const counterObj = {
        count: 0
    };

    // Arrow function
    const increment = () => {
        this.count += 1;
        console.log(this.count);
    };

    // Bind this to counterObj
    const boundIncrement = increment.bind(counterObj);

    // Return function
    return boundIncrement;
}

// Create counter
const counter = createCounter();

// Function calls
counter();
counter();
counter();