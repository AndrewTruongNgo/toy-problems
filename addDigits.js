/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let results;

    let helper = (digits) => {

        dig = digits.toString().split('');

        if (dig.length === 1) {
            results = dig[0];
            return;
        }
        let newTotal = 0;

        for (let i = 0; i < dig.length; i++) {
            let curr = dig[i];
            newTotal += Number(curr);
        }
        helper(newTotal);
    }

    helper(num);
    return Number(results);
};
