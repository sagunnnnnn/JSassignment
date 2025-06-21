// 1. Print numbers from 1 to 5 using a for loop
console.log("Printing numbers from 1 to 5  using for loop")
let i = 1;
for (i;i<=5;i++){
    
    console.log(i)
    
}
console.log("")
console.log("Printing multiplication of 3 using for loop")
// 2. Print the multiplication table of 3 using a for loop
let num=3;
for (j=1;j<=10;j++){
    console.log("3","*" ,j,"=",num*j)
}
console.log("")
console.log("Printing  numbers from 1 to 5 using while  loop")
// 3. Print numbers from 1 to 5 using a while loop
let k = 1
while(k<=5){
    console.log(k)
    k++
}
console.log("")
console.log("Printing  countdown from 5 to 1 using while  loop")
// 4. Count down from 5 to 1 using a while loop
let l = 5;
while (l>=1){
    console.log(l)
    l--
}
console.log("")
console.log("Printing  hello 3 times using do...while  loop")
// 5. Print "Hello" 3 times using a do...while loop
let m=1;
do{
    console.log("Hello")
    m++
} while(m<=3)


// 6. Keep asking for a number until the number is greater than 10 (use do...while loop)
// let number;
// do{
    // number = parseInt(prompt("Enter the number: ")) // only supports in browser so we got error during running it on node
// } while(number>10)
// console.log("Bye")    