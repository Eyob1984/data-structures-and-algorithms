'use strict';
class HashTable{
  constructor(size=20){
    this.buckets =  new Array(size)
    this.size = size
  }

  hash(key){
    return key.toString().length % this.size;
}

add(key,value){

  let index = this.hash(key);

  if(!this.buckets[index]){
    this.buckets[index] = [ ];
  }
  this.buckets[index].push([key,value])
 
  return index
}
get(key){

 let index = this.hash(key);

  if(this.buckets[index]){

     for(let bucket of this.buckets[index]){
    
       if(bucket [0] === key){

         return bucket [1]
        }
     }
     } else
     this.buckets[index] = {
       key: key,
       val: value
     }

}

contains(key){
 let val = this.get(key);
 if(!val) return false;
 else return true;
}

}


module.exports = HashTable;