var containsNearbyDuplicate = function(nums, k) {
    let map = {} //判定用空object作成
    for (let i=0;i<nums.length;i++) {
    if (map[nums[i]]>=0&&i-map[nums[i]]<=k) return true; //プロパティnums[i]の値が０位上かつループi番目の数からnums[i]を引いた値が引数k以下の場合true
    map[nums[i]] = i; //プロパティnums[i]にiの値を入れる
    }
    return false;
    };