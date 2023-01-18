var majorityElement = function(nums) {
    let obj = {}

    for(let i=0;i<nums.length;i++) {
        obj[nums[i]]=obj[nums[i]] ? obj[nums[i]]+1:1  //nums[i]のプロパティ値ががobjにあれば+1,なければ新たに１を入れる
        if(obj[nums[i]]>nums.length/2) return nums[i] //プロパティnums[i]の値がn/2回以上を超えていれば、そのプロパティを返す
    }
};