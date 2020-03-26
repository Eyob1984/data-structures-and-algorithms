'use strict';

function binarySearch (arr, key){
  let minArr = 0;
  let maxArr = arr.length-1;
  let midArr = 0;

  while (minArr <= maxArr){
    midArr = Math.floor((minArr + maxArr)/2);
    if (arr[midArr] === key){
      return midArr;
    }
    else if (arr[midArr] < key){
      return midArr + 1;
    }
    else if (arr[midArr] > key){
      return midArr - 1;
    }
    else{
      return -1;
    }
  }
}

module.exports = binarySearch;