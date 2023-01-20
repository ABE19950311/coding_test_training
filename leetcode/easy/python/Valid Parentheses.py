class Solution:
    def isValid(self, s: str) -> bool:
        opcl = dict(('()', '[]', '{}')) #dictで辞書作成
        stack = []
        for idx in s:
            if idx in '([{': #値が([{いずれかの場合
                stack.append(idx) #配列に入れる
            elif len(stack) == 0 or idx != opcl[stack.pop()]: #配列がループ途中で０のまま、またはループ時の値と辞書の値が一致しない場合
                return False
        return len(stack) == 0
