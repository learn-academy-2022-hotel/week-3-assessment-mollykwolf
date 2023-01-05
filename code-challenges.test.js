// // ASSESSMENT 3: Coding Practical Questions with Jest

// const { exportAllDeclaration, exportNamedDeclaration, objectExpression } = require("@babel/types")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.
// //pseudo code: create a function that takes in a variable and returns an array the length of the variable containing the numbers of the Fibonacci sequence.(Each number is the sum of the two numbers before it.)

// // describe ("fibonancciSequence",() =>{
// //   it ("returns an array containing the numbers of the Fibonaci sequence", ()=>{
// //     const fibLength1 = 6
// //     // Expected output: [1, 1, 2, 3, 5, 8]
// //     const fibLength2 = 10
// //     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// //     expect(fibonacciSequence(fibLength1)).toEqual([1,1,2,3,5,8])
// //     expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// //   })
// // })
// // failed: ReferenceError: fibonacciSequence is not defined
// // [1, 1, 2, 3, 5, 8, 13]
 
// const fibonacciSequence = (lengthDesired) => {
//   // for lengthDesired build fibonacci array
//   // part1- how to build a fibonacci array
//   fibonacciArray = [1, 1]
//   secondtoLastNumber = 1
//   lastNumber = 1
  
// //   //fib lengths
// //   // 1 - [1] // firstFib = 1
// //   // 2 - [1, 1] // firstFib = 1, secondFib = 1
// //   // 3 - [1, 1, 2], // firstFib = 1, secondFib = 2
// //   // 4 - [1, 1, 2, 3] // firstFib = 2, secondFib = 3
// //   // 5  - [1,1,2,3,5]//firstFib=3, secondFib=5

//   for (let i = 1; i <= lengthDesired-2; i++) {
//     nextNumber = secondtoLastNumber + lastNumber
//     fibonacciArray.push(nextNumber) // on first run makes array [1, 1, 2]
//     secondtoLastNumber = lastNumber // set to 1
//     lastNumber = nextNumber // set to 2
//   }
//   return fibonacciArray
// }


// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]
// //console.log(fibonacciSequence(fibLength1))

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// describe ("sortedArray", () =>{
//   it ("takes in an object and returns an array of the values sorted from least to greatest", () =>{
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }
//       // Expected output: [15, 15, 20, 30, 30, 60, 90]
//       const studyMinutesWeek2 = {
//         sunday: 100,
//         monday: 10,
//         tuesday: 45,
//         wednesday: 60,
//         thursday: 20,
//         friday: 15,
//         saturday: 65
//       }
//       // Expected output: [10, 15, 20, 45, 60, 65, 100]
//   expect(sortedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//   expect(sortedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

// ReferenceError: sortedArray is not defined


// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
// //   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// // psuedo code created a function that takes in an object and returns an array of the values sorted from smallest to largest. 
// function sortedArray(object) {
//   arrayOfValues = Object.values(object)
//   arrayOfValues.sort(function (a, b) {
//     return a - b
//   })
//   return arrayOfValues
// }

// console.log(sortedArray(studyMinutesWeek1))
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe ("addedArray", () =>{
  it ("returns an array of the accumulating sum.", () =>{
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
   // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
  expect(addedArray(accountTransactions1)).toEqual([100, 83, 60, 51])
  expect(addedArray(accountTransactions2)).toEqual([250, 161, 261, 165])
  expect(addedArray(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
//pseudo code: declare a function 
//input: parameter = array
//inside the function declare variables to hold the value of zero and an empty array
//use a for loop to iterate through the array
//push the new value into the empty array 

const addedArray = (array) => {
  let a = 0
  let newArray =[]
  for (let i=0; i<array.length; i++){
      a = a + array[i]
      newArray.push(a)
    }
  return newArray
}
console.log(addedArray(accountTransactions1))