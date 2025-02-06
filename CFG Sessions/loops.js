// for loop
// it is used when we know how many times we want to repeat a block of code

// for (initialization; condition; increment) {
//     // code block to be executed
// }

// i++ -> i = i + 1

for (let i =1; i<=5; i++) {
    console.log("INDEX", i);
  }
  
  let fruits = ["apple", "orange", "banana", "kiwi", "mango"];
  console.log("THis is a ", fruits[0]);
  console.log("THis is a ", fruits[1]);
  
  console.log("---------------------")
  
    for (let fruit = 0; fruit < fruits.length; fruit++) {
      console.log("THis is a ", fruits[fruit]);
      if(fruits[fruit] === "mango") {
        console.log("I found a mango");
      }
    }
   
  // while
  // it is used when we don't know how many times we want to repeat a block of code
  
  //initialize
  // while (condition) {
  //  // code block to be executed
  // // increment
  // }
  
  let count = 0;
  while (count < 11) {
    console.log("COUNTER", count)
    count+=3; // count = count + 3
    
  }
  
  // count down
  let countdown = 10;
  while (countdown > 0) {
    console.log("COUNTDOWN", countdown)
    countdown--;
  }
  // condition is while the countdown is greater than 0
  // console.log the countdown
  // decrement the countdown countdown--


  let mycountdown = 1

  while (mycountdown <= 10){
    console.log("here my new countdown", mycountdown)
    mycountdown+=1
  }