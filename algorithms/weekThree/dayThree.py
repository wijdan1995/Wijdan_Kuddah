# Parens Valid
# ----------------------------------------------------------------------------------------
# Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false.

def validParens(string):
    opens = 0
    closes = 0
    for char in string:
        # print(char)
        # check each open parens if has closing  
        if char == "(":
            # pairs += 1
            opens += 1
        elif char == ")":
            # pairs -= 1
            closes += 1
        # print(opens, closes)
        if closes > opens:
            return False
    return opens == closes

# print(validParens("y(3(p)p(3)r)s)("))
# print(validParens("n(0(p)3"))
# print(validParens("n)0(t(0)k"))
# Braces Valid
# ----------------------------------------------------------------------------------------
# Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[O(n]0{t)0}k", return false.

# still not working
def validBraces(string):
    # the last one counted most be the frist one to be closed
    opens = {
        "(": 0,
        "{":0,
        "[":0
    }
    closes= {
        ")": 0,
        "}":0,
        "]":0
    }

    for char in string:
        # print(char)
        # check each open parens if has closing  
        for key in opens:
            if char == key:
                opens[key] += 1
            # pairs += 1
        print(opens)
            # opens += 1
        for key in closes:
            if char == key:
                closes[key] += 1
            # pairs += 1
        print(closes)
            # opens += 1
        # elif char == ")":
        #     # pairs -= 1
        #     closes += 1

print(validBraces("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"))
