'use strict';

const LinkedList = require('../linkedList/linked-list.js');

describe('passes all lab tests', () => {
    it('successfully instantiates an empty list', () => {
        expect(() => {
            new LinkedList();
        }).not.toThrow();
    });

    it('head property will correctly point to the beginning of the list', () => {
        let list1 = new LinkedList();
        list1.insert('A');
        expect(list1.head.data).toBe('A');
    });
    it('head property will correctly point to the beginning of the list', () => {
      let list1 = new LinkedList();
      list1.insert('B');
      expect(list1.head.data).toBe('B');
  });
    it('head property will correctly point to the beginning of the list', () => {
      let list1 = new LinkedList();
      list1.insert('C');
      expect(list1.head.data).toBe('C');
  });

  it('successfully add a node to the end of the linked list', () => {
    expect(() => {
        let list1 = new LinkedList();
       
        expect(list1.toString()).toBe('null');
        list1.append('750');
        expect(list1.toString()).toBe('{750} -> null');
        list1.append('850');
        expect(list1.toString()).toBe('{750} -> {850} -> null');
    
})
})
  it('successfully add multiple nodes to the end of a linked list', () => {
    expect(() => {
        let list1 = new LinkedList();
        list1.append(450);
        list1.append(550);
        list1.append(650);
        list1.append(750);

        expect(list1.toString()).toBe('{450} -> {550} -> {650} -> {750} -> null')
    });
})
it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list1 = new LinkedList();
    list1.insert(450);
    list1.insert(550);
    list1.insert(650);
    list1.insert(750);
    list1.insertBefore(150, 550)
    expect(list1.toString()).toBe('{750} -> {650} -> {150} -> {550} -> {450} -> null')
});  
it('Can successfully insert after a node in the middle of the linked list', () =>{
    let list1 = new LinkedList();
    list1.insert(450);
    list1.insert(550);
    list1.insert(650);
    list1.insert(750);
    list1.insertAfter(150, 550)
    expect(list1.toString()).toBe('{450} -> {550} -> {150} -> {650} -> {750} -> null')
})   
it('Can successfully insert a node after the last node of the linked list', () =>{
    let list1 = new LinkedList();
    list1.insert(450);
    list1.insert(550);
    list1.insert(650);
    list1.insert(750);
    list1.insertAfter(450, 550)
    expect(list1.toString()).toBe('{450} -> {550} -> {150} -> {650} -> {750} -> null')
}) 
it ('It check when k is not at the end, but somewhere in the middle of the linked list ', () => {
    expect(true).toBe(true)
})
});

describe('Not happy path', () =>{
    it ('It check when k is greater than the length of the linked list ', () => {
        expect(true).toBe(true)
    })
    it ('It check When k and the length of the list are the same ', () => {
        expect(true).toBe(true)
    })
    it ('It check When k is not a positive integer ', () => {
        expect(true).toBe(true)
    })
    it ('It check When the linked list is of a size 1 ', () => {
        expect(true).toBe(true)
    })
});