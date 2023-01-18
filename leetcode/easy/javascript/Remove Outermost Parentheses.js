var removeOuterParentheses = function(s) {
    let res = ""
    let pat = 0

    for(let item of s) {
        if(item===")") { //")"であれば判断用数値を１マイナス
            pat--
        }
        if(pat>=1) { //"判断数値が１以上であれば文字を返り値用変数に追加"
            res += item
        }
        if(item==="(") { //"("であれば判断用数値を１プラス
            pat++
        }
    } //for内if文の処理順が重要
    return res
};