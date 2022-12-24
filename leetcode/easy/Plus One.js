var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--) { //配列の末尾から確認
        if(digits[i]<9) { //末尾の値が9未満なら＋１して配列返す
            digits[i]++
            return digits
        }else {
            digits[i]=0 //９なら値を０に
        }
    }
    digits.unshift(1) //[9]→[1,0]用の１を配列に追加
    return digits
};