var findLUSlength = function(a, b) {
    if(a===b) { //引数a,bの値が同じなら
        return -1 //-1を返す
    }else {
        return Math.max(a.length,b.length) //a,b長い方の値を返す
    }
};