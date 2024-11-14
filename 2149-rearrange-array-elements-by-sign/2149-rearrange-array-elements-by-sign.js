/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ans = [];
    let negIndex = 1;
    let posIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 0){
            ans[posIndex] = nums[i];
            posIndex += 2;
        }
        else{
            ans[negIndex] = nums[i];
            negIndex += 2;
        }
    }
    return ans;
}