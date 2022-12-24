var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
    //splitで空白起点で配列を作成。pop().lengthで作成した配列の最後の要素の長さ取得
    //trim()で両端に空白が入っているパターンに対応（pop時に空白が取られる）
};