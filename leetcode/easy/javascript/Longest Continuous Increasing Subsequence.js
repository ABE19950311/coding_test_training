var findLengthOfLCIS = function(nums) {
    let length = 1
    let max = 0

    for(let i=0;i<nums.length;i++) {
        if(nums[i]<nums[i+1]) //一つ次の値の方が大きい場合
            length++ //値を増やす
        else
            length = 1 //値初期化
            max = Math.max(length,max) //最大長さと比較して大きい方を代入
    }

    return max
};