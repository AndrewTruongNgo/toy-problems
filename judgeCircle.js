/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
        let curr = moves[i];
        if (curr === 'U') {
            y++;
        }
        if (curr === 'D') {
            y--;
        }
        if (curr === 'R') {
            x++;
        }
        if (curr === 'L') {
            x--;
        }
    }

    return x === 0 && y === 0;
};
