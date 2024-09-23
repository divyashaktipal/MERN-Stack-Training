//  ** Combining`setTimeout` and Promises:**
//     - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds.Use `setTimeout` and a Promise to implement this

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomDelayMessage(message) {
    // Generate a random delay between 1000ms (1 second) and 5000ms (5 seconds)
    let randomDelay = Math.floor(Math.random() * 4000) + 1000;

    wait(randomDelay).then(() => {
        console.log(message);
    });
}

// Example usage:
randomDelayMessage("This message is delayed by a random time!");
