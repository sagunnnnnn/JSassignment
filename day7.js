// 1. What will be the output of this code? Explain the behavior.
function test() {
  console.log(a); // simply it will print undefined due to hoisting of a var.
  var a = 10;
}
test();

// 2. Will this code run without an error? Why or why not?
function example() {
  console.log(b); // This will give ReferenceError, because we Cannot access 'b' before initialization
  let b = 20;
}
// example();

// 3. Predict the output of the following code and explain the scope.
var a = 1;
let b = 2;
{
  var a = 3;       // This Re-declares and updates the global 'a'
  let b = 4;       // This is in a Block scoped, so it doesn't affect outer 'b'
  console.log(a, b); // output: 3 4
}
console.log(a, b);   // output: 3 2

// 4. What happens when you try to reassign a const variable?
const x = 5;
// x = 10; // This is a TypeError because we are Assigning value a to constant variable.
// console.log(x);

// 5. What will be printed and why?
console.log(typeof y); // "output is undefined bacause we are accessing y before declaration so due to hoisting we get undefined"
var y = 25;

// 6. Will this code throw an error? Why or why not?
function constTest() {
  // const z; // This is SyntaxError because there  initializer is missing in const declaration
  // z = 15;
  // console.log(z);
}
// constTest();

// 7. Explain the difference between function-scoped and block-scoped variables.
function scopeExample() {
  if (true) {
    var a = 10; // function-scoped
    let b = 20; // block-scoped
  }
  console.log(a); // 10
    // console.log(b); // b is inside the  block so we cannot access it outside the block  so it is a ReferenceError.
}
scopeExample();

// 9. Compare hoisting of function declaration and function expression.
hoistedFunc(); // This will Works because function declaration is hoisted

function hoistedFunc() {
  console.log("I am hoisted");
}

// Example of notHoistedFunc(); // when we try to access this function before declaration it will return  TypeError because notHoistedFunc is not a function
const notHoistedFunc = function () {
  console.log("I am NOT hoisted");
};

// 10. What will be the output and why?
let x2 = 20;
function scopeTest() {
  // console.log(x2); // We cannot access 'x2' before initialization so we'll get ReferenceError.
  let x2 = 10;
}
// scopeTest();
