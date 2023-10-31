const strings = ['a', 'b', 'c', 'd'];

// 4*4 = 16 bytes of storage

strings[2]

//push
strings.push('e') ; // O(1) operation

//pop
strings.pop()
strings.pop() // O(1)

//unshift
strings.unshift('x') // 0(n)

//splice
strings.splice(2, 0, 'fuq')

console.log(strings)


// C++ -> static array
// int a[20]
// int b[5] {1, 2, 3, 4, 5}


// CREATING OUR OWN DATA STRUCTURE FROM SCRATCH
class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}

const newArr = new MyArray()

newArr.push('food')
newArr.push('high')
newArr.delete(0)
// console.log(newArr.pop())
console.log(newArr)