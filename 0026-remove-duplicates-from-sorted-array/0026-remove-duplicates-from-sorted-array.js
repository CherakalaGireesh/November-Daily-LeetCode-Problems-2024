/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let length = nums.length;
    let left = 0;
    let right = 1;

    while(right < length)
    {
        if(nums[left] !== nums[right])
        {
            nums[left + 1] = nums[right];
            left++;
        }

        right++;
    }

    return left + 1;
};