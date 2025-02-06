 //this is a comment. It won't be read by the computer
 console.log('hello world')
 //concatenation
const greetingOpening = 'Hello there '
const greetingClosing = ' and welcome'
const message = greetingOpening + 'liz' + greetingClosing
console.log(message)

// String interpolation
const interpolatedString = `${greetingOpening} betty ${greetingClosing}`
console.log(interpolatedString)

//currency converter 
const originalValue = 10
const exchangeRate = 1.14
const exchangedValue = originalValue * exchangeRate
console.log(Math.round(exchangedValue)) 
