let price = 100
const discount = 20

console.log('Price: ' + price)

price = price * ((100 - discount) / 100)
console.log('New price: ' + price)

let temp = 18
const perfect = 18
console.log( temp != perfect)

let money = 9
const travel = 4
const food = 5

console.log(money >= (travel + food))
console.log('89989' == 89989)

//Boolean: true or false. 
let isWeatherNice = true
console.log(isWeatherNice)

//store user input in a variable. put in comments cos proompt wont work on node
//const response = prompt('do u prefer books or movies?')
//if (response == 'books' || response == 'Books'){
//    console.log('\u{1F4DA}')
//}

//functions
function getSum(number1, number2) {
    console.log(number1 + number2)
    return number1 + number2
}
const sumResult = getSum(90, 8)
getSum(59889, 6)

// Declare the function
function banner() {
    console.log('___________________')
    console.log('___________________')
}

// Call the function
banner()
console.log("Welcome to functions")
banner()

let result = 'cheese'

function addEmojis(message, emoji) {
   result = emoji + " " + message + " " + emoji
   console.log(result)
}

addEmojis('Hello', '👋')
console.log(result)

// declare functions
function banner(bannerContents) {
    console.log('___________________')
    console.log(bannerContents)
    console.log('___________________')
}

function makeStart(name) {
    return `Hello ${name}`
}

function makeEnd(name){
    return `Goodbye ${name}`
}


const inputName = 'Ben'
const hello = makeStart(inputName)
banner(hello)
const goodbye = makeEnd(inputName)
banner(goodbye)
