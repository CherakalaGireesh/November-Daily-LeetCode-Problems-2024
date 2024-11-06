/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let i = -1;
    
    for(let j = 0; j < nums.length; j++)
        {
            if(nums[j] == 0)
            {
                i = j;
                break;
            }
        }
    
    for(let j = i + 1; j < nums.length; j++)
        {
            if(i != -1 && nums[j] != 0)
            {
                [nums[j], nums[i]] =[nums[i], nums[j]];
                i++;
            }
        }

};