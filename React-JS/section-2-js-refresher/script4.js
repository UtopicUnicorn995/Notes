// USING FUNCTION AS A VALUE

function handleTimeout(){
    console.log("Timed out!")
}

const handleTimeout2 = () => {
    console.log("Timed out ../ again!")
}

setTimeout(handleTimeout)
// You pass it by just using its name, so you dont add parenthesis. By omittnig the parenthesis, you're passing the function as a value to this function
setTimeout(handleTimeout2())
// If you would add parenthesis, you would instead make sure that this function handledTimeout here gest executed immediately at the point of time when this timer is set, in this case here, and therefore it would be the return value
setTimeout(handleTimeout, 2000)

function greeter(greetFn){
    greetFn()
    //Hi
}

greeter(() => console.log('hi'))

let foo = 'food'
foo = 'Sushi'
// The initial value of foo which is 'food' will be replaced by 'Sushi' not edited

const hobbies = ["Sports", "Cookuing"]
hobbies.push('Working')
console.log(hobbies)
// In this case, the hobbies array will be mutated to add another value.. not replaced in the memory
// Arrays are objects and javascript objects are so-called reference values
// the const will memorize the reference of the value, not the values itselves
// const cannot be used by = operator because const does not allow changes in the value, but since objects are reference values. you can change the values being referenced
// const in objects => the address doesn't change even if the values of the object variable is being mutated

// Arrow functions are a different way of creating functions in JS. Besides a shorter syntax, they offer advantges when it comes to keeping the scope of the this keyword

// You got two different types of exports: default(unnamed) and named exports:

// default => export default ...value
// named => export const someData = ...value

// You can import default exports like this:
//import someNameOfYourChoice from 'sourcepath'

// Named exports have to be imported by their name:
// import {someName} from 'sourcepath'

//A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

//When importing named exports, you can also import all named exports at once with the following syntax:
//import * as upToYou from './path/to/file.js'; 