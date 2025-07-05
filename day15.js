// day15.js
// Day 15 Assignment - setTimeout, setInterval, and Callback Functions

//  setTimeout example (runs once after delay)
console.log("setTimeout example started...");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

// setInterval example (runs repeatedly at intervals)
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log("setInterval running... count:", count);
    if (count === 3) {
        clearInterval(timer); // stops the interval
        console.log("setInterval stopped after 3 times");
    }
}, 1000); // runs every 1 second

//  Callback function example
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback(); // run callback function
}

function endMessage() {
    console.log("Callback function ran after greeting.");
}

greetUser("Sagun", endMessage);
