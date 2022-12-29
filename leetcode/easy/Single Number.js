var singleNumber = function(nums) {
    return nums.reduce((prev,next)=>prev^next) //reduceで隣同士をXORで比較して重複を消していく
    //[4,1,2,1,2]
    //4 0100
    //1 0001

    //5 0101
    //2 0010
    //7 0111

    //7 0111
    //1 0001
    //6 0110

    //6 0110
    //2 0010
    //4 0100 がreturn
};