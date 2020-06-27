'use strict';

const repeatedWords = require('../repeated-word.js');


describe(" Find repeated words", () => {
  it("returns empty array if the string is empty", () => {
    const testString = "";
    expect(repeatedWords(testString)).toEqual('There are no duplicated words!');
  });
  it("can find repeated words in a string and return an array", () => {
    const testString =
      "Hi I am Thomas, nice to meet you ! How are you ? I am fine";
    expect(repeatedWords(testString)).toEqual("i");
  });
  it("returns undefined if there are no repeating words", () => {
    const testString = "Hello, how are you?";
    expect(repeatedWords(testString)).toEqual('There are no duplicated words!');
  });
});