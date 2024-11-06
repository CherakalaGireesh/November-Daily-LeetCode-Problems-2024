/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let temp = [];

    for(let num of nums)
    {
        if(num != 0)
            temp.push(num);
    }

    for( let i = 0; i < nums.length; i++)
    {
        if(i < temp.length)
            nums[i] = temp[i];
        else
            nums[i] = 0;
    }
};