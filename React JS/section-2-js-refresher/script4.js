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
