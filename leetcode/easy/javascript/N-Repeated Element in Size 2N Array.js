var repeatedNTimes = function(nums) {
    let res = [] //重複確認用配列

    for(let num of nums) {
        if(res.includes(num)) { //既に同じ値が配列に存在していれば
            return num //その値を返す
        }else {
            res.push(num) //配列に値を入れる
        }
    }

    return -1 //重複値がなければ-1を返す
};