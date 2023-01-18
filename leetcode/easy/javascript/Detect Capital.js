var detectCapitalUse = function(word) {
    return word===word.toUpperCase()||word.slice(1)===word.slice(1).toLowerCase() //全部大文字か２文字目以降が小文字だった場合true
}