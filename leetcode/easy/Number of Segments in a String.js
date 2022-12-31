var countSegments = function(s) {
    return s.split(" ").filter(Boolean).length //空白を基に分離して配列に。filter(Boolean)で空を削除した配列長を返す
};