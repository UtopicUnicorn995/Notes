//Promise.all needs all promises to be resolved

//Promise.allSettled doesn't care about resolved or rejected -> runs all promises regardless of the status

//new promises in 2021 -> not very useful
//Promise.any() resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('A'), Math.floor(Math.random() * 1000))
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('B'), Math.floor(Math.random() * 1000))
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('C'), Math.floor(Math.random() * 1000))
})

// out of the 3 whichever resolves first is taken by Promise.any()

async function foo () {
    const result = await Promise.any([p1, p2, p3])
    console.log(result); //Prints "A", "B", or "C"
}

//If none of the promises resolve -> In that case Promise.any() throws an error!

//One thread per tab in the browser
