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

    let volume = 0;
    for(let i = 0; i < length; i++) {
        let volumeToAdd = Math.min(right[i], left[i]) - levels[i]
        
        if (volumeToAdd > 0) volume += volumeToAdd
    }
    return volume
}

export default loadGrain

console.log(loadGrain([4, 0, 1, 3]))