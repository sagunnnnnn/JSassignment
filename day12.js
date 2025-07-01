// 🔸 1. Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
// a) Extract the first two elements into variables `firstColor`, `secondColor`
let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);
// b) Extract the rest into `remainingColors`
let [color1, color2, ...remainingColors] = colors;
console.log(remainingColors);

// 🔸 2. Object Destructuring
const user = {
  id: 101,
  names: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};
// a) Extract `name` and `age`
let { id, names } = user;
console.log(id, names);
// b) Extract `city` from the nested `address`
let { address: { city } } = user;
console.log(city);
// c) Use default value for `gender` = 'not specified'
let { gender = 'not specified' } = user;
console.log(gender);

// 🔸 3. Function Parameter Destructuring
function showUserInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
const user1 = { name: "Bob", age: 30 };
showUserInfo(user1); // the function parameter destructures the name and age properties directly from the user1

// 🔸 4. Array Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
// a) Create a new array combining both using spread operator
let newArray = [...arr1, ...arr2];
console.log(newArray);
// b) Add number 0 at the beginning and 6 at the end
newArray.splice(0, 0, 0);
newArray.push(6);
console.log(newArray);

// 🔸 5. Object Spread
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// a) Merge obj1 and obj2 into newObj using spread
const newObj = { ...obj1, ...obj2 };
console.log(newObj);
// b) What will be the value of `b` in newObj?
// ---> The value of b is either can be 2 or 3. In this case, value of b is 3 cause obj2 is spread after obj1 because in spread order properties on the right override the left.

// 🔸 6. Rest with Array Destructuring
const numbers = [10, 20, 30, 40, 50];
// a) Destructure first element into `head`, and rest into `tail`
let [head, ...tail] = numbers;
console.log(head, tail);

// 🔸 7. Rest in Function Parameters
// Return the sum of all numbers
function sum(...nums) {
  let sum = 0; // initializing the value
  for (let values of nums) {
    sum += values;
  }
  return sum;
}
let result = sum(1, 2, 3, 4);
console.log(result); // => 10

// 🔸 8. JSON Parse and Stringify
const user2 = {
  name: "Charlie",
  age: 28,
  hobbies: ["reading", "gaming"]
};
// a) Convert the object to a JSON string
const jsonString = JSON.stringify(user2);
console.log(jsonString);
// b) Parse the JSON string back to an object
const Obj = JSON.parse(jsonString);
console.log(Obj);

// 🔸 9. JSON Limitations
const data = {
  name: "David",
  greet: function () { return "Hello"; },
};
// a) What happens when you stringify `data`?
// --> JSON cannot contain function so when we convert js object into json, JSON.stringify completely ignores the function inside js object while stringifying

// 🔸 10. Combine All Concepts
const student = {
  id: 1,
  Name: "Eva",
  scores: [95, 88, 76, 92]
};
// a) Destructure name and scores
const { Name, scores } = student;
const [a, b, c, d] = scores;
console.log(Name);
console.log(a, b, c, d);
// b) Use rest operator to extract first score and rest scores
const [firstScore, ...restScores] = scores;
console.log(firstScore, restScores);
// c) Convert the whole object to JSON
const json1 = JSON.stringify(student);
console.log(json1);
