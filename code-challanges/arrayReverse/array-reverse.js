'use strict';

let array = [-2,6,12,90,-9];
function reverseArray (arr){
  let newArr = [];
  let counter = 0;
  for (let i = arr.length; i>=0; i-=1){
    newArr[counter] = arr[i];
    counter += 1;
  }
return newArr
}
reverseArray(array);