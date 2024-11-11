/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high){
        if(nums[mid] == 0){
            swap(nums, mid, low);
            low++;
            mid++;
        }
        else if (nums[mid] == 1){
            mid++;
        }
        else{
            swap(nums, mid, high);
            high--;
        }
    }
};

var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}