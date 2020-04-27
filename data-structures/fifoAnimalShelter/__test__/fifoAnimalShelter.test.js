'use strict';

const dogAndCatShelter = require('../fifoDogAndCatShelter.js');
const Animal = require('../fifoAnimalShelter.js');

describe('happy path', () => {
  it('Can add a dog or a cat in the queue', () => {
    let shelter = new dogAndCatShelter();
    let fido = new Animal.Dog('fido');
    shelter.enqueue(fido);
    expect(shelter.toString()).tobe(true)
  });
});

describe('edge cases', () => {

});

describe('expected failures', () => {

});