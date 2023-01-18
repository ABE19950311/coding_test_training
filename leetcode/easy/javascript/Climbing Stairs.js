var climbStairs = function(n) {
    let step = new Array(n+1) //step計算用配列作成
    //step[0] = 0
    step[1] = 1 //一歩目のSTEP
    step[2] = 2 //２歩目のSTEP
    for(let i=3;i<=n;i++) { //3歩め以降をフィボナッチ数列の概念で算出
        step[i] = step[i-1]+step[i-2]
    }
    return step[n]
};