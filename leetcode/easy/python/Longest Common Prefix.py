class Solution:
    from typing import List
    def longestCommonPrefix(self, strs: List[str]) -> str:
        pre = strs[0] #確認用文字列として配列最初の値を代入

        for i in strs: #引数配列値の内容でループ
            while not i.startswith(pre): #確認用文字列とループ文字列の値が一致していない間
                pre = pre[:-1] #文字を一つ減らして再度代入
        return pre