var reverseString = function(s) {
    let size = s.length;

    // reverse string by mirror image
    for(let i = 0 ; i < Math.floor(size/2) ; i++ ){ //引数の長さを２で割った長さより小さい場合繰り替えす
        [ s[i], s[size-1-i] ] = [ s[size-1-i], s[i] ] ;//配列位置を入れ替える
    }

    return;
};