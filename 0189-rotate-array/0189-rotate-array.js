/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    let length = nums.length;
    let arrayCopy = nums.slice();

    for(let i = 0; i < length; i++)
    {
        nums[(i + k) % length] = arrayCopy[i]; 
    }
   
};