var checkPerfectNumber = function(num) {
    if (num <= 1) return false //引数が1以下ならfalse
    let sum = 0
    for (let i=1;i<=Math.floor(Math.sqrt(num));i++) { //引数の平方根を算出し、小数点切り捨てた値分ループ
        if (num%i===0) { //引数をループ時の値で割った余りが０なら
            sum+=i+num/i ///帰り値判断用変数にループ時の値+引数/ループの時の値で算出した値を足す
        }
    }

    return sum === 2 * num ? true : false; //変数の値が引数＊２の値ならtrue,そうでなければfalseを返す
}