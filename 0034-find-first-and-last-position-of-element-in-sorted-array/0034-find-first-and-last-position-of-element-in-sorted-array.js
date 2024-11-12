/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = findFirstOccurrence(nums, nums.length, target);
    if(first === nums.length || nums[first] !== target){
        return [-1, -1];
    }
    let last = findLastOccurrence(nums, nums.length, target);
    return [first, last - 1];
};

var findFirstOccurrence = function(nums, n, x){
    let ans = n;
    let low = 0;
    let high = n - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] >= x){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

var findLastOccurrence = function(nums, n, x){
    let ans = n;
    let low = 0;
    let high = n - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] > x){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}