var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let t=1;t<nums.length;t++) {
            if(i!==t&&nums[i]+nums[t]===target) {
                return [i,t]
            }
        }
    }
};