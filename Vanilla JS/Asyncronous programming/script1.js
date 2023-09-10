// What is a program?
// -allocate memory
// -parse and execute

// engine consist of 2 parts 
// Memory Heap
// Call stack

const a = 1; // Allocate memory
// Memory leaks happens when there is unused memory just laying around and fills the memory heap

// call stack
// a JS call stack is an example of a stack data structure, In a js call stack, the elements are function invocations. Every time you invoke a function, it's added to the stack. If it has a nested function, that nested function will get added to the top of the stack as well and so on.
// first in last out, JS call stack is single threaded
// JS call stack is like a strict todo list where you have to pop or finish a task in a sequence
console.log('1')
console.log('2')
console.log('3')
// reads the code line by line

const one = () => {
    const two = () => {
        console.log('4')
    }
    two()
}

//Recursion
// function that calls itself
function foo(){
    foo()
}

//asyncronous 
console.log('1')
//set timeout goes to the web api and runs after the timeout is finished
setTimeout(() => {
    console.log('2')
}, 10000)
console.log('3')

// synchronous means one thing happens at one time
// asynchronous means that two or more things happens at the same time
