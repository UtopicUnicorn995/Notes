// PURE FUNCTION
// No side effects
//input --> output


const array = [1, 2, 3]
function mutateArray(arr){
    arr.pop()
}
// not pure
// has side effects
mutateArray(array)


function removeLastItem(arr){
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}
// Has no side effects/ does not affect the array outside the function
// Pure function
removeLastItem(array)

function multiply(arr){
    return arr.map(item => item * 2)
}
// Also has no side effects because map function creates a new array from the parameters passed

function a(){
    console.log("hi")
}
// Not a pure function because it affects/modify something outside the function
a()

function b(num1, num2){
    return num1 + num2
}

b(3, 4)
