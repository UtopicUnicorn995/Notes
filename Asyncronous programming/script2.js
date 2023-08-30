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

promise
  .then((result) => result + "!")
  .then((result2) => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log("error!"));
