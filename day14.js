// day14.js
// Day 14 Assignment: throw statement and JS modules (basic)

//  throw statement examples

// Example 1: divide
function divide(a, b) {
    if (b == 0) {
        throw "Can't divide by 0";
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // throws
} catch (e) {
    console.log("Error:", e);
}

// Example 2: age check
function checkAge(age) {
    if (age < 18) {
        throw "Too young!";
    }
    return "Allowed";
}

try {
    console.log(checkAge(16)); // throws
} catch (err) {
    console.log("Caught:", err);
}

// Example 3: only string allowed
function onlyString(x) {
    if (typeof x !== "string") {
        throw "Only strings allowed!";
    }
    return x.toUpperCase();
}

try {
    console.log(onlyString("hello")); // HELLO
    console.log(onlyString(123));     // throws
} catch (e) {
    console.log("Caught:", e);
}


//  simple module examples (function simulation + Math module)

// math "module"
function add(a, b) {
    return a + b;
}

function square(n) {
    return n * n;
}

// JavaScript built-in Math module
let randomNum = Math.floor(Math.random() * 100); // 0–99

// string "module"
function greet(name) {
    return "Hello " + name;
}

function isLongWord(word) {
    return word.length > 8;
}

console.log("Add:", add(2, 5));
console.log("Square:", square(4));
console.log("Random number (Math):", randomNum); // looks real
console.log(greet("Sagun"));
console.log("Is long word:", isLongWord("JavaScript"));
