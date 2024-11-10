/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length; 
    let map = new Map();
    for (let i = 0; i < length; i++){
        let diff = target - nums[i];
        if(map.has(diff)){
            return [i, map.get(diff)];
        }
        map.set(nums[i], i);
    }
    return []
};