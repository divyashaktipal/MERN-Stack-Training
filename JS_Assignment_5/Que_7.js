// ** Using`async/await` with Promises:**
//     - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods.Ensure the
// function logs each message with the specified delay

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedLogSequence(messagesAndDelays) {
    for (const item of messagesAndDelays) {
        console.log(item.message);
        await wait(item.delay);
    }
    console.log("All messages have been logged.");
}

// Example usage:
const messagesAndDelays = [
    { message: "Message 1", delay: 1000 },
    { message: "Message 2", delay: 2000 },
    { message: "Message 3", delay: 3000 }
];

delayedLogSequence(messagesAndDelays);
