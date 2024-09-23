//  ** Promise - based Countdown:**
//     - Refactor the `countdown` function to return a Promise that resolves when the countdown completes.Use the`wait`
// function from the previous question to handle the delay between countdown steps.

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function countdown(number) {
    return new Promise(async (resolve) => {
        for (let i = number; i >= 0; i--) {
            console.log(i);
            await wait(1000);
        }
        console.log("Countdown complete!");
        resolve();
    });
}

// Example usage:
countdown(10).then(() => {
    console.log("Promise resolved!");
});
