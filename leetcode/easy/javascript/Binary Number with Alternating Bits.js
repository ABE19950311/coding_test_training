var hasAlternatingBits = function(n) {
    let str = n.toString(2) //2進数に変換
    let cur = str[0] //比較用の現在値代入
    for(let i=1;i<str.length;i++) { //ループは１から始める（現在値と次の値を順次比較していくため）
        if(cur===str[i]) { //現在値と次の値が一致した場合
            return false //falseを返す
        }else {
            cur = str[i] //してないなら現在値を更新する
        }
    }
    return true
};