
// Create an object 'person' with name and age properties and a method 'greet' that logs "Hello, my name is <name>".

const person = {
  name: "Sagun",
  age: 21,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); //output: Hello, my name is Sagun


// Add a method 'sayAge' to the person object that logs "I am <age> years old".
// added sayAge function in person object
person.sayAge = function () {
  console.log("I am " + this.age + " years old");
};

person.sayAge();// output: I am 21 years old


// Create a nested object and try to access parent's property using `this`

const profile = {
  username: "sagun_dev",
  details: {
    printUsername: function () {
      console.log("Username:", this.username); // It will be undefined
    }
  }
};

profile.details.printUsername(); //output =  Username: undefined


// Create a car object with brand and model and a method info() that logs "This car is a <brand> <model>"

const car = {
  brand: "Toyota",
  model: "Corolla",
  info: function () {
    console.log(`This car is a ${this.brand} ${this.model}`);
  }
};

car.info(); // output: This car is a Toyota Corolla