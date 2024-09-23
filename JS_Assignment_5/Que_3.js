//  ** Clearing Intervals:**
//     - Extend the `countdown` function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero.Ensure the interval is cleared after the countdown completes

function countdown(number, callback) {
    let currentNumber = number;

    let intervalId = setInterval(function () {
        console.log(currentNumber);
        currentNumber--;

        if (currentNumber < 0) {
            clearInterval(intervalId);
            console.log("Countdown complete!");
            if (callback) {
                callback();
            }
        }
    }, 1000);
}

// Example usage:
function onCountdownComplete() {
    console.log("Callback executed: Countdown has finished!");
}

countdown(10, onCountdownComplete);
