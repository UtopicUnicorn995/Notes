// Memoization

//caching is a way to store values
//--> is a way for us to speed up programs and hold the same data in an easily accessible box
//--> memoization is a specific form of cachin that we're going to be talking about
//--> used a lot in dynamic coding

function addTo80(n){
    return n + 80
}

addTo80(5)



function memoizedAddTo80(n){
    if(n in cache){
        return cache[n]
    }else{
        console.log('long time')
        cache[n] = n + 80
        return cache[n]
    }
}

// Memoization is a specific form of caching that involves caching the return value
// Memoize If the parameter of the function is the same, it will return a value from the cache
// Idealy its a good practice to put the cache inside the function to prevent polluting the global space
// Use closures


function memoizedAddTo80(){
    let cache = {}
    return function(n){
        if(n in cache){
            return cache[n]
        }else{
            console.log('long time')
            cache[n] = n + 80
            return cache[n]
        }
    }
}

// const memoized = memoizedAddTo80()
// console.log(memoized(5))
// allows us to be more efficient in our code