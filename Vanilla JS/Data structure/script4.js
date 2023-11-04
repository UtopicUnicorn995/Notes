

//Google Question

function getRecurringNum (array){
    const arr = []
    for(let i = 0; i <= array.length; i++){
        if(arr.includes(array[i])){
            return array[i]
        }else{
            arr.push(array[i])
        }
    }
    return undefined
}

function getRecurringNum2(array){
    let map = {}
    for(let i= 0; i < array.length; i++){
        if(map[array[i]] !== undefined){
            return array[i]
        }else{
            map[array[i]] = i
        }
    }
    return undefined
}