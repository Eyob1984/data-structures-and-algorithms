'use strict';

const LinkedList = require('../linkedList/linked-list.js');

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
        console.log('checking str', str)

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
});



