class Solution:
    from typing import List
    def removeDuplicates(self, nums: List[int]) -> int:
        nums[:] = sorted(set(nums)) #[:]先頭から末尾まで抽出.setで重複を除外してsortedでソート
        return len(nums)