var isUgly = function(n) {
    if(n<=0) return false

    while(n!=1) {
        if(n%2==0) { //2で余りなく割れるなら
            n /= 2 //2で割った値で更新
        }else if(n%3===0) { //3で余りなく割れるなら
            n /= 3 //3で割った値で更新
        }else if(n%5===0) { //5で余りなく割れるなら
            n /= 5 //5で割った値で更新
        }else {
            return false //上記数で破れない場合false
        }
    }

    return true
};