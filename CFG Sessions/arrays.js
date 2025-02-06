let fruit = 'apple'
let fruits = ['apple', 'mango', 'pear', 'kiwi']

console.log(fruits)

// elements in an array are accessed by their index/position
// the index/position starts at 0
// apple - index 0, mango - index 1, pear - index 2, kiwi - index 3
console.log("INDEX 1: ", fruits[1])
console.log("INDEX 2: ", fruits[2])

// arrays can store different data types
const mixeddValues = [1, true, null, "cecilia"];
console.log(fruits.length)

// add or remove elements from an array
// push() - add an element to the end of an array
fruits.push("banana");
console.log("NEW FRUITS 1:",fruits);

// pop() - remove the last element from an array
fruits.pop();
console.log("NEW FRUITS 2:",fruits);
fruits.pop();
console.log("NEW FRUITS 3:",fruits);

let person = ["Cecilia", 29, "Milan", "Porto"];

const name = "Cecilia"
const age = 29
const city = "Milan"
const travelDestination = "Porto"

const personObject = {
  // key:value
  "name-first": "Cecilia",
  age: 29,
  city: "Milan",
  travelDestination: "Porto",
}

// access data in an object
// console.log("NAMe:", personObject.name)
console.log("AGE:", personObject.age)
console.log("CITY:", personObject.city)

console.log("---------------------")

console.log("NAME 1:", personObject["name-first"])
console.log("AGE 1:", personObject["age"])
console.log("CITY 1:", personObject["city"])

// object in an array
// [{}, {}, {}]

let girl = {
  name: "Ana", // String
  age: 23, // Number
  friends: ["Mei", "Sabina", "Nuala"], // Array
  address: { // nested object
    // Object 
    number: 123,
    street: "Cambridge Road",
    city: "London"
  }
};
console.log("ANA street:", girl.address.street)
console.log("ANA friends:", girl.friends[0])