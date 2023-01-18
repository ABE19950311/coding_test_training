var nextGreatestLetter = function(letters, target) {
    return letters.find((letter)=>letter>target) || letters[0] //配列内のターゲットより大きい値を探す。ない場合は配列先頭の値を返す
};