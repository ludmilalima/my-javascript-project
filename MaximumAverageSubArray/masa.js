/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    var ans = 0;
    var curr = 0;

    for (let i = 0; i < k; i++) {
        ans += nums[i];
    };

    if (k >= nums.length) {
        return ans / nums.length;
    };

    curr = ans;

    for (let j = k; j < nums.length; j++) {
        curr = curr + nums[j] - nums[j - k];
        ans = Math.max(ans, curr);
    };

    return ans / k;
};

function main() {
    const nums = [1, 12, -5, -6, 50, 3];
    const k = 4;
    const result = findMaxAverage(nums, k);
}

main();