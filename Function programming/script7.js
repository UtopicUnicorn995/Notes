// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const historyLogs = []

const compose = (f, g) => (...args) => f(g(...args))
// Building composable functions that are worried of their own world so that whenever bugs happen, well as long as they're tested well, it's most likely not.
//const pipe = (f, g) => (...args) => g(f(...args))

function purchaseItem(...fns){
   return fns.reduce(compose)
}

function addToCart(user, item) {
    historyLogs.push(user)
    const updatedCart = user.cart.concat([item])
    return Object.assign({}, user, {cart: updatedCart})
}

function applyTax(user) {
    historyLogs.push(user)
    const {cart} = user
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user) {
    historyLogs.push(user)
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user) {
    historyLogs.push(user)
    return Object.assign({}, user, {cart: []})
}

function refundItem(){
    return
}

// purchaseItem(
//     emptyCart,
//     buyItem,
//     applyTax,
//     addToCart,
// )(user, {name: 'laptop', price: 200})