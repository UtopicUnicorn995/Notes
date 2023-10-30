//ES9(ES2018)
// Object spread operator

const animals = {
    tiger: 23,
    lion: 5, 
    monkey: 2,
    bird: 40
}

const {tiger, lion, ...rest} = animals
// rest -> {lion: 5, monkey: 2}

const array = [1, 2, 3, 4, 5]

function sum (a,b,c,d,e){
    return a + b + c + d + e
}

sum(...array)
// 15


function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

objectSpread(tiger, lion, rest)