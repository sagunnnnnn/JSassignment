// 1. What will be the output of this code? Explain the behavior.
const arr = [1, 2, 3];
arr.push(4); // now it  adds 4 to the last
console.log(arr); // Output: [1, 2, 3, 4] because the push() modifies the values or simply modifies original array.


// 2. Will this code run without an error? Why or why not?
const str = "Hello";
// str[0] = "h"; // 
console.log(str); 
// --> In js Strings are immutable so str[0] = "h" doesnot change the string and we get  original value which is Hello as a output as nothing changed


// 3. Predict the output of the following code and explain.
const nums = [10, 20, 30];
const doubled = nums.map(n => n * 2);
console.log(doubled); 
//  map() returns a new array with changed values so the output will look like  [20, 40, 60].


// 4. What happens when you use slice vs splice on an array?
const fruits = ["apple", "banana", "cherry"];
const sliced = fruits.slice(1, 2); // slice doesn't modify original
const spliced = fruits.splice(1, 1); // we used splice to modify original array
console.log(sliced); // Output: ["banana"]
console.log(spliced); // Output: ["banana"]
console.log(fruits); // Output: ["apple", "cherry"] we used splice to remove banana so it removed 'banana'.


// 5. What will be printed and why?
const message = "JavaScript";
console.log(message.length); // Output: 10 — length returns number of characters in the string.




