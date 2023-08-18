// currying
const multiply = (a, b) => a*b
const curriedMultiply = (a) => (b) => a*b
const curriedMultiplyBy5 = curriedMultiply(5)

//  In the future
// instead of using 
// curriedMultiply(5)(20) over and over again whenever you multiply something by 5
// use
curriedMultiplyBy5(20)
// multiplys the value by 5 because of the curried function


// Partial Application
// Producing a function with a smaller number of parameters
// Taking a function, applying some of it's arguments into the function so it remembers those parameters
// and uses closures to be called later on 

const partialApp = (a, b, c) => a*b*c
const curriedMultiplyVersion = (a) => (b) => (c) => a*b*c // curried version
const partialMultipyBy5 = partialApp.bind(null, 5)
console.log(partialMultipyBy5(4, 10))