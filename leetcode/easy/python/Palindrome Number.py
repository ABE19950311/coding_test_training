class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        print(str(x)[::-1])
        return str(x) == str(x)[::-1] #[::]で範囲全指定,[::-1]にすることで反転される
                                      #元の引数と反転した物が一致していればtrue