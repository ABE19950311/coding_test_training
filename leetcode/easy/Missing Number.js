var missingNumber = function(nums) {
    const res = new Array(nums.length+1).fill(-1) //missing number検知用配列作成
    for(let num of nums) {
        res[num] = num //numの値が３ならres[3]の-1を３に更新
    }
    return res.indexOf(-1) //更新されなかった箇所をindexOfで探す
};