// Q1: Use a switch statement to print the day of the week when given a number (1 to 7).
console.log("Using a switch statement to print the day of the week when given a number (1 to 7).")
console.log(" ")
let numbers = 1
switch(numbers){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log('Invalid number')                

}

// Q2: Write a switch statement that returns the name of a fruit based on a given color (e.g., "yellow" → "banana").
console.log(" ")
console.log("Using a switch statement to  returns the name of a fruit based on a given color")
console.log(" ")
let number = 1
let fruitColor = 'Red'
switch(fruitColor){
    case 'Red':
        console.log('Apple')
        break
    case 'Yellow':
        console.log('Banana')
        break    
    case 'orange':
        console.log('Orange')
        break
    default:
        console.log("Invalid Color")
        break    
    
}

// Q3: Use a switch to display a message for letter grades (A, B, C, D, F).
console.log(" ")
console.log("Using a switch statement to  display a message for letter grades (A, B, C, D, F)")
console.log(" ")
let grades = 'A'
switch (grades){
    case 'A':
        console.log("OUTSTANDING")
        break
    case 'B':
        console.log("Excellent")
        break
    case 'C':
        console.log("Great")
        break
    case 'D':
        console.log("Good")
        break
    case 'F':
        console.log("Better luck")
        break
    default:
        console.log("Invalid Grade")
        break            
}

// Q4: Write a switch case to return the month name when given a number from 1 to 12.
console.log(" ")
console.log("Using a switch statement to  return the month name when given a number from 1 to 12.")
console.log(" ")
let month = 1
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break        
    default:
        console.log('Invalid number')  
}
// Q1: Write a function `greet(name)` that returns "Hello, name!".
console.log("")
console.log("printing a message return by gree function ")
console.log(" ")
function greet(){
    console.log("Hello friend")
}
greet()
// Q2: Create a function `square(num)` that returns the square of a number.
console.log("")
console.log("a square number  returned by square function")
console.log(" ")
function square(number){
    result = number*number
    console.log(result)
}
square(3)

// Q3: Write a function `isEven(n)` that returns true if a number is even, false otherwise.
console.log(" ")
console.log("boolean value return by isEven Function")
console.log(" ")
function isEven(num){
    if (num%2===0){
        console.log(true)
    }else{
        console.log(false)
    }
    
}
isEven(5)

// Q4: Write a function `multiply(a, b)` that returns the product of two numbers.
console.log(" ")
console.log("result returned by multiply function ")
console.log(" ")
let multiply = function(a,b){
    result = a * b 
    console.log(result)
    return
}
multiply(2,3)