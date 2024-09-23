//  ** Chaining Promises:**
//     - Create a function `delayedLogSequence` that takes an array of messages and delays(in milliseconds).The function
//     should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.


function delayedLogSequence(messagesAndDelays) {
    let promise = Promise.resolve();

    messagesAndDelays.forEach(item => {
        promise = promise.then(() => {
            console.log(item.message);
            return wait(item.delay);
        });
    });

    return promise;
}

// Example usage:
const messagesAndDelays = [
    { message: "Message 1", delay: 1000 },
    { message: "Message 2", delay: 2000 },
    { message: "Message 3", delay: 3000 }
];

delayedLogSequence(messagesAndDelays).then(() => {
    console.log("All messages have been logged.");
});
