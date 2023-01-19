class Solution:
    def romanToInt(self, s: str) -> int:
        translations = { #文字がどの値になるか辞書作成
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        number=0
        s = s.replace("IV", "IIII").replace("IX", "VIIII") #特定文字の場合置き換える
        s = s.replace("XL", "XXXX").replace("XC", "LXXXX") #特定文字の場合置き換える
        s = s.replace("CD", "CCCC").replace("CM", "DCCCC") #特定文字の場合置き換える
        for char in s:
            number+=translations[char] #一文字ずつ辞書の値をみて合計していく
        return number