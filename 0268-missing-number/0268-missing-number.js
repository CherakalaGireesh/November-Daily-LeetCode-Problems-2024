/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = ((nums.length ) * (nums.length + 1)) / 2;
    let actualSum =0;
    
    for (num of nums)
    {
        actualSum += num;
    }

    return expectedSum - actualSum;
};