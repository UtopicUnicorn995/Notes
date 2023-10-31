// Create a fucntion that reverses a string:
// 'Hi My name is Christian' should be:
// naitsirhC si eman yM iH

function reverse(str){
    // checking of inputs
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Can\'t do shit'
    }

    let reversedName = []
    for(i=0; i < str.length; i ++){
        reversedName.unshift(str[i])
    }
    return reversedName.join('')
}

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')

const reverse4 = str => [...str].reverse().join('')