'use strict';

const insertShiftArray = (arr, ele) => {
  let index = Math.round(arr.length/2);

for(let i = arr.length; i > index; i--){
  arr[i] = arr[i - 1];
}
arr[index] = ele; 
console.log(arr);
  return arr;
}




module.exports = insertShiftArray;