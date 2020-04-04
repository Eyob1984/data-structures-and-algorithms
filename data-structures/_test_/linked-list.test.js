'use strict';

const LinkedList = require('../linkedList/linked-list.js');

/*
Can successfully add a node to the end of the linked list
Can successfully add multiple nodes to the end of a linked list
Can successfully insert a node before a node located i the middle of a linked list
Can successfully insert a node before the first node of a linked list
Can successfully insert after a node in the middle of the linked list
Can successfully insert a node after the last node of the linked list
*/

describe('passes all lab tests', () => {
    it('successfully instantiates an empty list', () => {
        expect(() => {
            new LinkedList();
        }).not.toThrow();
    });

    it('can properly insert a data into the list', () => {
        let list1 = new LinkedList();
        let val = list1.insert('A');
        let str = list1.toString();

        expect(str).toBe('{' + val + '} -> null');
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
        list1.append(1)
        list1.append(2)
        list1.append(3)
        list1.append(5)
        console.log('who are you', list1.head.data)
        expect(list1.head.data).toBe(5)
    })
});
  it('successfully add multiple nodes to the end of a linked list', () => {
    expect(() => {
        let list1 = new LinkedList();
        list1.insertBefore(1)
        list1.insertBefore(2)
        list1.insertBefore(3)
        list1.insertBefore(5)
        expect(list1.head.data).toBe(3, 5)
    })
})



});



