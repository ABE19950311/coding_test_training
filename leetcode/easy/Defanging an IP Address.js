var defangIPaddr = function(address) {
    let res = ""
    for(let i=0;i<address.length;i++) {
        if(address[i]===".") { //文字が.なら
            res += "[.]" //[.]を追加する
        }else {
            res += address[i] //上記以外はそのまま追加
        }
    }
    return res
};