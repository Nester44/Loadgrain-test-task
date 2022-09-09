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
      const highestBorder = leftBorder > rightBorder ? leftBorder : rightBorder;
      const lowestBorder = leftBorder < rightBorder ? leftBorder : rightBorder;
      
      result += (highestBorder - lowestBorder - 1) * levels[lowestBorder] - edge;
      edge = 0;
    }

    if (i === levels.length - 1) {
      rightBorder = i
      if (levels[rightBorder] < levels[leftBorder]) {
        result += (rightBorder - leftBorder - 1) * levels[rightBorder] - edge;
      }
    }
  }
  return result;
}