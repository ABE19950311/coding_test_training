class Solution:
    from typing import List
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for i,j in enumerate(nums): #enumerateメソッドで要素にインデックス番号をつける
            diff = target-j #target値と要素の差分を取る
            if diff in res: return [res[diff],i] #差分値が辞書に存在していれば、差分値が入ったタイミングと現在のインデックス番号を返す
            res[j]=i #現在の要素：インデックス番号の形式で辞書に入れる