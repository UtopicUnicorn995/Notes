// Arrow functions
// When working with arrow functions, you have a couple of syntax shortcuts available

// Most importantly, you should know about the following alternatives:

// 1) Omitting parameter list parentheses
// If your arrow function takes exaclt one parameter, you may omit the wrapping parentheses instead of
// (username) => {....}
// You could write
// username => {...}

//Please note:
// If your function takes no parameters, parentheses must not be omitted - () => {... } is he only correct form in that case
// If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => {... }would be invalid ((username, userage) => {...}) is correct

// Omitting function body curly bracse
// If your arrow function contains no other logic but a return statement, you may omit the curly braces an the return keyword
// instead of
number => {
    return number * 3
}

//you could write
number => number * 3

//The following code would be invalid:

number => return number * 3 // invalid because the return keyword must also be omitted!
number => if (number === 2){return 5}// Invalid because statements can't be returned

//Special case: just returning an object 
// If you go for the shorter alternative and you're trying to return a javascript object, you may end up with the following, invalid code:
number => {age: number} // trying to return an object
// This code would be invalid because JS treats the curly braces as function body wrappers(not as code that creates a JS object)

// to tell JS that an object should be created(and returned) instead, the code would need to be adjusted like this:
number => ({age: number})// wrapping the object in extra parentehses
// By wrapping the object and its curly braces with an extra pair of parethesis, JS understands that the curly braces are not there to define a function body but instead create and object. Hence that object then gets returned