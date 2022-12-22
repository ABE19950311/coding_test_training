var mergeTwoLists = function(l1, l2) {
    if(!l1) {       //l1nodeが空の場合
        return l2  //残ったl2の値を返す
    }else if(!l2) {
        return l1
    }if(l1.val<=l2.val) { //値比較が出来るまで繰り返す
        l1.next = mergeTwoLists(l1.next,l2) //関数にnextの値を入れてnode更新
        return l1
    }else {
        l2.next = mergeTwoLists(l1,l2.next)
        console.log(l1)
        return l2
    }
}; //****ListNodeは配列ではない