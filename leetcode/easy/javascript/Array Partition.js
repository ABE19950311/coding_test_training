var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b) //昇順
    let sum=0
    for(let i=0;i<nums.length;i++) {
        if(i%2===0) { //偶数の場合
            sum += nums[i] //偶数位置の値を足していく
        }
    }
    return sum
};