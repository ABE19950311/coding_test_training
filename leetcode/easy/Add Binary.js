var addBinary = function(a, b) {
    const abin = `0b${a}` //0bで２進数判定になる
    const bbin = `0b${b}`
    const sum = BigInt(abin)+BigInt(bbin) //BigIntで整数として計算
    return sum.toString(2) //toStringで２進数に変換
};