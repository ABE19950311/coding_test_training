var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===nums[i+1]) { //１つ次の値と一致していた場合
            nums.splice(i+1,1) //隣の値を１つ消去
            i-- //１つ消去に合わせてカウント調整
        }
    }
};