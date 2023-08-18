// Compose
// Is the idea that any sort of data transformation that we do should be obvious
// going from right to left

// data --> fn --> data --> fn -->

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num * 3
const makePositive = (num) => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// Pipe is same as compose
// going left to right