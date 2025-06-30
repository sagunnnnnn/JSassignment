// 1. Copy this obj in new variable manually (using recursive function)

const obj = {
  user: {
    id: 1,
    name: "Alice",
    getName() {
      return this.name;
    },
    address: {
      street: "123 Main St",
      city: "Wonderland",
      getCity() {
        return this.city;
      },
      geo: {
        lat: 51.5074,
        lng: 0.1278,
        getCoordinates() {
          return `${this.lat}, ${this.lng}`;
        }
      }
    }
  }
};



function doDeepCopyobject(object){
  // checking if the passed object in function is object or not null
  // if passed object is not object or null it will return the passed object itself
  if (typeof(object)!=="object" || object=== null){
    return object
  } 
  
    // deep copying nested structure so we donot know whether to create array or object so it will create same type as in  original during recursion 
    const deepcopyResult =  Array.isArray(object) ? [] : {}

    // recursively copy each level of the object structure. 
    for(let key in object){ // // iterating through every key in passed object
      if(object.hasOwnProperty(key)){ // this line check if object's key has its own property and return boolean value if true then this condition run if false then it skip directly into return  
        deepcopyResult[key] = doDeepCopyobject(object[key]) // recursively calling doDeepCopy function  
      }
    }
    return deepcopyResult // return deepcopyResult and it is the main piller of recursive function 
  }


const newDeepCopyObject = doDeepCopyobject(obj);
console.log("The original object:", obj)
console.log("The new deep copy object:", newDeepCopyObject);
console.log("The geo in deepcopy",newDeepCopyObject.user.address.geo.getCoordinates())

// 2. Copy this array in new variable manually (using recursive function)

const array = [
  {
    id: 1,
    level1: {
      name: "Level 1",
      level2: {
        name: "Level 2",
        level3: {
          name: "Level 3",
          level4: {
            name: "Level 4",
            level5: {
              name: "Level 5",
              value: "Deep Value 1"
            }
          }
        }
      }
    }
  },
  {
    id: 2,
    level1: {
      name: "Level 1 - B",
      level2: {
        name: "Level 2 - B",
        level3: {
          name: "Level 3 - B",
          level4: {
            name: "Level 4 - B",
            level5: {
              name: "Level 5 - B",
              value: "Deep Value 2"
            }
          }
        }
      }
    }
  }
];

function doDeepCopyarray(arrayObject){
  // checking if the passed value in function is object or not null
  // if passed value is not object or null it will return the passed value itself
  if (typeof(arrayObject)!=="object" || arrayObject=== null){
    return arrayObject
  } 
// deepcoping nested array so we donot know whether to create  array or object so it will create same type as in  original during recursion  
    const deepcopyResult =  Array.isArray(arrayObject) ? [] : {}

    // recursively copy each level of the object structure.
    for(let key in arrayObject){ // iterate through every key 
      if(arrayObject.hasOwnProperty(key)){ // this line check if object's key has its own property and return boolean value if true then this condition run if false then it skip directly into return  
        deepcopyResult[key] = doDeepCopyarray(arrayObject[key]) //  calling doDeepCopyarray function 
    }
  }
  return deepcopyResult // return deepcopyResult and it is the main pillar of recursive function 
}


const newDeepCopyarray = doDeepCopyarray(array);
console.log("The original array:", array)


// 3. Make a calculator using only js, where arithmetic operation is performed.

function calculator(){
    let runCalculator = true
while (runCalculator){
    console.log("Enter 'e' as exit")
    let operators = ["*","/","+","-","**","%"]
    let exitInput = prompt("Enter the number1: ")
    if(exitInput==="e"){
        console.log("Exiting calculator..")
        break
    }
    let input = parseInt(exitInput)
   if(input!=='e'){
    if(isNaN(input)) {
    console.log('Invalid input')
} else{
    let operations = prompt("choose operators /, *, +, -, **, %, :")
    if (operators.includes(operations)){
        let exitInput1 = prompt("Enter the number2:")
        if(exitInput1==='e'){
            console.log("Exiting calculator....")
            break
        }
        let input1 = parseInt(exitInput1)
    if(isNaN(input1)){
        console.log('Invalid input')
    } else {
        if (operations === "/"){
            console.log(`${input}/${input1} = ${input/input1}`)
        } else if(operations ==="*"){
            console.log(`${input} * ${input1} = ${input*input1}`)
        } else if(operations==="+"){
            console.log(`${input}+${input1} = ${input+input1}`)
        } else if (operations==="-"){
            console.log(`${input}-${input1} = ${input-input1}`)
        }else if (operations==="%"){
            console.log(`${input}%${input1} = ${input%input1}`)
        }else if (operations==="**"){
            console.log(`${input}**${input1} = ${input**input1}`)
        }
    }
} else{
    console.log("Invalid operators")
}
}
   }
console.log("-----------------------------------------")
}
}
console.log("This is the calculator that takes 2 number and performs arithmetic calculation between 2 numbers")
let userInput = prompt("Press Enter to  start the calculator :: ")
console.log("calculator started.......")
console.log("-----------------------------------------")
calculator()
console.log('Thank You for using calculator')
