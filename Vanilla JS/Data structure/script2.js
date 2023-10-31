// Merge sorted arrays
// mergeSortedArrays([0,3,4,31], [4,6,30])

// function mergeSortedArrays(arr1, arr2){

//         return arr1.concat(arr2).sort((a,b) => a-b)
// }

// const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a,b) => a-b)

function mergeSortedArrays(arr1, arr2){
    const mergedArray = []
    let arrItem1 = arr1[0]
    let arrItem2 = arr2[0]
    let i = 1
    let j = 1

    // Check input
    if(arr1.length === 0){
        return arr2
    }

    if(arr2.length === 0){
        return arr1
    }

    while (arrItem1 || arrItem2){
        console.log(arrItem1, arrItem2)
        if(!arrItem2 || arrItem1 < arrItem2){
            mergedArray.push(arrItem1)
            arrItem1 = arr1[i]
            i++
        }else{
            mergedArray.push(arrItem2)
            arrItem2 = arr2[j]
            j++
        }
    }

    return mergedArray
}

