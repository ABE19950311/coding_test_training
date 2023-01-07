var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length; //０番目配列の長さ代入

    for (let i=1;i<m;i++) {
        for (let j=1;j<n;j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) return false //引数[i][j]の値と各値１つ前と一致していなければfalse
        }
    }

    return true
};