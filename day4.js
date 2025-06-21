// Write a JS if-else that checks whether a number is even or odd.
let number1 = 7
if (number1%2===0){
    console.log('Number is even')
}else {
    console.log("Number is odd")
} //  Number is odd

// Write a JS if-else that checks whether a number is positive, negative, or zero.

let number = -1
if (number===0){
    console.log('Number is zero')
} else if (number<0){
    console.log("Number is negative")
} else{
    console.log("Number is positive")
}

// Write a JS if-else that checks if a person is eligible to vote (age ≥ 18).
let age = 17
if (age>=18){
    console.log("You are  eligible to vote")
} else{
    console.log("You are not eligible to vote")
}

// Write a JS if-else to compare two numbers and print the greater one.

const a = 9
const b = 10
if (a>b) console.log("number a is greater")
if (b>a) console.log('number b is greater')

// Write a JS if-else to check whether a year is a leap year or not.
const year = 1900
if (year%4===0){
    if (year%100===0){
        if (year%400===0){
            console.log("Its a leap year")
        } else {
            console.log('Its not a leap year')
        }
    } else {
        console.log("Its a leap a year")
    }
} else{
    console.log('Its not a leap year')
}
