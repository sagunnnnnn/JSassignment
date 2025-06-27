// recursion function to count number backward
function counter(count){
    console.log(count)
    if(count>1){
        count -= 1
        counter(count)
    } else{
        return;
    }
}
counter(5)

// recursion function to find factorial of number
function factorial(num){
    if (num>1){
        return num*factorial(num -1)
    } else{
        return 1;
    }
}
let x = 5
let y = factorial(x)
console.log(`The factorial of ${x} is ${y}`)

