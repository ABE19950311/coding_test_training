var isSubsequence = function(s, t) {
    let i=0 //重複判断用変数
    let j=0 //ループ用変数
    while(j<t.length) {
        if(s[i]===t[j]) { //sの文字とtの文字が一致していれば
            i++ //重複判断用変数を＋１
        }
        j++
    }
    return i===s.length ? true:false //重複判断用変数の値が引数sの長さと一致していれば全て重複していたとしてtrue
};