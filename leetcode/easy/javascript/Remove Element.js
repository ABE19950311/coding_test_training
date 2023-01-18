var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===val) { //ターゲットの値と一致していた場合
            nums.splice(i,1) //現在の値を削除
            i-- //削除に合わせてループ対象の位置調整
        }
    }
};