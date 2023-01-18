var longestCommonPrefix = function(strs) {
    if(!strs.length) return //strsの配列空なら終了

    return strs.reduce((prev,next)=>{   //reduceメソッドで配列要素を順番に取り出す
        let get = 0

        while(prev[get]&&next[get]&&prev[get]===next[get]) {　//取り出された要素に比較する値が存在しているかつ比較して値が一致している間くりかえす
            get+=1
        }
        return prev.slice(0,get)　//繰り返された数だけ先頭から値を切り抜く
    })
};