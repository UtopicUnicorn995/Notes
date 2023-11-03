class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    set(key, amount){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
            this.data[address].push([key, amount])
            console.log(this.data)
        }else{
            this.data[address].push([key, amount])
        }
    }
    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]
        console.log(currentBucket)
        if(currentBucket){
            for(let i = 0; i <currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
            return undefined
        }
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    keys(){
        const keysArray = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray
    } 
  }
  
 
  const myHashTable = new HashTable(50);
  myHashTable._hash('Fucker')
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapess', 10000)
  myHashTable.set('apples', 9)
  myHashTable.keys()
  