var removeDuplicates = function(S) {
    let res = [];
    for(let i=0; i<S.length; i++){ 
        if(S[i] !== res[res.length-1]) { //引数i番目の値と返値用配列の長さ値が一致しない場合
            res.push(S[i]); //引数の値をpush
        } else {
            res.pop(); //一致していれば取り出す
        }
    }
    return res.join("");
};