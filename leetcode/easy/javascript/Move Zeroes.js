var moveZeroes = function(nums) {
    for(let i=nums.length;i--;) {
        if(nums[i]===0) { //値が０の場合
            nums.splice(i,1) //0の位置だけ削除
            nums.push(0) //配列に０を入れ直す
        }
    }
};