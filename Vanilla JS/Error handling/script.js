// Two ways to catch errors
// catch and try catch

// (function fail(){
//     try{
//         console.log('tried at least')
//         throw new Error()
//         // Once error is found -> codes after it doesn't runs -> finds a catch instead of running the next block of codes
//         console.log('trying this code')
//     }
//     catch(error){
//         console.log(error.stack())
//     }
//     finally{
//         // Runs regardless if an error has been thrown
//         // try catch does not 
//         console.log('This shit is unstapable')
//     }
// })()

// try{
//     throw new Error()
//     try{
//         something()
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// catch(error){
//     console.log(error.stack)
// }

try {
    setTimeout(function(){
        //fake variable error could not be catch because the whole code block has been ran before the error has been found
        ///setTimeout goes to the webstack api -> therefore it doesnt ran until the entire call stack has been ran
        fakeVariable
    }, 1000)
}catch(e){
    console.log(e)
}

// How do we handle asyncronous code error?
// always have catch block to handle error