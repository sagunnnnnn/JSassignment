// 1.Declare a variable fullName and assign your full name. Print it to the console.

let fullName = "Sagun Adhikari"
console.log("My full name is:",fullName)

// Declare a constant COUNTRY with the value 'Nepal' and print it.

const COUNTRY = 'Nepal'
console.log('My country name is', COUNTRY)

// Create variables age (number), isStudent (boolean), and height (float). Print their values and types.

let age = 7
const isStudent = true
height = 1.1
console.log(`I am ${age} years old.`,`type of age is ${typeof(age)}`)
console.log(`I am ${height}inch tall `,`type of height is ${typeof(height)}`)
console.log(` i am a student ${isStudent}`,`type of height is ${typeof(isStudent)}`)

// What is the result of adding a string "5" and a number 5? Write code to test it.

console.log("5"+5) // It gets concatenate

// Declare a variable city without assigning a value. What is its type and value?

let city;
console.log('type of city:', typeof(city)) // Undefined

// Use typeof to check and print the types of true, 42, "hello", null, and undefined.

console.log(typeof(true))
console.log(typeof(42))
console.log(typeof("hello"))
console.log(typeof(null))
console.log(typeof(undefined))

// Create a constant object user with properties name and age. Change the age property and print the object.
const user = {
    name : "sagun",
    age : 2
}
user.name = "hero"
console.log(user) // name -->  changes into hero 

// Try to reassign a constant variable PI. What happens?
const PI = 3.14
// PI = 4
// console.log(PI) it throws error cause we cannot change value of const variable

// What will the expression typeof 10 + 5 return? Write code and explain.
console.log(typeof 10 + 5);  // Outputs: "number5"
// 
// answer = It will add type of 10 which is number then add it with 5 which is number5

console.log(undefined+"e")
console.log(NaN+"e")
console.log(null+"e")
hello how are you
k ch adfhasdkjf
i am form ghroahi dang
