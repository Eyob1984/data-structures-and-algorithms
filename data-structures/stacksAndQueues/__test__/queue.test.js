'use strict';
const { Queue } = require('../stack-and-queues.js');
/*
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeue
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception
*/
describe('successful path of Queue', () => {
  it('can successfully enqueue into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('colorado');
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('colorado');
  });
  it('can successfully enqueue multiple values into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('washington');
    newQueue.enqueue('idaho');
    newQueue.enqueue('montana');
    console.log(newQueue);
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('washington');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue('idaho');
    newQueue.enqueue('montana');
    newQueue.enqueue('nevada');
    expect(newQueue.dequeue()).toBe('nevada');
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue('montana');
    newQueue.enqueue('nevada');
    newQueue.enqueue('idaho');
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('montana');
  });
  it('Can successfully empty a queue after multiple dequeue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('california');
    newQueue.enqueue('washington');
    newQueue.enqueue('arizona');
    newQueue.dequeue();
    console.log(newQueue);
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.isEmpty()).toBe(true);
    expect(newQueue.front).toBe(null);
  });
  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('texas');
    expect(newQueue.front).toBe('texas');
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queue();
    expect(newQueue.isEmpty()).toBe(true);
    expect(() => {
      newQueue.dequeue();
    }).toThrow();
    expect(() => {
      newQueue.peek();
    }).toThrow();
  });
});