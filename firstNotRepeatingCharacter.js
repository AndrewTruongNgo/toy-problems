function firstNotRepeatingCharacter(s) {
    // Input: string
    // Output: string (first non repeating character)
    // C: O(1)
    // E: If no characters, return '_'
    // Create storage array/object
    // Create results variable
    // Iterate through string
    // Add current elem to storage
    // If curr elem is in storage
        // Then increase value by 1
    // Else add curr elem in storage with value of 1
    // Return first key with value of 1

    let storage = {};
    let results = '_';

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (storage[curr] > 0) {
            storage[curr] += 1
        } else {
            storage[curr] = 1
        }
    }


    for (let x in storage) {
        if (storage[x] === 1) {
            return results = x
        }
    }

    return results

}
