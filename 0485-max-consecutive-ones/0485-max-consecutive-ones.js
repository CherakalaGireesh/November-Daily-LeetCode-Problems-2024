/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsOnes = 0;
    let temp = 0;
    
    for(let num of nums){
        if(num == 0){
            maxConsOnes = Math.max(temp, maxConsOnes);
            temp = 0;
        }
        else{
            temp++;
        }
    }

    return Math.max(temp, maxConsOnes);
};