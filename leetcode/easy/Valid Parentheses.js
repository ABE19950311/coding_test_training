var isValid = function(s) {
    const stack = [] //push,pop用空配列用意

    for(let i=0;i<s.length;i++) { //引数の長さだけループ
        let str = s.charAt(i) //charAtメソッドで指定位置の文字を取ってくる
        switch(str) {
            case "(":stack.push(")") //対応文字の一つ目だったら、２つ目を配列にプッシュ
                break;
            case "[":stack.push("]") //対応文字の一つ目だったら、２つ目を配列にプッシュ
                break;
            case "{":stack.push("}") //対応文字の一つ目だったら、２つ目を配列にプッシュ
                break;
            default:
                if(str!==stack.pop()) { //プッシュされていた文字と一致しない場合falseを返す
                    return false
                }
        }
    }
    return stack.length==0 //ifの条件に引っかからず全て取り出せた場合、全一致としてtrueを返す
};