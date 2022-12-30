var fizzBuzz = function(n) {
    let array = []

    for(let i=1;i<=n;i++) {
        if(i%15===0) { //15の倍数ならFizzBuzzを配列に入れる
            array.push("FizzBuzz")
        }else if(i%3===0) { //3の倍数ならFizzいれる
            array.push("Fizz")
        }else if(i%5==0) { //5の倍数ならBuzzいれる
            array.push("Buzz")
        }else {
            array.push(String(i)) //上記以外の数値は文字列にしていれる
        }
    }

    return array
};