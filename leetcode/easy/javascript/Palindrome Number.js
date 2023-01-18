var isPalindrome = function(x) {
    let string = String(x)
    let array = string.split("")
    for(let i=0;i<array.length;i++) {
        let reverse = array.length-1
                if(array[i]!==array[reverse-i]) {
                    return false
                }else if(i===array.length-1) {
                    return true
                }
    }
};