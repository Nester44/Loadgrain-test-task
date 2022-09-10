'use strict';
const loadGrain = (levels) => {
    const length = levels.length;
    if (length < 3) return 0;

    const right = [];
    for (let i = 0; i < length; i++) right.push(i);
    right[0] = levels[0];

    for(let i = 0; i < length - 1; i++) {
        if (levels[i] > right[i]) {
            right[i] = levels[i];

        }

        right[i+1] = right[i];

    }

    const left = [];
    for (let i = 0; i < length; i++) left.push(i);
    left[length - 1] = levels[length - 1];

    for(let i = length - 1; i > 0; i--) {
        if(levels[i] > left[i]) {
            left[i] = levels[i];

        }
        left[i - 1] = left[i]

    }

<<<<<<< HEAD
    let volume = 0;
    for(let i = 0; i < length; i++) {
        let volumeToAdd = Math.min(right[i], left[i]) - levels[i]
        
        if (volumeToAdd > 0) volume += volumeToAdd
=======
    if (i === levels.length - 1) {
      rightBorder = i
      if(levels[rightBorder] === 0) continue;
      if (levels[rightBorder] < levels[leftBorder]) {
        result += (rightBorder - leftBorder - 1) * levels[rightBorder] - edge;
      }
>>>>>>> 6e169ae65b62907c6af52c0fa2e0d5fcceea0ea0
    }
    return volume
}
<<<<<<< HEAD

export default loadGrain

console.log(loadGrain([4, 0, 1, 3]))
=======
>>>>>>> 6e169ae65b62907c6af52c0fa2e0d5fcceea0ea0
