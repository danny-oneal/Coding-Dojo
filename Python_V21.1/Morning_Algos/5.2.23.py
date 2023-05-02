def reverseString(str):
    newStr = ""
    for i in range(len(str) - 1, -1, -1):
        newStr += str[i]
    return newStr


print(reverseString("dog"))
print(reverseString("hello"))
print(reverseString(""))
