'use strict';

function loadGrain(levels) {
  if (levels.length < 3) return 0;

  let result = 0;
  let leftBorder = 0;
  let rightBorder = 0;
  let edge = 0;

  for (let i = 1; i < levels.length; i++) {
    const level = levels[i]

    if (level < levels[leftBorder] && i !== levels.length - 1) {
      edge += level
    }

    if (level >= levels[leftBorder]) {
      rightBorder = leftBorder;
      leftBorder = i;
      let highestBorder,lowestBorder;
      
      if(leftBorder > rightBorder) {
        highestBorder = leftBorder;
        lowestBorder = rightBorder;
      } else {
        highestBorder = rightBorder;
        lowestBorder = leftBorder
      }

      result += (highestBorder - lowestBorder - 1) * levels[lowestBorder] - edge;
      edge = 0;
    }

    if (i === levels.length - 1) {
      rightBorder = i
      if(levels[rightBorder] === 0) continue;
      if (levels[rightBorder] < levels[leftBorder]) {
        result += (rightBorder - leftBorder - 1) * levels[rightBorder] - edge;
      
      }
    }
  }
  return result;
}

console.log(loadGrain([32, 13, 16, 46, 11, 21, 21, 29, 41, 35, 34, 30, 17, 16, 21, 22, 46, 21, 0]))
