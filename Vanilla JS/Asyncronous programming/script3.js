
// async makes code more readable
// async await is also a promise underneath the hood

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

// Promise can only succeed or fail once
// Promise is an object that may produce a single value some time in the future either a resolved value or a reason why it's rejected
// Check mdn discription
// Promises 3 status -> fulfilled -> pending -> rejected

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    throw Error
    // Throw an error once the throw error runs
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch((error) => console.log('error', error))
.finally(() => console.log('extra'))

