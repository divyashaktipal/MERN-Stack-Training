// **Basic `setInterval`:**
// - Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.

function countdown(number) {
    let currentNumber = number;

    let intervalId = setInterval(function () {
        console.log(currentNumber);
        currentNumber--;

        if (currentNumber < 0) { clearInterval(intervalId); console.log("Countdown complete!"); }
    }, 1000);
}
countdown(10);