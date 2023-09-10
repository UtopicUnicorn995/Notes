// HOF
// function that returns a function
const hof = () => () => 5;
console.log(hof()) // once called, returns a function
console.log(hof()()) // twice called, returns a value 

const hof2 = (fn) => fn(5)
console.log(hof2(function a(x){
    return x * 2
}))
// Takes a function as it's argument

// Closure
const closure = function (){
    let count = 0
    return function increment(){
        count++
        return count
    } // remembers the variable outside it's scope
    // closures are still pure if we only modify the closed over variables such as count
}
// even if the closure function has already been called, the function inside it can still remember the variable outside it's scope
const incrementFn = closure() // returns a function to be used by incrementFn
 