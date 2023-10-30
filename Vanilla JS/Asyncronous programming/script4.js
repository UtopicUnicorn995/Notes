// // ASYNC AWAIT

// movePlayer(100, 'Left')
// .then(() => movePlayer(400, 'Left'))
// .then(() => movePlayer(10, 'Right'))
// .movePlayer(() => movePlayer(330, 'Left')) 


// async function playerStart(){
//     const firstMove = await movePlayer(100, 'left') // pause
//     await movePlayer(400, 'Left') //pause
//     await movePlayer(10, 'Right') //pause
//     await movePlayer(330, 'Left') //pause
// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(console.log)

async function fetchUsers(){
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
console.log(data)
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]


// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch(() => console.log('error'))

//Finally


const getData = async function (){
    try{
        //throw new Error()
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(response => response.json())
        }))
        console.log(users)
        console.log(posts)
        console.log(albums)
    }
    catch(error){
        console.log('oops')
        console.log(error)
    }
}

const loopThroughUrls = urls => {
    for(url of urls){
        console.log(url)
    }
}


// for await of
// lets us loop through iterables promises 

const getData2 = async function (){
    const arrayOfPromises = urls.map(url => fetch(url))
    for await(let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}

getData2()

// Callback queue - Task Queue
// Job Queue - Microtask Queue --> Higher priority --> Event loop priority check
// Some legacy browsers does not have a job queue


