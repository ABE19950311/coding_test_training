var uniqueOccurrences = function(arr) {
    let obj = {}
    for(let a of arr) {
        obj[a] = obj[a] ? obj[a]+1:1 //変数aプロパティが存在していれば値を＋１、なければ１を入れる
    }

    let value = Object.values(obj) //プロパティの値を取り出す
    let uniquevalue = [...new Set(value)] //値の重複削除
    return value.length===uniquevalue.length //重複削除前と長さに変更なければtrue
};