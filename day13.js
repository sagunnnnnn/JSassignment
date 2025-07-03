// // 🔹 Write a JavaScript program that takes a number from the user
// and throws an Error if the number is negative.
// Use try, catch, and throw.


function fun(num){
    try{
    if(num<0){
        throw new Error("Numer cannot be negative")
    } else{
        console.log('Valid Input')
    }

} catch (err){
       console.log(err)
}
}
num = 1//+(prompt("Enter the number: "))
// fun(num)
// 🔹 Question 2:
// Create a program that asks the user to enter their age.
// Throw an error if the age is not between 1 and 120.
// Handle the exception and print a friendly message.
const checkAge = (age)=>{
    try{
        if(age>=1 &&  age<=120){
            console.log("Valid human age")
        } else{
            throw new Error("Age must be between 1 - 120")
        }
    } catch(err){
        console.log("Error occured,",err)
    }

}
// checkAge(121)

// 🔹 Question 3:
// Write a program that takes a list of numbers from the user (comma-separated),
// converts them to integers, and catches any conversion errors
// (e.g., if the user enters "5, 10, hello").
const func = (...list) =>{
    newArray = []
    try{
        for(let value of list){
            nums = Number(value)
            if(isNaN(nums)){
                throw new Error(`Invalid Conversion ${value} cannot be changes into nums`)
            
            } else{
                newArray.push(nums)   
            }
        }
    } catch (err){
        console.log(err)
    }
    return newArray
}
let y = func('z',1,2,3,4,"Hello")
console.log(y)