// Promises
// A promise is an object that may produce a single value some time in the future either a resolved value or a reason that it's not resolved(rejected)
// A promise may have 3 status - fulfilled - rejected - pending

el.addEventListener("click", submitForm);
// callback pyramid of doom
movePlayer(100, "left", function () {
  movePlayer(400, "right", function () {
    movePlayer(10, "left", function () {
      movePlayer(330, "right", function () {});
    });
  });
});

// Promises
movePlayer(100, "left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

// Realistic example
grabTweets("twitter/joe", (error, jeeTweets) => {
  if (error) {
    throw Error;
  }
  displayTweets(jeeTweets);
  grabTweets("twitter/elon", (error, elonTweets) => {
    if (error) {
      throw Error;
    }
    displayTweets(elonTweets);
    grabTweets("twitter/vitalikbuterin", (error, vitalikTweets) => {
      if (error) {
        throw Error;
      }
      displayTweets(vitalikTweets);
    });
  });
});

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'poop')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'es it me you')
})

// promise
//   .then((result) => result + "!")
//   .then((result2) => {
//     throw Error;
//     console.log(result2);
//   })
//   // catches the error before the catch statement
//   .catch(() => console.log("error!"));

//Promise.all waits for all the promises to be resolved before being returning any value
Promise.all([promise, promise2, promise3, promise4]).then(values => {
  console.log(values)
})

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[3])
})

// Fetch returns a promise
// .then -> answering whatever the promise returns -> we get to manipulate data
// A promise is an object that may produce a single value some time in the future, either resolved or rejected with a reason why it was rejected 
// states (fulfilled), rejected pending
// A promise can only suceed once or fail once
// Reacting to what happened asynchronously 