var containsDuplicate = function(nums) {
    const s = new Set(nums) //重複を削除
    return s.size !== nums.length //重複削除後の長さと元配列の長さが異なればtrue
};