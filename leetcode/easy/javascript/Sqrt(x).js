var mySqrt = function(x) {
    let result = 1; //return用の数字宣言
    while (result*result <= x) result++; //ターゲットの数以下の場合繰り返す
    return result - 1;
};