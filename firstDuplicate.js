function firstDuplicate(a) {

    // Input: array of int
    // Output: Int (first dup num)
    // C: N/A
    // E: If no elem, return -1
    // Create storage object
    // Create results variable
    // Iterate through array
    // If curr elem is a key in storage object
        // Then reassign results to curr elem
        // Return out of for loop
    // Else create key in storage objecy with curr elem and value as 1
    // Return results

    let storage = {};
    let results = -1;

    for (let i = 0; i < a.length; i++) {
        let elem = a[i]
        if (storage[elem] === 1) {
            return results = elem;
        } else {
            storage[elem] = 1
        }
    }
    return results;
}
