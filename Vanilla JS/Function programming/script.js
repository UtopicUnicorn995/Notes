const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const items = [{
        name: "guns",
        price: 20
    },
    {
        name: "knives",
        price: 30
    },
    {
        name: "pepper spray",
        price: 4
    },
    {
        name: "granades",
        price: 10
    }
]

function addToCart(buy){
    items.forEach((item) => {
        if(item.name.includes(buy)){
            item.price = item.price * 1.03
            user.cart.push(item)
        }else{
            return "Sorry bitch, the item you want to buy does not exist"
        }
    });

}

function purchaseItems(){
    user.cart.forEach((item) => {
        user.purchases.push(item.price)
    })
}

function emptyCart(){
    user.cart = []
}