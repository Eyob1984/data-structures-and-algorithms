'use strict';

const sort = (arr) => {
let holder;
for(let i = 0; i<arr.length; i++){

  for(let j = 0; j<arr.length; j++){

  if(arr[j] > arr[i]){
  holder = arr[j];
  arr[j] = arr[i];
  arr[i]= holder
      }
    }
  }
  
  return arr;
}

module.exports = sort;


