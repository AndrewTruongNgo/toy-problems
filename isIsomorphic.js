/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false;

    let helper = (s, t) => {
        let map = {};

        for (let i = 0; i < s.length; i++) {
            if(!map[s[i]]) map[s[i]] = t[i];

            if (map[s[i]] !== t[i]) {
                return false;
            }
        }
        return true;
    }

    return helper(s, t) && helper(t, s);
};
