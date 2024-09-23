// **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.

function delayedMessage(message, delay) {
    setTimeout(function () {
        console.log(message);
    }, delay);
}
delayedMessage("Hello, this is a delayed message!", 2000);