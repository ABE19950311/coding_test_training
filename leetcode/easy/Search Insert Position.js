var searchInsert = function(nums, target) {
    let low = 0             //初期下限値
    let high = nums.length  //初期上限値
    while(low<high) { //下限値が上限値未満の間繰り返す
    let mid = low+Math.floor((high-low)/2) //検索値算出
    if(target>nums[mid]) { //ターゲットが検索箇所より大きい場合
        low = mid+1 //下限値を更新
    }else {
        high = mid //上限値を更新
    }
    }
    return low
};