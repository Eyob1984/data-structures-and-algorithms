'use strict';
const binarySearch = require('../array-binary-search.js');



describe('Testing binary-search', () => {
  it('It should return the index of the array match wiht search key', () =>{
    expect(binarySearch([4,8,15,16,23,42],15)).toStrictEqual(2);
  })
  it('It should return -1 if nothing match', () =>{
    expect(binarySearch([11,22,33,44,55,66,77],90)).toStrictEqual(-1);
  })
})