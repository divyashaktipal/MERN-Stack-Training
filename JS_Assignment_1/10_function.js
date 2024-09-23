// Switch Statement:
// Create a function `getDayType` that takes a number(1 - 7) as an argument and returns:
// - "Weekend" if the number is 6(Saturday) or 7(Sunday),
// - "Weekday" if the number is between 1 and 5.
// Use a `switch` statement to implement this logic.


function getDayType(day) {
let dayType;

switch (day) {
case 6:
case 7:
dayType = "Weekend";
break;
case 1:
case 2:
case 3:
case 4:
case 5:
dayType = "Weekday";
break;
default:
dayType = "Invalid day";
}
return dayType;
}

console.log(getDayType(1));
console.log(getDayType(6));
console.log(getDayType(8));