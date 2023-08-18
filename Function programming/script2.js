// Idempotence
// function always does what we expect it to do
function notGood(num){
    return Math.random(num)
}

// Imperative vs Declarative
// Imperative code is code that tells the machine what to do and how to do it.
// Declarative code on the other hand tells what to do and what to happen


// Immutability -> Not changing of state but instead making a copy of the state and returns it
const obj = {name: "Ian"}

function clone(obj){
    return {...obj} // This is pure
    // returns the object but not the reference
}

function updateName(obj){
    const obj2 = clone(obj)
    obj2.name = "Nana"
    return obj2
}
const newObj = clone(obj)
newObj.name = 'Pokemon'
const updatedObj = updateName(obj)
console.log(obj, newObj, updateName(obj))