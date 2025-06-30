// Create a function that takes a user object and prints all the keys and their values.

const user  = {
    name: "Alex",
    email: "alex@mail.com",
    age: 25
}

for(let keys in user){
    console.log(`The keys:${keys} and its values is ${user[keys]}  `)

}

// Write a function that takes an array of fruits and prints each fruit in uppercase.

const fruits = ["apple","banana","cherry"]
for (let values of fruits){
    console.log(`fruit --> ${values} then fruit after changing into uppercase, ${values.toUpperCase()}`)
}

// Print each index and value from an array of cities.

const cities = ['Kathmandu','Mumbai', 'Delhi', 'Kolkata','Hyderbad']
for (let index in cities){
    console.log(`Index ${index}: ${cities[index]}`)
}

