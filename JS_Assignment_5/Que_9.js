// ** Using`setInterval` with Promises:**
//     - Write a function called `repeatAction` that takes an action(a function), an interval(in milliseconds), and a duration(in
//         milliseconds).Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration.Return a Promise that resolves when the repeating action stops.

function randomDelayMessage(message) {
    // Generate a random delay between 1000ms (1 second) and 5000ms (5 seconds)
    let randomDelay = Math.floor(Math.random() * 4000) + 1000;

    wait(randomDelay).then(() => {
        console.log(message);
    });
}

// Example usage:
randomDelayMessage("This message is delayed by a random time!");
