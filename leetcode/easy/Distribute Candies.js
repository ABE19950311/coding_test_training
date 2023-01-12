var distributeCandies = function(candyType) {
    return Math.min(new Set(candyType).size,candyType.length/2) //引数の重複を除いた価か引数の長さ/2の値で小さい方を返す。(Setを使用した場合はsizeで要素数をとる)
};