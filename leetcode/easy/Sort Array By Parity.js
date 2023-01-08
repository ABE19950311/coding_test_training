var sortArrayByParity = function(nums) {
    let array = []
    nums.forEach((num)=>{
        num%2===0 ? array.unshift(num):array.push(num) //numの値が偶数の時unshif機数の時push
    })
    return array
};