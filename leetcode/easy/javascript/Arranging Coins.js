var arrangeCoins = function(n) {
    let row = 0
    while(row<=n) { //行数がコインより少ない間繰り返す
        n -= row //コインの数を行数文減らす。１行目１コイン入る、２行目２コイン、３行目３コイン...
        row++ //行数を増やす
    }

    return row-1
};