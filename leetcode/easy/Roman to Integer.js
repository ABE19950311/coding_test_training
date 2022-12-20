var romanToInt = function(s) {
    let array = s.split("")
    let sum = 0
    let newarray = []
    for(let i=0;i<array.length;i++) {
        if(array[i]==="I") {
            newarray.push(1)
        }else if(array[i]==="V") {
            newarray.push(5)
        }else if(array[i]==="X") {
            newarray.push(10)
        }else if(array[i]==="L") {
            newarray.push(50)
        }else if(array[i]==="C") {
            newarray.push(100)
        }else if(array[i]==="D") {
            newarray.push(500)
        }else if(array[i]==="M") {
            newarray.push(1000)
        }
    }

    for(let t=0;t<newarray.length;t++) {
        if(newarray[t]<newarray[t+1]) {
            let diff = newarray[t+1]-newarray[t]
            newarray.splice([t+1],1)
            sum+=diff
        }else if(newarray[t]>newarray[t+1]||newarray[t]===newarray[t+1]||t===newarray.length-1){
            sum+=newarray[t]
        }
    }

    return sum
};