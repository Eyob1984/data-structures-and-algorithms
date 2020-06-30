'use strict';

const repeatedWords = require('../repeated-word.js');


describe(" Find repeated words", () => {
  it("returns empty array if the string is empty", () => {
    const testString = "";

    expect(repeatedWords(testString)).toEqual('no duplicated words!');
  });
  it("can find repeated words in a string ", () => {
    const testString =
      "What is your name? my name is karen";
    expect(repeatedWords(testString)).toEqual("is");
  });
  it("returns a coded string if there are no repeating words", () => {

    const testString = "Hello, how are you?";
    expect(repeatedWords(testString)).toEqual('There are no duplicated words!');
  });
});