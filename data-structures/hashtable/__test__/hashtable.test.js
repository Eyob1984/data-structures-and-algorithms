const HashTable = require('../hashtable.js');

describe('HashTable tests', () => {
    const map = new HashTable(20);

    it('Adds a key/value to your hashtable', () => {
      map.add('ace', 'a playing card with a value of one');
      map.add('bro', 'Brothers for life');
      map.add('sis', 'Sister for life');
     expect(map.get('ace')).toEqual('a playing card with a value of one');
     expect(map.get('bro')).toEqual('Brothers for life');
     expect(map.get('sis')).toEqual('Sister for life');
    });

    it('handles a collision within the hashtable', () => {
        map.add('cae', 'gibberish');
        expect(map.contains('ace')).toBe(true);
        expect(map.contains('cae')).toBe(true);
        let indx = map.hash('cae');
        let indx2 = map.hash('ace');
        expect(indx).toBe(indx2);
    });
});
