'use strict';

const sort = require('./sort.js');

describe('Happy path', () => {
  it('can successfully sort the array low to high', ()=>{
    const num = [8, 2, 7, 3, 9, 1];
    expect(sort(num)).toStrictEqual([1, 2, 3, 7, 8, 9])
  
  })
})

describe('Edge casese', () => {
  it('can successfully sort a negative number low to high', () => {
    const num = [6, -5, 8, 1, -9, 7];
    expect(sort(num)).toBe([-9, -5, 1, 6, 7, 8])
  })
})