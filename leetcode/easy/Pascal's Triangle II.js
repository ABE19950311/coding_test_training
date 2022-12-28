var getRow = function(row) {
    let answer = new Array(row+1) //帰り値用配列作成
    answer[0]=1 //両端は1固定
    answer[row]=1 //両端は1固定
    for(let i=1,val=row;i<row;i++,val--) { //左端２番目から開始
        answer[i] = answer[i-1]*val/i
    }
    return answer
};