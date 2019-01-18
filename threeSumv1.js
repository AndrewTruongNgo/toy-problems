let threeSum = (nums) => {
    let results = [];

    nums.sort((a, b) => a -b);

    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        while(start < end) {
            if (nums[i] + nums[start] + nums[end] === 0) {
                results.push([nums[i],nums[start], nums[end]]);
                start++;
                end--;
                while (nums[start] === nums[start - 1]) {
                    start++;
                }
                while (nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (nums[i] + nums[start] + nums[end] < 0) {
                start++;
            } else {
                end--;
            }
        }

    }

    return results;
}
