/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let results = [];

    if (!T.length) {
        return results;
    }

    for (let i = 0; i < T.length; i++) {
        let days = 1;
        let maxed = false
        for (let j = i + 1; j < T.length; j++) {
            let curr = T[i];
            let next = T[j];
            if (next > curr) {
                results.push(days);
                maxed = true;
                break;
            } else {
                days++;
            }
        }
        if (!maxed) {
            results.push(0);
        }
    }

    return results;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
