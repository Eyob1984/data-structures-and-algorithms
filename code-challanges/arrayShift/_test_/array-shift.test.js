'use strict';
const insertShiftArray = require('../array-shift.js');



describe('Testing array-shift', () => {
  it('It should return a new array by adding the value inthe middle index of the new array', () =>{
    expect(insertShiftArray([2, 5, 7, 4],6)).toStrictEqual([2, 5,6, 7, 4]);
  })
  it('It should return a new array by adding the value inthe middle index of the new array', () =>{
    expect(insertShiftArray([2, 5, 7],6)).toStrictEqual([2, 5, 6, 7]);
  })
})