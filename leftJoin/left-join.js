'use strict';


const leftJoin = (table01, table02) => {
  for(let i = 0; i < table02.length; i++) {
      if(!table02[i]) {
          continue; 
      } else if (table02[i].length) {
          let rightEntry = table02[i]; 
          let key = rightEntry[0]; 
          let value = rightEntry[1]; 

          let indx = hash(key, table01.length); 
          let leftEntry = table01[indx]; 

          if (!leftEntry) {
              table01[indx] = [key, null, value]; 
          } else if (leftEntry.length) {
              table01[indx].push(value); 
          } else if (leftEntry.next) {
              let current =  leftEntry.prev

              while(current) {
                  if (current[0] === key) {
                      current.push(value); 
                      break; 
                  }

                  current = current.next; 
              }
          }
      } else  if (table02[i].next) {
      }
  }
}

module.exports = leftJoin;